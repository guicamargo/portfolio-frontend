// src/pages/public/Home.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { useAuth } from '../../../context/ThemeContext/index';

import SectionAbout from '../../../components/SectionsHome/Section1-About/index';
import SectionExperience from '../../../components/SectionsHome/Section2- WorkExperience/index';
import SectionEducation from '../../../components/SectionsHome/Section3-Education/index';
import SectionCourses from '../../../components/SectionsHome/Section4-Courses/index';
import SectionSkills from '../../../components/SectionsHome/Section5-Skills/index';
import SectionPortfolio from '../../../components/SectionsHome/Section6-Portfolio/index';
import SectionAiMl from '../../../components/SectionsHome/Section7-AiMl/index';
import SectionContact from '../../../components/SectionsHome/Section8-Contact/index';

import ScrollToTopButton from '../../../components/ScrollToTopButton/index';

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();
        // const { isAuthenticated } = useAuth(); // Adicione este hook
        const  isAuthenticated  = true; // Temporário - trocar pela sua lógica de auth

        useEffect(() => {
          if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }, [location]);

  return (
    <div className="home-container">
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <section id="section1" className="home-section">
          <SectionAbout />
        </section>
        <section id="section2" className="home-section">
          <SectionExperience />
        </section>
        <section id="section3" className="home-section">
          <SectionEducation />
        </section>
        <section id="section4" className="home-section">
          <SectionCourses />
        </section>
        <section id="section5" className="home-section">
          <SectionSkills />
        </section>
        <section id="section6" className="home-section">
          <SectionPortfolio />
        </section>
        <section id="section7" className="home-section">
          {isAuthenticated ? (
            <SectionAiMl />
          ) : (
            <div className="locked-section">
              <h2>{t('aiml.locked.title')}</h2>
              <p>{t('aiml.locked.message')}</p>
              {/* <Link to="/login" className="login-button">
                {t('aiml.locked.loginButton')}
              </Link> */}
            </div>
          )}
        </section>
        <section id="section8" className="home-section">
        </section>
      <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Home;
