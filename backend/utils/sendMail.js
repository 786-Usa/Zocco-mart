import nodemailer from "nodemailer";

const sendMail = async (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: process.env.SMTP_EMAIL,
    to: mailOptions.email,
    subject: mailOptions.subject,
    text: mailOptions.message,
  };

  await transporter.sendMail(message);
};

export default sendMail;