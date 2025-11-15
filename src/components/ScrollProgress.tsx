import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-bao-golden via-yellow-500 to-orange-500 origin-left z-[100]"
        style={{ scaleX }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-bao-golden via-yellow-500 to-orange-500 opacity-60" />

        {/* Animated sparkles on the progress bar */}
        <motion.div
          className="absolute right-0 top-1/2 w-4 h-4 bg-white rounded-full"
          style={{
            y: '-50%',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        />
      </motion.div>

      {/* Percentage indicator */}
      <motion.div
        className="fixed top-20 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-2xl z-[100]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.span className="font-bold text-xl bg-gradient-to-r from-bao-golden to-yellow-600 bg-clip-text text-transparent">
          {scrollYProgress.get() !== undefined ? Math.round(scrollYProgress.get() * 100) : 0}%
        </motion.span>
      </motion.div>

      {/* Scroll indicator dots on the side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4">
        {['Home', 'About', 'Menu', 'Location', 'Order'].map((section, index) => (
          <motion.div
            key={section}
            className="group flex items-center gap-3"
            whileHover={{ scale: 1.2 }}
          >
            <span className="text-sm font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
              {section}
            </span>
            <motion.div
              className="w-3 h-3 rounded-full bg-bao-golden cursor-pointer"
              animate={{
                scale: scrollYProgress.get() * 5 >= index && scrollYProgress.get() * 5 < index + 1 ? [1, 1.5, 1] : 1,
                backgroundColor: scrollYProgress.get() * 5 >= index ? '#E8B84D' : '#d1d5db'
              }}
              transition={{
                duration: 0.3
              }}
              style={{
                boxShadow: scrollYProgress.get() * 5 >= index ? '0 0 15px rgba(232, 184, 77, 0.6)' : 'none'
              }}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
