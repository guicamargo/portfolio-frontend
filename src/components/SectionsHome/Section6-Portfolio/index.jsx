import React from 'react';
import { useTranslation } from 'react-i18next';
import ConteinerSections from "../../conteinerSections";
import './styles.css';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.portfolio')} className="portfolioContainer">
      <div>
        <p>texto</p>
        <a href="https://codepen.io/pascaloliv/pen/LVZaeE">modelo</a>
      </div>
    </ConteinerSections>
  );
};

export default Index;