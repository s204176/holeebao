import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SteamEffect from './components/SteamEffect';
import FloatingBaos from './components/FloatingBaos';
import Typewriter from './components/Typewriter';
import TiltWrapper from './components/TiltWrapper';
import LoadingScreen from './components/LoadingScreen';
import Threads from './components/Threads';
import ScrollIndicator from './components/ScrollIndicator';
import GradualBlur from './components/GradualBlur';
import ScrollFloat from './components/ScrollFloat';

export default function App() {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="flex flex-col items-center justify-center h-screen px-6 py-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white text-center"
            style={{
              textShadow: '0 0 30px rgba(232, 184, 77, 0.8), 0 0 60px rgba(232, 184, 77, 0.4)',
            }}
          >
            Scroll to see what's steaming
          </motion.h1>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </div>
      </GradualBlur>

      {/* Second Section - ALL CONTENT AT ONCE with ScrollFloat */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-bao-golden">
        <div className="text-center max-w-4xl w-full">

          {/* Logo with ScrollFloat */}
          <ScrollFloat speed={0.3} direction="down">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mb-8 inline-block"
            >
              {/* Logo Container with Steam Effect */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mx-auto">
                <SteamEffect />

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
          </ScrollFloat>

          {/* Tagline with ScrollFloat */}
          <ScrollFloat speed={0.5} direction="up">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Something Delicious <br className="sm:hidden" />
                <span className="text-white" style={{
                  textShadow: '0 0 20px rgba(232, 184, 77, 0.8), 0 0 40px rgba(232, 184, 77, 0.5), 0 0 60px rgba(232, 184, 77, 0.3)'
                }}>
                  <Typewriter text="is Steaming..." delay={500} speed={100} />
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white font-medium">
                Fresh steamed baos arriving soon to Copenhagen
              </p>
            </motion.div>
          </ScrollFloat>

          {/* Coming Soon Badge with ScrollFloat */}
          <ScrollFloat speed={0.4} direction="down">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
              className="mb-12"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(232, 184, 77, 0.3), 0 0 60px rgba(232, 184, 77, 0.1)',
                    '0 0 50px rgba(232, 184, 77, 0.5), 0 0 80px rgba(232, 184, 77, 0.2)',
                    '0 0 30px rgba(232, 184, 77, 0.3), 0 0 60px rgba(232, 184, 77, 0.1)'
                  ],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="px-12 py-4 rounded-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-4 border-bao-golden inline-block"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(232, 184, 77, 0.5)',
                      '0 0 20px rgba(232, 184, 77, 0.8)',
                      '0 0 10px rgba(232, 184, 77, 0.5)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-bao-golden font-black text-2xl sm:text-3xl tracking-widest"
                  style={{
                    background: 'linear-gradient(45deg, #F5CF6B, #E8B84D, #D4A03A, #F5CF6B)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  COMING SOON
                </motion.span>
              </motion.div>
            </motion.div>
          </ScrollFloat>

          {/* Instagram Button with ScrollFloat */}
          <ScrollFloat speed={0.3} direction="down">
            <motion.a
              href="https://www.instagram.com/holeebao.cph/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600
                       hover:from-purple-700 hover:to-pink-700 text-white font-black text-2xl rounded-full
                       transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @holeebao.cph
            </motion.a>
          </ScrollFloat>

        </div>
      </div>
    </div>
      )}
    </AnimatePresence>
  );
}
