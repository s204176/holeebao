import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Trail {
  id: number;
  x: number;
  y: number;
}

export default function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add trail
      setTrails(prev => {
        const newTrail = {
          id: trailId++,
          x: e.clientX,
          y: e.clientY
        };
        return [...prev.slice(-20), newTrail]; // Keep last 20 trails
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999]">
      {/* Main cursor */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-bao-golden mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          marginLeft: '-16px',
          marginTop: '-16px'
        }}
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-bao-golden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          marginLeft: '-4px',
          marginTop: '-4px'
        }}
      />

      {/* Trail effect */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="absolute w-3 h-3 rounded-full bg-bao-golden"
          style={{
            left: trail.x - 6,
            top: trail.y - 6
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* Circular ripple on cursor */}
      <motion.div
        className="absolute w-16 h-16 rounded-full border-2 border-bao-golden/30"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          marginLeft: '-32px',
          marginTop: '-32px'
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 0.2, 0.6]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
}
