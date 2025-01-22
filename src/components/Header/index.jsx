// src/components/Header/index.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle';
import LanguageSelector from '../LanguageSelector';
import NavigationButtons from '../NavigationButtons';
import './styles.css';

// import { useAuth } from '../../../context/AuthContext';
const Header = () => {
  const { t } = useTranslation();
    // const { isAuthenticated } = useAuth(); // Adicione este hook
  const  isAuthenticated  = true; // Temporário - trocar pela sua lógica de auth
  return (
    <header 
  className="header" 
>
  <div className="header-content" style={{ display: 'flex', alignItems: 'center', }}>
    <nav className="main-nav">
      <NavigationButtons />
    </nav>
  </div>

  <div className="header-controls" style={{ display: 'flex', alignItems: 'center',  }}>
    <ThemeToggle />
    <LanguageSelector />
    {isAuthenticated && (
      <button 
        className="logout-btn" 
        onClick={() => { /* lógica de logout */ }} 
      >
        {t('nav.logout')}
      </button>
    )}
  </div>
</header>

  );
};

export default Header;