import express from "express";
import { userRegister } from "../controllers/user.controller.js";

export const route = express.Router();

route.post("/register", userRegister);