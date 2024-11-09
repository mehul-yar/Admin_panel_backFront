// // // models/reviewModel.js
// // const mongoose = require('mongoose');

// // const reviewSchema = new mongoose.Schema({
// //     product: {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: 'Product',
// //         required: true
// //     },
// //     user: {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: 'User',
// //         required: true
// //     },
// //     name: {
// //         type: String,
// //         required: true
// //     },
// //     rating: {
// //         type: Number,
// //         required: true,
// //         min: 1,
// //         max: 5
// //     },
// //     description: {
// //         type: String,
// //         required: true
// //     }
// // }, {
// //     timestamps: true
// // });

// // const Review = mongoose.model('Review', reviewSchema);

// // module.exports = Review;





// const mongoose = require('mongoose');
// const reviewSchema = new mongoose.Schema({
//     product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product',
//         required: true,
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,  // This makes the name field required
//     },
//     rating: {
//         type: Number,
//         required: true,
//         min: 1,
//         max: 5,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
// }, {
//     timestamps: true,
// });

// const Review = mongoose.model('Review', reviewSchema);





// reviewModel.js
const mongoose = require('mongoose');

// Define the schema for the Review
const reviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',  // Ensure the Product model is referenced correctly
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Ensure the User model is referenced correctly
        required: true,
    },
    username: {
        type: String,
        required: true, // Ensure that name is required for the review
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,  // Rating should be between 1 and 5
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,  // Automatically add timestamps for createdAt and updatedAt
});

// Create the model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
