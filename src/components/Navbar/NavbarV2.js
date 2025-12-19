import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPalette } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './NavbarV2.css';

const NavbarV2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const location = useLocation();
  const { themeName, toggleTheme, availableThemes } = useTheme();

  const menuItems = [
    { name: 'Home', path: '/', icon: '~' },
    { name: 'Sobre', path: '/sobre', icon: '/about' },
    { name: 'Experiência', path: '/experiencias', icon: '/exp' },
    { name: 'Projetos', path: '/projetos', icon: '/projects' },
    { name: 'Contato', path: '/contato', icon: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.nav
        className={`navbar-v2 ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={handleClick}>
            <motion.div
              className="logo-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="logo-bracket">{'<'}</span>
              <span className="logo-text">Arthur</span>
              <span className="logo-bracket">{'/>'}</span>
              <span className="logo-cursor">_</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`navbar-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={handleClick}
                >
                  <span className="link-path">{item.icon}</span>
                  <span className="link-name">{item.name}</span>
                  {isActive(item.path) && (
                    <motion.span
                      className="link-indicator"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            {/* Theme Selector */}
            <div className="theme-selector">
              <motion.button
                className="theme-btn"
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPalette />
              </motion.button>
              
              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    className="theme-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  >
                    {availableThemes.map((name) => (
                      <button
                        key={name}
                        className={`theme-option ${themeName === name ? 'active' : ''}`}
                        onClick={() => {
                          toggleTheme(name);
                          setShowThemeMenu(false);
                        }}
                      >
                        <span className="theme-color" data-theme={name}></span>
                        <span className="theme-name">{name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              className="navbar-toggle"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Status Bar (decorative) */}
        <div className="navbar-status">
          <span className="status-item">
            <span className="status-dot"></span>
            <span className="status-text">online</span>
          </span>
          <span className="status-separator">|</span>
          <span className="status-item">
            <span className="status-path">{location.pathname}</span>
          </span>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClick}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-header">
                <span className="mobile-title">Navigation</span>
                <button className="mobile-close" onClick={handleClick}>
                  <FaTimes />
                </button>
              </div>
              
              <div className="mobile-links">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`mobile-link ${isActive(item.path) ? 'active' : ''}`}
                      onClick={handleClick}
                    >
                      <span className="mobile-link-icon">{item.icon}</span>
                      <span className="mobile-link-name">{item.name}</span>
                      <span className="mobile-link-arrow">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mobile-footer">
                <span className="mobile-theme-label">Theme:</span>
                <div className="mobile-themes">
                  {availableThemes.map((name) => (
                    <button
                      key={name}
                      className={`mobile-theme-btn ${themeName === name ? 'active' : ''}`}
                      onClick={() => toggleTheme(name)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarV2;
