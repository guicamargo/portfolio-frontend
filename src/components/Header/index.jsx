import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle';
import LanguageSelector from '../LanguageSelector';
import NavigationButtons from '../NavigationButtons';
import './styles.css';

import MenuNavBar from '../MenuNavBar/index';
// Menu control 
// Controle do menu
const Header = () => {
  const { t } = useTranslation();
  const isAuthenticated = true;

  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Detect screen width to determine if it's mobile
  //  Detecta largura da tela para definir se é mobile

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 940);
    };

    // Perform initial check
    // Executa a verificação inicial
    checkScreenSize();

    // Add resize event listener
    // Adiciona o evento de resize
    window.addEventListener('resize', checkScreenSize);

    // Remove event listener when component unmounts
    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        {isMobile ? (
          <>
            <button
              className="menu-btn"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰
            </button>
            {isSidebarOpen && (
              <div className="sidebar">
                <button
                  className="close-btn"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  ✕
                </button>
                <nav className="sidebar-nav">
                  <NavigationButtons />
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="main-nav">
            <NavigationButtons />
          </nav>
        )}
      </div>

      <div className="header-controls">
        <ThemeToggle />
        <LanguageSelector />
            <MenuNavBar />


      </div>
    </header>
  );
};

export default Header;