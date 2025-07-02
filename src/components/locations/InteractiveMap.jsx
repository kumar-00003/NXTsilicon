import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const InteractiveMap = ({ handleClick }) => {
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
            Global Presence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our strategic locations enable 24/7 support and local expertise worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-2xl p-8 text-center hover-lift"
        >
          <div className="h-96 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-xl flex items-center justify-center">
            <img alt="World map showing Mirafra Technologies global office locations" className="w-full h-full object-contain opacity-80" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4" />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-white mb-4">Interactive Office Map</h3>
            <p className="text-gray-400 mb-6">
              Explore our global network and find the office nearest to you.
            </p>
            <Button
              onClick={handleClick}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow"
            >
              Explore Interactive Map
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMap;