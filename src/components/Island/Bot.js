import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { bot } from '../../data/bot';

const EYE_RX = 4.2;
const EYE_RY = 5.6;
const MAX_LOOK = 3.5; // how far the pupils travel, in canvas units
const LOOK_RANGE_PX = 240; // pointer distance that maps to MAX_LOOK

/**
 * The island mascot: the body path from the spec, with eyes that follow the pointer and blink.
 * @param {{ excited: boolean }} props excited plays a hop (menu opened)
 */
export default function Bot({ excited }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [look, setLook] = useState({ x: 0, y: 0 });
  const { x, y, spacing, scale } = bot.eyes;

  useEffect(() => {
    if (reduce) return undefined;
    const onMove = (e) => {
      const box = ref.current?.getBoundingClientRect();
      if (!box) return;
      const clamp = (v) => Math.max(-1, Math.min(1, v / LOOK_RANGE_PX)) * MAX_LOOK;
      setLook({
        x: clamp(e.clientX - (box.left + box.width / 2)),
        y: clamp(e.clientY - (box.top + box.height / 2)),
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce]);

  return (
    <motion.svg
      ref={ref}
      className="bot"
      viewBox="0 0 100 100"
      aria-hidden="true"
      animate={excited && !reduce ? { y: [0, -4, 0], rotate: [0, -12, 0] } : { y: 0, rotate: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <path className="bot-body" d={bot.body.path} />
      <g className="bot-eyes" style={{ transform: `translate(${look.x}px, ${look.y}px)` }}>
        {[-1, 1].map((side) => (
          <ellipse
            key={side}
            className={reduce ? 'bot-eye' : 'bot-eye bot-eye--blink'}
            cx={x + (side * spacing) / 2}
            cy={y}
            rx={EYE_RX * scale}
            ry={EYE_RY * scale}
          />
        ))}
      </g>
    </motion.svg>
  );
}
