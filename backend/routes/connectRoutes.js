import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { followUser, getDirectory, unfollowUser } from "../controllers/connectController.js";

const router = express.Router();

router.get("/", verifyToken, getDirectory);
router.post("/follow", verifyToken, followUser);
router.delete("/follow/:userId", verifyToken, unfollowUser);

export default router;
