// backend/routes/goalRoutes.js
import express from "express";
import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.route("/").get(verifyToken, getGoals).post(verifyToken, createGoal);

router
  .route("/:id")
  .put(verifyToken, updateGoal)
  .delete(verifyToken, deleteGoal);

export default router;
