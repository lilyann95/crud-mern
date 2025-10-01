import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import bcrypt from "bcrypt";
const saltRounds = 20;

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
      id: user._id,
      username: user.username,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json("Server error");
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

    await payload.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error creating the user: ${error.message}` });
  }
};

export { loginUser, registerUser };
