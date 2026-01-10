import { motion } from 'framer-motion';
import { useMemo } from 'react';

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
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(0,0,0,0.15) 12px, rgba(0,0,0,0.15) 13px),
            repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(0,0,0,0.15) 12px, rgba(0,0,0,0.15) 13px)
          `,
        }}
      />

      {/* Warm glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(255,220,150,0.5) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main container */}
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]">

        {/* === BASKET BASE === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(180deg, #D4A855 0%, #C09545 50%, #A88035 100%)',
            boxShadow: `
              inset 0 8px 25px rgba(255,255,255,0.2),
              inset 0 -15px 35px rgba(0,0,0,0.25),
              0 15px 50px rgba(0,0,0,0.3)
            `,
          }}
        >
          {/* Inner basket floor */}
          <div
            className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] rounded-full"
            style={{
              background: 'linear-gradient(180deg, #C9A050 0%, #B89040 100%)',
              boxShadow: 'inset 0 8px 25px rgba(0,0,0,0.2)',
            }}
          >
            {/* Weave pattern */}
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(90deg, transparent 0px, transparent 5px, rgba(80,50,20,0.5) 5px, rgba(80,50,20,0.5) 7px),
                  repeating-linear-gradient(0deg, transparent 0px, transparent 5px, rgba(80,50,20,0.3) 5px, rgba(80,50,20,0.3) 7px)
                `,
              }}
            />
          </div>
        </motion.div>

        {/* === CONTENT REVEALED === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
          {/* Logo directly - no white circle */}
          <img
            src="/images/logos/001_WnY_CMYK@4x.png"
            alt="HO LEE BAO"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
            style={{ filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.2))' }}
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            className="mt-3 text-center"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white"
              style={{ textShadow: '0 2px 15px rgba(0,0,0,0.25)' }}
            >
              HO LEE BAO
            </h1>
            <p className="text-sm sm:text-base text-white/70 mt-1">蒸包</p>
          </motion.div>
        </motion.div>

        {/* === SPLIT LID - LEFT HALF === */}
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: '-55%', opacity: [1, 1, 0] }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.4, 0, 0.2, 1],
            opacity: { times: [0, 0.7, 1], duration: 1.2, delay: 0.6 }
          }}
          className="absolute inset-0 z-20"
          style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(180deg, #E8C870 0%, #D4A855 40%, #C49545 70%, #A88035 100%)',
              boxShadow: 'inset 0 -15px 35px rgba(0,0,0,0.15), inset 0 15px 40px rgba(255,255,255,0.25)',
            }}
          >
            {/* Weave texture */}
            <div
              className="absolute inset-[10%] rounded-full opacity-35"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(55deg, transparent 0px, transparent 4px, rgba(100,70,30,0.4) 4px, rgba(100,70,30,0.4) 6px, transparent 6px, transparent 10px),
                  repeating-linear-gradient(-55deg, transparent 0px, transparent 4px, rgba(100,70,30,0.4) 4px, rgba(100,70,30,0.4) 6px, transparent 6px, transparent 10px)
                `,
              }}
            />
            {/* Center knob */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full"
              style={{
                background: 'radial-gradient(ellipse at 40% 35%, #DCC070 0%, #C49545 60%, #A07830 100%)',
                boxShadow: 'inset 0 -4px 12px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </motion.div>

        {/* === SPLIT LID - RIGHT HALF === */}
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: '55%', opacity: [1, 1, 0] }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.4, 0, 0.2, 1],
            opacity: { times: [0, 0.7, 1], duration: 1.2, delay: 0.6 }
          }}
          className="absolute inset-0 z-20"
          style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(180deg, #E8C870 0%, #D4A855 40%, #C49545 70%, #A88035 100%)',
              boxShadow: 'inset 0 -15px 35px rgba(0,0,0,0.15), inset 0 15px 40px rgba(255,255,255,0.25)',
            }}
          >
            {/* Weave texture */}
            <div
              className="absolute inset-[10%] rounded-full opacity-35"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(55deg, transparent 0px, transparent 4px, rgba(100,70,30,0.4) 4px, rgba(100,70,30,0.4) 6px, transparent 6px, transparent 10px),
                  repeating-linear-gradient(-55deg, transparent 0px, transparent 4px, rgba(100,70,30,0.4) 4px, rgba(100,70,30,0.4) 6px, transparent 6px, transparent 10px)
                `,
              }}
            />
            {/* Center knob */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full"
              style={{
                background: 'radial-gradient(ellipse at 40% 35%, #DCC070 0%, #C49545 60%, #A07830 100%)',
                boxShadow: 'inset 0 -4px 12px rgba(0,0,0,0.2)',
              }}
            />
          </div>
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
