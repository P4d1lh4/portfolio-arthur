import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-gradient-1"></div>
      <div className="hero-gradient-2"></div>
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.h1 className="hero-name" variants={itemVariants}>
          Arthur Padilha
        </motion.h1>

        <motion.div className="hero-title-container" variants={itemVariants}>
          <h2 className="hero-title">
            <span className="typing-text">Desenvolvedor Full Stack</span>
          </h2>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          Estudante de Ciência da Computação apaixonado por criar
          <br />
          experiências digitais inovadoras e funcionais.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="hero-btn hero-btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Projetos
          </motion.a>
          <motion.a
            href="#contact"
            className="hero-btn hero-btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar em Contato
          </motion.a>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <motion.a
            href="https://github.com/P4d1lh4"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ y: -5, color: '#667eea' }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/arthur-ppadilha"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ y: -5, color: '#667eea' }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:arthur.ppadilha09@gmail.com"
            className="social-icon"
            whileHover={{ y: -5, color: '#667eea' }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2 },
            y: { repeat: Infinity, duration: 1.5 },
          }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

