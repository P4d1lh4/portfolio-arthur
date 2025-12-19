import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt,
  FaWhatsapp
} from 'react-icons/fa';
import GlitchText, { ScrambleText, MatrixRain } from '../components/GlitchText/GlitchText';
import FooterV2 from '../components/Footer/FooterV2';
import './ContactPageV2.css';

const ContactPageV2 = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'arthur.ppadilha09@gmail.com',
      link: 'mailto:arthur.ppadilha09@gmail.com',
      color: '#00ff9f'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '(81) 99708-7882',
      link: 'https://wa.me/5581997087882',
      color: '#25D366'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      value: 'Recife, PE - Brasil',
      link: null,
      color: '#ff6b6b'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/P4d1lh4',
      username: '@P4d1lh4',
      color: '#E5E7EB'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/arthur-ppadilha',
      username: '/arthur-ppadilha',
      color: '#0077b5'
    }
  ];

  return (
    <div className="contact-page-v2">
      <MatrixRain />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
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
            <span className="section-tag">{'<contato>'}</span>
            <h1 className="page-title">
              <GlitchText text="Contato" glitchOnHover intensity="low" />
            </h1>
            <p className="page-subtitle">
              Vamos conversar sobre como posso contribuir com seus projetos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-header">
              <h2>
                <ScrambleText text="Vamos Conversar" />
              </h2>
              <p>Estou sempre aberto a novas oportunidades e projetos interessantes.</p>
            </div>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  style={{ '--card-color': info.color }}
                >
                  {info.link ? (
                    <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      <div className="info-icon" style={{ color: info.color }}>
                        <info.icon />
                      </div>
                      <div className="info-content">
                        <span className="info-title">{info.title}</span>
                        <span className="info-value">{info.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="info-static">
                      <div className="info-icon" style={{ color: info.color }}>
                        <info.icon />
                      </div>
                      <div className="info-content">
                        <span className="info-title">{info.title}</span>
                        <span className="info-value">{info.value}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="social-section">
              <h3>Redes Sociais</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                    style={{ '--social-color': social.color }}
                  >
                    <div className="social-icon" style={{ color: social.color }}>
                      <social.icon />
                    </div>
                    <div className="social-info">
                      <span className="social-name">{social.name}</span>
                      <span className="social-username">{social.username}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="section-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{'</contato>'}</span>
        </motion.div>
      </section>

      <FooterV2 />
    </div>
  );
};

export default ContactPageV2;
