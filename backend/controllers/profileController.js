import Profile from "../models/Profile.js";
import User from "../models/User.js";

export const createProfile = async (req, res) => {
  try {
    const { department, bio, skills, interests, languages, gender, linkedin } =
      req.body;

    const profile = new Profile({
      user: req.user.id, // req.user is set in verifyToken middleware
      department,
      bio,
      skills,
      interests,
      languages,
      gender,
      linkedin,
    });

    await profile.save();

    // Update the hasProfile field to true
    await User.findByIdAndUpdate(req.user.id, { hasProfile: true });

    res
      .status(201)
      .json({ success: true, message: "Profile created", profile });
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
