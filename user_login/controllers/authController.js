


const User = require('../models/user');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }


        const user = await User.create({
            username,
            email,
            password,
        });


        const token = generateToken(user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login a user
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = generateToken(user._id);
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
const logout = (req, res) => {

    res.json({ message: 'User logged out successfully' });
};

const getAllUsers = async (req, res) => {
    try {

        const users = await User.find({});


        res.json(users);

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


module.exports = {
    register,
    login,
    logout,
    getAllUsers
};












// const mongoose = require('mongoose');
// const User = require('../models/user');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Helper function to generate JWT token
// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// };

// const getUserDbConnection = (userId) => {
//     const dbName = `user_${userId}`;
//     const dbURI = `${process.env.MONGO_URI}/${dbName}`;
//     return mongoose.createConnection(dbURI);
// };



// const register = async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//         // Check if the user already exists
//         const userExists = await User.findOne({ email });
//         if (userExists) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Create the new user
//         const user = await User.create({
//             username,
//             email,
//             password,
//         });

//         // Generate token
//         const token = generateToken(user._id);

//         // Create a connection to the user's specific database for activity storage
//         const userDbConnection = getUserDbConnection(user._id);

//         // Example: Save initial user activity in the user's own database
//         const Activity = userDbConnection.model('Activity', new mongoose.Schema({
//             action: String,
//             timestamp: { type: Date, default: Date.now },
//         }));
//         await new Activity({ action: 'User registered' }).save();

//         // Close the connection (optional if you want to keep it open for future use)
//         userDbConnection.close();

//         // Respond with user info and token
//         res.status(201).json({
//             _id: user._id,
//             username: user.username,
//             email: user.email,
//             token,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// // Login an existing user
// const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Verify the password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid password' });
//         }

//         // Generate token
//         const token = generateToken(user._id);

//         // Get the user's specific database connection
//         const userDbConnection = getUserDbConnection(user._id);

//         // Example: Save login activity in the user's own database
//         const Activity = userDbConnection.model('Activity', new mongoose.Schema({
//             action: String,
//             timestamp: { type: Date, default: Date.now },
//         }));
//         await new Activity({ action: 'User logged in' }).save();

//         // Close the connection after saving activity
//         userDbConnection.close();

//         // Respond with user info and token
//         res.json({
//             _id: user._id,
//             username: user.username,
//             email: user.email,
//             token,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// // Logout a user
// const logout = (req, res) => {
//     // Simply respond with a logout message
//     res.json({ message: 'User logged out successfully' });
// };

// // Get all users (Admin functionality, adjust as needed)
// const getAllUsers = async (req, res) => {
//     try {
//         // Fetch all users
//         const users = await User.find({});
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

// module.exports = {
//     register,
//     login,
//     logout,
//     getAllUsers
// };
