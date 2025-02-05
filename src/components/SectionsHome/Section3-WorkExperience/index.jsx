import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ConteinerSections from "../../conteinerSections";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { CornerRightUp } from "lucide-react";

import "./styles.css";

const Index = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState({
    "section-1": true,
    "section-2": false,
    "section-3": false,
  });

  const closeAll = () => {
    const allClosed = Object.keys(openSections).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setOpenSections(allClosed);
  };

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const isAnyOpen = Object.values(openSections).some(Boolean);

  return (
    <ConteinerSections
      title={t("nav.experience")}
      className="experienceContainer"
    >
      <div className="accordion-container">
        <div className="accordion-header">
        </div>
        <div className="accordion">
          <details open={openSections["section-1"]}>
            <summary
              onClick={(e) => {
                e.preventDefault();
                toggleSection("section-1");
              }}
            >
              <span className="icon-wrapper">
                {openSections["section-1"] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </span>
              {t("sectionExperience.Experience1")}
            </summary>
            <div className="accordion-text">
            {t("sectionExperience.description1.0")}
             
            </div>
          </details>

          <details open={openSections["section-2"]}>
            <summary
              onClick={(e) => {
                e.preventDefault();
                toggleSection("section-2");
              }}
            >
              <span className="icon-wrapper">
                {openSections["section-2"] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </span>
              {t("sectionExperience.Experience2")}
            </summary>
            <div className="accordion-text">
            {t("sectionExperience.description2.0")}
            </div>
          </details>

          <details open={openSections["section-3"]}>
            <summary
              onClick={(e) => {
                e.preventDefault();
                toggleSection("section-3");
              }}
            >
              <span className="icon-wrapper">
                {openSections["section-3"] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </span>
              {t("sectionExperience.Experience3")}
            </summary>
            <div className="accordion-text">
            {t("sectionExperience.description3.0")}
            </div>
          </details>

          {/* <details open={openSections["section-4"]}>
            <summary
              onClick={(e) => {
                e.preventDefault();
                toggleSection("section-4");
              }}
            >
              <span className="icon-wrapper">
                {openSections["section-4"] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </span>
              {t("sectionExperience.Experience4")}
            </summary>
            <div className="accordion-text">
            {t("sectionExperience.description4.0")}
            </div>
          </details> */}
          <button
            className="close-all-button"
            onClick={closeAll}
            disabled={!isAnyOpen}
          >
            {t("sectionExperience.AccordionCloseAll")} <CornerRightUp size={18} />
          </button>
        </div>
      </div>
    </ConteinerSections>
  );
};

export default Index;
