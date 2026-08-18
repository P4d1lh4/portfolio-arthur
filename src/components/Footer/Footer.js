import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">Arthur Padilha<span className="accent">.</span></span>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com/P4d1lh4" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arthur-ppadilha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:arthur.ppadilha09@gmail.com" aria-label="E-mail"><FaEnvelope /></a>
          </div>
        </div>

        <hr className="rule" />

        <div className="footer-bottom">
          <span className="mono">© {year} Arthur Padilha</span>
          <span className="mono footer-built">{t.footer.built}</span>
          <a href="#conteudo" className="footer-back mono">{t.footer.back} <FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
}
