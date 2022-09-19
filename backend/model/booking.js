const mongoose = require("mongoose");
const validator = require("validator");
const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "kindly enter your email"],
    validate: [validator.isEmail, "please enter validati email address"],
  },
  number: {
    type: Number,
    required: [true, "kindly enter your Number"],
  },
  issue: {
    type: String,
    enum: [
      "Charging port",
      "Mobile fone screen repair",
      "Diagnostic",
      "Battery Replacement",
      "Water Damage",
      "Camera Replacement",
      "Software and Data Recovery",
    ],
    default: "Charging port",
    required: [true, "Booking slot is required"],
  },
  time: {
    type: String,
    enum: [
      "10:00 AM",
      "11:00 AM",
      "12:00 AM",
      "13:00 AM",
      "14:00 AM",
      "15:00 AM",
      "16:00 AM",
      "17:00 AM",
      "18:00 AM",
    ],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: String,
  },
  status: {
    type: String,
    // required: true,
    default: "Booked",
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
