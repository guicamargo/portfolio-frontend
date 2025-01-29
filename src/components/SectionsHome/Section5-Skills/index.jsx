import React from 'react';
import { useTranslation } from 'react-i18next';
import ConteinerSections from "../../conteinerSections";
import './styles.css';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.languages')} className="languagesContainer">
      <div>
        <p>texto</p>
        <a href="https://codepen.io/studiojvla/pen/qVbQqW">modelo</a>
      </div>
    </ConteinerSections>
  );
};

export default Index;