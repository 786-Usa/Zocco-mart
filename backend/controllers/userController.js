import User from "../models/userModel.js";
import fs from "fs";
import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";


// ================= REGISTER USER =================
const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, phoneNumber } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error("Error deleting file:", err);
      });
    }

    return next(new ErrorHandler("User already exists", 400));
  }

  let avatar = {};

  if (req.file) {
    avatar = {
      public_id: req.file.filename,
      url: `/uploads/${req.file.filename}`,
    };
  }

  const user = await User.create({
    name,
    email,
    password,
    phoneNumber,
    avatar,
  });

  sendToken(user, 201, res);
});

export default registerUser;

// ================= LOGIN USER =================
const loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // check email & password
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  // include password explicitly
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

// ================= LOGOUT USER =================
const logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// ================= GET USER PROFILE =================
const getUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// ================= UPDATE PASSWORD =================
const updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isMatched = await user.comparePassword(req.body.oldPassword);

  if (!isMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Passwords do not match", 400));
  }

  user.password = req.body.newPassword;
  await user.save();

  sendToken(user, 200, res);
});

// ================= UPDATE USER PROFILE =================
const updateProfile = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// ================= HELPER: SEND TOKEN =================
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  const cookieExpireDays = Number(process.env.COOKIE_EXPIRE) || 7;

  const options = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

export {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updatePassword,
  updateProfile,
  sendToken,
};
