import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

// Automatically add token to headers if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

// Global error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    alert(error.response?.data?.error || 'Something went wrong. Please try again.');
    return Promise.reject(error);
  }
);

export default API;
