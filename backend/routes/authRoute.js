import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/login", loginUser);
authRoute.post("/register", registerUser);

export default authRoute;
