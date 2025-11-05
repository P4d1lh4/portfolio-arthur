import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    const mailtoLink = `mailto:arthur.ppadilha09@gmail.com?subject=Contato de ${formData.name}&body=${formData.message}%0D%0A%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'arthur.ppadilha09@gmail.com',
      link: 'mailto:arthur.ppadilha09@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Telefone',
      value: '(81) 99708-7882',
      link: 'tel:+5581997087882',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      value: 'Boa Viagem, Recife - PE',
      link: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Entre em Contato</h2>
          <div className="section-line"></div>
          <p className="contact-subtitle">
            Vamos conversar sobre como posso contribuir com seus projetos
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="info-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="info-icon">{info.icon}</div>
                <h4 className="info-title">{info.title}</h4>
                {info.link ? (
                  <a href={info.link} className="info-value">
                    {info.value}
                  </a>
                ) : (
                  <p className="info-value">{info.value}</p>
                )}
              </motion.div>
            ))}

            <motion.div className="social-links" variants={itemVariants}>
              <h4 className="social-title">Conecte-se comigo</h4>
              <div className="social-icons">
                <motion.a
                  href="https://github.com/P4d1lh4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/arthur-ppadilha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

