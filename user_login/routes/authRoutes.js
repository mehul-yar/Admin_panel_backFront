// // // const express = require('express');
// // // const {
// // //     register,
// // //     login,
// // //     logout,
// // //     getAllUsers,

// // //     getAllProducts,
// // //     getProductById,
// // //     createProduct,
// // //     updateProduct,
// // //     deleteProduct,
// // // } = require('../controllers/authController');
// // // const { protect } = require('../middleware/authMiddleware');

// // // const router = express.Router();

// // // router.post('/register', register);
// // // router.post('/login', login);
// // // router.post('/logout', logout);

// // // router.post('/create', createProduct);
// // // router.post('/product', getAllProducts);
// // // router.post('/id', getProductById);
// // // router.post('/update', updateProduct);
// // // router.post('/create', deleteProduct);


// // // router.get('/users', protect, getAllUsers);

// // // module.exports = router;













// const express = require('express');
// const { register, login, logout, getAllUsers } = require('../controllers/authController');
// const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
// const { protect } = require('../middleware/authMiddleware');
// const blogController = require("../controllers/blogController");
// const { sendMessage, getMessages } = require('../controllers/emailController');

// const multer = require("multer");

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);


// router.post('/product', createProduct);
// router.get('/products', getAllProducts);
// router.get('/product/:id', getProductById);
// router.put('/product/:id', updateProduct);
// router.delete('/product/:id', deleteProduct);


// router.get('/users', protect, getAllUsers);

// ///// blog content /////////

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, "uploads/"),
//     filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// router.get("/blog", blogController.getBlog);

// router.put("/blogs/main", upload.single("image"), blogController.updateBlog);

// ///// blog content /////////

// /////// Message routes ///////////


// router.post('/sendMessage', sendMessage);
// router.get('/getMessages', getMessages);
// ////////// Message routes///////

// module.exports = router;



















const express = require('express');
const { register, login, logout, getAllUsers } = require('../controllers/authController');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
const { protect } = require('../middleware/authMiddleware');
const blogController = require("../controllers/blogController");
const { sendMessage, getMessages } = require('../controllers/emailController');
// const { upload } = require("../middleware/blogMiddleware");
const { upload } = require('../middleware/productMulter');

const router = express.Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Product routes
// router.post('/product', createProduct);
router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
// router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

router.post('/product', upload.single('image'), createProduct);
router.put('/product/:id', upload.single('image'), updateProduct);

// User routes
router.get('/users', protect, getAllUsers);

// Blog routes
router.get("/blog", blogController.getBlog);
router.put("/blogs/main", upload.single("image"), blogController.updateBlog);

// Message routes
router.post('/sendMessage', sendMessage);
router.get('/getMessages', getMessages);

module.exports = router;
