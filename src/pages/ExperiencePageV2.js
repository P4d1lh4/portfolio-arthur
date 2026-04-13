import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase, FaChalkboardTeacher, FaCalendarAlt, FaMapMarkerAlt,
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './ExperiencePageV2.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.28, 0.11, 0.32, 1] },
};

const metadata = [
  { icon: FaBriefcase, skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git'] },
  { icon: FaBriefcase, skills: ['Node.js', 'React', 'Express', 'MongoDB', 'PostgreSQL', 'Docker'] },
  { icon: FaChalkboardTeacher, skills: ['Python', 'Portugol', 'Teaching', 'Mentoring'] },
  { icon: FaChalkboardTeacher, skills: ['Python', 'Algorithms', 'Logic', 'Communication'] },
  { icon: FaChalkboardTeacher, skills: ['Python', 'Robotics', 'Speaking', 'Teaching', 'Lego'] },
  { icon: FaChalkboardTeacher, skills: ['Organization', 'Leadership', 'Teamwork', 'Events'] },
  { icon: FaChalkboardTeacher, skills: ['Frameworks', 'Speaking', 'Presentation'] },
];

const ExperiencePageV2 = () => {
  const { t } = useLanguage();

  const experiences = t.experience.items.map((item, i) => ({ ...item, ...metadata[i] }));

  return (
    <div className="experience-page-v2">
      {/* HERO */}
      <section className="section section--hero section--dark">
        <div className="section-inner center">
          <motion.span className="eyebrow" {...fadeUp}>/experience</motion.span>
          <motion.h1 className="headline headline--hero" {...fadeUp}>
            {t.experience.title}
          </motion.h1>
          <motion.p className="subhead" {...fadeUp}>
            {t.experience.subtitle}
          </motion.p>
        </div>
      </section>

      {/* TIMELINE LIST */}
      <section className="section section--grey">
        <div className="section-inner exp-list">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isCurrent = exp.period === t.experience.current;

            return (
              <motion.article
                key={index}
                className="exp-row glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <div className="exp-col-left">
                  <div className="exp-icon"><Icon /></div>
                  <div className="exp-period-meta">
                    <span className="exp-period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="exp-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    {isCurrent && <span className="exp-current">● {t.experience.current}</span>}
                  </div>
                </div>

                <div className="exp-col-right">
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-description">{exp.description}</p>

                  <ul className="exp-responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>

                  <div className="exp-skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="chip">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePageV2;
