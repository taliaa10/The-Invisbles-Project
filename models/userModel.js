const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userRegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },

    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },

    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(el) {
                return el === this.password;
            },
        message: 'Passwords are not the same!'
        }
    },

    active: {
        type: Boolean,
        default: true,
        select: false 
    }
})

userRegistrationSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
  
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
  
    // Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
})

userRegistrationSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userRegistrationSchema);

module.exports = User; 