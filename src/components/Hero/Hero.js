import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const cvHref = `${process.env.PUBLIC_URL}/Arthur-Padilha-CV.pdf`;

export default function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const rise = (delay) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="hero" aria-label="Intro">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.p className="hero-available" {...rise(0)}>
          <span className="hero-dot" /> {t.hero.available}
        </motion.p>

        <motion.h1 className="display hero-title" {...rise(0.08)}>
          {t.hero.titleParts.map((p, i) =>
            p.accent ? (
              <span key={i} className="hero-accent">{p.t}</span>
            ) : (
              <React.Fragment key={i}>{p.t}</React.Fragment>
            )
          )}
        </motion.h1>

        <motion.p className="lead hero-sub" {...rise(0.16)}>{t.hero.subtitle}</motion.p>

        <motion.div className="hero-cta" {...rise(0.24)}>
          <Link to="/projetos" className="btn btn--primary">{t.hero.ctaProjects}</Link>
          <a href={cvHref} download className="btn btn--ghost">{t.hero.ctaCv}</a>
          <div className="hero-social">
            <a href="https://github.com/P4d1lh4" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arthur-ppadilha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:arthur.ppadilha09@gmail.com" aria-label="E-mail"><FaEnvelope /></a>
          </div>
        </motion.div>

        <motion.dl className="hero-metrics" {...rise(0.32)}>
          {t.hero.metrics.map((m, i) => (
            <div className="hero-metric" key={i}>
              <dt className="hero-metric-value">{m.value}</dt>
              <dd className="hero-metric-label mono">{m.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
