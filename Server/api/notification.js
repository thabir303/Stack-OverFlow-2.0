const express = require('express');
const { createNotification, getNotifications } = require('../controllers/notificationController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createNotification);
router.get('/', authMiddleware, getNotifications);

module.exports = router;
