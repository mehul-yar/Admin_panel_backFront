const Wishlist = require('../models/Wishlist');
const Product = require('../models/product');

// Add to wishlist
// exports.addToWishlist = async (req, res) => {
//     const { productId } = req.body;
//     const userId = req.user.id;

//     try {
//         // Check if the product exists
//         const product = await Product.findById(productId);
//         if (!product) {
//             return res.status(404).json({ success: false, message: 'Product not found' });
//         }

//         let wishlist = await Wishlist.findOne({ user: userId });
//         // Create a new wishlist if it doesn't exist
//         if (!wishlist) {
//             wishlist = new Wishlist({ user: userId, items: [] });
//         }

//         // Check if the product is already in the wishlist
//         const existingItem = wishlist.items.find(item => item.product.toString() === productId);
//         if (existingItem) {
//             return res.status(400).json({ success: false, message: 'Product already in wishlist' });
//         }

//         // Add product to wishlist
//         wishlist.items.push({ product: productId });
//         await wishlist.save();

//         return res.status(200).json({ success: true, wishlist });
//     } catch (error) {
//         console.error('Error in addToWishlist:', error);
//         if (!res.headersSent) {
//             return res.status(500).json({ success: false, message: error.message });
//         }
//     }
// };

exports.addToWishlist = async (req, res) => {
    console.log('User in addToWishlist:', req.user); // Log user data
    const { productId } = req.body;
    const userId = req.user?.id;

    if (!userId) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        let wishlist = await Wishlist.findOne({ user: userId });
        if (!wishlist) {
            wishlist = new Wishlist({ user: userId, items: [] });
        }

        const existingItem = wishlist.items.find(item => item.product.toString() === productId);
        if (existingItem) {
            return res.status(400).json({ success: false, message: 'Product already in wishlist' });
        }

        wishlist.items.push({ product: productId });
        await wishlist.save();

        return res.status(200).json({ success: true, wishlist });
    } catch (error) {
        console.error('Error in addToWishlist:', error);
        return res.status(500).json({ success: false, message: error.message });
    }
};


// Get all wishlist items for a user
exports.getWishlist = async (req, res) => {
    const userId = req.user.id;

    try {
        const wishlist = await Wishlist.findOne({ user: userId }).populate('items.product');
        if (!wishlist) return res.status(404).json({ success: false, message: 'Wishlist not found' });

        return res.status(200).json({ success: true, wishlist });
    } catch (error) {
        console.error('Error in getWishlist:', error);
        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};

// Remove item from wishlist
exports.removeFromWishlist = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;

    try {
        const wishlist = await Wishlist.findOne({ user: userId });
        if (!wishlist) return res.status(404).json({ success: false, message: 'Wishlist not found' });

        wishlist.items = wishlist.items.filter(item => item.product.toString() !== productId);
        await wishlist.save();

        return res.status(200).json({ success: true, items: wishlist.items });
    } catch (error) {
        console.error('Error in removeFromWishlist:', error);
        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};
