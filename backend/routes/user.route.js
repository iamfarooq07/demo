// import express from "express";
// import { User } from "../models/user.model.js";
// import { userRegister } from "../controllers/user.controller.js";

// export const route = express.Router();

// route.post("/register", userRegister);

import express from "express";
import multer from "multer";
import { userRegister } from "../controllers/user.controller.js";

export const route = express.Router();

// Multer Storage
const storage = multer.diskStorage({
  destination: "./public/images",

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Register Route
route.post(
  "/register",
  upload.single("image"),
  userRegister
);