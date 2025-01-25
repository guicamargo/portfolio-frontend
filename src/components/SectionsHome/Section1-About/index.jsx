import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

import ConteinerSections from "../../conteinerSections";

import ImgPerfil from '../../../images/Perfil/IMG_Perfil.JPG';

const Index = () => {
  const { t } = useTranslation();
  return (
    <ConteinerSections title={t('nav.about')}>
      <div className="aboutContainer">
      <div className="imageContainer">
      <img src={ImgPerfil} alt="Profile" className="profileImage" />
      </div>
      <div className='name'>
      <div className='nameContainer'>
        Guilherme
      </div>
      <div className='lastNameContainer'>
        Correa Camargo
      </div>
      </div>
      <div className="infoContainer">
        <p className="infoText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Perferendis perspiciatis corporis doloremque, reiciendis tempore iste sapiente sed voluptates minima hic.
          Quasi aut illo iusto vitae nostrum. Vitae eveniet quidem quia.        
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        </div>

      </div>
    </ConteinerSections>
  );
};

export default Index;
