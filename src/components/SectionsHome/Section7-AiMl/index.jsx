import React from 'react';
import { useTranslation } from 'react-i18next';
import ConteinerSections from "../../conteinerSections";
import './styles.css';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.aiml')} className="aiMlContainer">
      <div>
        <p>texto</p>
      </div>
    </ConteinerSections>
  );
};

export default Index;