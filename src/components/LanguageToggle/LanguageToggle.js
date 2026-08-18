import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para português'}
    >
      <span className={language === 'pt' ? 'is-active' : ''}>PT</span>
      <span className="lang-sep">/</span>
      <span className={language === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  );
}
