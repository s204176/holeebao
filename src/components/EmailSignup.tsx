import { useState, FormEvent, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // TODO: Add actual email signup logic here
    // Email submission would go here (backend integration needed)

    // Confetti explosion! 🎉
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E8B84D', '#F5CF6B', '#D4A03A', '#FAFAFA']
    });

    setIsSubmitted(true);
    setEmail('');

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Reset after 3 seconds with proper cleanup
    timeoutRef.current = setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-white/80 backdrop-blur-sm border-2 border-bao-gray
                       focus:border-bao-golden focus:outline-none transition-all duration-300
                       text-gray-800 placeholder-bao-gray-dark text-center sm:text-left"
              aria-label="Email address"
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-bao-golden-dark text-sm mt-2 text-center sm:text-left px-2"
              >
                {error}
              </motion.p>
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-bao-golden hover:bg-bao-golden-light text-white font-semibold
                     transition-all duration-300 shadow-lg hover:shadow-xl transform"
          >
            Notify Me
          </motion.button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-4 px-6 rounded-full bg-green-100 text-green-800 font-semibold"
        >
          ✓ Thanks! We'll notify you when we launch!
        </motion.div>
      )}
    </motion.div>
  );
}
