import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OfficeInfo = ({ handleClick }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-xl p-8"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 neon-glow">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Global Support Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Americas (PST/EST)</span>
                <span className="text-green-400">6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Europe (GMT/CET)</span>
                <span className="text-green-400">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Asia-Pacific (IST/JST)</span>
                <span className="text-green-400">9:00 AM - 7:00 PM</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-400/10 rounded-lg border border-green-400/20">
              <p className="text-green-400 text-sm">
                <strong>24/7 Emergency Support:</strong> Critical issues are handled round-the-clock by our global support team.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-xl p-8"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6 neon-glow">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <span className="text-gray-400 block mb-1">General Inquiries</span>
                <span className="text-white">info@mirafra.com</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Business Development</span>
                <span className="text-white">business@mirafra.com</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Careers</span>
                <span className="text-white">careers@mirafra.com</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Support</span>
                <span className="text-white">support@mirafra.com</span>
              </div>
            </div>
            <Button
              onClick={handleClick}
              className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 neon-glow"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfficeInfo;