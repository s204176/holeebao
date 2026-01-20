import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { menuByCategory } from '../data/menuData';
import Footer from '../components/layout/Footer';

export default function MenuPage() {
  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-bao-golden px-6 py-24 pb-4 w-full max-w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-display font-bold text-5xl sm:text-6xl md:text-7xl mb-4">
            Menu
          </h1>
          <p className="text-white/80 text-xl">
            Fresh. Simple. Holee Good.
          </p>
        </motion.div>

        {/* Order Takeaway Button */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
        </motion.div>

        {/* RICE Section */}
        <MenuSection
          title="Rice"
          subtitle="Served with rice"
          items={menuByCategory.rice}
          delay={0.3}
          startNumber={1}
        />

        {/* NOODLES Section */}
        <MenuSection
          title="Noodles"
          subtitle="Served with noodles"
          items={menuByCategory.noodles}
          delay={0.4}
          startNumber={4}
        />

        {/* SIDES Section */}
        <MenuSection
          title="Sides"
          subtitle="Small bites"
          items={menuByCategory.sides}
          delay={0.5}
          startNumber={7}
        />

        {/* ADD-ONS Section */}
        <MenuSection
          title="Add-ons"
          subtitle="Tilvalg til retterne (Not for baos)"
          items={menuByCategory.addons}
          delay={0.6}
          hideNumbers={true}
        />

        {/* WEEKEND SPECIAL TEASER */}
        <motion.section
          className="mt-16 mb-12 cv-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-white/30 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative p-8 sm:p-12 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <span className="inline-block px-4 py-2 bg-purple-500/30 text-purple-200 text-sm font-bold rounded-full mb-4">
                  WEEKEND SPECIAL
                </span>
              </motion.div>

              <h3 className="text-white font-display font-bold text-3xl sm:text-4xl mb-3">
                Something Special Coming...
              </h3>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Every weekend we feature an exclusive dish. Follow us on Instagram to discover this week's special!
              </p>

              <a
                href="https://www.instagram.com/holeebao.cph/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full text-white font-bold hover:bg-white/30 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @holeebao.cph
              </a>
            </div>
          </div>
        </motion.section>

        {/* BAOS Section */}
        <MenuSection
          title="Baos"
          subtitle="1 for 30KR • 3 for 70KR • Steamed"
          items={menuByCategory.baos}
          delay={0.7}
          startNumber={9}
        />

        {/* COFFEE Section */}
        <MenuSection
          title="Coffee"
          subtitle="Espresso-based drinks"
          items={menuByCategory.drinks}
          delay={0.8}
          startNumber={13}
        />

        {/* HOT DRINKS Section */}
        <MenuSection
          title="Hot Drinks"
          subtitle="Tea & more"
          items={menuByCategory.hotDrinks}
          delay={0.9}
          startNumber={18}
        />

        <Footer className="mt-8" />
      </div>
    </div>
  );
}

interface MenuSectionProps {
  title: string;
  subtitle: string;
  items: any[];
  delay: number;
  badge?: string;
  startNumber?: number;
  hideNumbers?: boolean;
}

function MenuSection({ title, subtitle, items, delay, badge, startNumber = 1, hideNumbers = false }: MenuSectionProps) {
  return (
    <motion.section
      className="mb-16 cv-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="mb-8 relative">
        <div className="flex items-center gap-4">
          <h2 className="text-white font-display font-bold text-3xl sm:text-4xl">
            {title}
          </h2>
          {badge && (
            <span className="px-3 py-1 bg-white/20 text-white text-sm font-bold rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="text-white/70 text-lg mt-2">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 border border-white/20 hover:scale-[1.02] hover:-translate-y-1"
          >
            {/* Image */}
            {item.image && (
              <div className="aspect-[4/3] bg-white/5 relative overflow-hidden">
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
              </div>
            )}

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-bold text-xl">
                  {!hideNumbers && `${startNumber + index}. `}{item.name}
                </h3>
                {item.price && (
                  <span className="text-white/90 font-bold text-lg whitespace-nowrap ml-4">
                    {item.price}KR
                  </span>
                )}
              </div>

              {item.priceOption && (
                <div className="text-white/80 font-medium text-sm mb-2">
                  {item.priceOption}
                </div>
              )}

              {item.description && (
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Tags */}
              <div className="flex gap-2 mt-3 flex-wrap">
                {item.isVegan && (
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded-full">
                    VEGAN
                  </span>
                )}
                {item.isVegetarian && !item.isVegan && (
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded-full">
                    VEGETARIAN
                  </span>
                )}
                {item.availability === 'weekend' && (
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full">
                    WEEKEND
                  </span>
                )}
                {item.cookingMethod === 'both' && (
                  <span className="px-2 py-1 bg-white/20 text-white/80 text-xs font-bold rounded-full">
                    STEAM OR PAN FRY
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
