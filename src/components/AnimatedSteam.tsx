import { motion } from 'framer-motion';

const steamLayers = [
  { id: 1, opacity: 0.15, duration: 25, delay: 0, blur: '60px' },
  { id: 2, opacity: 0.1, duration: 30, delay: 2, blur: '80px' },
  { id: 3, opacity: 0.2, duration: 20, delay: 4, blur: '40px' },
  { id: 4, opacity: 0.12, duration: 35, delay: 1, blur: '70px' },
];

export default function AnimatedSteam() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {steamLayers.map((layer) => (
        <motion.div
          key={layer.id}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 120%, rgba(232, 184, 77, ${layer.opacity}) 0%, transparent 70%)`,
            filter: `blur(${layer.blur})`,
          }}
          animate={{
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            opacity: [layer.opacity, layer.opacity * 1.5, layer.opacity],
          }}
          transition={{
            duration: layer.duration,
            delay: layer.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Additional steam wisps */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`wisp-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            bottom: '-10%',
            width: '150px',
            height: '300px',
            background: `radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)`,
            filter: 'blur(30px)',
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            x: [0, Math.sin(i) * 50],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
