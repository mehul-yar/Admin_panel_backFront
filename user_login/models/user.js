



// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');


// const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'Please provide a username'],
//         unique: [true, 'Username is already taken'],
//     },
//     email: {
//         type: String,
//         required: [true, 'Please provide an email address'],
//         unique: [true, 'Email is already registered'],
//         match: [
//             /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//             'Please provide a valid email address',
//         ],
//     },
//     password: {
//         type: String,
//         required: [true, 'Please provide a password'],
//         minlength: [6, 'Password must be at least 6 characters'],
//     },
// }, {
//     timestamps: true,
// });

// UserSchema.pre('save', async function (next) {

//     if (!this.isModified('password')) {
//         return next();
//     }

//     try {

//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

// UserSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('User', UserSchema);









const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username'],
        unique: [true, 'Username is already taken'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        unique: [true, 'Email is already registered'],
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address',
        ],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    displayName: {
        type: String,
    },
    address: {
        type: String,
    }
}, {
    timestamps: true,
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare passwords
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Check if the model already exists before defining it
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
