require("dotenv").config();

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
})

message = {
  from: process.env.EMAIL,
  to: "sceptre520@gmail.com",
  subject: "Subject",
  text: "Hello SMTP Email"
}

transporter.sendMail(message, function(err, info) {
if (err) {
  console.log(err)
} else {
  console.log(info);
}
})