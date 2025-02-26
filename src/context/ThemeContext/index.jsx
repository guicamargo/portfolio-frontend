import React, { createContext, useContext, useState, useEffect } from 'react';

// Criando um contexto para o estado do tema
const ThemeContext = createContext();

// Componente ThemeProvider para gerenciar o estado do tema
export const ThemeProvider = ({ children }) => {
  // Inicializa o estado com o valor salvo no localStorage ou padrão (false)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // Aplica o tema e salva no localStorage quando o estado mudar
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Função para alternar o tema
  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acessar o contexto do tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};
