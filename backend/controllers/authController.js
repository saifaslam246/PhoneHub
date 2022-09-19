const User = require("../model/user");
const sendToken = require("../utils/jwtToken");
const { findById } = require("../model/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//register a user /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, phone } = req.body;
  if (password.length < 8) {
    return next(
      new ErrorHandler("Password must be greater than 8 characters", 401)
    );
  }
  const user = await User.create({
    name,
    email,
    password,
    phone,
  });
  sendToken(user, 200, res);
});

//login a user /api/v1/login

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  // check whearher email and password is entered or not
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }
  // find user in database
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  //check if psasword is correct or
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  sendToken(user, 200, res);
});

//logout user = api/v1/logout

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    messgae: "logout successfully",
  });
});
