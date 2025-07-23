// backend/controllers/goalController.js
import Goal from "../models/Goal.js";

export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: "Failed to get goals." });
  }
};

export const createGoal = async (req, res) => {
  const { title, description, deadline } = req.body;
  try {
    const newGoal = await Goal.create({
      user: req.user.id,
      title,
      description,
      deadline,
    });
    // console.log("Body received:", req.body);
    // console.log("User from token:", req.user);

    res.status(201).json(newGoal);
  } catch (err) {
    res.status(400).json({ message: "Failed to create goal." });
  }
};

export const updateGoal = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Goal.findOneAndUpdate(
      { _id: id, user: req.user.id },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Failed to update goal." });
  }
};

export const deleteGoal = async (req, res) => {
  const { id } = req.params;
  try {
    await Goal.findOneAndDelete({ _id: id, user: req.user.id });
    res.json({ message: "Goal deleted." });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete goal." });
  }
};
