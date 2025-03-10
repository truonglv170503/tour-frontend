// src/hooks/useAuth.js
import { useState } from 'react';
import axios from 'axios';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const res = await axios({
        method: 'POST',
        url: '/api/v1/users/login',
        data: { email, password }
      });

      if (res.data.status === 'success') {
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        return true;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Could not log in');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios({
        method: 'GET',
        url: '/api/v1/users/logout'
      });
      localStorage.removeItem('user');
      return true;
    } catch (err) {
      return false;
    }
  };

  return { login, logout, isLoading, error };
};

export default useAuth;