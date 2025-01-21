// src/pages/public/Home.jsx
import { useTranslation } from 'react-i18next';
import SectionAbout from '../../../components/SectionsHome/Section1-About/index';
import SectionExperience from '../../../components/SectionsHome/Section2- WorkExperience/index';
import SectionEducation from '../../../components/SectionsHome/Section3-Education/index';
import SectionCourses from '../../../components/SectionsHome/Section4-Courses/index';
import SectionSkills from '../../../components/SectionsHome/Section5-Skills/index';
import SectionPortfolio from '../../../components/SectionsHome/Section6-Portfolio/index';
import SectionAiMl from '../../../components/SectionsHome/Section7-AiMl/index';
import SectionContact from '../../../components/SectionsHome/Section8-Contact/index';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <section id="section1" className="home-section">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'px' }}>
        <SectionAbout />
        <SectionExperience />
        <SectionEducation />
        <SectionCourses />
        <SectionSkills />
        <SectionPortfolio />
        <SectionAiMl />
        <SectionContact />
        </div>


      </section>

</div>
  );
};

export default Home;