const express = require("express");
const router = express.Router();
const { isAuthorizedUser, authorizedRoles } = require("../middleware/auth");
const {
  BookAppointment,
  getBookingAppointment,
  deleteAppointment,
} = require("../controllers/bookingController");
router.route("/appoinment/new").post(BookAppointment);
router.route("/appoinments").get(getBookingAppointment);
router.route("/delete-appointment/:id").delete(deleteAppointment);
module.exports = router;
