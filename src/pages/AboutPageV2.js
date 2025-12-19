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
import './AboutPageV2.css';

const AboutPageV2 = () => {
  const interests = [
    {
      icon: FaChartLine,
      title: 'Análise de Dados',
      description: 'Transformo dados brutos em insights valiosos com PowerBI, Python e visualização de dados.',
      tags: ['Data Science', 'BI', 'Machine Learning']
    },
    {
      icon: FaCode,
      title: 'Desenvolvimento Full Stack',
      description: 'Aplicações web completas, do front-end com React até APIs robustas com Node.js.',
      tags: ['React', 'Node.js', 'APIs RESTful']
    },
    {
      icon: FaRobot,
      title: 'Inteligência Artificial',
      description: 'Estudando ML e Deep Learning para resolver problemas complexos com soluções inovadoras.',
      tags: ['Machine Learning', 'NLP', 'Deep Learning']
    },
    {
      icon: FaSearch,
      title: 'Otimização & Performance',
      description: 'Focado em otimizar aplicações para melhor performance e experiência do usuário.',
      tags: ['Performance', 'Caching', 'SEO']
    }
  ];

  const softSkills = [
    { icon: FaUsers, title: 'Comunicativo', color: '#00ff9f' },
    { icon: FaTasks, title: 'Organização', color: '#00d4ff' },
    { icon: FaLightbulb, title: 'Adaptabilidade', color: '#ff00ff' },
    { icon: FaHandshake, title: 'Trabalho em Equipe', color: '#ffff00' },
    { icon: FaBrain, title: 'Proativo', color: '#ff6b6b' },
    { icon: FaComments, title: 'Resolução de Problemas', color: '#9f7aea' }
  ];

  return (
    <div className="about-page-v2">
      <MatrixRain />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <Link to="/" className="back-link">
            <FaArrowLeft />
            <span>cd ..</span>
          </Link>

          <motion.div
            className="hero-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">{'<sobre>'}</span>
            <h1 className="page-title">
              <GlitchText text="Sobre Mim" glitchOnHover intensity="low" />
            </h1>
            <p className="page-subtitle">
              Conheça minha trajetória e paixões na tecnologia
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
                  <p className="bio-role">Full Stack Developer & Data Science</p>
                  <div className="bio-meta">
                    <span><FaMapMarkerAlt /> Recife, PE</span>
                    <span><FaGraduationCap /> CESAR School</span>
                  </div>
                </div>
              </div>
              <div className="bio-text">
                <p>
                  <span className="highlight">{'>'}</span> Estudante de Ciência da Computação na CESAR School, 
                  apaixonado por tecnologia e resolução de problemas complexos.
                </p>
                <p>
                  <span className="highlight">{'>'}</span> Experiência em desenvolvimento web full stack, 
                  análise de dados e Business Intelligence.
                </p>
                <p>
                  <span className="highlight">{'>'}</span> Sempre buscando aprender novas tecnologias 
                  e contribuir com projetos inovadores.
                </p>
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
          <span className="section-tag">{'<interesses>'}</span>
          <h2 className="section-title">
            <ScrambleText text="Áreas de Interesse" />
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
          <span className="section-tag">{'</interesses>'}</span>
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
          <span className="section-tag">{'<soft-skills>'}</span>
          <h2 className="section-title">
            <ScrambleText text="Soft Skills" />
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
          <span className="section-tag">{'</soft-skills>'}</span>
        </motion.div>
      </section>

      <FooterV2 />
    </div>
  );
};

export default AboutPageV2;
