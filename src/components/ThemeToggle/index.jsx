// src/components/ThemeToggle/index.jsx
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext/index';

const ThemeToggle = () => {
  const { t } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle-btn"
      title={t('toggleTheme')}
    >
      {darkMode ? '🌞' : '🌙'} {t('toggleTheme')}
    </button>
  );
};

export default ThemeToggle;