import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bao-golden"
    >
      {/* Animated Logo Container */}
      <div className="relative">
        {/* Pulsing Steam Circles */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 -m-8 rounded-full bg-bao-golden/20 blur-xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
          className="absolute inset-0 -m-6 rounded-full bg-bao-golden/30 blur-lg"
        />

        {/* Logo Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-7xl sm:text-8xl font-display font-bold text-white mb-4"
          >
            HO LEE BAO
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl text-white/80 mb-8"
          >
            蒸包
          </motion.div>
        </motion.div>
      </div>

      {/* Steaming Animation (Three Rising Dots) */}
      <div className="flex gap-2 mt-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
            className="w-3 h-3 rounded-full bg-white"
          />
        ))}
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-white/90 text-lg font-light tracking-wide"
      >
        Preparing something delicious...
      </motion.p>
    </motion.div>
  );
}
