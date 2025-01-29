import React from "react";
import { useTranslation } from "react-i18next";
import ConteinerSections from "../../conteinerSections";
import "./styles.css";

const CourseCard = ({ title, link, onClick }) => {
  return (
    <div className="ag-courses_item">
      {title === "Email" ? (
        <button className="ag-courses-item_button" onClick={onClick}>
          <div className="ag-courses-item_bg"></div>
          <div className="ag-courses-item_title">{title}</div>
        </button>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>
          <div className="ag-courses-item_title">{title}</div>
        </a>
      )}
    </div>
  );
};

const Index = () => {
  const { t } = useTranslation();
  const email = "gcamargo303@gmail.com"; 

  const handleEmailClick = () => {
    // Abre o cliente de email do usuário
    window.location.href = `mailto:${email}`;

    // Copia o email para a área de transferência
    navigator.clipboard.writeText(email).then(() => {
      alert(t('sectionContact.notificationClipboard'));
    });
  };

  const courses = [
    { title: "Linkedin", link: "https://www.linkedin.com/in/guilherme-corr%C3%AAa-camargo-28265411a/" },
    { title: "Github", link: "https://github.com/guicamargo" },
    { title: "Email" }, // Removendo o link, pois o comportamento é diferente
  ];

  return (
    <ConteinerSections title={t("nav.contact")} className="contactContainer">
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              link={course.link}
              onClick={course.title === "Email" ? handleEmailClick : undefined}
            />
          ))}
        </div>
      </div>
    </ConteinerSections>
  );
};

export default Index;
