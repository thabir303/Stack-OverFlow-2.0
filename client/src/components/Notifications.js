import React, { useState, useEffect } from 'react';
import '../styles/Notifications.css';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/notifications');
            const data = await response.json();
            if (response.ok) {
                setNotifications(data.data);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to fetch notifications.');
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/notifications/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isRead: true })
            });
            const data = await response.json();
            if (response.ok) {
                setNotifications((prevNotifications) =>
                    prevNotifications.map((notification) =>
                        notification._id === id ? { ...notification, isRead: true } : notification
                    )
                );
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to mark notification as read.');
        }
    };

    return (
        <div className="notifications-page fade-in">
            <div className="notifications-container">
                <h2>Notifications</h2>
                {loading && <p className="loading">Loading...</p>}
                {error && <p className="error">{error}</p>}
                {notifications.length === 0 && !loading && !error && (
                    <p className="no-notifications">No notifications at the moment.</p>
                )}
                <ul className="notifications-list">
                    {notifications.map((notification) => (
                        <li key={notification._id} className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}>
                            <p className="notification-message">{notification.message}</p>
                            <button
                                className="btn btn-small"
                                onClick={() => markAsRead(notification._id)}
                                disabled={notification.isRead}
                            >
                                {notification.isRead ? 'Read' : 'Mark as Read'}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notifications;