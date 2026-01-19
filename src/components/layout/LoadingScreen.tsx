import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { CookingPot } from 'lucide-react';

export default function LoadingScreen() {
  // Steam particles
  const steamParticles = useMemo(() =>
    [...Array(12)].map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 150,
      delay: Math.random() * 0.4,
      duration: 2 + Math.random() * 1,
      size: 25 + Math.random() * 35,
    })), []
  );

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#E8B84D' }}
    >
      {/* Warm glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(255,220,150,0.5) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main container */}
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]">

        {/* === FULL POT WITH LID OPENING === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, 0, -30, -30]
          }}
          transition={{
            duration: 1.6,
            times: [0, 0.25, 0.6, 1],
            ease: 'easeInOut'
          }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <CookingPot
            className="w-full h-full text-white"
            strokeWidth={1.5}
            style={{ filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.3))' }}
          />
        </motion.div>

        {/* === LOGO POPS OUT FROM POT === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
          {/* Logo */}
          <img
            src="/images/logos/001_WnY_CMYK@4x.png"
            alt="HO LEE BAO"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
            style={{ filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.2))' }}
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="mt-4 text-center"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white"
              style={{ textShadow: '0 2px 15px rgba(0,0,0,0.25)' }}
            >
              HO LEE BAO
            </h1>
            <p className="text-base sm:text-lg text-white/70 mt-2">蒸包</p>
          </motion.div>
        </motion.div>

        {/* === STEAM === */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15">
          {steamParticles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: 0, x: p.x, opacity: 0, scale: 0.3 }}
              animate={{
                y: [0, -80, -200],
                opacity: [0, 0.5, 0],
                scale: [0.3, 1, 1.4],
              }}
              transition={{
                times: [0, 0.4, 1],
                duration: p.duration,
                delay: 1.0 + p.delay,
                ease: 'easeOut',
              }}
              className="absolute rounded-full bg-white/50 blur-lg"
              style={{ width: p.size, height: p.size }}
            />
          ))}
        </div>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        className="absolute bottom-10 text-white/70 text-sm tracking-widest uppercase"
      >
        Fresh Steamed Baos
      </motion.p>
    </motion.div>
  );
}
