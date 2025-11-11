import { useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface GradualBlurProps {
  children: ReactNode;
  blurAmount?: number;
  className?: string;
}

export default function GradualBlur({ children, blurAmount = 10, className = '' }: GradualBlurProps) {
  const { scrollY } = useScroll();
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      // Calculate blur based on scroll position
      // Full blur at 100vh (window height)
      const scrollProgress = Math.min(latest / window.innerHeight, 1);
      const blurValue = scrollProgress * blurAmount;
      setBlur(blurValue);
    });

    return () => unsubscribe();
  }, [scrollY, blurAmount]);

  return (
    <motion.div
      className={className}
      style={{
        filter: `blur(${blur}px)`,
        transition: 'filter 0.1s ease-out',
      }}
    >
      {children}
    </motion.div>
  );
}
