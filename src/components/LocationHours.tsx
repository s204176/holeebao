import { motion } from 'framer-motion';

export default function LocationHours() {
  const hours = [
    { day: 'Monday - Friday', time: '11:00 - 21:00' },
    { day: 'Saturday', time: '12:00 - 22:00' },
    { day: 'Sunday', time: '12:00 - 20:00' }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden bg-gradient-to-b from-bao-golden/20 via-white to-yellow-50/30">
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-radial from-bao-golden/10 to-transparent rounded-full blur-3xl"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4"
          >
            Visit{' '}
            <span className="bg-gradient-to-r from-bao-golden to-yellow-600 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Find us on Åboulevard in the heart of Copenhagen
          </motion.p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Map Placeholder - Will be replaced with actual Google Maps */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📍</div>
                    <p className="text-gray-600 font-semibold">Interactive Map</p>
                    <p className="text-sm text-gray-500 mt-2">Åboulevard, Copenhagen</p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bao-golden/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Border Glow */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-bao-golden/30 rounded-3xl transition-colors duration-300" />
            </div>

            {/* Floating Location Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bao-golden to-yellow-600 rounded-xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <p className="font-bold text-gray-900">We're Here!</p>
                  <p className="text-sm text-gray-600">5 min from Nørreport</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Address Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-bao-golden/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-bao-golden to-yellow-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  🏠
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Åboulevard<br />
                    Copenhagen, Denmark
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-bao-golden/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-bao-golden to-yellow-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900">Opening Hours</h3>
                </div>
              </div>

              <div className="space-y-4 ml-18">
                {hours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="font-semibold text-gray-700">{schedule.day}</span>
                    <span className="text-bao-golden font-bold">{schedule.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-bao-golden/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-bao-golden to-yellow-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-600 text-lg">
                    Phone: +45 XX XX XX XX<br />
                    Email: hello@holeebao.dk
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
