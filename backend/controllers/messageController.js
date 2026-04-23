import Message from "../models/Message.js";
import Chat from "../models/Chat.js";

export const sendMessage = async (req, res) => {
  const { chatId, content } = req.body;

  if (!chatId || !content) return res.status(400).json({ message: "Invalid message" });

  try {
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found." });
    }

    if (chat.status !== "accepted") {
      return res.status(403).json({ message: "This chat request has not been accepted yet." });
    }

    if (!chat.users.some((userId) => userId.toString() === req.user.id)) {
      return res.status(403).json({ message: "You are not part of this chat." });
    }

    let message = await Message.create({
      chat: chatId,
      sender: req.user.id,
      content: String(content).trim(),
    });

    message = await message.populate("sender", "name email");
    message = await message.populate("chat");

    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message,
    });

    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ message: "Error sending message", error: err });
  }
};

export const getMessagesByChatId = async (req, res) => {
  const { chatId } = req.params;

  try {
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found." });
    }

    if (chat.status !== "accepted") {
      return res.status(403).json({ message: "This chat request has not been accepted yet." });
    }

    const messages = await Message.find({ chat: chatId })
      .populate("sender", "name email")
      .populate("chat");

    // Mark unread messages as read for the current user
    await Message.updateMany(
      {
        chat: chatId,
        readBy: { $ne: req.user.id },
      },
      {
        $addToSet: { readBy: req.user.id },
      }
    );

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages", error: err });
  }
};

