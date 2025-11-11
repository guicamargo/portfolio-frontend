import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

import ConteinerSections from "../../conteinerSections";
import CarouselSkills from "../../carouselSkills";

import ImgPerfil from '../../../images/Perfil/IMG_Perfil.JPG';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.about')} className="aboutSection">
      <div className="aboutContainer">
        <div className="imageContainer">
          <img src={ImgPerfil} alt="Profile" className="profileImage" />
        </div>

        <div className="name">
          <div className="nameContainer">Guilherme</div>
          <div className="lastNameContainer">Correa Camargo</div>
        </div>

        <div className="infoContainer">
          <p
            className="infoText"
            dangerouslySetInnerHTML={{
              __html: `
                ${t('sectionAbout.info.1')}
                <br><br>
                ${t('sectionAbout.info.2')}
              `,
            }}
          />
        </div>
      </div>

      <div className="carouselContainer">
        <CarouselSkills />
      </div>
    </ConteinerSections>
  );
};

export default Index;
