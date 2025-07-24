import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/messages", messageRoutes);

// MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Server & Socket.io
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const users = new Map();

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("addUser", (userId) => {
    if (userId) users.set(userId, socket.id);
  });

  socket.on("joinRoom", (chatId) => {
    socket.join(chatId);
  });

  socket.on("newMessage", (message) => {
    const chat = message.chat;
    if (!chat || !chat.users) return;

    chat.users.forEach((user) => {
      if (user._id === message.sender._id) return;
      socket.to(chat._id).emit("newMessage", message);
    });
  });

  socket.on("typing", (chatId) => {
    socket.to(chatId).emit("typing", chatId);
  });

  socket.on("stopTyping", (chatId) => {
    socket.to(chatId).emit("stopTyping", chatId);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    for (let [userId, sockId] of users.entries()) {
      if (sockId === socket.id) {
        users.delete(userId);
        break;
      }
    }
  });
});

server.listen(PORT, () =>
  console.log(`✅ Server is running on port ${PORT}`)
);
