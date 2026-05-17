require("dotenv").config();
const nodemailer = require("nodemailer");

async function testEmail() {
  console.log("Testing email with user:", process.env.MAIL_USER);
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Test" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "Test Email from Portfolio",
      text: "This is a test to verify if the contact form credentials are working.",
    });
    console.log("Success! Email sent. Message ID:", info.messageId);
  } catch (error) {
    console.error("Failed to send email. Error:", error);
  }
}

testEmail();
