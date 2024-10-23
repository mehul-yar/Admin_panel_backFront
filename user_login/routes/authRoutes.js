// const express = require('express');
// const {
//     register,
//     login,
//     logout,
//     getAllUsers,

//     getAllProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct,
// } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);

// router.post('/create', createProduct);
// router.post('/product', getAllProducts);
// router.post('/id', getProductById);
// router.post('/update', updateProduct);
// router.post('/create', deleteProduct);


// router.get('/users', protect, getAllUsers);

// module.exports = router;





const express = require('express');
const { register, login, logout, getAllUsers } = require('../controllers/authController');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/authProduct');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();


// router.post('/register', register);
// router.post('/login', login);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);


router.post('/product', createProduct);
router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);


router.get('/users', protect, getAllUsers);

module.exports = router;
