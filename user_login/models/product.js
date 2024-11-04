// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: [true, "price must be provided"]
//     },
//     featured: {
//         type: Boolean,
//         default: false,
//     },
//     rating: {
//         type: Number,
//         default: 4.9,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now(),
//     },
//     company: {
//         type: String,
//         enum: {
//             values: ["apple", "samsung", "dell", "mi", "MicroSoft"],
//             message: `{VALUE} is not supported`,
//         },
//     },
// });



// module.exports = mongoose.model('Product', productSchema);






const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    size: {
        type: String,
        enum: {
            values: ["small", "medium", "large"],
            message: `{VALUE} is not supported size`,
        },
        required: true,
    },
    productDetails: {
        type: String,
        default: "No details available",
    },
    image: { type: String, default: null },
});

module.exports = mongoose.model('Product', productSchema);
