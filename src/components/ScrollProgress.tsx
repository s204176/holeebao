import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Location', id: 'location' },
    { name: 'Order', id: 'order' }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const section = Math.floor(latest * sections.length);
      setActiveSection(Math.min(section, sections.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress, sections.length]);

  const handleDotClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Minimal vertical progress bar on right */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-3">
        {sections.map((section, index) => {
          const isActive = index === activeSection;
          const isPassed = index <= activeSection;

          return (
            <motion.button
              key={section.id}
              onClick={() => handleDotClick(section.id)}
              className="group relative flex items-center justify-end gap-2 cursor-pointer bg-transparent border-none p-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Line indicator */}
              <motion.div
                className={`h-0.5 transition-all duration-300 ${
                  isPassed ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                animate={{
                  width: isActive ? '24px' : '12px'
                }}
              />

              {/* Label tooltip */}
              <motion.span
                className="absolute right-8 px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={{ x: 10 }}
                whileHover={{ x: 0 }}
              >
                {section.name}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </>
  );
}
