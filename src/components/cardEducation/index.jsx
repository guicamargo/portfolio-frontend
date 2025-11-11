import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      title: t("sectionEducation.TitleEducation4"),
      text: t("sectionEducation.DescriptionEducation4"),
      statusColor: "#FFC107", // Em andamento
      progress: "50%",
    },
    {
    title: t("sectionEducation.TitleEducation3"),
    text: t("sectionEducation.DescriptionEducation3"),
      statusColor: "#4CAF50", // Verde (concluído)
      progress: "100%", // barra cheia
    },
    {
      title: t("sectionEducation.TitleEducation2"),
      text: t("sectionEducation.DescriptionEducation2"),
      statusColor: "#4CAF50", // Verde (concluído)
      progress: "100%", // barra cheia
    },
    {
      title: t("sectionEducation.TitleEducation1"),
      text: t("sectionEducation.DescriptionEducation1"),
      statusColor: "#4CAF50", // Verde (concluído)
      progress: "100%", // barra cheia
    },
  ];

  return (
    <div className="cardsScrollContainer">
      <ol className="cardsList" role="list">
        {cardsData.map((card, index) => (
          <li
            key={index}
            style={{
              "--barColor": card.statusColor,
              "--barProgress": card.progress,
            }}
          >
            <h3>{card.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.text }} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cards;
