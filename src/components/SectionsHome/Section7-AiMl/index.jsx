import React from 'react';
import { useTranslation } from 'react-i18next';
import ConteinerSections from "../../conteinerSections";
import DevelopingArea from "../../DevelopingArea";
import './styles.css';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.aiml')} className="aiMlContainer">
      <div>
      <DevelopingArea/>
      </div>
    </ConteinerSections>
  );
};

export default Index;