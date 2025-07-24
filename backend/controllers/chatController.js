import Chat from "../models/Chat.js";
import User from "../models/User.js";

export const accessOrCreateChat = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email required" });

  try {
    // console.log("This is email inside controller chat",email)
    const userToChatWith = await User.findOne({ email });
    // console.log("User to chat with is",userToChatWith);
    
    if (!userToChatWith) return res.status(404).json({ message: "User not found" });

    let chat = await Chat.findOne({
      users: { $all: [req.user.id, userToChatWith._id] },
    }).populate("users", "-password");

    if (!chat) {
      chat = await Chat.create({
        users: [req.user.id, userToChatWith._id],
      });
      chat = await chat.populate("users", "-password");
    }

    res.status(200).json(chat);
  } catch (err) {
    res.status(500).json({ message: "Error accessing chat", error: err });
  }
};

export const getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find({ users: req.user.id })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 });

    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ message: "Error fetching chats", error: err });
  }
};
