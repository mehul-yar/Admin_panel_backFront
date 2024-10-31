
// const Blog = require("../models/blog");

// exports.getBlog = async (req, res) => {
//     try {
//         const blog = await Blog.findOne();
//         res.status(200).json(blog);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch blog data" });
//     }
// };


// exports.updateBlog = async (req, res) => {

//     try {
//         const { title, intro, content, points } = req.body;
//         let image = req.file ? req.file.path : req.body.image;

//         const updatedBlog = await Blog.findOneAndUpdate(
//             {},
//             { title, intro, content, image, points },
//             { new: true, upsert: true }
//         );

//         res.status(200).json(updatedBlog);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to update blog data" });
//     }
// };











const Blog = require("../models/blog");

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne();
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch blog data" });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { title, intro, content, points } = req.body;
        let image = req.file ? req.file.path : req.body.image;

        // Ensure content preserves line breaks
        const formattedContent = content.replace(/\n/g, '<br />'); // Replace new lines with <br> for HTML rendering

        const updatedBlog = await Blog.findOneAndUpdate(
            {},
            { title, intro, content: formattedContent, image, points },
            { new: true, upsert: true }
        );

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: "Failed to update blog data" });
    }
};
