import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

import ConteinerSections from "../../conteinerSections";

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.about')}>
      <div className="aboutContainer">
      <div className="imageContainer">
      </div>
      <div className="infoContainer">
        About
        </div>

      </div>
    </ConteinerSections>
  );
};

export default Index;
