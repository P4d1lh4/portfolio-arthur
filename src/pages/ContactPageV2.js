import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp,
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './ContactPageV2.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.28, 0.11, 0.32, 1] },
};

const ContactPageV2 = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: t.contact.emailTitle,
      value: 'arthur.ppadilha09@gmail.com',
      link: 'mailto:arthur.ppadilha09@gmail.com',
    },
    {
      icon: FaWhatsapp,
      title: t.contact.whatsappTitle,
      value: '(81) 99708-7882',
      link: 'https://wa.me/5581997087882',
    },
    {
      icon: FaMapMarkerAlt,
      title: t.contact.locationTitle,
      value: t.contact.locationValue,
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/P4d1lh4',
      username: '@P4d1lh4',
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/arthur-ppadilha',
      username: '/arthur-ppadilha',
    },
  ];

  return (
    <div className="contact-page-v2">
      {/* HERO */}
      <section className="section section--hero section--dark">
        <div className="section-inner center">
          <motion.span className="eyebrow" {...fadeUp}>/contact</motion.span>
          <motion.h1 className="headline headline--hero" {...fadeUp}>
            {t.contact.heading}
          </motion.h1>
          <motion.p className="subhead" {...fadeUp}>
            {t.contact.intro}
          </motion.p>
          <motion.div className="btn-row" style={{ marginTop: 36 }} {...fadeUp}>
            <a href="mailto:arthur.ppadilha09@gmail.com" className="btn btn--primary">
              {t.contact.emailTitle}
            </a>
            <a href="https://wa.me/5581997087882" target="_blank" rel="noopener noreferrer" className="link-arrow">
              {t.contact.whatsappTitle}
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="section section--grey">
        <div className="section-inner section-inner--wide">
          <div className="contact-info-grid">
            {contactInfo.map(({ icon: Icon, title, value, link }, index) => {
              const inner = (
                <>
                  <div className="contact-info-icon"><Icon /></div>
                  <span className="contact-info-title">{title}</span>
                  <span className="contact-info-value">{value}</span>
                </>
              );

              return (
                <motion.div
                  key={title}
                  className="contact-info-tile glass"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.28, 0.11, 0.32, 1] }}
                >
                  {link ? (
                    <a href={link} target={link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="section section--dark">
        <div className="section-inner center">
          <motion.span className="eyebrow" {...fadeUp}>/social</motion.span>
          <motion.h2 className="headline" {...fadeUp}>{t.contact.social}</motion.h2>

          <div className="social-tiles">
            {socialLinks.map(({ icon: Icon, name, url, username }, index) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-tile glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <div className="social-tile-icon"><Icon /></div>
                <div className="social-tile-info">
                  <span className="social-tile-name">{name}</span>
                  <span className="social-tile-username">{username}</span>
                </div>
                <span className="social-tile-arrow">›</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageV2;
