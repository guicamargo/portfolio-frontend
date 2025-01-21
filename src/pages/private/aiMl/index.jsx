// src/pages/AiMl.jsx

import { useTranslation } from 'react-i18next';

const AiMl = () => {
  const { t } = useTranslation();

  return (
    <div className="ai-ml-container">
      <h1>{t('aiml.title')}</h1>
      <div className="ai-ml-content">
        <section>
          <h2>{t('aiml.section1.title')}</h2>
          <p>{t('aiml.section1.content')}</p>
        </section>
      </div>
    </div>
  );
};

export default AiMl;