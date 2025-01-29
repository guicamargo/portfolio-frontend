import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the theme state
const ThemeContext = createContext();

// ThemeProvider component to manage the theme state
export const ThemeProvider = ({ children }) => {
  // Initialize darkMode state with false
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode theme to the body based on darkMode state
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  // Function to toggle the theme state
  const toggleTheme = () => setDarkMode(!darkMode);

  // Provide the darkMode state and toggleTheme function to children components
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  // Throw an error if useTheme is not used within a ThemeProvider
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};