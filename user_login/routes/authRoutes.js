// // const express = require('express');
// // const {
// //     register,
// //     login,
// //     logout,
// //     getAllUsers,

// //     getAllProducts,
// //     getProductById,
// //     createProduct,
// //     updateProduct,
// //     deleteProduct,
// // } = require('../controllers/authController');
// // const { protect } = require('../middleware/authMiddleware');

// // const router = express.Router();

// // router.post('/register', register);
// // router.post('/login', login);
// // router.post('/logout', logout);

// // router.post('/create', createProduct);
// // router.post('/product', getAllProducts);
// // router.post('/id', getProductById);
// // router.post('/update', updateProduct);
// // router.post('/create', deleteProduct);


// // router.get('/users', protect, getAllUsers);

// // module.exports = router;













const express = require('express');
const { register, login, logout, getAllUsers } = require('../controllers/authController');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
const { protect } = require('../middleware/authMiddleware');
const blogController = require("../controllers/blogController");
const { sendMessage, getMessages } = require('../controllers/emailController');

const multer = require("multer");

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);


router.post('/product', createProduct);
router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);


router.get('/users', protect, getAllUsers);

///// blog content /////////

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.get("/blog", blogController.getBlog);

router.put("/blogs/main", upload.single("image"), blogController.updateBlog);

///// blog content /////////

/////// Message routes ///////////


router.post('/sendMessage', sendMessage);
router.get('/getMessages', getMessages);
////////// Message routes///////

module.exports = router;




















// const express = require('express');
// const { register, login, logout, getAllUsers } = require('../controllers/authController');
// const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
// const { protect } = require('../middleware/authMiddleware');
// const blogController = require("../controllers/blogController");
// const multer = require("multer");

// const router = express.Router();

// // Auth routes
// router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);

// // Product routes
// router.post('/product', protect, createProduct);
// router.get('/products', getAllProducts);
// router.get('/product/:id', getProductById);
// router.put('/product/:id', protect, updateProduct);
// router.delete('/product/:id', protect, deleteProduct);

// // User route
// router.get('/users', protect, getAllUsers);

// ///// Blog content /////////

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, "uploads/"), // Adjust path as needed
//     filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // Route to get blog data
// router.get("/blog", blogController.getBlog);

// // Route to update blog data with image upload (protected)
// router.put("/blogs/main", protect, upload.single("image"), blogController.updateBlog);

// ///// Blog content /////////

// module.exports = router;
