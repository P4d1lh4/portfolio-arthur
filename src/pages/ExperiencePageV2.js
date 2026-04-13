import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaBriefcase,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';
import GlitchText, { MatrixRain } from '../components/GlitchText/GlitchText';
import FooterV2 from '../components/Footer/FooterV2';
import { useLanguage } from '../context/LanguageContext';
import './ExperiencePageV2.css';

const ExperiencePageV2 = () => {
  const { t } = useLanguage();

  const metadata = [
    { icon: FaBriefcase, type: 'current', skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git'] },
    { icon: FaBriefcase, type: 'past', skills: ['Node.js', 'React', 'Express', 'MongoDB', 'PostgreSQL', 'Docker'] },
    { icon: FaChalkboardTeacher, type: 'education', skills: ['Python', 'Portugol', 'Teaching', 'Mentoring'] },
    { icon: FaChalkboardTeacher, type: 'education', skills: ['Python', 'Algorithms', 'Logic', 'Communication'] },
    { icon: FaChalkboardTeacher, type: 'education', skills: ['Python', 'Robotics', 'Speaking', 'Teaching', 'Communication', 'Lego'] },
    { icon: FaChalkboardTeacher, type: 'education', skills: ['Organization', 'Leadership', 'Communication', 'Teamwork', 'Event Management'] },
    { icon: FaChalkboardTeacher, type: 'education', skills: ['Frameworks', 'Speaking', 'Communication', 'Presentation'] },
  ];

  const experiences = t.experience.items.map((item, i) => ({
    ...item,
    ...metadata[i],
  }));

  return (
    <div className="experience-page-v2">
      <MatrixRain />

      {/* Hero Section */}
      <section className="exp-hero">
        <div className="exp-hero-content">
          <Link to="/" className="back-link">
            <FaArrowLeft />
            <span>{t.backLink}</span>
          </Link>

          <motion.div
            className="hero-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">{t.experience.tag}</span>
            <h1 className="page-title">
              <GlitchText text={t.experience.title} glitchOnHover intensity="low" />
            </h1>
            <p className="page-subtitle">
              {t.experience.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="timeline-dot">
                <exp.icon />
              </div>

              <div className="timeline-card">
                <div className="card-header">
                  <div className="terminal-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="terminal-path">~/experience/{exp.company.toLowerCase().replace(/\s/g, '-')}</span>
                </div>

                <div className="card-content">
                  <div className="card-meta">
                    <span className="period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>

                  <h3 className="card-title">{exp.title}</h3>
                  <p className="card-company">{exp.company}</p>
                  <p className="card-description">{exp.description}</p>

                  <div className="responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="responsibility-item">
                        <FaCheckCircle className="check-icon" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-skills">
                    {exp.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="section-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.experience.closeTag}</span>
        </motion.div>
      </section>

      <FooterV2 />
    </div>
  );
};

export default ExperiencePageV2;
