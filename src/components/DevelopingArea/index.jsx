import React from 'react';
import { Settings } from 'lucide-react';
import './styles.css';
import { useTranslation } from 'react-i18next';
const DevelopingArea = () => {
    const { t } = useTranslation();
  return (
    <div className="area-desenvolvimento">
      <div className="conteudo">
        <Settings className="icone-engrenagem" />
        
        <h2 className="titulo">{t('Components.DevelopingArea.title')}</h2>

        <p className="mensagem">{t('Components.DevelopingArea.message')}</p>

        <div className="indicador-carregamento">
          <div className="ponto"></div>
          <div className="ponto ponto-delay-1"></div>
          <div className="ponto ponto-delay-2"></div>
        </div>
      </div>
    </div>
  );
};

export default DevelopingArea;