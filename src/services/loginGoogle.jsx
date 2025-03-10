// src/components/LoginGoogle.jsx
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';

const LoginGoogle = () => {
  const { login } = useAuth();

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    login(decoded);
  };

  const handleError = () => {
    console.log('Login falhou');
  };

  return (
    <div className="login-container">
<GoogleLogin
  onSuccess={handleSuccess}
  onError={handleError}
  useOneTap={false}
  size="medium"          // Tamanho maior
  text='continue_with'
/>
    </div>
  );
};

export default LoginGoogle;