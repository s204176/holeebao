import { motion } from 'framer-motion';
import { useState } from 'react';

interface MenuCardProps {
  title: string;
  description: string;
  price?: string;
  size?: 'small' | 'large';
  delay?: number;
}

export default function MenuCard({ title, description, price, size = 'small', delay = 0 }: MenuCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 }
      }}
      className={`relative overflow-hidden rounded-3xl group cursor-pointer ${
        size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Background Image Placeholder (gradient for now) */}
      <div className="absolute inset-0 bg-gradient-to-br from-bao-golden/40 via-yellow-500/30 to-orange-400/40" />

      {/* Overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
      />

      {/* Steam Effect on Hover */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0.6, scale: 0 }}
              animate={{
                y: -100,
                opacity: 0,
                scale: 1.5
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeOut'
              }}
              className="absolute bottom-0 left-1/2 w-16 h-16 bg-white/40 rounded-full blur-xl"
              style={{
                left: `${30 + i * 10}%`
              }}
            />
          ))}
        </>
      )}

      {/* Content */}
      <div className={`relative p-8 flex flex-col justify-end ${
        size === 'large' ? 'min-h-[400px]' : 'min-h-[250px]'
      }`}>
        {/* Badge */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
            Popular
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className={`font-display font-bold text-white mb-2 ${
            size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
          }`}
          style={{
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-white/90 mb-4 line-clamp-2"
          style={{
            textShadow: '0 1px 5px rgba(0,0,0,0.3)'
          }}
        >
          {description}
        </motion.p>

        {/* Price */}
        {price && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 self-start"
          >
            <span className="text-3xl font-bold text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              {price}
            </span>
            <span className="text-white/80 text-sm">DKK</span>
          </motion.div>
        )}

        {/* Hover Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-8 right-8"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-bao-golden/20 to-transparent" />
        </div>
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-bao-golden/50 transition-all duration-300" />
    </motion.div>
  );
}
