import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiChevronDown, FiMoon, FiSun, FiDownload } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { SECTION_IDS } from '../../data/ui';
import useActiveSection from '../../hooks/useActiveSection';
import Bot from './Bot';
import './Island.css';

const RING_RADIUS = 7;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;
const SPRING = { type: 'spring', stiffness: 420, damping: 34 };

function ProgressRing({ value }) {
  return (
    <svg className="island-ring" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r={RING_RADIUS} className="island-ring-track" />
      <circle
        cx="9" cy="9" r={RING_RADIUS}
        className="island-ring-bar"
        strokeDasharray={RING_LENGTH}
        strokeDashoffset={RING_LENGTH * (1 - value / 100)}
      />
    </svg>
  );
}

/**
 * Floating pill nav: shows the current section and scroll progress; expands into the menu.
 * @param {{ theme: 'dark' | 'light', toggleTheme: () => void }} props
 */
export default function Island({ theme, toggleTheme }) {
  const { t, language, toggleLanguage } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const onHome = !pathname.startsWith('/projetos/');
  const { active, progress } = useActiveSection(SECTION_IDS, onHome);
  const label = onHome ? t.ui.sections[active] : t.ui.projectLabel;

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onPointer = (e) => { if (!rootRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      return;
    }
    navigate('/', { state: { section: id } });
  };

  return (
    <div className="island-wrap" ref={rootRef}>
      <motion.nav
        className="island"
        aria-label="Principal"
        layout={!reduce}
        transition={SPRING}
        style={{ borderRadius: 20 }}
        data-open={open}
      >
        <motion.button
          layout={!reduce ? 'position' : false}
          className="island-bar"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="island-menu"
          aria-label={open ? t.ui.closeMenu : t.ui.menu}
        >
          <span className="island-label">
            <Bot excited={open} />
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={label}
                initial={{ y: 10, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -10, opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.25 }}
              >
                {label}
              </motion.span>
            </AnimatePresence>
            <FiChevronDown className="island-chevron" aria-hidden="true" />
          </span>
          <span className="island-progress mono">
            {progress}%
            <ProgressRing value={progress} />
          </span>
        </motion.button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="island-menu"
              className="island-menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.08 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
              <ul className="island-links">
                {SECTION_IDS.map((id) => (
                  <li key={id}>
                    <button
                      className="island-link"
                      data-active={onHome && active === id}
                      onClick={() => goTo(id)}
                    >
                      {t.ui.sections[id]}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="island-tools">
                <button className="island-tool" onClick={toggleLanguage} aria-label={t.ui.language}>
                  <span data-on={language === 'pt'}>PT</span>
                  <span data-on={language === 'en'}>EN</span>
                </button>
                <button className="island-tool" onClick={toggleTheme} aria-label={t.ui.theme}>
                  {theme === 'dark' ? <FiMoon /> : <FiSun />}
                  {theme === 'dark' ? t.ui.themeDark : t.ui.themeLight}
                </button>
                <a className="island-tool" href={`${process.env.PUBLIC_URL}/Arthur-Padilha-CV.pdf`} download>
                  <FiDownload /> CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
