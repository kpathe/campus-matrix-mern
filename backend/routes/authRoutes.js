import express from "express";
import { signup, login } from "../controllers/authController.js";
import verifyToken from "../middleware/verifyToken.js";
import { getMe } from "../controllers/authController.js";
import { logoutUser } from "../controllers/authController.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", signup);

// POST /api/auth/login
router.post("/login", login);

router.get("/me", verifyToken, getMe);

router.post("/logout", logoutUser);

export default router;
