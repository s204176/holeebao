import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import SteamEffect from './components/SteamEffect';
import FloatingBaos from './components/FloatingBaos';
import SocialLinks from './components/SocialLinks';
import Typewriter from './components/Typewriter';
import VisitorCounter from './components/VisitorCounter';
import TiltWrapper from './components/TiltWrapper';
import AnimatedSteam from './components/AnimatedSteam';
import FloatingIngredients from './components/FloatingIngredients';
import InstagramCTA from './components/InstagramCTA';

export default function App() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Layered Animated Steam Background */}
      <AnimatedSteam />

      {/* Floating Food Ingredients */}
      <FloatingIngredients />

      {/* Floating Background Shapes */}
      <FloatingBaos />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8"
        >
          {/* Logo Container with Steam Effect */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            <SteamEffect />

            {/* Logo - Replace with actual image when available */}
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-4">
            Something Delicious <br className="sm:hidden" />
            <span className="text-bao-golden">
              <Typewriter text="is Steaming..." delay={1000} speed={100} />
            </span>
          </h1>

          {/* Typewriter effect for subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-xl sm:text-2xl text-bao-gray-dark font-light"
          >
            Fresh steamed baos arriving soon to Copenhagen
          </motion.p>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <div className="px-8 py-3 rounded-full bg-bao-golden/10 border-2 border-bao-golden/30 backdrop-blur-sm">
            <span className="text-bao-golden font-semibold text-lg tracking-wider">
              COMING SOON
            </span>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-gray-700 text-lg font-medium">
            📍 Åboulevard 9, 1635 København V
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Vesterbro, Copenhagen
          </p>
        </motion.div>

        {/* Visitor Counter */}
        <VisitorCounter targetCount={1247} />

        {/* Instagram Call-to-Action */}
        <div className="w-full max-w-2xl mb-8">
          <InstagramCTA />
        </div>

        {/* Social Media Links */}
        <SocialLinks />

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-16 text-center text-bao-gray-dark text-sm"
        >
          <p>Follow our journey • Opening Winter 2024</p>
        </motion.div>
      </div>
    </div>
  );
}
