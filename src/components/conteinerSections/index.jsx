import React from 'react';

const ConteinerSections = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#111111',
        opacity: '0.6',
        marginTop: '10px',
        height: '40vh',
        width: '100%', 
      }}
    >
      {children}
    </div>
  );
};

export default ConteinerSections;
