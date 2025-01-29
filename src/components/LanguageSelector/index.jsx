import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

// Import the SVG files
import UsaFlag from '../../images/flag/flag-for-united-states-black.svg';
import BrFlag from '../../images/flag/flag-for-brazil-svgrepo-black.svg';

// This component allows the user to select a language
const LanguageSelector = () => {
  // Access the i18n translation object
  const { i18n } = useTranslation();

  // State variables to control the dropdown and current flag
  const [isOpen, setIsOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(
    i18n.language === 'en' ? UsaFlag : BrFlag
  );

  // Array of supported languages with their codes, names, and flags
  const languages = [
    { code: 'en', name: 'English', flag: UsaFlag },
    { code: 'pt', name: 'Português', flag: BrFlag }
  ];

  // Function to change the language
  const changeLanguage = async (language) => {
    // Check if the selected language is different from the current language
    if (i18n.language !== language) {
      // Change the language using i18n
      await i18n.changeLanguage(language);
      // Find the selected language object and update the current flag
      const selectedLanguage = languages.find(lang => lang.code === language);
      setCurrentFlag(selectedLanguage.flag);
      // Close the dropdown
      setIsOpen(false);
    }
  };

  // Render the language selector form
  return (
    <form className="language-selector">
      {/* Input field to display the selected language */}
      <input
        className={`chosen-value ${isOpen ? 'open' : ''}`}
        type="text"
        value=""
        placeholder=""
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      {/* Display the current selected flag */}
      <img
        className='selected-flag'
        src={currentFlag}
        alt="Selected Flag"
        onClick={() => setIsOpen(!isOpen)}
      />
      {/* Dropdown list of languages */}
      {isOpen && (
        <ul className="value-list open">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                // Change the language on click
                changeLanguage(lang.code);
              }}
            >
              {/* Display the flag for each language */}
              <img className='imgFlag' src={lang.flag} alt={lang.name} />
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default LanguageSelector;