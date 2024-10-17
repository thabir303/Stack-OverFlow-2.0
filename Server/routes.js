const express = require('express');
const userRoutes = require('./api/user');
const authRoutes = require('./api/auth');
const postRoutes = require('./api/post');
const notificationRoutes = require('./api/notification');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/notifications', notificationRoutes);

module.exports = router;
