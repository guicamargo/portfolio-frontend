import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

// Component for navigation buttons with conditional scrolling and authentication check
const NavigationButtons = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = true; // Temporary - replace with your auth logic

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to determine if it's mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 940);
    };

    // Initial check
    checkScreenSize();

    // Add resize event listener
    window.addEventListener('resize', checkScreenSize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Navigation configuration with labels and authentication requirements
  const navigationConfig = [
    { page: '/', sectionId: 'section1', label: t('nav.about') },
    { page: '/', sectionId: 'section3', label: t('nav.experience') },
    { page: '/', sectionId: 'section4', label: t('nav.education') },
    { page: '/', sectionId: 'section5', label: t('nav.courses') },
    { page: '/', sectionId: 'section6', label: t('nav.portfolio') },
    {
      page: '/',
      sectionId: 'section7',
      label: t('nav.aiml'),
      requiresAuth: true,
    },
    { page: '/', sectionId: 'section8', label: 'contact' },
  ];

  // Handle scrolling or navigation based on authentication and current location
  const handleScrollOrNavigate = (page, sectionId, requiresAuth) => {
    if (requiresAuth && !isAuthenticated) {
      navigate('/login');
      return;
    }

    if (location.pathname === page) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(page, {
        state: { scrollTo: sectionId },
        replace: true,
      });
    }
  };

  // Render navigation buttons with dynamic styling based on authentication and location
  return (
    <div className={`nav-buttons ${isMobile ? 'mobile' : 'desktop'}`}>
      {navigationConfig.map((nav, index) => (
        <button
          key={index}
          onClick={() =>
            handleScrollOrNavigate(nav.page, nav.sectionId, nav.requiresAuth)
          }
          className={`btn-2 btn
            ${location.pathname === nav.page ? 'active' : ''} 
            ${nav.requiresAuth && !isAuthenticated ? 'locked' : ''}`}
        >
          {t(nav.label)}
          {nav.requiresAuth && !isAuthenticated && (
            <span className="lock-icon">🔒</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default NavigationButtons;