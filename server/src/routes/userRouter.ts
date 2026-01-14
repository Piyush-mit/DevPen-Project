import express from "express";

import { verifyToken } from "../middlewares/verifyToken";
import { getMyCodes } from "../controllers/compiler-Controller";
import { signup, login, logout, getcodeCount, } from "../controllers/user-Controller";
export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/codecount", verifyToken, getcodeCount);
userRouter.get("/my-codes", verifyToken, getMyCodes);
