import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaCode, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiPowerbi, SiPython, SiReact, SiJavascript, SiFlask, SiMysql, SiTypescript, SiKubernetes } from 'react-icons/si';
import Terminal from '../components/Terminal/Terminal';
import GlitchText, { TypewriterText, ScrambleText, MatrixRain } from '../components/GlitchText/GlitchText';
import FooterV2 from '../components/Footer/FooterV2';
import './HomeV2.css';

const FloatingIcon = ({ icon: Icon, delay, x, y }) => (
  <motion.div
    className="floating-icon"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <Icon />
  </motion.div>
);

const CodeLine = ({ children, delay = 0 }) => (
  <motion.div
    className="code-line"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const SkillIcon = ({ icon: Icon, name, color, delay }) => (
  <motion.div
    className="skill-icon-card"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.3, type: 'spring' }}
    whileHover={{ scale: 1.06, y: -6 }}
  >
    <div className="skill-icon-wrapper" style={{ color }}>
      <Icon />
    </div>
    <span className="skill-icon-name">{name}</span>
  </motion.div>
);

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Verifica se o usuário já fechou o terminal antes
  const [showTerminal, setShowTerminal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(() => {
    const terminalClosed = localStorage.getItem('terminalClosed');
    return terminalClosed !== 'true';
  });

  const handleCloseTerminal = () => {
    localStorage.setItem('terminalClosed', 'true');
    setShowWelcome(false);
  };

  const handleOpenTerminal = () => {
    setShowWelcome(true);
  };

  const roles = [
    'Full Stack Developer',
    'Data Science',
    'Data Enthusiast',
    'Problem Solver',
  ];

  // Skills baseadas no currículo
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
    { name: 'Flask', icon: SiFlask, color: '#000000' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#E5E7EB' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'PowerBI', icon: SiPowerbi, color: '#F2C811' },
    { name: 'Banco de Dados', icon: FaDatabase, color: '#6366F1' },
  ];

  const floatingIcons = [
    { icon: SiReact, x: 10, y: 20, delay: 0 },
    { icon: SiPython, x: 85, y: 15, delay: 0.5 },
    { icon: SiJavascript, x: 15, y: 70, delay: 1 },
    { icon: SiPowerbi, x: 80, y: 65, delay: 1.5 },
    { icon: FaGitAlt, x: 5, y: 45, delay: 2 },
    { icon: FaNodeJs, x: 90, y: 40, delay: 2.5 },
  ];

  return (
    <div className="home-v2" ref={containerRef}>
      <MatrixRain />
      
      {/* Floating Tech Icons */}
      <div className="floating-icons">
        {floatingIcons.map((item, index) => (
          <FloatingIcon key={index} {...item} />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        style={{ y, opacity }}
      >
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot"></span>
            <span>Disponível para oportunidades</span>
          </motion.div>

          <motion.div
            className="hero-title-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="hero-greeting">Olá, eu sou</span>
            <h1 className="hero-name">
              <GlitchText text="Arthur Padilha" glitchOnHover continuous intensity="low" />
            </h1>
          </motion.div>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="role-prefix">{'>'}</span>
            <TypewriterText 
              texts={roles}
              speed={80}
              deleteSpeed={40}
              pauseTime={2500}
              className="role-text"
            />
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Transformando <span className="highlight">dados</span> em{' '}
            <span className="highlight">insights</span> e{' '}
            <span className="highlight">código</span> em{' '}
            <span className="highlight">soluções</span>.
          </motion.p>

          {/* Code Block Preview */}
          <motion.div
            className="code-preview"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-filename">arthur.tsx</span>
            </div>
            <div className="code-body">
              <CodeLine delay={1.1}>
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span>{' '}
                <span className="code-operator">=</span>{' '}
                <span className="code-bracket">{'{'}</span>
              </CodeLine>
              <CodeLine delay={1.2}>
                <span className="code-property">  name:</span>{' '}
                <span className="code-string">"Arthur Padilha"</span>,
              </CodeLine>
              <CodeLine delay={1.3}>
                <span className="code-property">  role:</span>{' '}
                <span className="code-string">"Full Stack Developer"</span>,
              </CodeLine>
              <CodeLine delay={1.4}>
                <span className="code-property">  focus:</span>{' '}
                <span className="code-string">"Business Intelligence"</span>,
              </CodeLine>
              <CodeLine delay={1.5}>
                <span className="code-property">  passion:</span>{' '}
                <span className="code-string">"Transformar dados em valor"</span>,
              </CodeLine>
              <CodeLine delay={1.6}>
                <span className="code-bracket">{'}'}</span>;
              </CodeLine>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              className="cta-primary"
              onClick={handleOpenTerminal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTerminal />
              <span>Abrir Terminal</span>
            </motion.button>
            
            <Link to="/projetos">
              <motion.button
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode />
                <span>Ver Projetos</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a href="https://github.com/P4d1lh4" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/arthurpadilha" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:arthur.ppadilha09@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span>Scroll para explorar</span>
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section className="skills-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{'<skills>'}</span>
          <h2 className="section-title">
            <ScrambleText text="Habilidades Técnicas" />
          </h2>
          <p className="section-subtitle">
            Tecnologias que utilizo para criar soluções inovadoras
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillIcon key={skill.name} {...skill} delay={index * 0.05} />
          ))}
        </div>

        <motion.div
          className="section-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{'</skills>'}</span>
        </motion.div>
      </section>

      {/* Quick Navigation */}
      <section className="quick-nav-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{'<navigation>'}</span>
          <h2 className="section-title">Explore</h2>
        </motion.div>

        <div className="nav-cards">
          {[
            { path: '/sobre', title: 'Sobre', icon: '👨‍💻', desc: 'Conheça minha história' },
            { path: '/experiencias', title: 'Experiência', icon: '💼', desc: 'Trajetória profissional' },
            { path: '/projetos', title: 'Projetos', icon: '🚀', desc: 'Trabalhos realizados' },
            { path: '/contato', title: 'Contato', icon: '📧', desc: 'Vamos conversar' },
          ].map((item, index) => (
            <Link to={item.path} key={item.path}>
              <motion.div
                className="nav-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <span className="nav-card-icon">{item.icon}</span>
                <h3 className="nav-card-title">{item.title}</h3>
                <p className="nav-card-desc">{item.desc}</p>
                <span className="nav-card-arrow">→</span>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          className="section-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{'</navigation>'}</span>
        </motion.div>
      </section>

      {/* Footer */}
      <FooterV2 />

      {/* Welcome Terminal Screen */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="welcome-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="welcome-background">
              <MatrixRain />
            </div>
            
            <motion.div
              className="welcome-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="welcome-header">
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Bem-vindo ao meu Portfólio
                </motion.h1>
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Explore interativamente através do terminal ou navegue diretamente
                </motion.p>
              </div>

              <motion.div
                className="welcome-terminal-wrapper"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Terminal onNavigate={() => setShowWelcome(false)} />
              </motion.div>

              <motion.button
                className="skip-terminal-btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={handleCloseTerminal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fechar Terminal ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal Modal (for reopening) */}
      <AnimatePresence>
        {showTerminal && !showWelcome && (
          <motion.div
            className="terminal-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTerminal(false)}
          >
            <motion.div
              className="terminal-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="terminal-close"
                onClick={() => setShowTerminal(false)}
              >
                ✕
              </button>
              <Terminal onNavigate={() => setShowTerminal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
