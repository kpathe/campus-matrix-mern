import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  createProfile,
  getPublicProfile,
  getMyProfile,
  refreshStats,
  searchUsers,
  updateExternalHandles,
} from "../controllers/profileController.js";

const router = express.Router();

router.post("/create-profile", verifyToken, createProfile);
router.put("/edit-profile", verifyToken, createProfile);
router.get("/me", verifyToken, getMyProfile);
router.get("/user/:username", verifyToken, getPublicProfile);
router.get("/search", verifyToken, searchUsers);
router.post("/refresh-stats", verifyToken, refreshStats);
router.put("/handles", verifyToken, updateExternalHandles);

export default router;
