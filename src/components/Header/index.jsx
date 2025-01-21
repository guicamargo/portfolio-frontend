// src/components/Header/index.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle';
import LanguageSelector from '../LanguageSelector';
import NavigationButtons from '../NavigationButtons';

const Header = ({ isPrivate }) => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <nav className="main-nav">
          {isPrivate ? (
            <>
            <Link to="/">{t('nav.home')}</Link>
            <NavigationButtons />
            <Link to="/ai-ml">{t('nav.aiml')}</Link>
          </>
          ) : (
            <>
              <Link to="/">{t('nav.home')}</Link>
              <NavigationButtons />
              <Link to="/ai-ml">{t('nav.aiml')}</Link>
            </>
          )}
        </nav>
        
        <div className="header-controls">
          <ThemeToggle />
          <LanguageSelector />
          
          {isPrivate && (
            <button className="logout-btn" onClick={() => {/* lógica de logout */}}>
              {t('nav.logout')}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;