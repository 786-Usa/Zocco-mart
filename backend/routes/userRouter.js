import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updatePassword,
  updateProfile,
} from "../controllers/userController.js";
import isAuthenticatedUser from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.post("/register", upload.single("avatar"), registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);

userRouter.get("/me", isAuthenticatedUser, getUserProfile);
userRouter.put("/password/update", isAuthenticatedUser, updatePassword);
userRouter.put("/me/update", isAuthenticatedUser, updateProfile);

export default userRouter;