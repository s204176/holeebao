import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';
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
  const navigationType = useNavigationType();

  // Use useLayoutEffect to scroll before paint
  useLayoutEffect(() => {
    // Always scroll to top on navigation (except browser back/forward)
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, navigationType]);

  // Also use useEffect with requestAnimationFrame as backup
  useEffect(() => {
    if (navigationType !== 'POP') {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
  }, [pathname, navigationType]);

  return null;
}

function BackgroundEffects({ enabled }: { enabled: boolean }) {
  const location = useLocation();
  const [threadsOpacity, setThreadsOpacity] = useState(1);
  const [threadsBlur, setThreadsBlur] = useState(0);

  // Only show on home and menu pages
  const showBackground = location.pathname === '/' || location.pathname === '/menu';

  if (!enabled || !showBackground) return null;

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const blurMax = isCoarsePointer ? 3 : 8;
    const opacityMin = 0.2;
    let rafId = 0;
    let lastOpacity = 1;
    let lastBlur = 0;

    const applyScroll = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      const fadeStart = 100;
      const fadeEnd = 600;
      const opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      const nextOpacity = Math.min(1, Math.max(opacityMin, opacity));

      const blurStart = 50;
      const blurEnd = 500;
      const blur = Math.min(blurMax, Math.max(0, (scrollY - blurStart) / (blurEnd - blurStart) * blurMax));

      if (Math.abs(nextOpacity - lastOpacity) > 0.01) {
        lastOpacity = nextOpacity;
        setThreadsOpacity(nextOpacity);
      }
      if (Math.abs(blur - lastBlur) > 0.2) {
        lastBlur = blur;
        setThreadsBlur(blur);
      }
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(applyScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    applyScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
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
      <FloatingBaos />
    </>
  );
}

export default function AppRouter() {
  const [isLoading, setIsLoading] = useState(true);
  const [effectsEnabled, setEffectsEnabled] = useState(false);

  useEffect(() => {
    // Keep the intro short so first paint feels fast.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const enable = () => setEffectsEnabled(true);
    const timer = setTimeout(enable, 1200);

    const onScroll = () => {
      enable();
      window.removeEventListener('scroll', onScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
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
            className="relative min-h-screen bg-bao-golden overflow-x-hidden w-full max-w-full"
          >
            {/* Background Effects - Only on Home and Menu pages */}
            <BackgroundEffects enabled={effectsEnabled} />

            {/* Navigation */}
            <Navigation />

            {/* Scroll to top on route change */}
            <ScrollToTop />

            {/* Page Content */}
            <div className="relative z-10 pt-20 w-full max-w-full overflow-x-hidden">
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
