import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

const UsFlag = () => (
  <svg viewBox="0 0 60 40" className="flag-svg" aria-hidden="true">
    <rect width="60" height="40" fill="#b22234" />
    <g fill="#fff">
      <rect y="3.08" width="60" height="3.08" />
      <rect y="9.23" width="60" height="3.08" />
      <rect y="15.38" width="60" height="3.08" />
      <rect y="21.54" width="60" height="3.08" />
      <rect y="27.69" width="60" height="3.08" />
      <rect y="33.85" width="60" height="3.08" />
    </g>
    <rect width="24" height="21.54" fill="#3c3b6e" />
  </svg>
);

const BrFlag = () => (
  <svg viewBox="0 0 60 42" className="flag-svg" aria-hidden="true">
    <rect width="60" height="42" fill="#009c3b" />
    <polygon points="30,4 56,21 30,38 4,21" fill="#ffdf00" />
    <circle cx="30" cy="21" r="8" fill="#002776" />
    <path d="M22 19 Q30 15 38 19" stroke="#fff" strokeWidth="1.2" fill="none" />
  </svg>
);

const LanguageToggle = ({ variant = 'icon' }) => {
  const { language, toggleLanguage } = useLanguage();
  const isEn = language === 'en';

  if (variant === 'inline') {
    return (
      <div className="lang-inline">
        <button
          className={`lang-inline-btn ${isEn ? 'active' : ''}`}
          onClick={() => !isEn && toggleLanguage()}
          aria-label="English"
        >
          <UsFlag />
          <span>EN</span>
        </button>
        <button
          className={`lang-inline-btn ${!isEn ? 'active' : ''}`}
          onClick={() => isEn && toggleLanguage()}
          aria-label="Português"
        >
          <BrFlag />
          <span>PT</span>
        </button>
      </div>
    );
  }

  return (
    <motion.button
      className="lang-toggle-btn"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isEn ? 'Switch to Portuguese' : 'Switch to English'}
      title={isEn ? 'Switch to Portuguese' : 'Switch to English'}
    >
      {isEn ? <UsFlag /> : <BrFlag />}
      <span className="lang-code">{isEn ? 'EN' : 'PT'}</span>
    </motion.button>
  );
};

export default LanguageToggle;
