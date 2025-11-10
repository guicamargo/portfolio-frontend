import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      title: t("sectionEducation.TitleEducation4"),
      text: t("sectionEducation.DescriptionEducation4"),
    },
    {
      title: t("sectionEducation.TitleEducation3"),
      text: t("sectionEducation.DescriptionEducation3"),
    },
    {
      title: t("sectionEducation.TitleEducation2"),
      text: t("sectionEducation.DescriptionEducation2"),
    },
    {
      title: t("sectionEducation.TitleEducation1"),
      text: t("sectionEducation.DescriptionEducation1"),
    },
  ];

  return (
    <div className="cardsScrollContainer">
      <ol
        className="cardsList"
        role="list"
        style={{ "--length": cardsData.length }}
      >
        {cardsData.map((card, index) => (
          <li key={index} style={{ "--i": index + 1 }}>
            <h3>{card.title}</h3>
            {/* Exibe o HTML vindo do i18n */}
            <p dangerouslySetInnerHTML={{ __html: card.text }} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cards;
