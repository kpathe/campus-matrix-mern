import Profile from "../models/Profile.js";
import User from "../models/User.js";
import { aggregateStats } from "../utils/statAggregator.js";

export const createProfile = async (req, res) => {
  try {
    const { department, bio, skills, interests, languages, gender, linkedin, profileImage, coverImage } =
      req.body;

    const profileData = {
      department,
      bio,
      skills,
      interests,
      languages,
      gender,
      linkedin,
      profileImage,
      coverImage
    };

    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileData },
      { new: true, upsert: true } // Create if doesn't exist, otherwise update
    );

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
