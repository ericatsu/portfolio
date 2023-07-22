const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', 
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});


app.post('/send-email', (req, res) => {
  const { title, message, email } = req.body;

 
  const mailOptions = {
    from: 'ericatsu29@gmail.com',
    to: email,
    subject: title,
    text: message,
  };

 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
