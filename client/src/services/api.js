import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getNotifications = async () => {
  try {
    const response = await axios.get(`${API_URL}/notifications`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return [];
  }
};

export const createNotification = async (notification) => {
  try {
    const response = await axios.post(`${API_URL}/notifications`, notification);
    return response.data;
  } catch (error) {
    console.error('Error creating notification:', error);
  }
};
