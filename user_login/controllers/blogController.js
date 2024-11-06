
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


//         const formattedContent = content.replace(/\n/g, '<br />');

//         const updatedBlog = await Blog.findOneAndUpdate(
//             {},
//             { title, intro, content: formattedContent, image, points },
//             { new: true, upsert: true }
//         );

//         res.status(200).json(updatedBlog);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to update blog data" });
//     }
// };















// const Blog = require("../models/blog");

// // Fetch a single blog (first entry)
// exports.getBlog = async (req, res) => {
//     try {
//         const blog = await Blog.findOne();
//         if (!blog) {
//             return res.status(404).json({ error: "Blog not found" });
//         }
//         res.status(200).json(blog);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch blog data" });
//     }
// };

// // Fetch a blog by ID
// exports.getBlogById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const blog = await Blog.findById(id);
//         if (!blog) {
//             return res.status(404).json({ error: "Blog not found" });
//         }
//         res.status(200).json(blog);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch blog data" });
//     }
// };

// // Create a new blog
// exports.createBlog = async (req, res) => {
//     try {
//         const { title, intro, content, points } = req.body;
//         const image = req.file ? req.file.path : null;
//         const formattedContent = content.replace(/\n/g, '<br />');

//         const newBlog = new Blog({ title, intro, content: formattedContent, image, points });
//         await newBlog.save();

//         res.status(201).json(newBlog);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to create blog" });
//     }
// };

// // Update a blog
// exports.updateBlog = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { title, intro, content, points } = req.body;
//         let image = req.file ? req.file.path : req.body.image;

//         const formattedContent = content.replace(/\n/g, '<br />');

//         const updatedBlog = await Blog.findByIdAndUpdate(
//             id,
//             { title, intro, content: formattedContent, image, points },
//             { new: true }
//         );

//         if (!updatedBlog) {
//             return res.status(404).json({ error: "Blog not found" });
//         }

//         res.status(200).json(updatedBlog);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to update blog" });
//     }
// };

// // Delete a blog
// exports.deleteBlog = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedBlog = await Blog.findByIdAndDelete(id);

//         if (!deletedBlog) {
//             return res.status(404).json({ error: "Blog not found" });
//         }

//         res.status(200).json({ message: "Blog deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: "Failed to delete blog" });
//     }
// };

















const Blog = require("../models/blog");

// Fetch all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch blogs" });
    }
};

// Fetch a single blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch blog data" });
    }
};

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
        const { title, intro, content, points } = req.body;
        const image = req.file ? req.file.path : null;
        const formattedContent = content.replace(/\n/g, '<br />');

        const newBlog = new Blog({ title, intro, content: formattedContent, image, points });
        await newBlog.save();

        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: "Failed to create blog" });
    }
};

// Update a blog by ID
exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, intro, content, points } = req.body;
        let image = req.file ? req.file.path : req.body.image;

        const formattedContent = content ? content.replace(/\n/g, '<br />') : undefined;

        const updatedFields = {};
        if (title) updatedFields.title = title;
        if (intro) updatedFields.intro = intro;
        if (content) updatedFields.content = formattedContent;
        if (image) updatedFields.image = image;
        if (points) updatedFields.points = points;

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            updatedFields,
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: "Failed to update blog" });
    }
};

// Delete a blog by ID
exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete blog" });
    }
};
