import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDocker,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiFlask,
  SiMysql,
  SiKubernetes,
  SiPowerbi,
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'Flask', icon: <SiFlask />, color: '#000000' },
    { name: 'SQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'PowerBI', icon: <SiPowerbi />, color: '#F2C811' },
    { name: 'Banco de Dados', icon: <DiDatabase />, color: '#667eea' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Habilidades</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.p className="skills-subtitle" variants={itemVariants}>
          Tecnologias e ferramentas que utilizo no desenvolvimento
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="skill-icon"
                style={{ color: skill.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <p className="skill-name">{skill.name}</p>
              <div
                className="skill-border"
                style={{ background: skill.color }}
              ></div>
            </motion.div>
          ))}
        </div>

        <motion.div className="skills-additional" variants={itemVariants}>
          <h3 className="additional-title">Outras Competências</h3>
          <div className="additional-tags">
            <span className="additional-tag">TDD/BDD</span>
            <span className="additional-tag">Metodologias Ágeis</span>
            <span className="additional-tag">APIs RESTful</span>
            <span className="additional-tag">Responsive Design</span>
            <span className="additional-tag">UI/UX</span>
            <span className="additional-tag">Pacote Office</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

