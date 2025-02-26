import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import ConteinerSections from "../../conteinerSections";
import { ChevronUp, ChevronDown, CornerRightUp } from "lucide-react";

import "./styles.css";

const Index = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState({
    "section-1": true,
    "section-2": false,
    "section-3": false,
  });

  const sections = [
    {
      id: "section-1",
      titleKey: "sectionExperience.Experience1",
      descriptionKey: "sectionExperience.description1.0"
    },
    {
      id: "section-2",
      titleKey: "sectionExperience.Experience2",
      descriptionKey: "sectionExperience.description2.0"
    },
    {
      id: "section-3",
      titleKey: "sectionExperience.Experience3",
      descriptionKey: "sectionExperience.description3.0"
    },
    {
      id: "section-4",
      titleKey: "sectionExperience.Experience4",
      descriptionKey: "sectionExperience.description4.0"
    },
    {
      id: "section-5",
      titleKey: "sectionExperience.Experience5",
      descriptionKey: "sectionExperience.description5.0"
    }
  ];

  const closeAll = () => {
    const allClosed = sections.reduce((acc, section) => {
      acc[section.id] = false;
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
        <div className="accordion">
          {sections.map((section) => (
            <details key={section.id} open={openSections[section.id]}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleSection(section.id);
                }}
              >
                <span className="icon-wrapper">
                  {openSections[section.id] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
                <Trans i18nKey={section.titleKey} />
              </summary>
              <div className="accordion-text">
                <Trans i18nKey={section.descriptionKey} />
              </div>
            </details>
          ))}

          <button
            className="close-all-button"
            onClick={closeAll}
            disabled={!isAnyOpen}
          >
            <Trans i18nKey="sectionExperience.AccordionCloseAll" /> <CornerRightUp size={18} />
          </button>
        </div>
      </div>
    </ConteinerSections>
  );
};

export default Index;
