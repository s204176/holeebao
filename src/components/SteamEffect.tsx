import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SteamParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function SteamEffect() {
  const [particles, setParticles] = useState<SteamParticle[]>([]);

  useEffect(() => {
    // Generate steam particles
    const newParticles: SteamParticle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 35 + Math.random() * 30, // Spread across logo area
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 40,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="steam-particle absolute"
          style={{
            left: `${particle.left}%`,
            bottom: '45%',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-10, -250],
            opacity: [0, 0.6, 0.4, 0],
            scale: [0.5, 1.2, 1.8, 2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
