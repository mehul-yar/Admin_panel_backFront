const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String }, // URL for the post image
});

module.exports = mongoose.model('Post', postSchema);
