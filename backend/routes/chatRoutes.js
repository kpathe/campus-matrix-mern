import express from "express";
import { accessChat, fetchChats } from "../controllers/chatController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, accessChat); // Search or create chat
router.get("/", verifyToken, fetchChats); // Fetch all chats for user

export default router;
