
const Testimonial = require('../models/Testimonial');

exports.createTestimonial = async (req, res) => {
    try {
        const { name, role, content } = req.body;
        let image = req.file ? req.file.path : '';

        const newTestimonial = new Testimonial({
            name,
            role,
            image,
            content,
        });

        await newTestimonial.save();
        res.status(201).json({ success: true, data: newTestimonial });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create testimonial", error: error.message });
    }
};

exports.updateTestimonial = async (req, res) => {
    try {
        const { name, role, content } = req.body;
        let image = req.file ? req.file.path : undefined;

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            req.params.id,
            { name, role, image, content },
            { new: true }
        );

        if (!updatedTestimonial) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }

        res.status(200).json({ success: true, data: updatedTestimonial });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update testimonial", error: error.message });
    }
};


exports.getTestimonialById = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }
        res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch testimonial", error: error.message });
    }
};

exports.deleteTestimonial = async (req, res) => {
    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
        if (!deletedTestimonial) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }
        res.status(200).json({ success: true, message: "Testimonial deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete testimonial", error: error.message });
    }
};

exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.status(200).json({ success: true, data: testimonials });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch testimonials", error: error.message });
    }
};
