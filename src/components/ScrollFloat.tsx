import { useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollFloatProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export default function ScrollFloat({
  children,
  speed = 0.5,
  direction = 'up',
  className = ''
}: ScrollFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
