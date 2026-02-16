import express from "express";
import { deleteUser, getAllUsers } from "../controllers/adminController.js";
import {
  authorizedRoles,
  isAuthenticated,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get(
  "/getallUsers",
  isAuthenticated,
  authorizedRoles("Admin"),
  getAllUsers,
);  //Dashboard

router.delete("/deleteUser/:id", isAuthenticated, authorizedRoles("Admin"), deleteUser)

export default router;
