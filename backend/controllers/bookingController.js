const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Booking = require("../model/booking")
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require('../utils/apiFeatures')

 // Book New Appointment

exports.BookAppointment = catchAsyncErrors(async (req, res, next) => {

    const {name,email,issue,time,date,number} = req.body
    const preViousTime = await Booking.findOne({ time }).select("+time");
    const preViousDate = await Booking.findOne({ date }).select("+date");
    if (preViousTime?.time && preViousDate?.date) {
      return next(new ErrorHandler("This time already booked", 402));
    } 
    const booking = await Booking.create({
      name,
      email,
      time,
      issue,
      date,
      number,
    });
    res.status(200).json({
      message: 'You Booked Appoinment Successfully',
      booking,
    });
});

// Get all the Appointments

exports.getBookingAppointment = catchAsyncErrors(async(req,res,next) =>{
  const totalAppointment = await Booking.countDocuments({}).exec();
  const data = await Booking.find().sort({ _id: -1 });
  return res.status(200).json({
    success: true,
    totalAppointment,
    data,
  });
})

// delete the Appointment

exports.deleteAppointment = catchAsyncErrors(async (req, res, next) => {
  const order = await Booking.findByIdAndDelete(req.params.id);
  if (!order) {
    return next(new ErrorHandler("No Appointment found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    message: "you have deleted this Appointment Successfully",
    order,
  });
  
});