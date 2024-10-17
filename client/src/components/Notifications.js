//src/components/Notification.js
import React, { useState, useEffect } from 'react';
import { getNotifications, markNotificationAsRead } from '../api/api';
import '../styles/Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications();
        setNotifications(data);
      } catch {
        setError('Failed to fetch notifications.');
      }
    };
    fetchNotifications();
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      await markNotificationAsRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, isRead: true } : n))
      );
    } catch {
      setError('Failed to mark notification as read.');
    }
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {error && <p className="error">{error}</p>}
      <ul className="notifications-list">
        {notifications.map((notification) => (
          <li key={notification._id} className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}>
            <p>{notification.message}</p>
            <button onClick={() => handleMarkAsRead(notification._id)} disabled={notification.isRead}>
              {notification.isRead ? 'Read' : 'Mark as Read'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
