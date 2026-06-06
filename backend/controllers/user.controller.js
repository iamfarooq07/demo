import { User } from "../models/user.model.js";

export const userRegister = async (req, res) => {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);
    try {
      const { userName, email, password } = req.body;

      // Validation
      if (!userName || !email || !password) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }

o      // Check Existing User
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({
          message: "User already exists",
        });
      }

      // Create User
      const user = await User.create({
        userName,
        email,
        password,
        avatar: req.file?.filename,
      });

      res.status(201).json({
        message: "User Registered Successfully",
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
};

export const userLogin = async (req, res) => {
  try {
    const {email, password , avater} = req.body;

    if(!email || !password || ! avater){
      return res.status(401).json({message : "Please All Field Access"})
    };

    const existin = await bcrypt.compare(password, hashPassword);
  } catch (error) {
    
  }
}

