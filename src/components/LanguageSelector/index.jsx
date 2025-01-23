import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

// Importe os arquivos SVG
import UsaFlag from '../../images/flag/flag-for-united-states-black.svg';
import BrFlag from '../../images/flag/flag-for-brazil-svgrepo-black.svg';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(
    i18n.language === 'en' ? UsaFlag : BrFlag
  );

  const languages = [
    { code: 'en', name: 'English', flag:UsaFlag },
    { code: 'pt', name: 'Português', flag:  BrFlag }
  ];

  const changeLanguage = async (language) => {
    if (i18n.language !== language) {
      await i18n.changeLanguage(language);
      const selectedLanguage = languages.find(lang => lang.code === language);
      setCurrentFlag(selectedLanguage.flag);
      setIsOpen(false);
    }
  };
  return (
    <form className="language-selector">
      <input
        className={`chosen-value ${isOpen ? 'open' : ''}`}
        type="text"
        value=""
        placeholder=""
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      <img
        className='selected-flag'
        src={currentFlag}
        alt="Selected Flag"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ul className="value-list open">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
              }}
            >
              <img className='imgFlag' src={lang.flag} alt={lang.name} />
            </li>
          ))}
        </ul>
      )}
    </form>
  );
  
};

export default LanguageSelector;