import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function RealVisitorCounter() {
  const [pageViews, setPageViews] = useState(0);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    // Track page views (every visit)
    const currentViews = parseInt(localStorage.getItem('holeebao_pageviews') || '0');
    const newViews = currentViews + 1;
    localStorage.setItem('holeebao_pageviews', newViews.toString());
    setPageViews(newViews);

    // Track unique visitors (only first visit)
    const hasVisited = localStorage.getItem('holeebao_visited');
    let uniqueCount = parseInt(localStorage.getItem('holeebao_unique') || '0');

    if (!hasVisited) {
      uniqueCount += 1;
      localStorage.setItem('holeebao_unique', uniqueCount.toString());
      localStorage.setItem('holeebao_visited', 'true');
    }

    setUniqueVisitors(uniqueCount);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-bao-golden/20">
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-xl"
        >
          🥟
        </motion.span>
        <div className="text-sm">
          <span className="text-bao-gray-dark">
            <span className="text-bao-golden font-bold">{pageViews}</span> visits •
            <span className="text-bao-golden font-bold ml-1">{uniqueVisitors}</span> curious foodies
          </span>
        </div>
      </div>
    </motion.div>
  );
}
