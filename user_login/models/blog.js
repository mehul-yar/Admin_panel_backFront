// models/Blog.js

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    intro: { type: String },
    content: { type: String },
    image: { type: String }, // Storing image path or URL
    points: { type: [String], default: [] },
});

module.exports = mongoose.model("Blog", blogSchema);
