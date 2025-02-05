import React from 'react';
import './styles.css';
import { useTranslation } from 'react-i18next';

// Função para tratar o texto, substituindo \n por <br /> e mantendo <strong> para negrito
const formatTextWithBreaksAndBold = (text) => {
  // Substitui as quebras de linha (\n) por <br />
  const formattedText = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {/* Substitui as tags <strong> no texto e aplica o negrito */}
      {line.split('<strong>').map((part, partIndex) => {
        if (partIndex === 0) {
          return part; // Texto normal
        }
        const [boldText, rest] = part.split('</strong>');
        return (
          <>
            <strong>{boldText}</strong>{rest}
          </>
        );
      })}
      <br />
    </React.Fragment>
  ));

  return formattedText;
};

const Cards = () => {
  const { t } = useTranslation();

  // Dados dos cards com as traduções
  const cardsData = [
    { title: t("sectionEducation.TitleEducation1"), text: t("sectionEducation.DescriptionEducation1") },
    { title: t("sectionEducation.TitleEducation2"), text: t("sectionEducation.DescriptionEducation2") },
    { title: t("sectionEducation.TitleEducation3"), text: t("sectionEducation.DescriptionEducation3") }
  ];

  return (
    <div className="cardsWrapper">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <h3 className="title">{card.title}</h3>
          <div className="textoDescription">
            {/* Chama a função para formatar o texto */}
            {formatTextWithBreaksAndBold(card.text)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
