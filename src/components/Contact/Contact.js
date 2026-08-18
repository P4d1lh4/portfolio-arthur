import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const methods = [
    { icon: FaEnvelope, label: c.email, value: 'arthur.ppadilha09@gmail.com', href: 'mailto:arthur.ppadilha09@gmail.com' },
    { icon: FaWhatsapp, label: c.whatsapp, value: '(81) 99708-7882', href: 'https://wa.me/5581997087882' },
    { icon: FaMapMarkerAlt, label: c.location, value: c.locationValue, href: null },
  ];

  const social = [
    { icon: FaGithub, name: 'GitHub', href: 'https://github.com/P4d1lh4', handle: '@P4d1lh4' },
    { icon: FaLinkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/arthur-ppadilha', handle: '/arthur-ppadilha' },
  ];

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="h2">{c.title}</h2>
          <p className="lead">{c.subtitle}</p>
        </Reveal>

        <div className="contact-grid">
          {methods.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="contact-icon"><Icon /></span>
                <span className="contact-label mono">{label}</span>
                <span className="contact-value">{value}</span>
              </>
            );
            return href ? (
              <a className="contact-card" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div className="contact-card contact-card--static" key={label}>{inner}</div>
            );
          })}
        </div>

        <Reveal className="contact-social">
          <span className="contact-social-label mono">{c.social}</span>
          <div className="contact-social-links">
            {social.map(({ icon: Icon, name, href, handle }) => (
              <a className="contact-social-link" key={name} href={href} target="_blank" rel="noopener noreferrer">
                <Icon />
                <span className="contact-social-name">{name}</span>
                <span className="contact-social-handle mono">{handle}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
