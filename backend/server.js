import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Your frontend port
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/messages", messageRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Mongo error", err));

// ✅ Server + socket.io
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const users = new Map(); // userId -> socket.id
const userRooms = new Map(); // socket.id -> roomId

io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  // ✅ Add user to map
  socket.on("addUser", (userId) => {
    if (userId) users.set(userId, socket.id);
  });

  // ✅ Join chat room
  socket.on("joinRoom", (chatId) => {
    socket.join(chatId);
    userRooms.set(socket.id, chatId);
  });

  // ✅ Typing logic
  socket.on("typing", ({ chatId, from }) => {
    socket.to(chatId).emit("typing", from);
  });

  socket.on("stopTyping", ({ chatId }) => {
    socket.to(chatId).emit("stopTyping");
  });

  // ✅ Real-time message sending
  socket.on("newMessage", (message) => {
    const chatId = message.chat?._id || message.chat;

    if (!chatId) return;

    socket.to(chatId).emit("newMessage", message);
  });

  // ✅ Cleanup
  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
    for (const [id, sockId] of users.entries()) {
      if (sockId === socket.id) users.delete(id);
    }
    userRooms.delete(socket.id);
  });
});

server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
