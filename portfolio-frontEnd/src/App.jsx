import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const changeLanguage = async (language) => {
    if (i18n.language !== language) {
      await i18n.changeLanguage(language);
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <header>
        <button onClick={toggleTheme}>
          {t('toggleTheme')}
        </button>
        <select 
          value={i18n.language} 
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </header>
      <main>
        <h1>{t('greeting')}</h1>
      </main>
    </div>
  );
};

export default App;