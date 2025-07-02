import React from 'react';
import { motion } from 'framer-motion';

const LifeAtMirafra = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Life at Mirafra
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get a glimpse of our vibrant workplace and the amazing people who make it special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass neon-border rounded-xl overflow-hidden hover-lift"
            >
              <img alt={`Team photo ${photo}`} className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {photo === 1 ? 'Innovation Sessions' : photo === 2 ? 'Team Collaboration' : 'Company Events'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {photo === 1 
                    ? 'Regular brainstorming sessions where great ideas come to life.'
                    : photo === 2 
                    ? 'Cross-functional teams working together on exciting projects.'
                    : 'Fun company events and celebrations that bring us together.'
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtMirafra;