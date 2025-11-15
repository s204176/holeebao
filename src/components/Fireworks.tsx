import { motion, useAnimationFrame } from 'framer-motion';
import { useState, useRef } from 'react';

interface Firework {
  id: number;
  x: number;
  y: number;
  particles: FireworkParticle[];
  exploded: boolean;
  rocketY: number;
  targetY: number;
}

interface FireworkParticle {
  angle: number;
  speed: number;
  hue: number;
  life: number;
}

export default function Fireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const idRef = useRef(0);
  const lastFireworkTime = useRef(0);

  useAnimationFrame((time) => {
    // Launch new fireworks every 2 seconds
    if (time - lastFireworkTime.current > 2000) {
      const x = Math.random() * window.innerWidth;
      const targetY = 100 + Math.random() * 200;

      setFireworks(prev => [...prev, {
        id: idRef.current++,
        x,
        y: window.innerHeight,
        particles: [],
        exploded: false,
        rocketY: window.innerHeight,
        targetY
      }]);

      lastFireworkTime.current = time;
    }

    // Update fireworks
    setFireworks(prev =>
      prev
        .map(fw => {
          if (!fw.exploded) {
            // Move rocket up
            const newY = fw.rocketY - 8;
            if (newY <= fw.targetY) {
              // Explode!
              const particles: FireworkParticle[] = [];
              const particleCount = 60;
              for (let i = 0; i < particleCount; i++) {
                particles.push({
                  angle: (Math.PI * 2 * i) / particleCount,
                  speed: 2 + Math.random() * 3,
                  hue: 40 + Math.random() * 20, // Golden hues
                  life: 1
                });
              }
              return { ...fw, exploded: true, particles, rocketY: newY };
            }
            return { ...fw, rocketY: newY };
          } else {
            // Update particles
            const updatedParticles = fw.particles
              .map(p => ({
                ...p,
                life: p.life - 0.02
              }))
              .filter(p => p.life > 0);

            return { ...fw, particles: updatedParticles };
          }
        })
        .filter(fw => fw.particles.length > 0 || !fw.exploded)
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {fireworks.map(fw => (
        <div key={fw.id}>
          {!fw.exploded ? (
            // Rocket
            <motion.div
              className="absolute w-2 h-8 bg-gradient-to-t from-bao-golden to-yellow-500"
              style={{
                left: fw.x,
                top: fw.rocketY,
                boxShadow: '0 0 20px rgba(232, 184, 77, 0.8)'
              }}
            >
              {/* Trail */}
              <motion.div
                className="absolute -bottom-4 left-1/2 w-1 h-4 bg-gradient-to-b from-bao-golden/80 to-transparent"
                style={{ marginLeft: '-0.5px' }}
              />
            </motion.div>
          ) : (
            // Explosion particles
            fw.particles.map((particle, i) => {
              const x = fw.x + Math.cos(particle.angle) * particle.speed * (60 - fw.particles.length);
              const y = fw.rocketY + Math.sin(particle.angle) * particle.speed * (60 - fw.particles.length);

              return (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: x,
                    top: y,
                    backgroundColor: `hsl(${particle.hue}, 100%, 60%)`,
                    opacity: particle.life,
                    boxShadow: `0 0 ${particle.life * 20}px hsl(${particle.hue}, 100%, 60%)`
                  }}
                />
              );
            })
          )}
        </div>
      ))}
    </div>
  );
}
