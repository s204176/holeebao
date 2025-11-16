import { motion } from 'framer-motion';
import Card3D from './Card3D';
import AnimatedText from './AnimatedText';

export default function WhatMakesUsSpecial() {
  const features = [
    {
      icon: '🥟',
      title: 'Fresh Daily',
      description: 'Every bao is handmade fresh each morning using traditional steaming techniques and premium ingredients.',
      backText: 'Made with love every single day'
    },
    {
      icon: '🔥',
      title: 'Authentic Recipe',
      description: 'Time-honored recipes passed down through generations, bringing authentic Asian flavors to Copenhagen.',
      backText: 'Traditional methods, modern taste'
    },
    {
      icon: '❤️',
      title: 'Copenhagen Love',
      description: 'Proudly serving our community on Åboulevard with passion, quality, and a warm smile every day.',
      backText: 'Your neighborhood bao spot'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-bao-golden via-yellow-50 to-yellow-100 opacity-50"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Crazy Floating Elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-bao-golden/40 rounded-full"
          animate={{
            y: [Math.random() * window.innerHeight, -100],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut'
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'
          }}
        />
      ))}

      {/* Morphing blobs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          borderRadius: ['60% 40% 30% 70%', '40% 60% 70% 30%', '60% 40% 30% 70%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-bao-golden/20 to-yellow-600/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
          borderRadius: ['70% 30% 40% 60%', '30% 70% 60% 40%', '70% 30% 40% 60%']
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 blur-3xl"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Section Title with Crazy Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            className="mb-6"
          >
            <AnimatedText
              text="What Makes Us Special"
              className="text-5xl md:text-7xl font-display font-bold text-gray-900"
              animationType="bounce"
              stagger={0.05}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            <AnimatedText
              text="Three simple things that make every visit unforgettable"
              animationType="wave"
              stagger={0.02}
              delay={0.3}
            />
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid with 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 100,
                delay: index * 0.2
              }}
              className="min-h-[400px]"
            >
              <Card3D
                canFlip={true}
                backContent={
                  <div className="relative h-full bg-gradient-to-br from-bao-golden to-yellow-600 rounded-3xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{feature.icon}</div>
                      <p className="text-white font-bold text-2xl">
                        {feature.backText}
                      </p>
                    </div>
                  </div>
                }
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl h-full group overflow-hidden">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-bao-golden/0 to-yellow-600/0 group-hover:from-bao-golden/10 group-hover:to-yellow-600/10"
                    transition={{ duration: 0.4 }}
                  />

                  {/* Rotating icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="relative w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-bao-golden to-yellow-600 rounded-2xl shadow-2xl"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                      className="text-4xl"
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="relative text-3xl font-display font-bold text-gray-900 mb-4">
                    <AnimatedText
                      text={feature.title}
                      animationType="scale"
                      stagger={0.05}
                    />
                  </h3>

                  {/* Description */}
                  <p className="relative text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated particles in background */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-bao-golden/30 rounded-full"
                      animate={{
                        y: [0, -100],
                        x: [0, Math.random() * 50 - 25],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeOut'
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        bottom: 0
                      }}
                    />
                  ))}

                  {/* Click to flip hint */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    Click to flip →
                  </motion.div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
