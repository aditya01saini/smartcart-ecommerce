import express from "express";
import { register, login,  getUser, logout } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", getUser);

export default router;
