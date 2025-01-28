import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './styles.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
const { t } = useTranslation();
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    if ('scrollBehavior' in document.documentElement.style) {
      // Usando a API nativa com comportamento suave
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Fallback para navegadores mais antigos
      let scrollInterval = setInterval(() => {
        const currentScroll = window.scrollY;
        if (currentScroll === 0) {
          clearInterval(scrollInterval);
        } else {
          window.scrollTo(0, currentScroll - 50); // Scroll manual
        }
      }, 16); // ~60fps
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="button-ReturnTop"
          title={t('returnTop')}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
