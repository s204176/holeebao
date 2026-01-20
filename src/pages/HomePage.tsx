import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SteamEffect from '../components/effects/SteamEffect';
import TiltWrapper from '../components/effects/TiltWrapper';
import Footer from '../components/layout/Footer';

// Featured menu items for preview
const featuredItems = [
  {
    id: 'bao-pork',
    name: 'Pork Bao',
    description: 'Savory pork filling',
    price: '30KR',
    tag: 'SIGNATURE',
    tagColor: 'bg-red-100 text-red-700',
    image: '12',
  },
  {
    id: 'rice-braised-beef',
    name: 'Braised Beef Rice',
    description: 'Slow-cooked beef served with rice',
    price: '109KR',
    tag: 'SIGNATURE',
    tagColor: 'bg-red-100 text-red-700',
    image: '1',
  },
  {
    id: 'side-shrimp-toast',
    name: 'Crunchy Shrimp Toast',
    description: 'Crispy toast topped with shrimp (sweet chili included)',
    price: '79KR',
    tag: 'POPULAR',
    tagColor: 'bg-purple-100 text-purple-700',
    image: '7',
  },
  {
    id: 'side-spicy-dumplings',
    name: 'Spicy Boiled Dumplings',
    description: 'Boiled dumplings with spicy sauce',
    price: '69KR',
    tag: 'SPICY',
    tagColor: 'bg-orange-100 text-orange-700',
    image: '8',
  },
];

// Philosophy features - using SVG icons instead of emojis
const FeatureIcon = ({ type }: { type: string }) => {
  const iconClass = "w-8 h-8 text-bao-golden-dark";
  switch (type) {
    case 'steam':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      );
    case 'target':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'blend':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case 'bolt':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return null;
  }
};

const features = [
  { icon: 'steam', title: 'Fresh Steamed' },
  { icon: 'target', title: 'Focused Menu' },
  { icon: 'blend', title: 'Modern + Traditional' },
  { icon: 'bolt', title: 'Quick Service' },
];


export default function HomePage() {
  const emailUser = 'info';
  const emailDomain = ['holeebao', 'dk'].join('.');
  const emailAddress = `${emailUser}@${emailDomain}`;
  const [steamEnabled, setSteamEnabled] = useState(false);

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const enable = () => setSteamEnabled(true);
    const timer = setTimeout(enable, 1000);

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
    <div className="relative w-full max-w-full overflow-x-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 relative overflow-hidden w-full max-w-full">
        <div className="text-center max-w-6xl w-full relative z-10">
          {/* HO LEE BAO Title - Above Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-4"
          >
            <h1 className="text-white font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider">
              HO LEE BAO
            </h1>
          </motion.div>

          {/* Tagline - Below Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl">
              Fresh steamed baos in Copenhagen
            </p>
          </motion.div>

          {/* Logo with Enhanced Steam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="relative inline-block"
          >
            <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] flex items-center justify-center mx-auto">
              {/* Enhanced Steam Effect */}
              {steamEnabled && (
                <div className="absolute inset-0 scale-150">
                  <SteamEffect />
                </div>
              )}

              {/* Massive golden glow */}
              <div className="absolute inset-0 bg-gradient-radial from-bao-golden/40 via-bao-golden/20 to-transparent rounded-full blur-3xl scale-125" />

              {/* Logo */}
              <div className="relative z-10">
                <TiltWrapper>
                  <img
                    src="/images/logos/001_WnY_CMYK@4x.png"
                    alt="HO LEE BAO"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(232, 184, 77, 0.7)) drop-shadow(0 0 60px rgba(232, 184, 77, 0.4))',
                    }}
                  />
                </TiltWrapper>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator - positioned relative to section, not content */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/70 text-sm font-medium"
          >
            <div className="flex flex-col items-center gap-2">
              <span>Scroll to explore</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ MENU PREVIEW SECTION ============ */}
      <motion.section
        className="py-24 px-6 w-full max-w-full overflow-x-hidden cv-auto"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.2, ease: 'linear' }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
              The Menu
            </h2>
            <p className="text-white/70 text-lg sm:text-xl">
              Fresh. Simple. Holee Good.
            </p>
          </motion.div>

          {/* Featured Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group bg-white/95 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Image */}
                <div className="aspect-[16/10] bg-bao-golden/20 relative overflow-hidden">
                  <picture className="block w-full h-full">
                    <source
                      type="image/webp"
                      srcSet={`/images/menu/optimized/${item.image}-480.webp 480w, /images/menu/optimized/${item.image}-768.webp 768w, /images/menu/optimized/${item.image}-1024.webp 1024w`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <img
                      src={`/images/menu/${item.image}.png`}
                      alt={item.name}
                      className="w-full h-full object-cover menu-image"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      onLoad={(event) => {
                        event.currentTarget.classList.add('is-loaded');
                      }}
                    />
                  </picture>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bao-golden/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-900 font-bold text-xl">{item.name}</h3>
                    <span className="text-bao-golden-dark font-bold text-lg whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <span className={`inline-block px-2 py-1 ${item.tagColor} text-xs font-bold rounded-full`}>
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            className="text-center flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://holeebao.dully.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-bao-golden-dark font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Order Takeaway
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              to="/menu"
              onClick={() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white rounded-full text-white font-bold text-lg hover:scale-105 hover:bg-white/30 transition-all duration-300"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ============ PHILOSOPHY SECTION ============ */}
      <section className="py-24 px-6 w-full max-w-full overflow-x-hidden cv-auto">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-white text-2xl sm:text-3xl md:text-4xl font-display italic leading-relaxed mb-8">
              "Modern Chinese food without the fuss."
            </blockquote>
            <p className="text-white/70 text-lg">
              Same team behind <span className="text-white font-semibold">Lee's Kitchen</span> (est. 2021)
            </p>
          </motion.div>

          {/* Feature Strip */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/90 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="text-gray-900 font-bold text-sm sm:text-base">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ LOCATION & FOOTER SECTION ============ */}
      <section className="pt-16 pb-4 px-6 border-t border-white/10 w-full max-w-full overflow-x-hidden cv-auto">
        <div className="max-w-5xl mx-auto">
          {/* Location Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
              Find Us
            </h2>
            <p className="text-white/70 text-lg sm:text-xl">
              Copenhagen's newest bao destination
            </p>
            <p className="text-white/70 text-lg sm:text-xl mt-3">
              Open for catering, private events, and group orders.
            </p>
            <p className="text-white/70 text-lg sm:text-xl mt-2">
              Contact us:{' '}
              <button
                type="button"
                onClick={() => {
                  window.location.href = `mailto:${emailAddress}`;
                }}
                className="text-white hover:text-white/90 transition-colors underline-offset-4 hover:underline"
                aria-label="Email Holee Bao"
              >
                {emailAddress}
              </button>
            </p>
          </motion.div>

          {/* Location & Hours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Address Card */}
            <motion.div
              className="bg-white/90 rounded-3xl p-8 shadow-xl text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-bao-golden-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-2xl mb-4">Location</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Åboulevard+7+st+tv+1635+København+V"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-lg hover:text-gray-900 transition-colors block mb-6"
              >
                Åboulevard 7, st tv<br />
                1635 København V
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Åboulevard+7+st+tv+1635+København+V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bao-golden rounded-full text-white font-medium hover:bg-bao-golden-dark transition-colors"
              >
                Open in Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              className="bg-white/90 rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-bao-golden-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-2xl">Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-500">Monday</span>
                  <span className="text-gray-400 font-medium">Closed</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Tuesday - Sunday</span>
                  <span className="text-gray-900 font-bold">11:00 - 18:00</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-4 text-center">
                Walk-in only • No reservations needed
              </p>
            </motion.div>
          </div>

          {/* Footer */}
          <Footer delay={0.5} className="mt-8" />
        </div>
      </section>
    </div>
  );
}
