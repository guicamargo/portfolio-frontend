import React, { useState, useEffect } from "react";
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const AccordionPortfolio = () => {
  const { t } = useTranslation();

  const items = [
        {
      id: 1,
      title: t("sectionPortfolio.intro"),
      tags: [""],
      description: t("sectionPortfolio.introDescription"),
      link: "https://github.com/guicamargo",
    },
    {
      id: 2,
      title: t("sectionPortfolio.frontend"),
      tags: ["#React", "#JavaScript", "#CSS", "#HTML"],
      description: t("sectionPortfolio.frontendDescription"),
      link: "https://github.com/guicamargo/portfolio-frontend",
    },
    {
      id: 3,
      title: t("sectionPortfolio.backend"),
      tags: ["#CSharp", "#.NET", "#API", "#REST", "#SQL"],
      description: t("sectionPortfolio.backendDescription"),
      link: "https://github.com/seuusuario/backend-project",
    },
    {
      id: 4,
      title: t("sectionPortfolio.services"),
      tags: ["#Docker", "#AWS", "#CI/CD", "#Kubernetes", "#Linux"],
      description: t("sectionPortfolio.servicesDescription"),
      link: "https://github.com/seuusuario/devops-services",
    },
  ];

  // Primeiro aberto por padrão
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    setOpenIndex(0); // abre o primeiro por padrão
  }, []);

  return (
    <section className="accordion-section">
      <div className="container">
        {items.map((item, index) => (
          <div className="accordion-item" key={item.id}>
            <button
              className={`accordion-link ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex">
                <h3 style={{ fontFamily: '"Roboto Mono", monospace' }}>
                  {item.title}
                </h3>
                <ul>
                  {item.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
              <IoIosArrowDown className="icon" />
            </button>

            <div className={`answer ${openIndex === index ? "open" : ""}`}>
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
              {item.link && (
                <a
                  href={item.link}
                  className="github-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                  GitHub
                </a>
              )}
            </div>
            {index < items.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccordionPortfolio;
