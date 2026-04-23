import Profile from "../models/Profile.js";
import User from "../models/User.js";
import Follow from "../models/Follow.js";
import { aggregateStats } from "../utils/statAggregator.js";
import {
  sanitizeArrayInput,
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
    } = req.body;

    if (!department?.trim()) {
      return res.status(400).json({ success: false, message: "Department is required." });
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

    const user = await User.findByIdAndUpdate(req.user.id, { hasProfile: true }, { new: true }).select(
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
      let profile = await Profile.findOneAndUpdate(
         { user: req.user.id },
         { githubUsername, leetcodeUsername, gfgUsername },
         { new: true }
      );
      if (!profile) {
        return res.status(404).json({ message: "Profile not found." });
      }

      const stats = await aggregateStats(profile);
      profile.totalDynamicScore = stats.totalScore;
      profile.combinedStreak = stats.combinedStreak;
      profile.contributionGraph = stats.contributionGraph;
      await profile.save();
      res.json(profile);
   } catch(err) {
      res.status(500).json({ message: "Failed to update handles" });
   }
};

export const getPublicProfile = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username })
      .select("name username email year roles hasProfile createdAt");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const [profile, followersCount, followingCount, followState] = await Promise.all([
      Profile.findOne({ user: user._id }),
      Follow.countDocuments({ following: user._id }),
      Follow.countDocuments({ follower: user._id }),
      req.user
        ? Follow.findOne({ follower: req.user.id, following: user._id }).select("_id")
        : null,
    ]);

    res.status(200).json({
      user,
      profile,
      followersCount,
      followingCount,
      isFollowing: Boolean(followState),
      isOwnProfile: req.user ? req.user.id === user._id.toString() : false,
    });
  } catch (err) {
    console.error("Get Public Profile Error:", err);
    res.status(500).json({ message: "Failed to fetch public profile." });
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
