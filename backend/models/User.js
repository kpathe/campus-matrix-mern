import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      lowercase: true,
    },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    roles: {
      type: [String],
      enum: ["mentor", "mentee", "admin"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4],
    },
    hasProfile: { type: Boolean, default: false },
    isEmailVerified: { type: Boolean, default: false },
    emailVerificationOtp: { type: String },
    emailVerificationOtpExpiresAt: { type: Date },
    resetPasswordOtp: { type: String },
    resetPasswordOtpExpiresAt: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
