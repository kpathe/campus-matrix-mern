import Follow from "../models/Follow.js";
import Profile from "../models/Profile.js";
import User from "../models/User.js";

const serializeDirectoryUser = ({ user, profile, isFollowing }) => ({
  _id: user._id,
  name: user.name,
  username: user.username,
  email: user.email,
  year: user.year,
  roles: user.roles,
  hasProfile: user.hasProfile,
  department: profile?.department || "",
  bio: profile?.bio || "",
  skills: profile?.skills || [],
  interests: profile?.interests || [],
  languages: profile?.languages || [],
  profileImage: profile?.profileImage || "",
  coverImage: profile?.coverImage || "",
  linkedin: profile?.linkedin || "",
  totalDynamicScore: profile?.totalDynamicScore || 0,
  combinedStreak: profile?.combinedStreak || 0,
  gamificationPoints: profile?.gamificationPoints || 0,
  isFollowing,
});

export const getDirectory = async (req, res) => {
  try {
    const query = String(req.query.q || "").trim();
    const regex = query
      ? new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i")
      : null;

    const users = await User.find({
      _id: { $ne: req.user.id },
      hasProfile: true,
      ...(regex
        ? {
            $or: [{ name: regex }, { username: regex }, { email: regex }],
          }
        : {}),
    })
      .select("name username email year roles hasProfile")
      .sort({ createdAt: -1 })
      .limit(100);

    const userIds = users.map((user) => user._id);
    const [profiles, follows] = await Promise.all([
      Profile.find({ user: { $in: userIds } }),
      Follow.find({ follower: req.user.id, following: { $in: userIds } }).select("following"),
    ]);

    const profileMap = new Map(profiles.map((profile) => [profile.user.toString(), profile]));
    const followingSet = new Set(follows.map((follow) => follow.following.toString()));

    res.status(200).json(
      users.map((user) =>
        serializeDirectoryUser({
          user,
          profile: profileMap.get(user._id.toString()),
          isFollowing: followingSet.has(user._id.toString()),
        })
      )
    );
  } catch (err) {
    console.error("Get Directory Error:", err);
    res.status(500).json({ message: "Failed to fetch directory." });
  }
};

export const followUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId || userId === req.user.id) {
      return res.status(400).json({ message: "Invalid user to follow." });
    }

    await Follow.findOneAndUpdate(
      { follower: req.user.id, following: userId },
      { follower: req.user.id, following: userId },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "User followed successfully." });
  } catch (err) {
    console.error("Follow User Error:", err);
    res.status(500).json({ message: "Failed to follow user." });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    await Follow.findOneAndDelete({
      follower: req.user.id,
      following: req.params.userId,
    });

    res.status(200).json({ message: "User unfollowed successfully." });
  } catch (err) {
    console.error("Unfollow User Error:", err);
    res.status(500).json({ message: "Failed to unfollow user." });
  }
};

export const getFollowers = async (req, res) => {
  try {
    const { userId } = req.params;
    const targetUserId = userId === 'me' ? req.user.id : userId;

    const follows = await Follow.find({ following: targetUserId }).select("follower");
    const followerIds = follows.map((f) => f.follower);

    const users = await User.find({ _id: { $in: followerIds } })
      .select("name username email year roles hasProfile");

    const profiles = await Profile.find({ user: { $in: followerIds } });
    const profileMap = new Map(profiles.map((p) => [p.user.toString(), p]));

    // Check if the current user is following any of these followers
    let followingSet = new Set();
    if (req.user) {
      const myFollows = await Follow.find({ follower: req.user.id, following: { $in: followerIds } }).select("following");
      followingSet = new Set(myFollows.map((f) => f.following.toString()));
    }

    const followers = users.map((u) =>
      serializeDirectoryUser({
        user: u,
        profile: profileMap.get(u._id.toString()),
        isFollowing: followingSet.has(u._id.toString()),
      })
    );

    res.status(200).json(followers);
  } catch (err) {
    console.error("Get Followers Error:", err);
    res.status(500).json({ message: "Failed to fetch followers." });
  }
};

export const getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;
    const targetUserId = userId === 'me' ? req.user.id : userId;

    const follows = await Follow.find({ follower: targetUserId }).select("following");
    const followingIds = follows.map((f) => f.following);

    const users = await User.find({ _id: { $in: followingIds } })
      .select("name username email year roles hasProfile");

    const profiles = await Profile.find({ user: { $in: followingIds } });
    const profileMap = new Map(profiles.map((p) => [p.user.toString(), p]));

    let followingSet = new Set();
    if (req.user) {
      const myFollows = await Follow.find({ follower: req.user.id, following: { $in: followingIds } }).select("following");
      followingSet = new Set(myFollows.map((f) => f.following.toString()));
    }

    const following = users.map((u) =>
      serializeDirectoryUser({
        user: u,
        profile: profileMap.get(u._id.toString()),
        isFollowing: followingSet.has(u._id.toString()),
      })
    );

    res.status(200).json(following);
  } catch (err) {
    console.error("Get Following Error:", err);
    res.status(500).json({ message: "Failed to fetch following." });
  }
};
