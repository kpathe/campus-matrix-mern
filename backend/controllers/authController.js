import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import Chat from "../models/Chat.js";
import Connection from "../models/Connection.js";
import Follow from "../models/Follow.js";
import Goal from "../models/Goal.js";
import Message from "../models/Message.js";
import Notification from "../models/Notification.js";
import Profile from "../models/Profile.js";
import User from "../models/User.js";
import { sendOtpEmail } from "../utils/email.js";
import { createNotification } from "../utils/notification.js";
import {
  normalizeEmail,
  normalizeUsername,
  validateEmail,
  validatePassword,
  validateUsername,
} from "../utils/validation.js";
import { ensureUniqueUsername } from "../utils/username.js";

const generateOtp = () => crypto.randomInt(100000, 999999).toString();
const otpExpiry = () => new Date(Date.now() + 10 * 60 * 1000);

const serializeUser = (user) => ({
  id: user._id,
  _id: user._id,
  name: user.name,
  username: user.username,
  email: user.email,
  roles: user.roles,
  year: user.year,
  hasProfile: user.hasProfile,
  isEmailVerified: user.isEmailVerified,
});

const issueToken = (user) =>
  jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

const validateRolesForYear = ({ roles, year }) => {
  const yearNum = Number.parseInt(year, 10);
  if (yearNum === 1 && (roles.includes("mentor") || !roles.includes("mentee"))) {
    return "1st year students can only be mentees";
  }

  if (yearNum === 4 && (roles.includes("mentee") || !roles.includes("mentor"))) {
    return "4th year students can only be mentors";
  }

  return null;
};

export const signup = async (req, res) => {
  try {
    const { name, email, password, roles = [], year, adminSecret, username } = req.body;

    if (!name?.trim() || !email || !password || !roles.length || !year) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const normalizedEmail = normalizeEmail(email);
    const normalizedUsername = normalizeUsername(username || "");

    if (!validateEmail(normalizedEmail)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    if (!adminSecret && !normalizedEmail.endsWith("@satiengg.in")) {
      return res
        .status(403)
        .json({ message: "Only @satiengg.in college emails are permitted." });
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      return res.status(400).json({ message: passwordError });
    }

    if (normalizedUsername && !validateUsername(normalizedUsername)) {
      return res.status(400).json({
        message:
          "Username must be 3-20 characters and can only use lowercase letters, numbers, dots, and underscores.",
      });
    }

    const yearRoleError = validateRolesForYear({ roles, year });
    if (yearRoleError) {
      return res.status(400).json({ message: yearRoleError });
    }

    const finalRoles = [...new Set(roles)];
    if (adminSecret) {
      if (adminSecret !== (process.env.ADMIN_SECRET || "ILOVEHACKATHONS")) {
        return res.status(403).json({ message: "Invalid Admin Secret Key" });
      }

      if (!finalRoles.includes("admin")) {
        finalRoles.push("admin");
      }
    }

    const existingUser = await User.findOne({
      $or: [
        { email: normalizedEmail },
        ...(normalizedUsername ? [{ username: normalizedUsername }] : []),
      ],
    });

    if (existingUser) {
      return res.status(400).json({
        message:
          existingUser.email === normalizedEmail
            ? "User already exists with this email."
            : "This username is already taken.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationOtp = generateOtp();
    const resolvedUsername = await ensureUniqueUsername({
      username: normalizedUsername,
      email: normalizedEmail,
      name,
    });

    const user = await User.create({
      name: name.trim(),
      username: resolvedUsername,
      email: normalizedEmail,
      password: hashedPassword,
      roles: finalRoles,
      year,
      hasProfile: false,
      isEmailVerified: false,
      emailVerificationOtp: verificationOtp,
      emailVerificationOtpExpiresAt: otpExpiry(),
    });

    await sendOtpEmail({
      to: normalizedEmail,
      subject: "Campus Matrix email verification code",
      heading: "Verify your Campus Matrix account",
      body: "Use this one-time password to verify your email address and activate your account.",
      code: verificationOtp,
    });

    res.status(201).json({
      message: "User registered successfully. Please verify your email with the OTP we sent.",
      requiresVerification: true,
      email: normalizedEmail,
      username: user.username,
    });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const verifyEmailOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const normalizedEmail = normalizeEmail(email);

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.isEmailVerified) {
      return res.status(200).json({ message: "Email already verified." });
    }

    if (
      !user.emailVerificationOtp ||
      user.emailVerificationOtp !== String(otp || "").trim() ||
      !user.emailVerificationOtpExpiresAt ||
      user.emailVerificationOtpExpiresAt < new Date()
    ) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    user.isEmailVerified = true;
    user.emailVerificationOtp = undefined;
    user.emailVerificationOtpExpiresAt = undefined;
    await user.save();

    await createNotification({
      user: user._id,
      type: "system",
      title: "Email verified",
      body: "Your account is now verified and ready to use.",
      link: "/dashboard",
    });

    res.status(200).json({ message: "Email verified successfully." });
  } catch (err) {
    console.error("Verify Email Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const resendVerificationOtp = async (req, res) => {
  try {
    const normalizedEmail = normalizeEmail(req.body.email);
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.isEmailVerified) {
      return res.status(400).json({ message: "Email already verified." });
    }

    const verificationOtp = generateOtp();
    user.emailVerificationOtp = verificationOtp;
    user.emailVerificationOtpExpiresAt = otpExpiry();
    await user.save();

    await sendOtpEmail({
      to: normalizedEmail,
      subject: "Campus Matrix verification OTP",
      heading: "Your new verification code",
      body: "Use this fresh OTP to complete your email verification.",
      code: verificationOtp,
    });

    res.status(200).json({ message: "Verification OTP sent." });
  } catch (err) {
    console.error("Resend Verification OTP Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  const normalizedEmail = normalizeEmail(req.body.email);
  const { password } = req.body;

  try {
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(400).json({ message: "User does not exist." });
    }

    const isMatch = await bcrypt.compare(password || "", user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    if (!user.isEmailVerified) {
      return res.status(403).json({
        message: "Please verify your email to log in.",
        requiresVerification: true,
        email: user.email,
      });
    }

    const token = issueToken(user);

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        user: serializeUser(user),
      });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};

export const requestPasswordReset = async (req, res) => {
  try {
    const normalizedEmail = normalizeEmail(req.body.email);
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(200).json({
        message: "If an account exists for this email, a reset OTP has been sent.",
      });
    }

    const resetOtp = generateOtp();
    user.resetPasswordOtp = resetOtp;
    user.resetPasswordOtpExpiresAt = otpExpiry();
    await user.save();

    await sendOtpEmail({
      to: normalizedEmail,
      subject: "Campus Matrix password reset OTP",
      heading: "Reset your password",
      body: "Use this OTP to continue resetting your Campus Matrix password.",
      code: resetOtp,
    });

    res.status(200).json({
      message: "If an account exists for this email, a reset OTP has been sent.",
    });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};

export const verifyResetOtp = async (req, res) => {
  try {
    const normalizedEmail = normalizeEmail(req.body.email);
    const otp = String(req.body.otp || "").trim();
    const user = await User.findOne({ email: normalizedEmail });

    if (
      !user ||
      !user.resetPasswordOtp ||
      user.resetPasswordOtp !== otp ||
      !user.resetPasswordOtpExpiresAt ||
      user.resetPasswordOtpExpiresAt < new Date()
    ) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    res.status(200).json({ message: "OTP verified." });
  } catch (err) {
    console.error("Verify Reset OTP Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const normalizedEmail = normalizeEmail(req.body.email);
    const otp = String(req.body.otp || "").trim();
    const { newPassword } = req.body;
    const passwordError = validatePassword(newPassword);

    if (passwordError) {
      return res.status(400).json({ message: passwordError });
    }

    const user = await User.findOne({ email: normalizedEmail });
    if (
      !user ||
      !user.resetPasswordOtp ||
      user.resetPasswordOtp !== otp ||
      !user.resetPasswordOtpExpiresAt ||
      user.resetPasswordOtpExpiresAt < new Date()
    ) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordOtp = undefined;
    user.resetPasswordOtpExpiresAt = undefined;
    await user.save();

    await createNotification({
      user: user._id,
      type: "system",
      title: "Password updated",
      body: "Your Campus Matrix password was changed successfully.",
      link: "/auth/login",
    });

    res.status(200).json({ message: "Password reset successful." });
  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const logoutUser = (_req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logged out successfully" });
};

export const deleteMyAccount = async (req, res) => {
  try {
    const userId = req.user.id;

    const chats = await Chat.find({ users: userId }).select("_id");
    const chatIds = chats.map((chat) => chat._id);

    await Promise.all([
      Profile.findOneAndDelete({ user: userId }),
      Goal.deleteMany({ $or: [{ user: userId }, { assigner: userId }] }),
      Connection.deleteMany({ $or: [{ mentor: userId }, { mentee: userId }] }),
      Follow.deleteMany({ $or: [{ follower: userId }, { following: userId }] }),
      Notification.deleteMany({ user: userId }),
      Chat.deleteMany({ users: userId }),
      Message.deleteMany({
        $or: [{ sender: userId }, ...(chatIds.length ? [{ chat: { $in: chatIds } }] : [])],
      }),
      User.findByIdAndDelete(userId),
    ]);

    res.clearCookie("token").status(200).json({ message: "Account deleted successfully." });
  } catch (err) {
    console.error("Delete Account Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};
