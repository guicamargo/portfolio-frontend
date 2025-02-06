import React from 'react';
import { useTranslation } from 'react-i18next';
import ConteinerSections from "../../conteinerSections";
import CarouselPortfolio from "../../carouselPortfolio/index"
import './styles.css';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.portfolio')} className="portfolioContainer">


<CarouselPortfolio/>
     
    </ConteinerSections>
  );
};

export default Index;