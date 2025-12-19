import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition, useMouseTrail } from '../../hooks/useMousePosition';
import './CustomCursor.css';

const CustomCursor = () => {
  const { x, y, isMoving } = useMousePosition();
  const trail = useMouseTrail(8);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target.matches('a, button, [role="button"], .clickable, input, textarea, .terminal-input')) {
        setIsHovering(true);
        
        if (target.dataset.cursorText) {
          setCursorText(target.dataset.cursorText);
        }
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 
                  window.matchMedia('(pointer: coarse)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Trail effect */}
      <div className="cursor-trail-container">
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="cursor-trail"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: (index + 1) / trail.length * 0.3,
              scale: (index + 1) / trail.length * 0.5,
              x: point.x - 4,
              y: point.y - 4,
            }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </div>

      {/* Main cursor */}
      <motion.div
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        animate={{
          x: x - 10,
          y: y - 10,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
        
        <AnimatePresence>
          {cursorText && (
            <motion.span
              className="cursor-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Outer ring with delay */}
      <motion.div
        className="cursor-outer"
        animate={{
          x: x - 20,
          y: y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isMoving ? 0.5 : 0.2,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;
