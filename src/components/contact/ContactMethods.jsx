import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactMethods = () => {
  const handleClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours.',
      contact: 'info@mirafra.com',
      action: 'Send Email',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours.',
      contact: '+1 (650) 555-0100',
      action: 'Call Now',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come visit our headquarters in Silicon Valley.',
      contact: '1234 Innovation Drive, Palo Alto, CA',
      action: 'Get Directions',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass neon-border rounded-xl p-8 text-center hover-lift cursor-pointer"
              onClick={handleClick}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center mx-auto mb-6 neon-glow`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
              <p className="text-gray-400 mb-4">{method.description}</p>
              <p className="text-green-400 font-medium mb-4">{method.contact}</p>
              <Button
                variant="ghost"
                className="text-green-400 hover:text-green-300"
                onClick={handleClick}
              >
                {method.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;