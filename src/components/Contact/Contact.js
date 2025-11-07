import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

