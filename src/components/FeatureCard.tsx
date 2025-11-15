import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      {/* Card Background with Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 rounded-3xl blur-sm group-hover:blur-md transition-all duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-bao-golden/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-bao-golden to-yellow-600 rounded-2xl shadow-lg"
        >
          <div className="text-white text-3xl">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-bao-golden/50 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}
