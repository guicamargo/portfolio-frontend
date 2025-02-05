import React from 'react';
import { useTranslation } from 'react-i18next';
import ConteinerSections from "../../conteinerSections";
import CardEducation from "../../cardEducation";
import './styles.css';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.education')} className="educationContainer">
      <div style={{ height: 'auto' }}>
        <CardEducation />
      </div>
    </ConteinerSections>
  );
};

export default Index;