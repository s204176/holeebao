import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface BaoShape {
  id: number;
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  clickable: boolean;
}

const baoShapes: BaoShape[] = [
  { id: 1, size: 120, left: '10%', top: '15%', delay: 0, duration: 8, clickable: true },
  { id: 2, size: 80, left: '85%', top: '25%', delay: 1, duration: 10, clickable: false },
  { id: 3, size: 100, left: '15%', top: '70%', delay: 2, duration: 9, clickable: true },
  { id: 4, size: 60, left: '80%', top: '60%', delay: 1.5, duration: 11, clickable: false },
  { id: 5, size: 90, left: '5%', top: '45%', delay: 0.5, duration: 10, clickable: true },
];

export default function FloatingBaos() {
  const handleBaoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#E8B84D', '#F5CF6B', '#D4A03A', '#FAFAFA'],
      scalar: 1.2,
      shapes: ['circle', 'square'],
    });
  };

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 3 }}>
      {baoShapes.map((bao) => (
        <motion.div
          key={bao.id}
          className={`bao-shape absolute rounded-full ${
            bao.clickable ? 'pointer-events-auto cursor-pointer hover:scale-110' : 'pointer-events-none'
          }`}
          style={{
            width: `${bao.size}px`,
            height: `${bao.size}px`,
            left: bao.left,
            top: bao.top,
            background: bao.clickable
              ? 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(232,184,77,0.15))'
              : 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), rgba(232,184,77,0.1))',
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: bao.duration,
            delay: bao.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onClick={bao.clickable ? handleBaoClick : undefined}
          whileHover={bao.clickable ? { scale: 1.1 } : {}}
          whileTap={bao.clickable ? { scale: 0.9 } : {}}
        >
          {bao.clickable && (
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">
              🥟
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
