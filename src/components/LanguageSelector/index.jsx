import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

// Import the SVG files
import UsaFlag from '../../images/flag/flag-for-united-states-black.svg';
import BrFlag from '../../images/flag/flag-for-brazil-svgrepo-black.svg';

// This component allows the user to select a language
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(
    i18n.language === 'en' ? UsaFlag : BrFlag
  );

  const languages = [
    { code: 'en', name: 'English', flag: UsaFlag },
    { code: 'pt', name: 'Português', flag: BrFlag }
  ];

  const ref = useRef(null);

  // Fecha o dropdown se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = async (language) => {
    if (i18n.language !== language) {
      await i18n.changeLanguage(language);
      const selectedLanguage = languages.find(lang => lang.code === language);
      setCurrentFlag(selectedLanguage.flag);
    }
    setIsOpen(false);
  };

  return (
    <form className="language-selector" ref={ref}>
      <input
        className={`chosen-value ${isOpen ? 'open' : ''}`}
        type="text"
        value=""
        placeholder=""
        readOnly
        onClick={() => setIsOpen(prev => !prev)}
      />
      <img
        className='selected-flag'
        src={currentFlag}
        alt="Selected Flag"
        onClick={() => setIsOpen(prev => !prev)}
      />
      {isOpen && (
        <ul className="value-list open">
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
              <img className='imgFlag' src={lang.flag} alt={lang.name} />
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default LanguageSelector;
