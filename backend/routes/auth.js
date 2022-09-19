const express = require("express");
const router = express.Router();
const { isAuthorizedUser, authorizedRoles } = require("../middleware/auth");
const {
  registerUser,
  loginUser,
  logout,
  forgetPassword,
  resetPassword,
  getProfileUser,
  updatePassword,
  updateProfile,
  allUsers,
  singleUser,
  updateUser,
  deleteUser,
} = require("../controllers/authController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

module.exports = router;
