// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:9999';

// Interceptor để xử lý 401 errors (unauthorized)
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const tourService = {
  getAllTours: () => axios.get(`${API_URL}/tours`),
  getTour: (slug) => axios.get(`${API_URL}/tours/${slug}`),
  getTopTours: () => axios.get(`${API_URL}/tours/top-5-cheap`)
};

export const authService = {
  login: (email, password) => 
    axios.post(`${API_URL}/users/login`, { email, password }),
  signup: (name, email, password, passwordConfirm) => 
    axios.post(`${API_URL}/users/signup`, { name, email, password, passwordConfirm }),
  logout: () => axios.get(`${API_URL}/users/logout`)
};

export const userService = {
  getMe: () => axios.get(`${API_URL}/users/me`),
  updateMe: (data) => 
    axios.patch(`${API_URL}/users/updateMe`, data),
  updatePassword: (passwordCurrent, password, passwordConfirm) => 
    axios.patch(`${API_URL}/users/updateMyPassword`, {
      passwordCurrent,
      password,
      passwordConfirm
    })
};

export const bookingService = {
  getCheckoutSession: (tourId) => 
    axios.get(`${API_URL}/bookings/checkout-session/${tourId}`),
  getMyBookings: () => axios.get(`${API_URL}/bookings/my-tours`)
};