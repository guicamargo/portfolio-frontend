import React from 'react';
import './styles.css';

const ConteinerSections = ({ 
  children, 
  isDarkMode, 
  title 
}) => {
  return (
    <div
      className={`conteinerSections ${isDarkMode ? 'dark' : ''}`}
    >
      <div className='titleContainer'>
        <h1 className='titleSections'>
          {title}
        </h1>
      </div>
      <div className='contentContainer'>
        {children}
      </div>
    </div>
  );
};

export default ConteinerSections;