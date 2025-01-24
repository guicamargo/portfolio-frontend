import React from 'react';
import './styles.css';

// formatação dos containers de cada seção
const ConteinerSections = ({ children, isDarkMode }) => {
  return (
    <div
      className={`conteinerSections ${isDarkMode ? 'dark' : ''}`}
    >
      {children}
    </div>
  );
};

export default ConteinerSections;