import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"; // ✅ NEW
import authRoutes from "./routes/authRoutes.js"; // ✅ Add this line
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
    credentials: true, // ✅ Important for cookies
  })
);

app.use(cookieParser()); // ✅ NEW
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // ✅ Register routes

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/profile", profileRoutes);

app.use("/api/goals", goalRoutes);

app.use("/api/chat", chatRoutes);
app.use("/api/messages", messageRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// Store connected users
const users = new Map();

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Map userId to socket.id
  socket.on("addUser", (userId) => {
    if (userId) {
      users.set(userId, socket.id);
    }
  });

  // Forward new messages
  socket.on("newMessage", (message) => {
    const chatUsers = message.chat.users;

    chatUsers.forEach((user) => {
      if (user._id === message.sender._id) return; // Don't emit to sender

      const receiverSocket = users.get(user._id);
      if (receiverSocket) {
        io.to(receiverSocket).emit("newMessage", message);
      }
    });
  });

  // Cleanup on disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    for (let [userId, socketId] of users.entries()) {
      if (socketId === socket.id) {
        users.delete(userId);
        break;
      }
    }
  });
});


server.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
