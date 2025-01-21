import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/i18n';  // Importe o i18n antes de qualquer coisa
import App from './App';
import './index.css';

// Aguarde o i18n inicializar
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});