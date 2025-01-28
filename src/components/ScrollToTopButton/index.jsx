import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './styles.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="button-ReturnTop"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={30} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;