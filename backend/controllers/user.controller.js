import { User } from "../models/user.model.js";

export const userRegister = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Validation
    if (!userName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Create user
    const user = await User.create({
      userName,
      email,
      password,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};