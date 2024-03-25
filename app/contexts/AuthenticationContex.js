// Auth.js
'use client'
import React, { createContext, useState, useContext } from 'react';

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </Auth.Provider>
  );
};

export const useAuthContext = () => useContext(Auth);
