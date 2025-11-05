import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate?: Date;
}

export default function CountdownTimer({
  targetDate = new Date('2024-12-15T12:00:00') // Placeholder opening date
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.3, duration: 0.6 }}
      className="text-center"
    >
      <p className="text-xs text-bao-gray-dark mb-2 font-medium">Estimated Opening</p>
      <div className="flex gap-2 justify-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.minutes },
          { label: 'Sec', value: timeLeft.seconds },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + index * 0.1 }}
            className="bg-white/30 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[3rem] border border-bao-golden/20"
          >
            <div className="text-lg font-bold text-bao-golden tabular-nums">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-[10px] text-bao-gray-dark uppercase tracking-wide">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
