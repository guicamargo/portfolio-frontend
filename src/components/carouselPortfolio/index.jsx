import React from "react";
import "./styles.css"; // Importe o arquivo CSS
import { useTranslation } from "react-i18next";

// Ícones (substitua pelos seus próprios ícones ou URLs)
import iconeInfo from "../../images/icon/information.png";
import iconeFront from "../../images/icon/web-design.png";
import iconeBack from "../../images/icon/backend-coding.png";
import iconeAI from "../../images/icon/machine-learning.png";
import iconeServices from "../../images/icon/docker.png";

const CarrouselPortfolio = () => {
  const { t } = useTranslation();

  // Dados do carrossel
  const datas = [
    {
      key: "intro", // Adicione uma chave para facilitar a referência
      title: t("sectionPortfolio.intro"),
      description: t("sectionPortfolio.introDescription"),
      link: "https://github.com/guicamargo/",
      icone: iconeInfo,
    },
    {
      key: "frontend", // Adicione uma chave para facilitar a referência
      title: t("sectionPortfolio.frontend"),
      description: t("sectionPortfolio.frontendDescription"),
      link: "https://github.com/guicamargo/portfolio-frontend",
      icone: iconeFront,
    },
    {
      key: "backend",
      title: t("sectionPortfolio.backend"),
      description: t("sectionPortfolio.backendDescription"),
      link: "https://github.com/guicamargo",
      icone: iconeBack,
    },
    {
      key: "aieml",
      title: t("sectionPortfolio.aieml"),
      description: t("sectionPortfolio.aiemlDescription"),
      link: "https://github.com/guicamargo",
      icone: iconeAI,
    },
    {
      key: "services",
      title: t("sectionPortfolio.services"),
      description: t("sectionPortfolio.servicesDescription"),
      link: "https://github.com/guicamargo",
      icone: iconeServices,
    },
  ];

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

  return (
    <div className="portfolioContainer">
      <div className="scene">
        <div className="left-zone">
          <ul className="list">
            {datas.map((item, index) => (
              <li className="item" key={index}>
                <input
                  type="radio"
                  id={`radio_${index}`}
                  name="basic_carousel"
                  value={item.title}
                  defaultChecked={index === 0} // Primeiro item selecionado por padrão
                />
                <label
                  htmlFor={`radio_${index}`}
                  className={`label label_${item.key}`} // Usa a key para corresponder ao CSS
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    className="picto"
                    src={item.icone}
                    alt={`${item.title} icon`}
                    style={{ width: "48px", height: "48px" }}
                  />

                   <span className="title">{item.title}</span>

                </label>

                <div className={`content content_${item.key}`}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    style={{ boxShadow: "0px 0px 0px" }}
                      title="Acessar o repositório"
                  >
                    <img
                      className="picto"
                      src={item.icone}
                      alt={`Ícone de ${item.title}`}
                    />
                    <h1 style={{ fontFamily: "Roboto mono", margin: "0" }}>
                      {item.title}
                    </h1>
                  </a>
                  <div className="infoText">
                  <p className="infoTextDescription" style={{ fontFamily: "IBM Plex Mono" }}>
                    {formatTextWithBreaksAndBold(item.description)}
                  </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="middle-border"></div>
        <div className="right-zone"></div>
      </div>
    </div>
  );
};

export default CarrouselPortfolio;
