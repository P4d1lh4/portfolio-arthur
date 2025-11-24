import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';
import './ContactPage.css';

const ContactPage = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'arthur.ppadilha09@gmail.com',
      link: 'mailto:arthur.ppadilha09@gmail.com',
      description: 'Envie um email e responderei o mais rápido possível'
    },
    {
      icon: <FaPhone />,
      title: 'Telefone',
      value: '(81) 99708-7882',
      link: 'tel:+5581997087882',
      description: 'Entre em contato via WhatsApp ou ligação'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      value: 'Recife, PE - Brasil',
      link: null,
      description: 'Disponível para trabalho remoto ou presencial'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/P4d1lh4',
      color: '#333',
      description: 'Confira meus repositórios e projetos'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/arthur-ppadilha',
      color: '#0077b5',
      description: 'Conecte-se comigo profissionalmente'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-background"></div>
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button onClick={() => navigate('/')} className="back-button">
            <FaArrowLeft /> Voltar
          </button>
          <h1 className="contact-hero-title">Entre em Contato</h1>
          <p className="contact-hero-subtitle">
            Vamos conversar sobre como posso contribuir com seus projetos
          </p>
        </motion.div>
      </div>

      <section className="contact-content">
        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h2 className="section-title">Informações de Contato</h2>
            <p className="section-description">
              Estou sempre aberto a novas oportunidades e colaborações. 
              Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-card"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-card-icon">
                    {info.icon}
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-card-value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-card-value">{info.value}</p>
                    )}
                    <p className="contact-card-description">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="social-section" variants={itemVariants}>
            <h2 className="section-title">Conecte-se Comigo</h2>
            <p className="section-description">
              Você também pode me encontrar nas redes sociais e plataformas profissionais
            </p>

            <div className="social-cards">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="social-card-icon" style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <div className="social-card-content">
                    <h3 className="social-card-name">{social.name}</h3>
                    <p className="social-card-description">{social.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div className="availability-banner" variants={itemVariants}>
              <div className="availability-icon">✓</div>
              <div className="availability-content">
                <h3 className="availability-title">Disponível para Oportunidades</h3>
                <p className="availability-text">
                  Atualmente estou aberto a novas oportunidades de trabalho, 
                  projetos freelance e colaborações interessantes.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
