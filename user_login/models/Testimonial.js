// models/Testimonial.js
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,  // URL for the image path
    },
    content: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
