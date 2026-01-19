import { motion } from 'framer-motion';
import { menuByCategory } from '../data/menuData';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-bao-golden px-6 pt-16 pb-12">
      <div className="max-w-5xl mx-auto">
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

        {/* BAOS Section */}
        <MenuSection
          title="Baos"
          subtitle="1 for 39KR • 2 for 69KR • Steam or Pan Fried"
          items={menuByCategory.baos}
          delay={0}
        />

        {/* BOWLS Section */}
        <MenuSection
          title="Bowls"
          subtitle="Choose noodles or rice • 98KR"
          items={menuByCategory.bowls}
          delay={0}
        />

        {/* TO SHARE Section */}
        <MenuSection
          title="To Share"
          subtitle="Small plates for the table"
          items={menuByCategory.toShare}
          delay={0}
        />

        {/* SPECIALS Section */}
        <MenuSection
          title="Weekend Specials"
          subtitle="Available Saturdays & Sundays only"
          items={menuByCategory.specials}
          delay={0}
          badge="Weekend Only"
        />

        {/* DESSERT Section */}
        <MenuSection
          title="Dessert"
          subtitle="Sweet endings"
          items={menuByCategory.desserts}
          delay={0}
        />

        {/* DRINKS Section */}
        <MenuSection
          title="Drinks"
          subtitle="Coffee & more"
          items={menuByCategory.drinks}
          delay={0}
        />
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
}

function MenuSection({ title, subtitle, items, delay, badge }: MenuSectionProps) {
  return (
    <motion.section
      className="mb-16"
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
          <motion.div
            key={item.id}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-white font-bold text-xl">{item.name}</h3>
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
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
