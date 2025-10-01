import express from "express";
import { loginUser, registerUser } from "../controllers/authController";
import { authenticateToken } from "../middleware/authMiddleware";

const authRoute = express.Router();

authRoute.post("/login", loginUser);
authRoute.post("/register", registerUser);
