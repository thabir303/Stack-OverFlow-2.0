import React, { useEffect, useState } from 'react';
import NotificationList from '../components/NotificationList';
import { getNotifications } from '../services/api';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications();
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
}

export default NotificationsPage;
