import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VisitorCounterProps {
  targetCount?: number;
  duration?: number;
}

export default function VisitorCounter({ targetCount = 1247, duration = 2000 }: VisitorCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth counting
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetCount);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetCount, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="text-center mb-8"
    >
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/30 backdrop-blur-sm border border-bao-golden/20">
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl"
        >
          🥟
        </motion.span>
        <p className="text-bao-gray-dark font-medium">
          Join <span className="text-bao-golden font-bold text-xl">{count.toLocaleString()}</span> hungry people waiting
        </p>
      </div>
    </motion.div>
  );
}
