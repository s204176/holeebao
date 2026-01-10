import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import LocationPage from './pages/LocationPage';
import LoadingScreen from './components/layout/LoadingScreen';
import Threads from './components/effects/Threads';
import FloatingBaos from './components/effects/FloatingBaos';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRouter() {
  const [isLoading, setIsLoading] = useState(true);
  const [threadsOpacity, setThreadsOpacity] = useState(1);
  const [threadsBlur, setThreadsBlur] = useState(0);

  useEffect(() => {
    // Show loading screen for 4 seconds - let steamer lid animation complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Fade out and blur Threads background as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 100; // Start fading after 100px
      const fadeEnd = 600; // Fully faded by 600px
      const opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      setThreadsOpacity(Math.min(1, Math.max(0.15, opacity))); // Min opacity of 0.15

      // Add blur effect as user scrolls (0px to 8px blur)
      const blurStart = 50;
      const blurEnd = 500;
      const blur = Math.min(8, Math.max(0, (scrollY - blurStart) / (blurEnd - blurStart) * 8));
      setThreadsBlur(blur);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <BrowserRouter key="main">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 1.0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-screen bg-bao-golden overflow-x-hidden"
          >
            {/* Threads Effect - Fixed Background with scroll-based fade and blur */}
            <div
              className="fixed inset-0 z-0 transition-all duration-150"
              style={{
                opacity: threadsOpacity,
                filter: `blur(${threadsBlur}px)`,
              }}
            >
              <Threads
                color={[1, 1, 1]}
                amplitude={0.3}
                distance={0.8}
                enableMouseInteraction={false}
              />
            </div>

            {/* Floating Background Shapes */}
            <FloatingBaos />

            {/* Navigation */}
            <Navigation />

            {/* Scroll to top on route change */}
            <ScrollToTop />

            {/* Page Content */}
            <div className="relative z-10 pt-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/location" element={<LocationPage />} />
              </Routes>
            </div>
          </motion.div>
        </BrowserRouter>
      )}
    </AnimatePresence>
  );
}
