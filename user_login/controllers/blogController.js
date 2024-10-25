// controllers/blogController.js

const Blog = require("../models/blog");

// Get blog data
exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne(); // Assuming only one main blog
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch blog data" });
    }
};



exports.updateBlog = async (req, res) => {

    try {
        const { title, intro, content, points } = req.body;
        let image = req.file ? req.file.path : req.body.image;

        const updatedBlog = await Blog.findOneAndUpdate(
            {},
            { title, intro, content, image, points },
            { new: true, upsert: true } // Create if not exists
        );

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: "Failed to update blog data" });
    }
};
