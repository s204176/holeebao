import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' },
    { name: 'Order', href: '#order' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'top-4' : 'top-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border-2 shadow-2xl transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 border-gray-200'
          : 'bg-white/80 border-white/40'
      }`}>
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 font-display font-black text-xl tracking-tight text-gray-900 cursor-pointer"
        >
          Ho Lee Bao
        </motion.a>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
