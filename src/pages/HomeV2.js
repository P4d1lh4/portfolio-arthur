import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedin, FaEnvelope,
  FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaDatabase, FaDocker,
} from 'react-icons/fa';
import {
  SiPowerbi, SiPython, SiReact, SiJavascript, SiFlask, SiMysql,
  SiTypescript, SiKubernetes,
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { useTypingEffect } from '../hooks/useTypingEffect';
import './HomeV2.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.28, 0.11, 0.32, 1] },
};

const Home = () => {
  const { t } = useLanguage();
  const { displayText } = useTypingEffect(t.home.roles, {
    typingSpeed: 70,
    deletingSpeed: 40,
    delayBetweenTexts: 2200,
  });

  const skills = [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Flask', icon: SiFlask, color: '#cccccc' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#E5E7EB' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'PowerBI', icon: SiPowerbi, color: '#F2C811' },
    { name: t.home.skillDbName, icon: FaDatabase, color: '#a1a1a6' },
  ];

  return (
    <div className="home-v2">
      {/* HERO */}
      <section className="section section--hero section--dark home-hero">
        <div className="section-inner center">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.home.badge}
          </motion.span>

          <motion.h1
            className="headline headline--hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            Arthur Padilha.
          </motion.h1>

          <motion.h2
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {t.home.greeting} <span className="hero-role">{displayText}<span className="role-cursor" /></span>
          </motion.h2>

          <motion.p
            className="subhead hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {t.home.descriptionParts[0]}
            <strong>{t.home.descriptionParts[1]}</strong>
            {t.home.descriptionParts[2]}
            <strong>{t.home.descriptionParts[3]}</strong>
            {t.home.descriptionParts[4]}
            <strong>{t.home.descriptionParts[5]}</strong>
            {t.home.descriptionParts[6]}
            <strong>{t.home.descriptionParts[7]}</strong>
            {t.home.descriptionParts[8]}
          </motion.p>

          <motion.div
            className="btn-row hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Link to="/projetos" className="btn btn--primary">
              {t.home.viewProjects}
            </Link>
            <Link to="/sobre" className="link-arrow">
              {t.home.navCards[0].title}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span>{t.home.scrollHint}</span>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="section section--grey">
        <div className="section-inner section-inner--wide center">
          <motion.span className="eyebrow" {...fadeUp}>/stack</motion.span>
          <motion.h2 className="headline" {...fadeUp}>{t.home.skillsTitle}</motion.h2>
          <motion.p className="subhead" {...fadeUp}>{t.home.skillsSubtitle}</motion.p>

          <motion.div className="skills-grid" {...fadeUp}>
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <span className="skill-icon" style={{ color: skill.color }}>
                  <skill.icon />
                </span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPLORE NAV */}
      <section className="section section--dark">
        <div className="section-inner section-inner--wide center">
          <motion.span className="eyebrow" {...fadeUp}>/explore</motion.span>
          <motion.h2 className="headline" {...fadeUp}>{t.home.exploreTitle}</motion.h2>

          <div className="explore-grid">
            {t.home.navCards.map((item, index) => (
              <motion.div
                key={item.path}
                className="explore-tile glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <Link to={item.path} className="explore-tile-link">
                  <h3 className="explore-tile-title">{item.title}</h3>
                  <p className="explore-tile-desc">{item.desc}</p>
                  <span className="link-arrow explore-tile-cta">
                    {t.home.exploreTitle}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL CTA */}
      <section className="section section--tight section--dark">
        <div className="section-inner center">
          <motion.div className="hero-social" {...fadeUp}>
            <a href="https://github.com/P4d1lh4" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/arthur-ppadilha" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:arthur.ppadilha09@gmail.com" className="social-icon" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
