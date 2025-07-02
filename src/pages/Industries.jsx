import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Landmark, Shield, ShoppingCart, Car, Wifi, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const Industries = () => {
  const industriesList = [
    {
      name: 'Semiconductor',
      path: '/industries/semiconductor',
      icon: Cpu,
      description: "Cutting-edge solutions for the entire semiconductor lifecycle, from design to silicon validation.",
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'BFSI',
      path: '/industries/bfsi',
      icon: Landmark,
      description: "Secure and scalable technology solutions for the Banking, Financial Services, and Insurance sector.",
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Insurance',
      path: '/industries/insurance',
      icon: Shield,
      description: "Digital transformation for the insurance industry, from policy management to claims processing.",
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Retail',
      path: '/industries/retail',
      icon: ShoppingCart,
      description: "Innovative retail technology to enhance customer experience and optimize operations.",
      gradient: 'from-red-500 to-pink-600'
    },
    {
      name: 'Automotive',
      path: '/industries/automotive',
      icon: Car,
      description: "Advanced engineering for ADAS, infotainment, and the next generation of connected vehicles.",
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Telecom and Network',
      path: '/industries/telecom-and-network',
      icon: Wifi,
      description: "Robust solutions for 5G, network infrastructure, and next-gen telecommunication services.",
      gradient: 'from-purple-500 to-red-600'
    }
  ];

  return (
    <PageLayout
      title="Industries We Serve"
      subtitle="Driving innovation and transformation across diverse sectors with specialized expertise and cutting-edge technology solutions."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={industry.path} className="block glass neon-border rounded-xl p-8 hover-lift h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.gradient} rounded-xl flex items-center justify-center mb-6 neon-glow`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                <div className="flex items-center text-green-400 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Industries;