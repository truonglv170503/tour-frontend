// src/services/api.js
import axios from 'axios';

// const API_URL = 'http://localhost:9999';

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

// export const tourService = {
//   getAllTours: () => axios.get(`${API_URL}/tours`),
//   getTour: (slug) => axios.get(`${API_URL}/tours/${slug}`),
//   getTopTours: () => axios.get(`${API_URL}/tours/top-5-cheap`)
// };

export const authService = {
  login: (email, password) => 
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, { email, password }),
  signup: (name, email, password, passwordConfirm) => 
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, { name, email, password, passwordConfirm }),
  logout: () => axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/logout`)
};

export const userService = {
  getMe: () => axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/me`),
  updateMe: (data) => 
    axios.patch(`${process.env.REACT_APP_BACKEND_URL}/user/updateMe`, data),
  updatePassword: (passwordCurrent, password, passwordConfirm) => 
    axios.patch(`${process.env.REACT_APP_BACKEND_URL}/user/updateMyPassword`, {
      passwordCurrent,
      password,
      passwordConfirm
    })
};

export const bookingService = {
  getCheckoutSession: (tourId) => 
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/bookings/checkout-session/${tourId}`),
  getMyBookings: () => axios.get(`${process.env.REACT_APP_BACKEND_URL}/bookings/my-tours`)
};