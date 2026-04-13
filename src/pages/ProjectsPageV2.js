import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './ProjectsPageV2.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.28, 0.11, 0.32, 1] },
};

const metadata = [
  {
    technologies: ['React', 'TypeScript', 'Tailwind', 'Recharts', 'Node.js', 'OpenAI API'],
    codeUrl: 'https://github.com/P4d1lh4/Projeto-para-entregadores',
    featured: true,
  },
  {
    technologies: ['Python', 'Flask', 'SQLite', 'Docker', 'Kubernetes', 'REST API'],
    codeUrl: 'https://github.com/P4d1lh4/Aplica-o-Professor',
    featured: true,
  },
  {
    technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion', 'GitHub Pages'],
    codeUrl: 'https://github.com/P4d1lh4/portfolio-arthur',
    featured: false,
  },
];

const ProjectsPageV2 = () => {
  const { t } = useLanguage();
  const projects = t.projects.items.map((item, i) => ({ ...item, ...metadata[i] }));

  return (
    <div className="projects-page-v2">
      {/* HERO */}
      <section className="section section--hero section--dark">
        <div className="section-inner center">
          <motion.span className="eyebrow" {...fadeUp}>/projects</motion.span>
          <motion.h1 className="headline headline--hero" {...fadeUp}>
            {t.projects.title}
          </motion.h1>
          <motion.p className="subhead" {...fadeUp}>
            {t.projects.subtitle}
          </motion.p>
        </div>
      </section>

      {/* PROJECT SHOWCASES */}
      {projects.map((project, index) => (
        <section
          key={project.title}
          className={`section ${index % 2 === 0 ? 'section--grey' : 'section--dark'}`}
        >
          <div className="section-inner">
            <div className="project-showcase glass">
            <motion.div className="project-meta-col" {...fadeUp}>
              <span className="eyebrow project-num">0{index + 1} · {project.category}</span>
              {project.featured && (
                <span className="project-featured">★ {t.projects.featured}</span>
              )}
            </motion.div>

            <motion.div className="project-content-col" {...fadeUp}>
              <h2 className="headline project-title">{project.title}</h2>
              <p className="subhead project-description">{project.description}</p>

              <div className="project-features">
                <h4 className="features-label">{t.projects.featuresLabel}</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>

              <div className="btn-row project-cta-row">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <FaGithub />
                  {t.projects.viewCode}
                  <FaExternalLinkAlt className="ext-icon" />
                </a>
              </div>
            </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* GITHUB CTA */}
      <section className="section section--tight section--grey">
        <div className="section-inner center">
          <motion.h3 className="headline cta-title" {...fadeUp}>
            {t.projects.ctaTitle}
          </motion.h3>
          <motion.p className="subhead" {...fadeUp}>
            {t.projects.ctaText}
          </motion.p>
          <motion.div className="btn-row" {...fadeUp} style={{ marginTop: 32 }}>
            <a
              href="https://github.com/P4d1lh4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <FaGithub />
              {t.projects.ctaBtn}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPageV2;
