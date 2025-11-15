import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { useState } from 'react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const instagramPosts = [
    { id: 1, emoji: '🥟' },
    { id: 2, emoji: '🔥' },
    { id: 3, emoji: '❤️' },
    { id: 4, emoji: '🌟' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-gradient-to-b from-yellow-50/30 via-bao-golden/30 to-bao-golden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute inset-0 bg-gradient-radial from-yellow-500/20 via-transparent to-transparent opacity-50"
      />

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5
          }}
          className="absolute w-4 h-4 bg-white/30 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
          >
            Hungry Yet?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            Order fresh steamed baos for takeaway or dine with us
          </motion.p>
        </motion.div>

        {/* Main CTA Button - Magnetic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <MagneticButton
            className="relative group px-16 py-6 bg-white text-bao-golden font-bold text-2xl rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 overflow-hidden"
            onClick={() => window.open('https://www.instagram.com/holeebao.cph/', '_blank')}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-bao-golden to-yellow-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-4 group-hover:text-white transition-colors duration-300">
              Order Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🥟
              </motion.span>
            </span>

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-white/20 blur-xl" />
            </div>
          </MagneticButton>
        </motion.div>

        {/* Instagram Feed Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8">
            Follow Our Journey
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href="https://www.instagram.com/holeebao.cph/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="aspect-square bg-gradient-to-br from-white/80 to-white/60 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center text-6xl cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {post.emoji}
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bao-golden/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">View on Instagram</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://www.instagram.com/holeebao.cph/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/30 transition-all duration-300"
          >
            @holeebao.cph
          </motion.a>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-md mx-auto"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Stay in the Loop
          </h3>
          <p className="text-white/80 mb-6">
            Get exclusive offers and updates delivered fresh to your inbox
          </p>

          <form onSubmit={handleNewsletterSubmit} className="relative">
            <motion.div
              animate={isSubmitted ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-bao-golden to-yellow-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
              >
                {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
