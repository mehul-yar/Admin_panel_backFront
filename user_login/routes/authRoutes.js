










// const express = require('express');
// const { register, login, logout, getAllUsers } = require('../controllers/authController');
// const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
// const { protect } = require('../middleware/authMiddleware');
// const blogController = require("../controllers/blogController");
// const { sendMessage, getMessages } = require('../controllers/emailController');
// // const { upload } = require("../middleware/blogMiddleware");
// const { upload } = require('../middleware/productMulter');

// const router = express.Router();

// // Auth routes
// router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);

// // Product routes
// // router.post('/product', createProduct);
// router.get('/products', getAllProducts);
// router.get('/product/:id', getProductById);
// // router.put('/product/:id', updateProduct);
// router.delete('/product/:id', deleteProduct);

// router.post('/product', upload.single('image'), createProduct);
// router.put('/product/:id', upload.single('image'), updateProduct);

// // User routes
// router.get('/users', protect, getAllUsers);

// // Blog routes
// router.get("/blog", blogController.getBlog);
// router.put("/blogs/main", upload.single("image"), blogController.updateBlog);

// // Message routes
// router.post('/sendMessage', sendMessage);
// router.get('/getMessages', getMessages);

// module.exports = router;
























// const express = require('express');
// const { register, login, logout, getAllUsers } = require('../controllers/authController');
// const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
// const { protect } = require('../middleware/authMiddleware');
// const blogController = require("../controllers/blogController");
// const { sendMessage, getMessages } = require('../controllers/emailController');
// const { upload } = require('../middleware/productMulter');


// const router = express.Router();

// // Auth routes
// router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);

// // Product routes
// router.get('/products', getAllProducts);
// router.get('/product/:id', getProductById);
// router.post('/product', upload.single('image'), createProduct);
// router.put('/product/:id', upload.single('image'), updateProduct);
// router.delete('/product/:id', deleteProduct);

// // User routes
// router.get('/users', protect, getAllUsers);

// // Blog routes
// router.get("/blog", blogController.getBlog);
// // Added POST route for creating a new blog
// router.put("/blogs/main", upload.single("image"), blogController.updateBlog); // Update an existing blog

// // Message routes
// router.post('/sendMessage', sendMessage);
// router.get('/getMessages', getMessages);

// module.exports = router;








const express = require('express');
const { register, login, logout, getAllUsers } = require('../controllers/authController');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
const { protect } = require('../middleware/authMiddleware');
const blogController = require("../controllers/blogController");
const { sendMessage, getMessages } = require('../controllers/emailController');
const { upload } = require('../middleware/productMulter');
const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/postController');



const router = express.Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Product routes
router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
router.post('/product', upload.single('image'), createProduct);
router.put('/product/:id', upload.single('image'), updateProduct);
router.delete('/product/:id', deleteProduct);

// User routes
router.get('/users', protect, getAllUsers);

// Blog routes
// router.get("/blog", blogController.getBlog);
// router.put("/blogs/main", upload.single("image"), blogController.updateBlog); 
router.get('/blog', blogController.getAllBlogs);
router.get('/blog/:id', blogController.getBlogById);
router.post('/blog', upload.single('image'), blogController.createBlog);
router.put('/blog/:id', upload.single('image'), blogController.updateBlog);
router.delete('/blog/:id', blogController.deleteBlog);

// Message routes
router.post('/sendMessage', sendMessage);
router.get('/getMessages', getMessages);

router.get('/posts', getAllPosts); // Get all posts
router.get('/posts/:id', getPostById); // Get single post by ID
router.post('/posts', upload.single('image'), createPost); // Create new post
router.put('/posts/:id', upload.single('image'), updatePost); // Update existing post
router.delete('/posts/:id', deletePost); // Delete post

module.exports = router;
