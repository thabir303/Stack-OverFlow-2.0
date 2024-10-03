const router = require('express').Router();
const Notification = require('../models/notification');

router.post('/', async (req, res) => {
    try {
        const { postId, message } = req.body;

        if (!postId || !message) {
            return res.status(400).send({ message: 'Post ID and message are required.' });
        }
        const notification = new Notification({
            postId,
            message
        });
        await notification.save();
        res.status(201).send({ message: 'Notification created successfully.', data: notification });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 });
        res.status(200).send({ data: notifications });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
        if (!notification) {
            return res.status(404).send({ message: 'Notification not found.' });
        }
        res.status(200).send({ message: 'Notification updated successfully.', data: notification });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;