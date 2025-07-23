// routes/messageRoutes.js
import express from "express";
import { sendMessage, fetchMessages, searchUserByEmail } from "../controllers/messageController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/send", verifyToken, sendMessage);
router.get("/:chatId", verifyToken, fetchMessages);
router.post("/search", verifyToken, searchUserByEmail);

export default router;

