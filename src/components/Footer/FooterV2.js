import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './FooterV2.css';

const FooterV2 = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/P4d1lh4', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/arthurpadilha', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:arthur.ppadilha09@gmail.com', label: 'Email' },
  ];

  const quickLinks = t.navbar.items;

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
              {t.footer.tagline}
            </p>
            <p className="footer-description">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-tag">{'>'}</span> {t.footer.navigation}
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
              <span className="title-tag">{'>'}</span> {t.footer.contact}
            </h3>
            <div className="footer-contact">
              <a href="mailto:arthur.ppadilha09@gmail.com" className="contact-item">
                <FaEnvelope />
                <span>arthur.ppadilha09@gmail.com</span>
              </a>
              <p className="contact-location">{t.footer.location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-tag">{'>'}</span> {t.footer.connect}
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
            <span>{t.footer.madeWith} <FaHeart className="heart-icon" /> {t.footer.and} <FaCode className="code-icon" /></span>
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
            <span className="prompt">$</span> {t.footer.echoCmd}
          </span>
          <span className="terminal-output">{t.footer.thanks}</span>
          <span className="terminal-line">
            <span className="prompt">$</span> <span className="cursor">_</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
