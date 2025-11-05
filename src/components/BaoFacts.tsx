import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facts = [
  "Bao means 'treasure' in Chinese 💎",
  "The perfect bao is steamed for exactly 12 minutes ⏱️",
  "Bao dough rises best at 28°C 🌡️",
  "The first bao was created in the Three Kingdoms period 🏛️",
  "A good bao should be soft as a cloud ☁️",
  "Traditional bao has 18 folds 🥟",
  "Steaming preserves more nutrients than frying 🌱",
  "The best bao dough rests for at least 30 minutes 😴",
];

export default function BaoFacts() {
  const [currentFact, setCurrentFact] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentFact((prev) => (prev + 1) % facts.length);
        setIsVisible(true);
      }, 500);
    }, 8000); // Change fact every 8 seconds

    return () => clearInterval(factInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="mt-3"
    >
      <div className="max-w-xs mx-auto px-4 py-2 bg-bao-golden/10 rounded-full backdrop-blur-sm border border-bao-golden/20">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.p
              key={currentFact}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xs text-gray-700 text-center font-medium"
            >
              💡 {facts[currentFact]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
