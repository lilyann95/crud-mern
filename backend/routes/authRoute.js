import express from "express";
import {
  loginUser,
  registerUser,
  getUser,
} from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const authRoute = express.Router();

authRoute.post("/login", loginUser);
authRoute.post("/register", registerUser);
authRoute.get("/me", authenticateToken, getUser);

export default authRoute;
