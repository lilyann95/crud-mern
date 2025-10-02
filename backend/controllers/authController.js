import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await userModel.findOne({ userName });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
      id: user._id,
      userName: user.userName,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      addressLine,
      zipCode,
      city,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const payload = new userModel({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: hashedPassword,
      addressLine: addressLine,
      zipCode: zipCode,
      city: city,
    });

    const savedUser = await payload.save();
    const { password: _, ...withoutPassword } = savedUser.toObject();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: withoutPassword,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      return res
        .status(500)
        .json({ message: `Error creating the user: ${error.message}` });
    }
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { loginUser, registerUser, getUser };
