import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import './FooterV2.css';

const FooterV2 = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/P4d1lh4', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/arthurpadilha', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:arthur.ppadilha09@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Experiência', path: '/experiencias' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <footer className="footer-v2">
      <div className="footer-grid-bg"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-bracket">{'<'}</span>
              <span className="logo-text">Arthur Padilha</span>
              <span className="logo-bracket">{'/>'}</span>
            </Link>
            <p className="footer-tagline">
              Desenvolvedor Full Stack & Data Science
            </p>
            <p className="footer-description">
              Transformando dados em insights e código em soluções.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-tag">{'>'}</span> Navegação
            </h3>
            <nav className="footer-nav">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  <span className="link-dot"></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-tag">{'>'}</span> Contato
            </h3>
            <div className="footer-contact">
              <a href="mailto:arthur.ppadilha09@gmail.com" className="contact-item">
                <FaEnvelope />
                <span>arthur.ppadilha09@gmail.com</span>
              </a>
              <p className="contact-location">📍 Recife, PE - Brasil</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-tag">{'>'}</span> Conecte-se
            </h3>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© {currentYear} Arthur Padilha.</span>
            <span className="separator">|</span>
            <span>Feito com <FaHeart className="heart-icon" /> e <FaCode className="code-icon" /></span>
          </div>
          
          <div className="footer-tech">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Framer Motion</span>
            <span className="tech-badge">CSS3</span>
          </div>
        </div>

        {/* Terminal-style decoration */}
        <div className="footer-terminal">
          <span className="terminal-line">
            <span className="prompt">$</span> echo "Obrigado por visitar!"
          </span>
          <span className="terminal-output">Obrigado por visitar!</span>
          <span className="terminal-line">
            <span className="prompt">$</span> <span className="cursor">_</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
