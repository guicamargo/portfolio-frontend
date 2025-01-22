import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (language) => {
    if (i18n.language !== language) {
      await i18n.changeLanguage(language);
    }
  };

  return (
    <select 
      value={i18n.language} 
      onChange={(e) => changeLanguage(e.target.value)}
      className="language-selector"
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  );
};

export default LanguageSelector;
