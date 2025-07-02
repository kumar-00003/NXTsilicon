import React from 'react';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Car, CheckCircle } from 'lucide-react';

const AutomotivePage = () => {
  const content = {
    title: 'Automotive Industry',
    subtitle: 'Engineering the future of mobility with advanced solutions for connected, autonomous, and electric vehicles.',
    sections: [
      {
        title: 'Driving Innovation',
        description: 'We are at the forefront of automotive technology, providing critical engineering services for Advanced Driver-Assistance Systems (ADAS), in-vehicle infotainment (IVI), and vehicle-to-everything (V2X) communication.',
        image: 'Futuristic autonomous car driving on a smart highway'
      },
      {
        title: 'Key Service Offerings',
        list: [
          'ADAS & Autonomous Driving Systems',
          'In-Vehicle Infotainment (IVI)',
          'Connected Car & V2X Solutions',
          'Electric Vehicle (EV) Powertrain',
          'Automotive Cybersecurity',
          'Functional Safety (ISO 26262)'
        ]
      }
    ]
  };

  return (
    <PageLayout title={content.title} subtitle={content.subtitle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{content.sections[0].title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{content.sections[0].description}</p>
            </div>
            <div className="h-64 lg:h-80 rounded-xl overflow-hidden">
              <img  className="w-full h-full object-cover" alt={content.sections[0].image} src="https://images.unsplash.com/photo-1683701844845-114d77be00ef" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-2xl p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{content.sections[1].title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.sections[1].list.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-black/20 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default AutomotivePage;