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
    // Generate steam particles - more and bigger for visibility
    const newParticles: SteamParticle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: 30 + Math.random() * 40, // Spread across logo area
      delay: (Math.random() * 5) - 2, // Negative delays so some particles are already mid-cycle
      duration: 3 + Math.random() * 2,
      size: 50 + Math.random() * 60, // Bigger particles (50-110px)
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
            opacity: [0, 0.9, 0.7, 0], // Increased opacity for better visibility
            scale: [0.5, 1.2, 1.8, 2.2], // Slightly larger final scale
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
