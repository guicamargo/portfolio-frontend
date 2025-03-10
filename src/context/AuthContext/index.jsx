// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { googleLogout } from '@react-oauth/google';

// Criar o contexto
const AuthContext = createContext(null);

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verificar se há um usuário no localStorage ao iniciar
  useEffect(() => {
    const checkLoggedInUser = () => {
      const savedUser = localStorage.getItem('googleUser');
      
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      }
      
      setLoading(false);
    };
    
    checkLoggedInUser();
  }, []);

  // Função para login
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('googleUser', JSON.stringify(userData));
  };

  // Função para logout
  const logout = () => {
    googleLogout();
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('googleUser');
  };

  // Valores a serem disponibilizados pelo contexto
  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};