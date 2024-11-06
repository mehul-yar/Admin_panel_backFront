const Post = require('../models/postModel');

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch post' });
    }
};

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, description, author } = req.body;
        const image = req.file ? req.file.path : null; // assuming `multer` is used for file upload
        const newPost = new Post({ title, description, author, image });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create post' });
    }
};

// Update an existing post
exports.updatePost = async (req, res) => {
    try {
        const { title, description, author } = req.body;
        const image = req.file ? req.file.path : null;

        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { title, description, author, ...(image && { image }) },
            { new: true }
        );
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update post' });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete post' });
    }
};
