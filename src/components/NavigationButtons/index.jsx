// // src/components/NavigationButtons/index.jsx
// import { useTranslation } from 'react-i18next';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './styles.css';
// // import { useAuth } from '../../../context/AuthContext';

// const NavigationButtons = () => {
//     const { t } = useTranslation();
//     const navigate = useNavigate();
//     const location = useLocation();
//        // const { isAuthenticated } = useAuth(); // Adicione este hook
//   const isAuthenticated  = true; // Temporário - trocar pela sua lógica de auth
  
//     const navigationConfig = [
//       { page: '/', sectionId: 'section1', label: 'about' },
//       { page: '/', sectionId: 'section2', label: 'experience' },
//       { page: '/', sectionId: 'section3', label: 'education' },
//       { page: '/', sectionId: 'section4', label: 'courses' },
//       { page: '/', sectionId: 'section5', label: 'languages' },
//       { page: '/', sectionId: 'section6', label: 'portfolio' },
//       { 
//         page: '/', 
//         sectionId: 'section7', 
//         label: 'ml',
//         requiresAuth: true // Adicione esta propriedade
//       },
//       { page: '/', sectionId: 'section8', label: 'contact' }
//     ];
  
//     const handleScrollOrNavigate = (page, sectionId, requiresAuth) => {
//       if (requiresAuth && !isAuthenticated) {
//         navigate('/login');
//         return;
//       }
  
//       if (location.pathname === page) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       } else {
//         navigate(page, { 
//           state: { scrollTo: sectionId },
//           replace: true
//         });
//       }
//     };
  
//     return (
//         <div className="nav-buttons">
//         {navigationConfig.map((nav, index) => (
//           <button
//             key={index}
//             onClick={() => handleScrollOrNavigate(nav.page, nav.sectionId, nav.requiresAuth)}
//             className={`btn-2 btn
//                  ${location.pathname === nav.page ? 'active' : ''} 
//                   ${nav.requiresAuth && !isAuthenticated ? 'locked' : ''}`}
//           >
//             {t(nav.label)}
//             {nav.requiresAuth && !isAuthenticated && (
//               <span className="lock-icon">🔒</span>
//             )}
//           </button>
//         ))}
//       </div>
      
//     );
//   };
  
//   export default NavigationButtons;


// src/components/NavigationButtons/index.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

const NavigationButtons = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = true; // Temporário - trocar pela sua lógica de auth

  const [isMobile, setIsMobile] = useState(false);

  // Detecta largura da tela para definir se é mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    // Executa a verificação inicial
    checkScreenSize();

    // Adiciona o evento de resize
    window.addEventListener('resize', checkScreenSize);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const navigationConfig = [
    { page: '/', sectionId: 'section1', label: 'about' },
    { page: '/', sectionId: 'section2', label: 'experience' },
    { page: '/', sectionId: 'section3', label: 'education' },
    { page: '/', sectionId: 'section4', label: 'courses' },
    { page: '/', sectionId: 'section5', label: 'languages' },
    { page: '/', sectionId: 'section6', label: 'portfolio' },
    {
      page: '/',
      sectionId: 'section7',
      label: 'ml',
      requiresAuth: true,
    },
    { page: '/', sectionId: 'section8', label: 'contact' },
  ];

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
