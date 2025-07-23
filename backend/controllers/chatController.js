import Chat from "../models/Chat.js";
import User from "../models/User.js";

// Access or create a chat between the logged in user and another user
export const accessChat = async (req, res) => {
  const { userId } = req.body;

  try {
    const targetUser = await User.findById(userId); // use ID not email

    if (!targetUser) {
      return res.status(404).json({ message: "User not found" });
    }

    let chat = await Chat.findOne({
      users: { $all: [req.user.id, targetUser.id] },
    }).populate("users", "-password");

    if (!chat) {
      chat = await Chat.create({
        users: [req.user.id, targetUser.id],
      });
      chat = await chat.populate("users", "-password");
    }

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


export const fetchChats = async (req, res) => {
  try {
    const chats = await Chat.find({ users: req.user.id })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 });

    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
