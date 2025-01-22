import React from 'react';
import './styles.css';

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