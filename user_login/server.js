
// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');

// dotenv.config();

// connectDB();

// const app = express();
// app.use("/uploads", express.static("uploads"));


// const allowedOrigins = ['http://localhost:3001', 'http://localhost:5173'];

// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
// }));


// app.use(express.json());


// app.use('/api/auth', authRoutes);


// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send({ message: 'Server error', error: err.message });
// });


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

// CORS configuration
const allowedOrigins = ['http://localhost:3001', 'http://localhost:5173', 'https://your-vercel-domain.vercel.app'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Middleware for parsing JSON
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Server error', error: err.message });
});

// Serve the frontend build in production (for Vercel)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
