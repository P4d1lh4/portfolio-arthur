import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCode,
  FaChartLine,
  FaRobot,
  FaLightbulb,
  FaUsers,
  FaComments,
  FaTasks,
  FaBrain,
  FaHandshake,
  FaSearch,
  FaGraduationCap,
  FaMapMarkerAlt
} from 'react-icons/fa';
import GlitchText, { ScrambleText, MatrixRain } from '../components/GlitchText/GlitchText';
import FooterV2 from '../components/Footer/FooterV2';
import { useLanguage } from '../context/LanguageContext';
import './AboutPageV2.css';

const AboutPageV2 = () => {
  const { t } = useLanguage();

  const interestIcons = [FaChartLine, FaCode, FaRobot, FaSearch];
  const interests = t.about.interests.map((item, i) => ({ ...item, icon: interestIcons[i] }));

  const softIcons = [FaUsers, FaTasks, FaLightbulb, FaHandshake, FaBrain, FaComments];
  const softColors = ['#00ff9f', '#00d4ff', '#ff00ff', '#ffff00', '#ff6b6b', '#9f7aea'];
  const softSkills = t.about.softSkills.map((title, i) => ({
    title,
    icon: softIcons[i],
    color: softColors[i],
  }));

  return (
    <div className="about-page-v2">
      <MatrixRain />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
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
            <span className="section-tag">{t.about.tag}</span>
            <h1 className="page-title">
              <GlitchText text={t.about.title} glitchOnHover intensity="low" />
            </h1>
            <p className="page-subtitle">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <motion.div
          className="bio-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bio-card">
            <div className="bio-header">
              <div className="terminal-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="terminal-title">arthur@portfolio:~$ whoami</span>
            </div>
            <div className="bio-content">
              <div className="bio-info">
                <div className="bio-avatar">
                  <div className="avatar-placeholder">AP</div>
                  <div className="avatar-ring"></div>
                </div>
                <div className="bio-details">
                  <h2 className="bio-name">Arthur Padilha</h2>
                  <p className="bio-role">{t.about.role}</p>
                  <div className="bio-meta">
                    <span><FaMapMarkerAlt /> Recife, PE</span>
                    <span><FaGraduationCap /> CESAR School</span>
                  </div>
                </div>
              </div>
              <div className="bio-text">
                {t.about.bioLines.map((line, idx) => (
                  <p key={idx}>
                    <span className="highlight">{'>'}</span> {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.about.interestsTag}</span>
          <h2 className="section-title">
            <ScrambleText text={t.about.interestsTitle} />
          </h2>
        </motion.div>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="interest-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="interest-icon">
                <interest.icon />
              </div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
              <div className="interest-tags">
                {interest.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
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
          <span className="section-tag">{t.about.interestsCloseTag}</span>
        </motion.div>
      </section>

      {/* Soft Skills Section */}
      <section className="softskills-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.about.softTag}</span>
          <h2 className="section-title">
            <ScrambleText text={t.about.softTitle} />
          </h2>
        </motion.div>

        <div className="softskills-grid">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="softskill-card"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: 'spring' }}
              whileHover={{ scale: 1.1 }}
              style={{ '--skill-color': skill.color }}
            >
              <div className="softskill-icon" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <span className="softskill-title">{skill.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="section-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.about.softCloseTag}</span>
        </motion.div>
      </section>

      <FooterV2 />
    </div>
  );
};

export default AboutPageV2;
