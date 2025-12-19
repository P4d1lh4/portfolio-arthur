import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaLanguage, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Sobre Mim</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <h3 className="about-subtitle">Objetivo</h3>
            <p className="about-description">
              Desenvolver-me profissionalmente, aplicando meus conhecimentos em análise de dados 
              e Business Intelligence. Busco fazer parte de uma equipe colaborativa e criativa que 
              permita expandir meu conjunto de habilidades e explorar novas áreas, de tal forma que 
              colabore com meu crescimento profissional e da instituição a qual fui engajado.
            </p>
          </motion.div>

          <motion.div className="about-text about-focus" variants={itemVariants}>
            <div className="focus-header">
              <div className="focus-icon">
                <FaChartLine />
              </div>
              <h3 className="about-subtitle" style={{ marginBottom: 0 }}>
                <span className="highlight-gradient">Foco em Business Intelligence</span>
              </h3>
            </div>
            <p className="about-description">
              Tenho um grande interesse e paixão pela área de <strong>análise de dados</strong> e{' '}
              <strong>Data Science</strong>, buscando transformar dados brutos em insights 
              valiosos que impulsionem decisões estratégicas. Minha experiência inclui o desenvolvimento 
              de dashboards interativos, visualização de métricas em tempo real e análise de performance 
              utilizando ferramentas como <strong>Power BI</strong>, <strong>SQL</strong> e{' '}
              <strong>Python</strong> para análise de dados com bibliotecas como <strong>Pandas</strong> e{' '}
              <strong>NumPy</strong>, desenvolvendo soluções completas para transformar dados em valor.
            </p>
          </motion.div>

          <div className="about-cards">
            <motion.div className="about-card" variants={itemVariants}>
              <div className="card-icon"> 
                <FaGraduationCap />
              </div>
              <h4 className="card-title">Formação</h4>
              <div className="card-content">
                <p className="card-institution">CESAR School</p>
                <p className="card-details">Ciência da Computação</p>
                <p className="card-period">2022 - 2025</p>
              </div>
              <div className="card-divider"></div>
              <div className="card-content">
                <p className="card-institution">Britanic Recife</p>
                <p className="card-details">Curso de Inglês</p>
                <p className="card-period">2011 - 2020 • Senior Intermediate</p>
              </div>
            </motion.div>

            <motion.div className="about-card" variants={itemVariants}>
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <h4 className="card-title">Localização</h4>
              <div className="card-content">
                <p className="card-details">Recife</p>
                <p className="card-details">Pernambuco - PE</p>
                <p className="card-details">Brasil</p>
              </div>
            </motion.div>

            <motion.div className="about-card" variants={itemVariants}>
              <div className="card-icon">
                <FaLanguage />
              </div>
              <h4 className="card-title">Idiomas</h4>
              <div className="card-content">
                <div className="language-item">
                  <span className="language-name">Português</span>
                  <div className="language-bar">
                    <motion.div
                      className="language-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                  <span className="language-level">Nativo (C2)</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Inglês</span>
                  <div className="language-bar">
                    <motion.div
                      className="language-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: '80%' } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    ></motion.div>
                  </div>
                  <span className="language-level">Upper Intermediate (B2)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

