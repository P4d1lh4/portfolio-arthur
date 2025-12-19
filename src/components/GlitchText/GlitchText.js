import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import './GlitchText.css';

const GlitchText = ({ 
  text, 
  as: Component = 'span',
  className = '',
  glitchOnHover = false,
  continuous = false,
  intensity = 'medium',
  color,
}) => {
  const [isGlitching, setIsGlitching] = useState(continuous);

  useEffect(() => {
    if (continuous) {
      const interval = setInterval(() => {
        // Trigger re-render for glitch effect
        setIsGlitching(prev => !prev);
        setTimeout(() => setIsGlitching(true), 100);
      }, 3000 + Math.random() * 2000);
      return () => clearInterval(interval);
    }
  }, [continuous]);

  const handleMouseEnter = useCallback(() => {
    if (glitchOnHover) {
      setIsGlitching(true);
    }
  }, [glitchOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (glitchOnHover && !continuous) {
      setIsGlitching(false);
    }
  }, [glitchOnHover, continuous]);

  const intensityClass = `intensity-${intensity}`;

  return (
    <Component
      className={`glitch-text ${className} ${intensityClass} ${isGlitching ? 'glitching' : ''}`}
      data-text={text}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={color ? { '--glitch-color': color } : {}}
    >
      {text}
    </Component>
  );
};

export const GlitchImage = ({ src, alt, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`glitch-image-container ${className} ${isGlitching ? 'glitching' : ''}`}>
      <img src={src} alt={alt} className="glitch-image" />
      <img src={src} alt="" className="glitch-image glitch-layer-1" aria-hidden="true" />
      <img src={src} alt="" className="glitch-image glitch-layer-2" aria-hidden="true" />
    </div>
  );
};

export const TypewriterText = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50,
  pauseTime = 2000,
  className = '',
  cursor = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentText = texts[currentIndex];
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed + Math.random() * 50);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      {cursor && <span className="typewriter-cursor">|</span>}
    </span>
  );
};

export const ScrambleText = ({ text, className = '', scrambleOnHover = true }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  const scramble = useCallback(() => {
    if (isScrambling) return;
    
    setIsScrambling(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
      iteration += 1 / 3;
    }, 30);
  }, [text, isScrambling, chars]);

  const handleMouseEnter = useCallback(() => {
    if (scrambleOnHover) {
      scramble();
    }
  }, [scrambleOnHover, scramble]);

  return (
    <span 
      className={`scramble-text ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};

export const MatrixRain = ({ className = '' }) => {
  const columns = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      chars: Array.from({ length: 20 }, () => 
        String.fromCharCode(0x30A0 + Math.random() * 96)
      ).join(''),
    }));
  }, []);

  return (
    <div className={`matrix-rain ${className}`}>
      {columns.map(col => (
        <motion.div
          key={col.id}
          className="matrix-column"
          style={{ left: `${col.id * 5}%` }}
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: col.duration,
            delay: col.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {col.chars}
        </motion.div>
      ))}
    </div>
  );
};

export default GlitchText;
