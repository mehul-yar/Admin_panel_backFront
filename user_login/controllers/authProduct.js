
// // // const Product = require("../models/product");
// // const Product = require("../models/product");


// // const getAllProducts = async (req, res) => {
// //     try {
// //         const products = await Product.find({});
// //         res.status(200).json({ success: true, data: products });
// //     } catch (error) {
// //         res.status(500).json({ success: false, message: error.message });
// //     }
// // };

// // const getProductById = async (req, res) => {
// //     try {
// //         const product = await Product.findById(req.params.id);
// //         if (!product) {
// //             return res.status(404).json({ success: false, message: "Product not found" });
// //         }
// //         res.status(200).json({ success: true, data: product });
// //     } catch (error) {
// //         res.status(500).json({ success: false, message: error.message });
// //     }
// // };

// // // const createProduct = async (req, res) => {
// // //     console.log(req.body);

// // //     try {
// // //         const product = await Product.create(req.body);
// // //         res.status(201).json({ success: true, data: product });
// // //     } catch (error) {
// // //         res.status(400).json({ success: false, message: error.message });
// // //     }
// // // };
// // const createProduct = async (req, res) => {
// //     try {
// //         const productData = { ...req.body };
// //         if (req.file) {
// //             productData.image = req.file.path;
// //         }
// //         const product = await Product.create(productData);
// //         res.status(201).json({ success: true, data: product });
// //     } catch (error) {
// //         res.status(400).json({ success: false, message: error.message });
// //     }
// // };


// // // const updateProduct = async (req, res) => {
// // //     try {
// // //         const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
// // //             new: true,
// // //             runValidators: true
// // //         });

// // //         if (!product) {
// // //             return res.status(404).json({ success: false, message: "Product not found" });
// // //         }

// // //         res.status(200).json({ success: true, data: product });
// // //     } catch (error) {
// // //         res.status(400).json({ success: false, message: error.message });
// // //     }
// // // };

// // const updateProduct = async (req, res) => {
// //     try {
// //         const updateData = { ...req.body };
// //         if (req.file) {
// //             updateData.image = req.file.path; // Update image path in the database
// //         }
// //         const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
// //             new: true,
// //             runValidators: true,
// //         });
// //         if (!product) {
// //             return res.status(404).json({ success: false, message: "Product not found" });
// //         }
// //         res.status(200).json({ success: true, data: product });
// //     } catch (error) {
// //         res.status(400).json({ success: false, message: error.message });
// //     }
// // };


// // const deleteProduct = async (req, res) => {
// //     try {
// //         const product = await Product.findByIdAndDelete(req.params.id);

// //         if (!product) {
// //             return res.status(404).json({ success: false, message: "Product not found" });
// //         }

// //         res.status(200).json({ success: true, message: "Product deleted successfully" });
// //     } catch (error) {
// //         res.status(500).json({ success: false, message: error.message });
// //     }
// // };

// // module.exports = {
// //     getAllProducts,
// //     getProductById,
// //     createProduct,
// //     updateProduct,
// //     deleteProduct,
// // };

// // //////////////////////////////////////////////



























// const Product = require("../models/product");


// const getAllProducts = async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json({ success: true, data: products });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).json({ success: false, message: "Product not found" });
//         }
//         res.status(200).json({ success: true, data: product });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// const createProduct = async (req, res) => {
//     try {
//         const productData = { ...req.body };
//         if (req.file) {
//             productData.image = req.file.path;
//         }
//         const product = await Product.create(productData);
//         res.status(201).json({ success: true, data: product });
//     } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//     }
// };

// const updateProduct = async (req, res) => {
//     try {
//         const updateData = { ...req.body };
//         if (req.file) {
//             updateData.image = req.file.path;
//         }
//         const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
//             new: true,
//             runValidators: true,
//         });
//         if (!product) {
//             return res.status(404).json({ success: false, message: "Product not found" });
//         }
//         res.status(200).json({ success: true, data: product });
//     } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//     }
// };


// const deleteProduct = async (req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id);

//         if (!product) {
//             return res.status(404).json({ success: false, message: "Product not found" });
//         }

//         res.status(200).json({ success: true, message: "Product deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// module.exports = {
//     getAllProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct,
// };



























const Product = require("../models/product");

// Fetch all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Fetch a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create a new product with multiple images
const createProduct = async (req, res) => {
    try {
        const productData = { ...req.body };
        if (req.files) {
            // Save paths of uploaded images
            productData.images = req.files.map(file => file.path);
        }
        const product = await Product.create(productData);
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update an existing product, including handling new image uploads
const updateProduct = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.files) {
            // Append new image paths to existing images
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ success: false, message: "Product not found" });
            }
            updateData.images = [...product.images, ...req.files.map(file => file.path)];
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
            runValidators: true,
        });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
