import { motion } from 'framer-motion';

// SVG Icon component for feature cards
const FeatureIcon = ({ type }: { type: string }) => {
  const iconClass = "w-10 h-10 text-white/90";
  switch (type) {
    case 'steam':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      );
    case 'target':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'blend':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case 'bolt':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'walk':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case 'heart':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function AboutPage() {
  return (
    <div className="bg-bao-golden px-6 py-24 pb-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-display font-bold text-5xl sm:text-6xl md:text-7xl mb-4">
            Our Story
          </h1>
          <p className="text-white/80 text-xl">
            From Lee's Kitchen to Ho Lee Bao
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <FeatureIcon type="heart" />
            </div>
            <h2 className="text-white font-display font-bold text-3xl mb-6 text-center">
              Born from Obsession
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Same team behind <span className="font-bold text-white">Lee's Kitchen</span> (established 2021).
              We've been perfecting baos for years, and now we're ready to share our obsession with Copenhagen.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-white font-display font-bold text-3xl mb-6">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                iconType="steam"
                title="Fresh Steamed to Order"
                description="Not sitting in warmers. Every bao is steamed fresh when you order."
              />
              <FeatureCard
                iconType="target"
                title="Hyper-Focused Menu"
                description="Baos, bowls, and sides. That's it. We do one thing and do it really well."
              />
              <FeatureCard
                iconType="blend"
                title="Modern + Traditional"
                description="Traditional technique meets modern fillings and flavors."
              />
              <FeatureCard
                iconType="bolt"
                title="Quick Service"
                description="Fast, efficient, no-nonsense. In and out, with amazing food."
              />
            </div>
          </motion.div>

          {/* Section 3 - Philosophy */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-white font-display font-bold text-3xl mb-6">
              Our Philosophy
            </h2>
            <blockquote className="text-white/90 text-2xl md:text-3xl font-display italic leading-relaxed text-center">
              "Modern Chinese food without the fuss.<br />
              Quality ingredients, no-nonsense execution."
            </blockquote>
          </motion.div>

          {/* Section 4 - Walk-in Only */}
          <motion.div
            className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FeatureIcon type="walk" />
              </div>
              <h2 className="text-white font-display font-bold text-3xl mb-4">
                Walk-In Only
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                No reservations. No bookings. Just like Lee's Kitchen, we keep it real and keep it moving.
                Walk in, get amazing food, walk out happy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  iconType: string;
  title: string;
  description: string;
}

function FeatureCard({ iconType, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
      <div className="mb-3">
        <FeatureIcon type={iconType} />
      </div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
