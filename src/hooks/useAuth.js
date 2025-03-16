import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { login, logout } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      return await login(email, password); // Gọi login từ AuthContext
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    await logout();
    setIsLoading(false);
  };

  return { login: handleLogin, logout: handleLogout, isLoading, error };
};

export default useAuth;
