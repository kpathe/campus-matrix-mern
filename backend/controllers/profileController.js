import Profile from "../models/Profile.js";
import User from "../models/User.js";
import { aggregateStats } from "../utils/statAggregator.js";
import { ensureUniqueUsername } from "../utils/username.js";
import {
  normalizeUsername,
  sanitizeArrayInput,
  validateUsername,
} from "../utils/validation.js";

export const createProfile = async (req, res) => {
  try {
    const {
      department,
      bio,
      skills,
      interests,
      languages,
      gender,
      linkedin,
      profileImage,
      coverImage,
      username,
    } = req.body;

    if (!department?.trim()) {
      return res.status(400).json({ success: false, message: "Department is required." });
    }

    const normalizedUsername = normalizeUsername(username || "");
    if (normalizedUsername && !validateUsername(normalizedUsername)) {
      return res.status(400).json({
        success: false,
        message:
          "Username must be 3-20 characters and can only use lowercase letters, numbers, dots, and underscores.",
      });
    }

    const profileData = {
      department: department.trim(),
      bio: bio?.trim(),
      skills: sanitizeArrayInput(skills),
      interests: sanitizeArrayInput(interests),
      languages: sanitizeArrayInput(languages),
      gender,
      linkedin: linkedin?.trim(),
      profileImage,
      coverImage,
    };

    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileData },
      { new: true, upsert: true }
    );

    const userUpdates = { hasProfile: true };
    if (normalizedUsername) {
      userUpdates.username = await ensureUniqueUsername({
        username: normalizedUsername,
        email: req.user.email,
        name: req.user.name,
        excludeUserId: req.user.id,
      });
    }

    const user = await User.findByIdAndUpdate(req.user.id, userUpdates, { new: true }).select(
      "-password"
    );

    res
      .status(201)
      .json({ success: true, message: "Profile saved", profile, user });
  } catch (error) {
    console.error("Profile creation error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const refreshStats = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) return res.status(404).json({ message: "Profile missing" });

    const stats = await aggregateStats(profile);
    
    profile.totalDynamicScore = stats.totalScore;
    profile.combinedStreak = stats.combinedStreak;
    profile.contributionGraph = stats.contributionGraph;
    
    await profile.save();
    res.status(200).json({ message: "Stats updated successfully", profile, stats });
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: "Error aggregating external platforms" });
  }
};

export const updateExternalHandles = async (req, res) => {
   try {
      const { githubUsername, leetcodeUsername, gfgUsername } = req.body;
      const profile = await Profile.findOneAndUpdate(
         { user: req.user.id },
         { githubUsername, leetcodeUsername, gfgUsername },
         { new: true }
      );
      res.json(profile);
   } catch(err) {
      res.status(500).json({ message: "Failed to update handles" });
   }
};

export const searchUsers = async (req, res) => {
  try {
    const query = String(req.query.q || "").trim();
    if (!query) {
      return res.status(200).json([]);
    }

    const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    const users = await User.find({
      _id: { $ne: req.user.id },
      $or: [{ username: regex }, { name: regex }, { email: regex }],
    })
      .select("name username email roles year hasProfile")
      .limit(8);

    res.status(200).json(users);
  } catch (err) {
    console.error("Search Users Error:", err);
    res.status(500).json({ message: "Failed to search users." });
  }
};
