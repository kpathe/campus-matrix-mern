import Connection from "../models/Connection.js";
import Goal from "../models/Goal.js";
import Profile from "../models/Profile.js";
import User from "../models/User.js";
import { createNotification } from "../utils/notification.js";

export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id })
      .populate("assigner", "name username")
      .sort({ createdAt: -1 });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: "Failed to get goals." });
  }
};

export const getAssignedGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ assigner: req.user.id })
      .populate("user", "name email username")
      .sort({ createdAt: -1 });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch assigned goals." });
  }
};

export const getAssignableMentees = async (req, res) => {
  try {
    const menteeConnections = await Connection.find({
      mentor: req.user.id,
      status: "accepted",
    }).populate("mentee", "name email username roles");

    const mentees = menteeConnections
      .map((connection) => connection.mentee)
      .filter(Boolean);

    res.status(200).json(mentees);
  } catch (err) {
    console.error("Get Assignable Mentees Error:", err);
    res.status(500).json({ message: "Failed to fetch mentees." });
  }
};

export const createGoal = async (req, res) => {
  const { title, description, deadline, assignedUserId, priority = "medium" } = req.body;
  try {
    if (!title?.trim()) {
      return res.status(400).json({ message: "Title is required." });
    }

    const targetUserId = assignedUserId || req.user.id;
    const isAssignedByOther = targetUserId !== req.user.id;

    if (isAssignedByOther) {
      const currentUser = await User.findById(req.user.id).select("roles name");
      if (!currentUser?.roles?.includes("mentor")) {
        return res.status(403).json({ message: "Only mentors can assign tasks to mentees." });
      }

      const connection = await Connection.findOne({
        mentor: req.user.id,
        mentee: targetUserId,
        status: "accepted",
      });

      if (!connection) {
        return res.status(403).json({ message: "You are not connected to this mentee." });
      }
    }

    const newGoal = await Goal.create({
      user: targetUserId,
      title: title.trim(),
      description: description?.trim(),
      deadline,
      assigner: isAssignedByOther ? req.user.id : undefined,
      category: isAssignedByOther ? "task" : "goal",
      priority,
    });

    if (isAssignedByOther) {
      await createNotification({
        user: targetUserId,
        type: "task_assigned",
        title: "New mentor task assigned",
        body: `${req.user.name} assigned you a new task: ${title.trim()}.`,
        link: "/goals",
        metadata: { taskId: newGoal._id },
      });
    }

    res.status(201).json(newGoal);
  } catch (err) {
    console.error("Create Goal Error:", err);
    res.status(400).json({ message: "Failed to create goal." });
  }
};

export const updateGoal = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    const goal = await Goal.findOne({ _id: id, user: req.user.id });
    if (!goal) return res.status(404).json({ message: "Goal not found." });

    let pointsEarned = 0;
    let earnedBadges = [];

    if (completed && !goal.completed && !goal.pointsAwarded) {
      const now = new Date();
      if (!goal.deadline || new Date(goal.deadline) > now) {
        pointsEarned = 50;
      } else {
        pointsEarned = 20;
      }

      const profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile.gamificationPoints += pointsEarned;

        if (profile.gamificationPoints >= 100 && !profile.badges.includes("Bronze Scholar")) {
          profile.badges.push("Bronze Scholar");
          earnedBadges.push("Bronze Scholar");
        }
        if (profile.gamificationPoints >= 500 && !profile.badges.includes("Silver Prodigy")) {
          profile.badges.push("Silver Prodigy");
          earnedBadges.push("Silver Prodigy");
        }
        if (profile.gamificationPoints >= 1000 && !profile.badges.includes("Gold Ascendant")) {
          profile.badges.push("Gold Ascendant");
          earnedBadges.push("Gold Ascendant");
        }

        await profile.save();
      }

      if (goal.assigner) {
        const mentorProfile = await Profile.findOne({ user: goal.assigner });
        if (mentorProfile) {
          mentorProfile.gamificationPoints += 30;
          await mentorProfile.save();
        }

        await createNotification({
          user: goal.assigner,
          type: "task_completed",
          title: "Assigned task completed",
          body: `${req.user.name} completed the task "${goal.title}".`,
          link: "/goals",
          metadata: { taskId: goal._id },
        });
      }

      req.body.pointsAwarded = true;
    }

    const updated = await Goal.findOneAndUpdate({ _id: id, user: req.user.id }, req.body, {
      new: true,
    });

    res.json({ updated, pointsEarned, earnedBadges });
  } catch (err) {
    console.error("Update Goal Error:", err);
    res.status(400).json({ message: "Failed to update goal." });
  }
};

export const deleteGoal = async (req, res) => {
  const { id } = req.params;
  try {
    await Goal.findOneAndDelete({
      _id: id,
      $or: [{ user: req.user.id }, { assigner: req.user.id }],
    });
    res.json({ message: "Goal deleted." });
  } catch (err) {
    console.error("Delete Goal Error:", err);
    res.status(500).json({ message: "Failed to delete goal." });
  }
};
