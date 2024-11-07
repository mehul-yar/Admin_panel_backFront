

// // const jwt = require('jsonwebtoken');
// // const User = require('../models/user');
// // const Product = require('../models/product');

// // const protect = async (req, res, next) => {
// //     let token;

// //     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// //         try {

// //             token = req.headers.authorization.split(' ')[1].trim();


// //             const decoded = jwt.verify(token, process.env.JWT_SECRET);


// //             req.user = await User.findById(decoded.id).select('-password');

// //             next();
// //         } catch (error) {
// //             console.error('Token verification failed:', error.message);


// //             return res.status(401).json({
// //                 message: error.name === 'TokenExpiredError' ? 'Token expired, please login again' : 'Not authorized, token failed',
// //             });
// //         }
// //     }


// //     if (!token) {
// //         return res.status(401).json({ message: 'Not authorized, no token' });
// //     }
// // };

// // module.exports = { protect };










// const jwt = require('jsonwebtoken');
// const User = require('../models/user');


// const protect = async (req, res, next) => {
//     let token;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             token = req.headers.authorization.split(' ')[1].trim();
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = await User.findById(decoded.id).select('-password');
//             next();
//         } catch (error) {
//             console.error('Token verification failed:', error.message);
//             return res.status(401).json({
//                 message: error.name === 'TokenExpiredError' ? 'Token expired, please login again' : 'Not authorized, token failed',
//             });
//         }
//     }

//     if (!token) {
//         return res.status(401).json({ message: 'Not authorized, no token' });
//     }
// };

// module.exports = { protect };





// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Adjust if the path is different

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Extract token from Authorization header
            token = req.headers.authorization.split(' ')[1].trim();

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attach user to request object (excluding password)
            req.user = await User.findById(decoded.id).select('-password');
            next(); // Call next middleware/controller
        } catch (error) {
            console.error('Token verification failed:', error.message);
            return res.status(401).json({
                message: error.name === 'TokenExpiredError' ? 'Token expired, please login again' : 'Not authorized, token failed',
            });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };
