// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// app.use(express.json());

// // POST endpoint jo form se data receive karega
// app.post('/api/sendMessage', async (req, res) => {
//     const { name, email, message } = req.body;

//     try {
//         // 1. Save message to database (pseudo-code)
//         // await Database.saveMessage({ name, email, message });

//         // 2. Email configuration
//         const transporter = nodemailer.createTransport({
//             service: 'gmail', // ya koi bhi email service provider
//             auth: {
//                 user: 'your-email@gmail.com',
//                 pass: 'your-email-password'
//             }
//         });

//         const mailOptions = {
//             from: email,
//             to: 'admin-email@example.com', // aapka admin email
//             subject: `New Message from ${name}`,
//             text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//         };

//         // 3. Send email
//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ message: 'Message sent successfully!' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error sending message.' });
//     }
// });





const Message = require('../models/message');
const nodemailer = require('nodemailer');

const sendMessage = async (req, res) => {
    const { name, email, message } = req.body;

    try {

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: email,
            to: 'mehul.indianit@gmail.com',
            subject: 'New User Message',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Message sent and saved successfully' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Failed to send message', error: error.message });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ message: 'Failed to fetch messages', error: error.message });
    }
};

module.exports = { sendMessage, getMessages };
