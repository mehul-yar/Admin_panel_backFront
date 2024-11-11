










// // const express = require('express');
// // const { register, login, logout, getAllUsers } = require('../controllers/authController');
// // const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
// // const { protect } = require('../middleware/authMiddleware');
// // const blogController = require("../controllers/blogController");
// // const { sendMessage, getMessages } = require('../controllers/emailController');
// // // const { upload } = require("../middleware/blogMiddleware");
// // const { upload } = require('../middleware/productMulter');

// // const router = express.Router();

// // // Auth routes
// // router.post('/register', register);
// // router.post('/login', login);
// // router.post('/logout', logout);

// // // Product routes
// // // router.post('/product', createProduct);
// // router.get('/products', getAllProducts);
// // router.get('/product/:id', getProductById);
// // // router.put('/product/:id', updateProduct);
// // router.delete('/product/:id', deleteProduct);

// // router.post('/product', upload.single('image'), createProduct);
// // router.put('/product/:id', upload.single('image'), updateProduct);

// // // User routes
// // router.get('/users', protect, getAllUsers);

// // // Blog routes
// // router.get("/blog", blogController.getBlog);
// // router.put("/blogs/main", upload.single("image"), blogController.updateBlog);

// // // Message routes
// // router.post('/sendMessage', sendMessage);
// // router.get('/getMessages', getMessages);

// // module.exports = router;
























// // const express = require('express');
// // const { register, login, logout, getAllUsers } = require('../controllers/authController');
// // const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
// // const { protect } = require('../middleware/authMiddleware');
// // const blogController = require("../controllers/blogController");
// // const { sendMessage, getMessages } = require('../controllers/emailController');
// // const { upload } = require('../middleware/productMulter');


// // const router = express.Router();

// // // Auth routes
// // router.post('/register', register);
// // router.post('/login', login);
// // router.post('/logout', logout);

// // // Product routes
// // router.get('/products', getAllProducts);
// // router.get('/product/:id', getProductById);
// // router.post('/product', upload.single('image'), createProduct);
// // router.put('/product/:id', upload.single('image'), updateProduct);
// // router.delete('/product/:id', deleteProduct);

// // // User routes
// // router.get('/users', protect, getAllUsers);

// // // Blog routes
// // router.get("/blog", blogController.getBlog);
// // // Added POST route for creating a new blog
// // router.put("/blogs/main", upload.single("image"), blogController.updateBlog); // Update an existing blog

// // // Message routes
// // router.post('/sendMessage', sendMessage);
// // router.get('/getMessages', getMessages);

// // module.exports = router;








// const express = require('express');
// const { register, login, logout, getAllUsers } = require('../controllers/authController');
// const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
// const { protect } = require('../middleware/authMiddleware');
// const blogController = require("../controllers/blogController");
// const { sendMessage, getMessages } = require('../controllers/emailController');
// const { upload } = require('../middleware/productMulter');
// const {
//     getAllPosts,
//     getPostById,
//     createPost,
//     updatePost,
//     deletePost
// } = require('../controllers/postController');




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
// // router.get("/blog", blogController.getBlog);
// // router.put("/blogs/main", upload.single("image"), blogController.updateBlog); 
// router.get('/blog', blogController.getAllBlogs);
// router.get('/blog/:id', blogController.getBlogById);
// router.post('/blog', upload.single('image'), blogController.createBlog);
// router.put('/blog/:id', upload.single('image'), blogController.updateBlog);
// router.delete('/blog/:id', blogController.deleteBlog);

// // Message routes
// router.post('/sendMessage', sendMessage);
// router.get('/getMessages', getMessages);

// router.get('/posts', getAllPosts); // Get all posts
// router.get('/posts/:id', getPostById); // Get single post by ID
// router.post('/posts', upload.single('image'), createPost); // Create new post
// router.put('/posts/:id', upload.single('image'), updatePost); // Update existing post
// router.delete('/posts/:id', deletePost); // Delete post



// module.exports = router;










// const express = require('express');
// const { register, login, logout, getAllUsers } = require('../controllers/authController');
// const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
// const { protect } = require('../middleware/authMiddleware'); // Ensure you're importing 'protect'
// const blogController = require("../controllers/blogController");
// const { sendMessage, getMessages } = require('../controllers/emailController');
// const { upload } = require('../middleware/productMulter');
// const {
//     getAllPosts,
//     getPostById,
//     createPost,
//     updatePost,
//     deletePost
// } = require('../controllers/postController');
// const cartController = require('../controllers/cartController');
// const testimonialController = require('../controllers/testimonialController');


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
// router.get('/users', protect, getAllUsers);  // Protected route

// // Blog routes
// router.get('/blog', blogController.getAllBlogs);
// router.get('/blog/:id', blogController.getBlogById);
// router.post('/blog', upload.single('image'), blogController.createBlog);
// router.put('/blog/:id', upload.single('image'), blogController.updateBlog);
// router.delete('/blog/:id', blogController.deleteBlog);

// // Message routes
// router.post('/sendMessage', sendMessage);
// router.get('/getMessages', getMessages);

// // Post routes
// router.get('/posts', getAllPosts);  // Get all posts
// router.get('/posts/:id', getPostById);  // Get single post by ID
// router.post('/posts', upload.single('image'), createPost);  // Create new post
// router.put('/posts/:id', upload.single('image'), updatePost);  // Update existing post
// router.delete('/posts/:id', deletePost);  // Delete post

// // Cart routes - Protect these routes with the 'protect' middleware
// router.post('/cart/add', protect, cartController.addToCart);
// router.get('/cart', protect, cartController.getCart);
// router.put('/cart/update', protect, cartController.updateCartItem);
// router.delete('/cart/remove', protect, cartController.removeFromCart);



// router.post('/testi', testimonialController.createTestimonial);
// router.get('/testi/:id', testimonialController.getTestimonialById);
// router.put('/testi/:id', testimonialController.updateTestimonial);
// router.delete('/testi/:id', testimonialController.deleteTestimonial);
// router.get('/testi', testimonialController.getAllTestimonials);

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
const cartController = require('../controllers/cartController');
const testimonialController = require('../controllers/testimonialController');
const reviewController = require('../controllers/reviewController');  // Import the review controller
const { getUserProfile, updateUserProfile } = require('../controllers/authProfile');



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


router.get('/blog', blogController.getAllBlogs);
router.get('/blog/:id', blogController.getBlogById);
router.post('/blog', upload.single('image'), blogController.createBlog);
router.put('/blog/:id', upload.single('image'), blogController.updateBlog);
router.delete('/blog/:id', blogController.deleteBlog);

// Message routes
router.post('/sendMessage', sendMessage);
router.get('/getMessages', getMessages);


router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', upload.single('image'), createPost);
router.put('/posts/:id', upload.single('image'), updatePost);
router.delete('/posts/:id', deletePost);

// Add to cart
router.post('/cart/add', protect, cartController.addToCart);
router.get('/cart', protect, cartController.getCart);
router.put('/cart/update', protect, cartController.updateCartItem);
router.delete('/cart/remove', protect, cartController.removeFromCart);



// Testimonial routes
router.post('/testi', upload.single('image'), testimonialController.createTestimonial);
router.get('/testi/:id', testimonialController.getTestimonialById);
router.put('/testi/:id', upload.single('image'), testimonialController.updateTestimonial);
router.delete('/testi/:id', testimonialController.deleteTestimonial);
router.get('/testi', testimonialController.getAllTestimonials);

// Review routes (added here)
router.post('/review', protect, reviewController.createReview);  // Only logged-in users can post reviews
router.get('/reviews/:productId', reviewController.getReviewsForProduct);  // Get reviews for a product

// user profile 
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);


module.exports = router;
