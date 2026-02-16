import express from "express";
import {
  dashboardStats,
  deleteUser,
  getAllUsers,
} from "../controllers/adminController.js";
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
); //Dashboard

router.delete(
  "/deleteUser/:id",
  isAuthenticated,
  authorizedRoles("Admin"),
  deleteUser,
);
router.get(
  "/fetch/dashboard-stats",
  isAuthenticated,
  authorizedRoles("Admin"),
  dashboardStats,
);

export default router;
