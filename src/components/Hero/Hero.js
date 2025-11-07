import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const EMAIL_ADDRESS = 'arthur.ppadilha09@gmail.com';

const Hero = () => {
  const [copyStatus, setCopyStatus] = useState('');
  const copyTimeoutRef = useRef(null);

  const clearCopyTimeout = () => {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = null;
    }
  };

  const handleCopyEmail = async () => {
    clearCopyTimeout();

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
      } else if (typeof document !== 'undefined') {
        const textArea = document.createElement('textarea');
        textArea.value = EMAIL_ADDRESS;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      } else {
        throw new Error('Clipboard API not available');
      }

      setCopyStatus('Email copiado!');
    } catch (error) {
      console.error('Erro ao copiar email:', error);
      setCopyStatus('Não foi possível copiar o email. Tente novamente.');
    } finally {
      copyTimeoutRef.current = setTimeout(() => {
        setCopyStatus('');
        copyTimeoutRef.current = null;
      }, 3000);
    }
  };

  useEffect(() => {
    return () => {
      clearCopyTimeout();
    };
  }, []);

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
          <motion.button
            type="button"
            onClick={handleCopyEmail}
            className="social-icon"
            whileHover={{ y: -5, color: '#667eea' }}
            aria-label="Copiar email"
            title="Copiar email"
          >
            <FaEnvelope />
          </motion.button>
        </motion.div>

        {copyStatus && (
          <motion.span
            className="copy-status"
            role="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {copyStatus}
          </motion.span>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;

