// src/components/NavigationButtons/index.jsx
import { useTranslation } from 'react-i18next';

const NavigationButtons = () => {
  const { t } = useTranslation();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="nav-buttons">
      <button onClick={() => handleScroll('section1')}>{t('sections.section1')}</button>
      <button onClick={() => handleScroll('section2')}>{t('sections.section2')}</button>
      <button onClick={() => handleScroll('section3')}>{t('sections.section3')}</button>
      <button onClick={() => handleScroll('section4')}>{t('sections.section4')}</button>
      <button onClick={() => handleScroll('section5')}>{t('sections.section5')}</button>
      <button onClick={() => handleScroll('section6')}>{t('sections.section6')}</button>
      <button onClick={() => handleScroll('section7')}>{t('sections.section7')}</button>
      <button onClick={() => handleScroll('section8')}>{t('sections.section8')}</button>
    </div>
  );
};

export default NavigationButtons;