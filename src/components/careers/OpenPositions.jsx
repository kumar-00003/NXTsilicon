import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OpenPositions = ({ openPositions, handleClick }) => {
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
            Open Positions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover exciting opportunities to advance your career and make an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass neon-border rounded-xl p-6 hover-lift cursor-pointer"
              onClick={handleClick}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <span className="text-green-400 text-sm font-medium">{position.experience}</span>
              </div>
              
              <p className="text-gray-400 mb-4">{position.description}</p>
              
              <div className="mb-4">
                <span className="text-sm text-gray-500 mb-2 block">Required Skills:</span>
                <div className="flex flex-wrap gap-2">
                  {position.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full border border-green-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button
                variant="ghost"
                className="text-green-400 hover:text-green-300 p-0"
                onClick={handleClick}
              >
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;