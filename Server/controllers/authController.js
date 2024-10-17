const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(401).send({ message: 'Invalid email or password.' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).send({ message: 'Invalid email or password.' });

        const token = user.generateAuthToken();
        res.status(200).send({ token, message: 'Login successful.' });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
};
