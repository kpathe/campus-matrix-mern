import Message from "../models/Message.js";
import Chat from "../models/Chat.js";
import User from "../models/User.js";

export const searchUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const sendMessage = async (req, res) => {
  const { chatId, content } = req.body;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!content || !chatId) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    let newMessage = await Message.create({
      sender: req.user.id,
      content,
      chat: chatId,
    });

    newMessage = await newMessage.populate("sender", "name email");
    newMessage = await newMessage.populate("chat");
    newMessage = await newMessage.populate({
      path: "chat.users",
      select: "name email",
    });

    await Chat.findByIdAndUpdate(chatId, { latestMessage: newMessage });

    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Message not sent", error });
  }
};

export const fetchMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name email")
      .populate("chat");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to load messages", error });
  }
};
