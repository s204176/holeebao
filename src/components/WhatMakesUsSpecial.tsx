import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

export default function WhatMakesUsSpecial() {
  const features = [
    {
      icon: '🥟',
      title: 'Fresh Daily',
      description: 'Every bao is handmade fresh each morning using traditional steaming techniques and premium ingredients.'
    },
    {
      icon: '🔥',
      title: 'Authentic Recipe',
      description: 'Time-honored recipes passed down through generations, bringing authentic Asian flavors to Copenhagen.'
    },
    {
      icon: '❤️',
      title: 'Copenhagen Love',
      description: 'Proudly serving our community on Åboulevard with passion, quality, and a warm smile every day.'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bao-golden via-yellow-50 to-white opacity-50" />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-bao-golden/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4"
          >
            What Makes Us{' '}
            <span className="bg-gradient-to-r from-bao-golden to-yellow-600 bg-clip-text text-transparent">
              Special
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Three simple things that make every visit unforgettable
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
