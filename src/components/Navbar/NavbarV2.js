import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import './NavbarV2.css';

const NavbarV2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = t.navbar.items;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="navbar-v2">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu} aria-label="Arthur Padilha">
            Arthur Padilha
          </Link>

          <div className="navbar-menu">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <LanguageToggle />
            <button
              className="navbar-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="mobile-links">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.04 }}
                >
                  <Link
                    to={item.path}
                    className={`mobile-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mobile-footer">
              <LanguageToggle variant="inline" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarV2;
