import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  animationType?: 'wave' | 'bounce' | 'rotate' | 'scale' | 'glitch' | 'flip' | 'rainbow' | 'explode';
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  duration = 0.05,
  stagger = 0.03,
  animationType = 'wave'
}: AnimatedTextProps) {
  const characters = text.split('');

  const getAnimation = (index: number) => {
    const animations = {
      wave: {
        initial: { y: 0 },
        animate: {
          y: [0, -20, 0],
          transition: {
            duration: 0.6,
            delay: delay + index * stagger,
            repeat: Infinity,
            repeatDelay: 2
          }
        }
      },
      bounce: {
        initial: { y: -100, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
            delay: delay + index * stagger
          }
        }
      },
      rotate: {
        initial: { rotate: -180, opacity: 0 },
        animate: {
          rotate: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: delay + index * stagger,
            ease: 'backOut'
          }
        }
      },
      scale: {
        initial: { scale: 0, opacity: 0 },
        animate: {
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            damping: 10,
            stiffness: 100,
            delay: delay + index * stagger
          }
        }
      },
      glitch: {
        initial: { x: 0, y: 0 },
        animate: {
          x: [0, -2, 2, -2, 2, 0],
          y: [0, 2, -2, 2, -2, 0],
          transition: {
            duration: 0.3,
            delay: delay + index * stagger,
            repeat: 1
          }
        }
      },
      flip: {
        initial: { rotateY: 90, opacity: 0 },
        animate: {
          rotateY: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            damping: 15,
            stiffness: 150,
            delay: delay + index * stagger
          }
        }
      },
      rainbow: {
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          color: ['#E8B84D', '#ff6b6b', '#4ecdc4', '#45b7d1', '#E8B84D'],
          transition: {
            opacity: { duration: 0.3, delay: delay + index * stagger },
            y: { duration: 0.3, delay: delay + index * stagger },
            color: {
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              delay: delay + index * stagger
            }
          }
        }
      },
      explode: {
        initial: { scale: 0, x: 0, y: 0, opacity: 0 },
        animate: {
          scale: [0, 1.5, 1],
          x: [0, Math.random() * 40 - 20, 0],
          y: [0, Math.random() * 40 - 20, 0],
          opacity: [0, 1, 1],
          rotate: [0, Math.random() * 360, 0],
          transition: {
            duration: 0.8,
            delay: delay + index * stagger,
            ease: 'backOut'
          }
        }
      }
    };

    return animations[animationType];
  };

  return (
    <div className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          {...getAnimation(index)}
          whileHover={{
            scale: 1.3,
            color: '#E8B84D',
            rotate: [0, -10, 10, -10, 0],
            textShadow: '0 0 20px rgba(232, 184, 77, 0.8)',
            transition: { duration: 0.3 }
          }}
          whileTap={{
            scale: 0.9,
            rotate: 180,
            transition: { duration: 0.2 }
          }}
          className="inline-block cursor-pointer"
          style={{
            display: char === ' ' ? 'inline' : 'inline-block',
            marginRight: char === ' ' ? '0.25em' : '0'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
