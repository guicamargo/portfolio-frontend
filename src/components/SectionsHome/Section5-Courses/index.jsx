import React from 'react';
import { useTranslation } from 'react-i18next';
import ConteinerSections from "../../conteinerSections";
import GalleryCourses from "../../galleryCourses";
import './styles.css';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.courses')} className="coursesContainer">
      <div>
        {/* <p>texto</p>
        <a href="https://codepen.io/siiron/pen/QWwLoMy">modelo</a> */}
        <GalleryCourses />
      </div>
    </ConteinerSections>
  );
};

export default Index;