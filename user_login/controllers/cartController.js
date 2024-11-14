

const Cart = require('../models/Cart');
const Product = require('../models/product');


exports.addToCart = async (req, res) => {
    const { productId, quantity = 1 } = req.body;
    const userId = req.user.id;

    try {
        let cart = await Cart.findOne({ user: userId });


        if (!cart) {
            cart = new Cart({ user: userId, items: [] });

        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        const existingItem = cart.items.find(item => item.product.toString() === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        await cart.save();

        return res.status(200).json({ success: true, cart });

    } catch (error) {
        console.error('Error in addToCart:', error);

        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};

exports.getCart = async (req, res) => {
    const userId = req.user.id;

    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });

        return res.status(200).json({ success: true, cart });

    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};


exports.updateCartItem = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    try {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });

        const item = cart.items.find(item => item.product.toString() === productId);
        if (item) {

            item.quantity = quantity;
            await cart.save();

            return res.status(200).json({ success: true, items: cart.items });
        } else {
            return res.status(404).json({ success: false, message: 'Item not found in cart' });
        }
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};





exports.removeFromCart = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;

    try {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });

        cart.items = cart.items.filter(item => item.product.toString() !== productId);
        await cart.save();

        return res.status(200).json({ success: true, items: cart.items });
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};

