const Notification = require('../models/notification');

// Deletes notifications older than 30 days
const cleanOldNotifications = async () => {
    try {
        const thresholdDate = new Date();
        thresholdDate.setDate(thresholdDate.getDate() - 30);  // 30 days old

        const result = await Notification.deleteMany({ createdAt: { $lt: thresholdDate } });
        console.log(`${result.deletedCount} old notifications deleted.`);
    } catch (error) {
        console.error('Error deleting old notifications:', error);
    }
};

module.exports = { cleanOldNotifications };
