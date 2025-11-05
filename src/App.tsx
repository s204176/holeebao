import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SteamEffect from './components/SteamEffect';
import FloatingBaos from './components/FloatingBaos';
import SocialLinks from './components/SocialLinks';
import Typewriter from './components/Typewriter';
import TiltWrapper from './components/TiltWrapper';
import AnimatedSteam from './components/AnimatedSteam';
import InstagramCTA from './components/InstagramCTA';
import LoadingScreen from './components/LoadingScreen';
import AnimatedGridBackground from './components/AnimatedGridBackground';
import RealVisitorCounter from './components/RealVisitorCounter';
import CountdownTimer from './components/CountdownTimer';
import BaoFacts from './components/BaoFacts';

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
    <div key="main" className="relative h-screen overflow-hidden">
      {/* Animated Grid Background (shadcn-inspired) */}
      <AnimatedGridBackground />

      {/* Layered Animated Steam Background */}
      <AnimatedSteam />

      {/* Floating Background Shapes */}
      <FloatingBaos />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 py-4">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-4"
        >
          {/* Logo Container with Steam Effect */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
            <SteamEffect />

            {/* Golden glow background for logo visibility */}
            <div className="absolute inset-0 bg-gradient-radial from-bao-golden/30 via-bao-golden/10 to-transparent rounded-full blur-2xl" />

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10"
            >
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
            </motion.div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Something Delicious <br className="sm:hidden" />
            <span className="text-bao-golden">
              <Typewriter text="is Steaming..." delay={1000} speed={100} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-lg sm:text-xl text-bao-gray-dark font-light"
          >
            Fresh steamed baos arriving soon to Copenhagen
          </motion.p>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5, type: 'spring' }}
          className="mb-6"
        >
          <div className="px-6 py-2 rounded-full bg-bao-golden/10 border-2 border-bao-golden/30 backdrop-blur-sm">
            <span className="text-bao-golden font-semibold text-base tracking-wider">
              COMING SOON
            </span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <div className="mb-6">
          <CountdownTimer targetDate={new Date('2026-02-01T12:00:00')} />
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-8 text-center"
        >
          <p className="text-gray-700 text-base font-medium">
            📍 Åboulevard 9, 1635 København V
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Vesterbro, Copenhagen
          </p>
        </motion.div>

        {/* Instagram Call-to-Action */}
        <div className="w-full max-w-xl mb-6">
          <InstagramCTA />
        </div>

        {/* Visitor Counter */}
        <div className="mb-4">
          <RealVisitorCounter />
        </div>

        {/* Bao Facts */}
        <BaoFacts />

        {/* Social Media Links */}
        <div className="mt-6">
          <SocialLinks />
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-4 text-center text-bao-gray-dark text-xs"
        >
          <p>Follow our journey • Opening Early 2026</p>
        </motion.div>
      </div>
    </div>
      )}
    </AnimatePresence>
  );
}
