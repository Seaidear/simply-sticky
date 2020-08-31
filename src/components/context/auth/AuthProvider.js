import React from 'react';
import AuthContext from './authContext';
import { useAuth } from '../../../hooks/useAuth';

const AuthProvider = ({ children }) => {
  const [login, logout, register] = useAuth();

  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
