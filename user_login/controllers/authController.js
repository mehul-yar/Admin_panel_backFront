


const User = require('../models/user');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ username, email, password: hashedPassword });


        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.logout = (req, res) => {

    res.json({ message: 'User logged out successfully' });
};

exports.getAllUsers = async (req, res) => {
    try {

        const users = await User.find({});


        res.json(users);

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// exports.getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.json(users);
//     } catch (error) {
//         console.error('Error fetching users:', error);  // This logs the error for debugging purposes
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };
