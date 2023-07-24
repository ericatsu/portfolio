const dialogflow = require('@google-cloud/dialogflow');

const sessionClient = new dialogflow.SessionsClient({
  credentials: {
  "type": "service_account",
  "project_id": "portfolio-chat-axfd",
  "private_key_id": process.env.CLOUD_PRIVATE_KEY_ID,
  "private_key": process.env.CLOUD_PRIVATE_KEY,
  "client_email": "portfolio-service@portfolio-chat-axfd.iam.gserviceaccount.com",
  "client_id": process.env.CLOUD_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/portfolio-service%40portfolio-chat-axfd.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
  },
});

// Now you can use the `sessionClient` to interact with Dialogflow.
// For example, you can send a text query to Dialogflow and get a response.

const sessionPath = sessionClient.projectAgentSessionPath(
  "portfolio-chat-axfd",
  "unique-session-id"
);

const request = {
  session: sessionPath,
  queryInput: {
    text: {
      text: "Human",
      languageCode: "en-US",
    },
  },
};

sessionClient
  .detectIntent(request)
  .then((responses) => {
    const result = responses[0].queryResult;
    console.log("Detected intent:");
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
  })
  .catch((err) => {
    console.error("Error sending message to Dialogflow:", err);
  });



// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3001;

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com', 
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USERNAME,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });


// app.post('/send-email', (req, res) => {
//   const { title, message, email } = req.body;

 
//   const mailOptions = {
//     from: 'ericatsu29@gmail.com',
//     to: email,
//     subject: title,
//     text: message,
//   };

 
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Failed to send email' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email sent successfully' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
