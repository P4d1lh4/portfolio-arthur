import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import './Nav.css';

const cvHref = `${process.env.PUBLIC_URL}/Arthur-Padilha-CV.pdf`;

export default function Nav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);
  const linkClass = (base) => ({ isActive }) => `${base}${isActive ? ' active' : ''}`;

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-brand" onClick={close}>
          {t.nav.brand}<span className="nav-brand-dot">.</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {t.nav.links.map((l) => (
            <NavLink key={l.path} to={l.path} end={l.path === '/'} className={linkClass('nav-link')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageToggle />
          <a className="btn btn--primary btn--sm nav-cv" href={cvHref} download>
            <FaDownload /> {t.nav.cv}
          </a>
          <button
            className="nav-burger"
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile" id="mobile-menu">
          <nav className="nav-mobile-links" aria-label="Mobile">
            {t.nav.links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === '/'}
                className={linkClass('nav-mobile-link')}
                onClick={close}
              >
                {l.label}
              </NavLink>
            ))}
            <a className="btn btn--primary nav-mobile-cv" href={cvHref} download onClick={close}>
              <FaDownload /> {t.nav.cv}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
