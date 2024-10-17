const Notification = require('../models/notification');

exports.createNotification = async (req, res) => {
    try {
        const { postId, message } = req.body;

        const notification = new Notification({ postId, message });
        await notification.save();

        res.status(201).send({ message: 'Notification created.', data: notification });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 });
        res.status(200).send({ data: notifications });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};
