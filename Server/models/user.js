//models/user.js
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: '7d' });
};

module.exports = mongoose.model('User', userSchema);
