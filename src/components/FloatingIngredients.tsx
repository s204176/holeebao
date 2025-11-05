import { motion } from 'framer-motion';

const ingredients = [
  // Cilantro leaves
  { emoji: '🌿', size: 30, left: '10%', top: '20%', duration: 20, rotate: 360, delay: 0 },
  { emoji: '🌿', size: 25, left: '80%', top: '60%', duration: 25, rotate: -360, delay: 3 },
  { emoji: '🌿', size: 35, left: '15%', top: '70%', duration: 22, rotate: 360, delay: 6 },

  // Chili peppers
  { emoji: '🌶️', size: 35, left: '85%', top: '25%', duration: 18, rotate: 180, delay: 2 },
  { emoji: '🌶️', size: 28, left: '5%', top: '45%', duration: 23, rotate: -180, delay: 8 },

  // Sesame-like dots (using small circles)
  { emoji: '⚪', size: 15, left: '25%', top: '35%', duration: 30, rotate: 0, delay: 1 },
  { emoji: '⚪', size: 12, left: '75%', top: '50%', duration: 28, rotate: 0, delay: 4 },
  { emoji: '⚪', size: 18, left: '40%', top: '15%', duration: 26, rotate: 0, delay: 7 },
  { emoji: '⚪', size: 14, left: '90%', top: '80%', duration: 32, rotate: 0, delay: 2 },

  // Green onion
  { emoji: '🧅', size: 30, left: '60%', top: '30%', duration: 24, rotate: 360, delay: 5 },
  { emoji: '🧅', size: 25, left: '20%', top: '85%', duration: 21, rotate: -360, delay: 9 },

  // Garlic
  { emoji: '🧄', size: 28, left: '70%', top: '75%', duration: 27, rotate: 180, delay: 3 },

  // Ginger
  { emoji: '🫚', size: 32, left: '35%', top: '65%', duration: 19, rotate: -180, delay: 7 },

  // More baos
  { emoji: '🥟', size: 40, left: '45%', top: '10%', duration: 25, rotate: 360, delay: 1 },
  { emoji: '🥟', size: 35, left: '12%', top: '55%', duration: 22, rotate: -360, delay: 6 },
];

export default function FloatingIngredients() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-60">
      {ingredients.map((ingredient, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: ingredient.left,
            top: ingredient.top,
            fontSize: `${ingredient.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, ingredient.rotate],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: ingredient.duration,
            delay: ingredient.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {ingredient.emoji}
        </motion.div>
      ))}
    </div>
  );
}
