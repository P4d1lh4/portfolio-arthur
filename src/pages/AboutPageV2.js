import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaChartLine, FaRobot, FaSearch,
  FaUsers, FaComments, FaTasks, FaBrain, FaHandshake, FaLightbulb,
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './AboutPageV2.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.28, 0.11, 0.32, 1] },
};

const AboutPageV2 = () => {
  const { t } = useLanguage();

  const interestIcons = [FaChartLine, FaCode, FaRobot, FaSearch];
  const interests = t.about.interests.map((item, i) => ({ ...item, icon: interestIcons[i] }));

  const softIcons = [FaComments, FaTasks, FaLightbulb, FaUsers, FaHandshake, FaBrain];
  const softSkills = t.about.softSkills.map((title, i) => ({ title, icon: softIcons[i] }));

  return (
    <div className="about-page-v2">
      {/* HERO */}
      <section className="section section--hero section--dark">
        <div className="section-inner center">
          <motion.span className="eyebrow" {...fadeUp}>/about</motion.span>
          <motion.h1 className="headline headline--hero" {...fadeUp}>
            {t.about.title}
          </motion.h1>
          <motion.p className="subhead" {...fadeUp}>
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* BIO */}
      <section className="section section--grey">
        <div className="section-inner">
          <div className="about-bio glass">
          <motion.div className="bio-portrait" {...fadeUp}>
            <div className="bio-avatar"><span>AP</span></div>
          </motion.div>
          <motion.div className="bio-content" {...fadeUp}>
            <h2 className="headline bio-name">Arthur Padilha</h2>
            <p className="bio-role">{t.about.role}</p>
            <p className="bio-meta">Recife, PE · CESAR School</p>
            <div className="bio-text">
              {t.about.bioLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="section section--dark">
        <div className="section-inner section-inner--wide center">
          <motion.span className="eyebrow" {...fadeUp}>/interests</motion.span>
          <motion.h2 className="headline" {...fadeUp}>{t.about.interestsTitle}</motion.h2>

          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="interest-tile glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <div className="interest-icon"><interest.icon /></div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>
                <div className="interest-tags">
                  {interest.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="section section--grey">
        <div className="section-inner section-inner--wide center">
          <motion.span className="eyebrow" {...fadeUp}>/soft-skills</motion.span>
          <motion.h2 className="headline" {...fadeUp}>{t.about.softTitle}</motion.h2>

          <div className="softskills-grid">
            {softSkills.map(({ title, icon: Icon }, i) => (
              <motion.div
                key={title}
                className="softskill-tile"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="softskill-icon"><Icon /></div>
                <span>{title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageV2;
