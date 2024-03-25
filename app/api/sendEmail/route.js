// // Import necessary modules
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// // Create Express app
// const app = express();
// const PORT = process.env.PORT || 5000; // Choose a suitable port

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Define a route for sending emails
// app.post('/api/sendEmail', async (req, res) => {
//   const { email, content } = req.body;

//   // Check if email and content are provided
//   if (!email || !content) {
//     return res.status(400).json({ error: 'Email and content are required' });
//   }

//   try {
//     // Create a Nodemailer transporter using your email service credentials
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail', // Change to your email service provider
//       auth: {
//         user: 'your-email@example.com', // Replace with your email address
//         pass: 'your-password' // Replace with your email password or app-specific password
//       }
//     });

//     // Send email
//     await transporter.sendMail({
//       from: 'your-email@example.com', // Sender email address
//       to: email, // Recipient email address
//       subject: 'Subject of the email',
//       text: content // Plain text content of the email
//     });

//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
