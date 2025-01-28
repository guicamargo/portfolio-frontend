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
    "section-4": false,
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
              titulo1
            </summary>
            <div className="accordion-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit excepturi fugiat ipsum tenetur porro id obcaecati aliquid magni, est ipsa, perferendis modi earum nobis libero corporis voluptates? Aspernatur, assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et est cum omnis, neque molestiae voluptatum atque aut quaerat ipsam nihil! Molestias quis necessitatibus placeat inventore nam quisquam doloribus sit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo quas minus voluptate. Odit aut ipsa deleniti. Explicabo, vitae possimus quasi aperiam temporibus nam ab. Reprehenderit praesentium porro molestias ipsa?

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
              titulo2
            </summary>
            <div className="accordion-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit excepturi fugiat ipsum tenetur porro id obcaecati aliquid magni, est ipsa, perferendis modi earum nobis libero corporis voluptates? Aspernatur, assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et est cum omnis, neque molestiae voluptatum atque aut quaerat ipsam nihil! Molestias quis necessitatibus placeat inventore nam quisquam doloribus sit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo quas minus voluptate. Odit aut ipsa deleniti. Explicabo, vitae possimus quasi aperiam temporibus nam ab. Reprehenderit praesentium porro molestias ipsa?
              
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
              titulo3{" "}
            </summary>
            <div className="accordion-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit excepturi fugiat ipsum tenetur porro id obcaecati aliquid magni, est ipsa, perferendis modi earum nobis libero corporis voluptates? Aspernatur, assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et est cum omnis, neque molestiae voluptatum atque aut quaerat ipsam nihil! Molestias quis necessitatibus placeat inventore nam quisquam doloribus sit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo quas minus voluptate. Odit aut ipsa deleniti. Explicabo, vitae possimus quasi aperiam temporibus nam ab. Reprehenderit praesentium porro molestias ipsa?
              
            </div>
          </details>

          <details open={openSections["section-4"]}>
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
              titulo4{" "}
            </summary>
            <div className="accordion-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit excepturi fugiat ipsum tenetur porro id obcaecati aliquid magni, est ipsa, perferendis modi earum nobis libero corporis voluptates? Aspernatur, assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et est cum omnis, neque molestiae voluptatum atque aut quaerat ipsam nihil! Molestias quis necessitatibus placeat inventore nam quisquam doloribus sit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo quas minus voluptate. Odit aut ipsa deleniti. Explicabo, vitae possimus quasi aperiam temporibus nam ab. Reprehenderit praesentium porro molestias ipsa?
              
            </div>
          </details>
          <button
            className="close-all-button"
            onClick={closeAll}
            disabled={!isAnyOpen}
          >
            Close All <CornerRightUp size={18} />
          </button>
        </div>
      </div>
    </ConteinerSections>
  );
};

export default Index;
