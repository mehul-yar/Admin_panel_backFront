const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Middleware to get user details
// exports.getUserProfile = async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (!user) return res.status(404).json({ message: 'User not found' });

//         res.status(200).json({
//             success: true,
//             user: {
//                 _id: user._id,
//                 username: user.username,
//                 email: user.email,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 displayName: user.displayName,
//                 address: user.address
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({
            success: true,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                displayName: user.displayName,
                address: user.address,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Update user profile
// exports.updateUserProfile = async (req, res) => {
//     const { firstName, lastName, displayName, address } = req.body;

//     try {
//         const user = await User.findById(req.user.id);
//         if (!user) return res.status(404).json({ message: 'User not found' });

//         user.firstName = firstName || user.firstName;
//         user.lastName = lastName || user.lastName;
//         user.displayName = displayName || user.displayName;
//         user.address = address || user.address;

//         const updatedUser = await user.save();

//         res.status(200).json({
//             success: true,
//             user: {
//                 _id: updatedUser._id,
//                 username: updatedUser.username,
//                 email: updatedUser.email,
//                 firstName: updatedUser.firstName,
//                 lastName: updatedUser.lastName,
//                 displayName: updatedUser.displayName,
//                 address: updatedUser.address
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };
exports.updateUserProfile = async (req, res) => {
    const { firstName, lastName, displayName, address } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.displayName = displayName || user.displayName;
        user.address = address || user.address;

        const updatedUser = await user.save();

        res.status(200).json({
            success: true,
            user: {
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                displayName: updatedUser.displayName,
                address: updatedUser.address,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

