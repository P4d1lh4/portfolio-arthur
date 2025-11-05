import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              <span className="logo-bracket">{'<'}</span>
              Arthur Padilha
              <span className="logo-bracket">{'/>'}</span>
            </h3>
            <p>Desenvolvedor Full Stack</p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Links Rápidos</h4>
            <div className="links-grid">
              <a href="#home">Início</a>
              <a href="#about">Sobre</a>
              <a href="#experience">Experiência</a>
              <a href="#projects">Projetos</a>
              <a href="#skills">Habilidades</a>
              <a href="#contact">Contato</a>
            </div>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4>Conecte-se</h4>
            <div className="social-icons-footer">
              <motion.a
                href="https://github.com/P4d1lh4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/arthur-ppadilha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:arthur.ppadilha09@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            © {currentYear} Arthur Padilha. Feito com <FaHeart className="heart-icon" /> e React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

