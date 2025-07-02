import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationsGrid = ({ locations, handleClick }) => {
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
            Our Offices
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic locations around the world to better serve our clients and foster innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass neon-border rounded-xl overflow-hidden hover-lift cursor-pointer"
              onClick={handleClick}
            >
              <div className="h-48 bg-gradient-to-br from-green-400/20 to-blue-500/20">
                <img alt={location.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" />
              </div>
              
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${location.gradient} rounded-lg flex items-center justify-center mb-4 neon-glow`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{location.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start space-x-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Mail className="w-4 h-4 text-green-400" />
                    <span>{location.email}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">{location.employees}</div>
                    <div className="text-xs text-gray-400">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">{location.established}</div>
                    <div className="text-xs text-gray-400">Established</div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-500 mb-2 block">Specialties:</span>
                  <div className="flex flex-wrap gap-1">
                    {location.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full border border-green-400/20"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="text-green-400 hover:text-green-300 p-0"
                  onClick={handleClick}
                >
                  Visit Office <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;