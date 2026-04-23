import Chat from "../models/Chat.js";
import User from "../models/User.js";
import { createNotification } from "../utils/notification.js";

const buildChatSearchQuery = (identifier) => {
  const trimmed = String(identifier || "").trim();
  if (!trimmed) return null;

  const regex = new RegExp(trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  return {
    $or: [{ email: trimmed.toLowerCase() }, { username: trimmed.toLowerCase() }, { name: regex }],
  };
};

export const searchChatUsers = async (req, res) => {
  try {
    const q = String(req.query.q || "").trim();
    if (!q) return res.status(200).json([]);

    const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    const users = await User.find({
      _id: { $ne: req.user.id },
      $or: [{ username: regex }, { name: regex }, { email: regex }],
    })
      .select("name username email roles")
      .limit(8);

    res.status(200).json(users);
  } catch (err) {
    console.error("Search Chat Users Error:", err);
    res.status(500).json({ message: "Failed to search users." });
  }
};

export const accessOrCreateChat = async (req, res) => {
  const identifier = req.body.identifier || req.body.email || req.body.username;

  if (!identifier) {
    return res.status(400).json({ message: "Email or username required" });
  }

  try {
    const userToChatWith = await User.findOne(buildChatSearchQuery(identifier)).select("-password");

    if (!userToChatWith) return res.status(404).json({ message: "User not found" });
    if (userToChatWith._id.toString() === req.user.id) {
      return res.status(400).json({ message: "You cannot create a chat request with yourself." });
    }

    let chat = await Chat.findOne({
      users: { $all: [req.user.id, userToChatWith._id] },
    }).populate("users", "-password");

    if (!chat) {
      chat = await Chat.create({
        users: [req.user.id, userToChatWith._id],
        requestedBy: req.user.id,
        status: "pending",
      });
      chat = await chat.populate("users", "-password");

      await createNotification({
        user: userToChatWith._id,
        type: "chat_request",
        title: "New message request",
        body: `${req.user.name} wants to start a conversation with you.`,
        link: "/messages",
        metadata: { chatId: chat._id },
      });
    }

    res.status(200).json(chat);
  } catch (err) {
    console.error("Error accessing chat:", err);
    res.status(500).json({ message: "Error accessing chat", error: err.message });
  }
};

export const getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find({ users: req.user.id, status: "accepted" })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 });

    res.status(200).json(chats);
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).json({ message: "Error fetching chats", error: err.message });
  }
};

export const getChatRequests = async (req, res) => {
  try {
    const chatRequests = await Chat.find({ users: req.user.id, status: "pending" })
      .populate("users", "-password")
      .populate("requestedBy", "name username email")
      .sort({ createdAt: -1 });

    const incoming = chatRequests.filter(
      (chat) => chat.requestedBy?._id?.toString() !== req.user.id
    );
    const outgoing = chatRequests.filter(
      (chat) => chat.requestedBy?._id?.toString() === req.user.id
    );

    res.status(200).json({ incoming, outgoing });
  } catch (err) {
    console.error("Error fetching chat requests:", err);
    res.status(500).json({ message: "Error fetching chat requests", error: err.message });
  }
};

export const updateChatRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!["accepted", "declined"].includes(status)) {
      return res.status(400).json({ message: "Invalid status." });
    }

    const chat = await Chat.findById(req.params.chatId)
      .populate("users", "-password")
      .populate("requestedBy", "name username email");

    if (!chat) {
      return res.status(404).json({ message: "Chat request not found." });
    }

    if (chat.requestedBy._id.toString() === req.user.id) {
      return res.status(403).json({ message: "Only the recipient can update this request." });
    }

    if (!chat.users.some((user) => user._id.toString() === req.user.id)) {
      return res.status(403).json({ message: "You do not belong to this chat." });
    }

    chat.status = status;
    chat.acceptedAt = status === "accepted" ? new Date() : undefined;
    await chat.save();

    await createNotification({
      user: chat.requestedBy._id,
      type: "chat_update",
      title: `Message request ${status}`,
      body: `${req.user.name} ${status} your message request.`,
      link: "/messages",
      metadata: { chatId: chat._id, status },
    });

    res.status(200).json(chat);
  } catch (err) {
    console.error("Error updating chat request:", err);
    res.status(500).json({ message: "Error updating chat request", error: err.message });
  }
};
