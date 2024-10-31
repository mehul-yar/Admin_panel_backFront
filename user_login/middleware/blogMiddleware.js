// // middleware.js
// const multer = require("multer");
// const path = require("path");

// // Set up storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");  // Folder where images will be stored
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + path.extname(file.originalname));  // Create unique filename
//     }
// });

// // Filter to allow only image files
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith("image/")) {
//         cb(null, true);
//     } else {
//         cb(new Error("Only image files are allowed!"), false);
//     }
// };

// // Configure multer middleware
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 5 * 1024 * 1024 }, // Set file size limit (5 MB)
//     fileFilter: fileFilter
// });

// module.exports = upload;





// middleware.js
const multer = require("multer");
const path = require("path");

// Set up storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Specify the uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Create a unique filename
    }
});

// Initialize multer with the defined storage
const upload = multer({ storage });

module.exports = {
    upload
};
