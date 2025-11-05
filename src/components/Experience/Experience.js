import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaChalkboardTeacher } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      icon: <FaBriefcase />,
      title: 'Desenvolvedor Front-end',
      company: 'Seaway',
      period: 'Atual',
      description:
        'Desenvolvimento na aplicação web com React, ajustando layouts, corrigindo erros e otimizando rotas do usuário.',
      skills: ['React', 'JavaScript', 'CSS', 'UI/UX'],
    },
    {
      icon: <FaBriefcase />,
      title: 'Desenvolvedor Full Stack',
      company: 'Estágio',
      period: 'Anterior',
      description:
        'Desenvolvimento de aplicações web com Node.js e React, criando APIs, interfaces responsivas e integrando com bancos de dados. Atuação em time ágil e manutenção de sistemas existentes.',
      skills: ['Node.js', 'React', 'APIs', 'Banco de Dados', 'Metodologias Ágeis'],
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Auxiliar de Professor',
      company: 'NExt',
      period: 'Anterior',
      description:
        'Participei do processo de ensino dos fundamentos de programação na linguagem Python.',
      skills: ['Python', 'Ensino', 'Mentoria'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Experiência</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

