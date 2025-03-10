// src/components/LogoutGoogle.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const LogoutGoogle = () => {
  const { logout } = useAuth();

  return (
    <button 
      onClick={logout}
      className="logout-button"
    >
      Sair da conta Google
    </button>
  );
};

export default LogoutGoogle;