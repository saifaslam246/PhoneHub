const mailer = require("nodemailer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const saif = "saifaslam1555@gmail.com";
exports.email = catchAsyncErrors(async (req, res) => {
  const { email, issue, date, time } = req.body;
  const finalData = date.substring(0, 13);

  const transporter = mailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "phonehubbishop@gmail.com",
      pass: "emyicmuxvleikcnn",
    },
    tls: {
      rejectUnauthorized: false,
    },
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // auth: {
    //   user: process.env.EMAIL_USERNAME,
    //   pass: process.env.EMAIL_PASSWORD,
    // },
  });
  let body = {
    // from: "medicare051@gmail.com",
    from: "phonehubbishop@gmail.com",
    to: email,
    subject: "PhoneHub Appointment Confirmation Email",
    html: `<h1>We have recived your email regarding ${issue} issue.</h1> <h1>Your Appointment will be on ${finalData} at ${time} .</h1><h3> Our team will contact you within one working days. Thanks</h3></br> <h5> Regards: PhoneHub </h5>`,
  };
  await transporter.sendMail(body);
});

// const sgMail = require("@sendgrid/mail");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// exports.email = catchAsyncErrors(async (req, res) => {
//   const { email, issue, date, time } = req.body;
//   console.log(email);
//   const API_KEY =
//     "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";
//   const finalData = date.substring(0, 13);

//   sgMail.setApiKey(API_KEY);

//   let body = {
//     from: "markspecter53@gmail.com",
//     to: email,
//     subject: "PhoneHub Appointment Confirmation Email",
//     text: "help",
//     html: `<h1>We have recived your email regarding ${issue} issue.</h1> <h1>Your Appointment will be on ${finalData} at ${time} .</h1><h3> Our team will contact you within one working days. Thanks</h3></br> <h5> Regards: PhoneHub </h5>`,
//   };
//   await sgMail.send(body);
// });
