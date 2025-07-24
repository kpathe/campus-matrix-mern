import express from "express";
import { accessOrCreateChat, getAllChats } from "../controllers/chatController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, accessOrCreateChat);
router.get("/", verifyToken, getAllChats);

export default router;
