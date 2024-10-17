import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`, {
    headers: { 'x-auth-token': localStorage.getItem('token') },
  });
  return response.data.data;
};

export const createPost = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/posts`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error; // Rethrow the error to handle it in the frontend
    }
  };

export const getNotifications = async () => {
  const response = await axios.get(`${API_URL}/notifications`, {
    headers: { 'x-auth-token': localStorage.getItem('token') },
  });
  return response.data.data;
};

export const markNotificationAsRead = async (id) => {
  await axios.put(`${API_URL}/notifications/${id}`, { isRead: true }, {
    headers: { 'x-auth-token': localStorage.getItem('token') },
  });
};
