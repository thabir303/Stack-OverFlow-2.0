//controllers/userController.js
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(409).send({ message: 'User already exists.' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ email, password: hashedPassword });
        await user.save();

        res.status(201).send({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
};
