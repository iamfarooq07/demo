import express from "express";
import multer from "multer";
import path from "path";
import { userRegister } from "../controllers/user.controller.js";

export const route = express.Router();

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },

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