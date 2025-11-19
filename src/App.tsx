import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import SteamEffect from './components/SteamEffect';
import FloatingBaos from './components/FloatingBaos';
import Typewriter from './components/Typewriter';
import TiltWrapper from './components/TiltWrapper';
import LoadingScreen from './components/LoadingScreen';
import Threads from './components/Threads';
import ScrollIndicator from './components/ScrollIndicator';
import GradualBlur from './components/GradualBlur';
import ScrollReveal from './components/ScrollReveal';
import ScrollVelocity from './components/ScrollVelocity';
import MouseSparkles from './components/MouseSparkles';
import ShinyText from './components/ShinyText';

export default function App() {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll position for steam fade effects
  const { scrollY } = useScroll();
  const landingSteamOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const logoSteamOpacity = useTransform(scrollY, [400, 1000], [0, 1]);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
    <div key="main" className="relative min-h-screen bg-bao-golden">
      {/* Mouse Sparkles Effect */}
      <MouseSparkles />

      {/* Threads Effect - Fixed Background */}
      <div className="fixed inset-0 z-0">
        <Threads
          color={[1, 1, 1]}
          amplitude={0.6}
          distance={1}
          enableMouseInteraction={true}
        />
      </div>

      {/* Floating Background Shapes */}
      <FloatingBaos />

      {/* First Section - MINIMAL with Gradual Blur */}
      <GradualBlur className="relative z-10 min-h-screen">
        <div className="relative flex flex-col items-center justify-center h-screen w-full px-6 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <ScrollVelocity
              texts={["Scroll to see what's steaming"]}
              velocity={85}
              className="font-display font-bold text-white px-16 py-4"
              scrollerClassName="text-lg sm:text-xl md:text-2xl gap-16"
              numCopies={4}
              scrollerStyle={{
                textShadow: '0 0 30px rgba(232, 184, 77, 0.8), 0 0 60px rgba(232, 184, 77, 0.4)',
              }}
            />
          </motion.div>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </div>
      </GradualBlur>

      {/* Landing Page Steam - Positioned at bottom, fades out on scroll */}
      <motion.div
        className="absolute inset-x-0 mx-auto w-48 h-48 pointer-events-none z-20"
        style={{
          top: 'calc(100vh - 3rem)',
          opacity: landingSteamOpacity
        }}
      >
        <SteamEffect />
      </motion.div>

      {/* Second Section - ALL CONTENT AT ONCE with ScrollReveal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-bao-golden">
        <div className="text-center max-w-4xl w-full">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mb-8 inline-block"
          >
            {/* Logo Container with Steam Effect */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mx-auto">
                {/* Logo Steam - Fades in on scroll */}
                <motion.div
                  className="absolute inset-0"
                  style={{ opacity: logoSteamOpacity }}
                >
                  <SteamEffect />
                </motion.div>

                {/* Golden glow background for logo visibility */}
                <div className="absolute inset-0 bg-gradient-radial from-bao-golden/30 via-bao-golden/10 to-transparent rounded-full blur-2xl" />

                {/* Logo */}
                <div className="relative z-10">
                  <TiltWrapper>
                    {!imageError ? (
                      <img
                        src="/assets/steamer_holeebao_v1.png"
                        alt="Holee Bao Logo"
                        className="w-full h-full object-contain drop-shadow-2xl"
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(232, 184, 77, 0.6)) drop-shadow(0 0 40px rgba(232, 184, 77, 0.3))',
                        }}
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-64 h-64 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl sm:text-7xl font-display font-bold text-bao-golden mb-2">
                            HOLEE BAO
                          </div>
                          <div className="text-xl text-bao-gray-dark">蒸包</div>
                        </div>
                      </div>
                    )}
                  </TiltWrapper>
                </div>
              </div>
          </motion.div>

          {/* Tagline with GSAP ScrollReveal */}
          <div className="mb-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
              containerClassName="mb-4"
              textClassName="text-white font-display font-bold"
            >
              Something Delicious is Steaming...
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={false}
              baseRotation={2}
              blurStrength={0}
              textClassName="text-white font-medium text-lg sm:text-xl"
            >
              Fresh steamed baos arriving soon to Copenhagen
            </ScrollReveal>
          </div>

          {/* Instagram Button */}
          <motion.a
            href="https://www.instagram.com/holeebao.cph/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
            whileTap={{ y: 0, scale: 0.98, transition: { duration: 0.1 } }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-white
                     rounded-full overflow-hidden shadow-2xl hover:shadow-3xl"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 1,
              }}
            />

            {/* Content */}
            <svg
              className="w-8 h-8 relative z-10 flex-shrink-0 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <ShinyText
              text="Follow @holeebao.cph"
              disabled={false}
              speed={3}
              color="black"
              className="relative z-10 font-black text-2xl whitespace-nowrap"
            />
          </motion.a>

        </div>
      </div>
    </div>
      )}
    </AnimatePresence>
  );
}
