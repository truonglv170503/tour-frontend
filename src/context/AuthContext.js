// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService, userService } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await authService.login(email, password);
      if (res.data.status === 'success') {
        setUser(res.data.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        return true;
      }
    } catch (err) {
      return Error(err.response?.data?.message || 'Could not log in');
    }
  };

  const signup = async (name, email, password, passwordConfirm) => {
    try {
      const res = await authService.signup(name, email, password, passwordConfirm);
      if (res.data.status === 'success') {
        setUser(res.data.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        return true;
      }
    } catch (err) {
      return Error(err.response?.data?.message || 'Could not sign up');
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      localStorage.removeItem('user');
      return true;
    } catch (err) {
      return Error('Could not log out');
    }
  };

  const updateMe = async (data) => {
    try {
      const res = await userService.updateMe(data);
      if (res.data.status === 'success') {
        setUser(res.data.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        return true;
      }
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Could not update profile');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        updateMe,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);