// // controllers/reviewController.js
// const Review = require('../models/reviewModel');
// const Product = require('../models/product');
// const { validationResult } = require('express-validator');

// // Create a new review
// const createReview = async (req, res) => {
//     try {
//         // Check if the product exists
//         const product = await Product.findById(req.body.productId);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         // Create the review
//         const review = new Review({
//             product: req.body.productId,
//             user: req.user._id,  // Assuming user is available in req.user after authentication
//             name: req.user.name, // Or use req.body.name if you want the user to enter it manually
//             rating: req.body.rating,
//             description: req.body.description
//         });

//         await review.save();

//         res.status(201).json({ message: 'Review created successfully', review });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// // Get all reviews for a product
// const getReviewsForProduct = async (req, res) => {
//     try {
//         const reviews = await Review.find({ product: req.params.productId }).populate('user', 'name');
//         res.status(200).json(reviews);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// module.exports = {
//     createReview,
//     getReviewsForProduct
// };







// const Review = require('../models/reviewModel');
// const Product = require('../models/product');


// const createReview = async (req, res) => {
//     const { productId, rating, description } = req.body;

//     // Ensure req.user is populated and has a username
//     if (!req.user || !req.user.username) {
//         return res.status(400).json({ message: 'Username is required for review' });
//     }

//     // Check if product exists
//     const product = await Product.findById(productId);
//     if (!product) {
//         return res.status(404).json({ message: 'Product not found' });
//     }

//     // Check if rating is valid
//     if (rating < 1 || rating > 5) {
//         return res.status(400).json({ message: 'Rating must be between 1 and 5' });
//     }

//     try {
//         // Create the review
//         const review = new Review({
//             product: productId,
//             user: req.user._id,  // Assuming the user's ID is available via req.user (from JWT)
//             username: req.user.username,  // Ensure that the username is passed
//             rating,
//             description,
//         });

//         await review.save();

//         res.status(201).json({ message: 'Review created successfully', review });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };



// // Get all reviews for a product
// const getReviewsForProduct = async (req, res) => {
//     try {
//         const reviews = await Review.find({ product: req.params.productId }).populate('user', 'name');
//         res.status(200).json(reviews);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// module.exports = {
//     createReview,
//     getReviewsForProduct
// };







const Review = require('../models/reviewModel');
const Product = require('../models/product');



const createReview = async (req, res) => {
    const { productId, rating, description } = req.body;

    // Ensure req.user is populated and has a username
    if (!req.user || !req.user.username) {
        console.log("User not authenticated or missing username");
        return res.status(400).json({ message: 'You must be logged in to submit a review' });
    }

    try {
        // Check if product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if rating is valid
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5' });
        }

        // Create the review
        const review = new Review({
            product: productId,
            user: req.user._id,
            username: req.user.username,
            rating,
            description,
        });

        await review.save();

        console.log("Review created successfully:", review);
        res.status(201).json({ message: 'Review created successfully', review });
    } catch (error) {
        console.error("Error creating review:", error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


const getReviewsForProduct = async (req, res) => {
    try {
        const reviews = await Review.find({ product: req.params.productId }).populate('user', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createReview,
    getReviewsForProduct
};

