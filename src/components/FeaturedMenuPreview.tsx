import { motion } from 'framer-motion';
import MenuCard from './MenuCard';

export default function FeaturedMenuPreview() {
  const menuItems = [
    {
      title: 'Classic Pork Bao',
      description: 'Tender braised pork belly with pickled vegetables and hoisin sauce in a fluffy steamed bun',
      price: '65',
      size: 'large' as const
    },
    {
      title: 'Crispy Chicken',
      description: 'Fried chicken with spicy mayo and fresh cucumber',
      price: '60',
      size: 'small' as const
    },
    {
      title: 'Vegan Delight',
      description: 'Marinated tofu with Asian vegetables',
      price: '55',
      size: 'small' as const
    },
    {
      title: 'Spicy Beef',
      description: 'Szechuan-style beef with chili oil',
      price: '70',
      size: 'small' as const
    },
    {
      title: 'Sweet Potato',
      description: 'Mashed sweet potato with sesame and herbs',
      price: '50',
      size: 'small' as const
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-b from-white via-yellow-50/30 to-bao-golden/20">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-bao-golden/20 to-transparent blur-3xl"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-bao-golden/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-bao-golden/30">
              Menu Preview
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Taste the{' '}
            <span className="bg-gradient-to-r from-bao-golden via-yellow-600 to-orange-500 bg-clip-text text-transparent">
              Tradition
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Handcrafted steamed baos filled with love and authentic flavors
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              size={item.size}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 bg-gradient-to-r from-bao-golden to-yellow-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-bao-golden/50 transition-all duration-300"
          >
            View Full Menu
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
