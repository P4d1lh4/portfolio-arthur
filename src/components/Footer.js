import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="column footer">
      <span>© {new Date().getFullYear()} Arthur Padilha</span>
      <span className="footer-built">{t.ui.builtWith}</span>
      <button className="footer-top" onClick={() => window.scrollTo({ top: 0 })}>
        {t.ui.backTop} <FiArrowUp />
      </button>
    </footer>
  );
}
