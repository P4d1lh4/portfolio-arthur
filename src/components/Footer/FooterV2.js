import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './FooterV2.css';

const FooterV2 = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/P4d1lh4', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/arthur-ppadilha', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:arthur.ppadilha09@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer-v2">
      <div className="footer-container">
        <div className="footer-cols">
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.navigation}</h4>
            <nav className="footer-nav">
              {t.navbar.items.map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.contact}</h4>
            <div className="footer-nav">
              <a href="mailto:arthur.ppadilha09@gmail.com" className="footer-link">
                arthur.ppadilha09@gmail.com
              </a>
              <span className="footer-link footer-link--static">{t.footer.location}</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.connect}</h4>
            <div className="footer-social">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright © {currentYear} Arthur Padilha. {t.footer.thanks}</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
