import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const Index = () => {
  const { t } = useTranslation();
  const slides = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg' },
    // { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    // { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg' },
    // { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg' },
    // { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
    // { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg' },
    // { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' }
  ];

  // Quadruplicando os slides para uma transição mais suave
  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides];

  return (
      <div className="slider-container">
        <div className="slider">
          <div className="slider-overlay-left" />
          <div className="slider-overlay-right" />
          
          <div className="slide-track">
            {duplicatedSlides.map((slide, index) => (
              <div key={`${slide.name}-${index}`} className="slide">
                <img 
                  src={slide.icon}
                  alt={slide.name}
                  className="slide-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Index;