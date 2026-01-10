import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SteamEffect from '../components/effects/SteamEffect';
import TiltWrapper from '../components/effects/TiltWrapper';

// Featured menu items for preview
const featuredItems = [
  {
    id: 'bao-mala-beef',
    name: 'Mala Beef Bao',
    description: 'Spicy Sichuan beef with numbing mala spice',
    price: '39KR',
    tag: 'SIGNATURE',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    id: 'bao-duck',
    name: 'Ducking Bao',
    description: 'Tender duck with hoisin and cucumber',
    price: '39KR',
    tag: 'FAN FAVORITE',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'bao-vegan',
    name: 'Vegan Bao',
    description: 'Plant-based filling with fresh vegetables',
    price: '39KR',
    tag: 'VEGAN',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'bowl-hong-shao-pork',
    name: 'Hong Shao Pork Bowl',
    description: 'Braised pork belly in sweet soy sauce. Choose noodles or rice.',
    price: '98KR',
    tag: 'BOWL',
    tagColor: 'bg-purple-100 text-purple-700',
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
  return (
    <div className="relative">
      {/* ============ HERO SECTION ============ */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 relative overflow-hidden">
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
              <div className="absolute inset-0 scale-150">
                <SteamEffect />
              </div>

              {/* Massive golden glow */}
              <div className="absolute inset-0 bg-gradient-radial from-bao-golden/40 via-bao-golden/20 to-transparent rounded-full blur-3xl scale-125" />

              {/* Logo */}
              <div className="relative z-10">
                <TiltWrapper>
                  <img
                    src="/images/logos/001_WnY_CMYK@4x.png"
                    alt="HO LEE BAO"
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
      <section className="py-24 px-6">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-bao-golden/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-bao-golden-dark/40 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-bao-golden-dark/60 text-sm mt-2">Photo coming soon</p>
                    </div>
                  </div>
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

          {/* View Full Menu CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-bao-golden-dark font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ PHILOSOPHY SECTION ============ */}
      <section className="py-24 px-6">
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
      <section className="py-24 px-6 border-t border-white/10">
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
                href="https://www.google.com/maps/search/?api=1&query=Åboulevard+9+1635+København+V"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-lg hover:text-gray-900 transition-colors block mb-6"
              >
                Åboulevard 9<br />
                1635 København V
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Åboulevard+9+1635+København+V"
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
          <motion.footer
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logos/001_WnY_CMYK@4x.png"
                  alt="HO LEE BAO"
                  className="w-16 h-16 object-contain"
                />
                <span className="text-white font-display font-bold text-xl">HO LEE BAO</span>
              </div>

              <p className="text-white/50 text-sm">
                © 2025 Ho Lee Bao • Copenhagen, Denmark
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/holeebao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.footer>
        </div>
      </section>
    </div>
  );
}
