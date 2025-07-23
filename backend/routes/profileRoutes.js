import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { createProfile } from "../controllers/profileController.js";
import { getMyProfile } from "../controllers/profileController.js";

const router = express.Router();

router.post("/create-profile", verifyToken, createProfile);
router.get("/me", verifyToken, getMyProfile);

export default router;
