import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleLinkClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This section isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Locations', path: '/locations' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Semiconductors', path: '/services#semiconductors' },
        { name: 'Embedded', path: '/services#embedded' },
        { name: 'Software', path: '/services#software' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Semiconductor', path: '/industries/semiconductor' },
        { name: 'BFSI', path: '/industries/bfsi' },
        { name: 'Insurance', path: '/industries/insurance' },
        { name: 'Retail', path: '/industries/retail' },
        { name: 'Automotive', path: '/industries/automotive' },
        { name: 'Telecom & Network', path: '/industries/telecom-and-network' }
      ]
    }
  ];

  return (
    <footer className="relative bg-black/50 border-t border-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle bg-gradient-to-r from-green-400 to-blue-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <span className="text-2xl font-bold gradient-text">NXTsilicon</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Leading provider of engineering services, semiconductor solutions, and technology consulting. 
                Empowering innovation through cutting-edge technology and exceptional expertise.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>info@mirafra.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Silicon Valley, CA</span>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Facebook, label: 'Facebook' }
                ].map(({ icon: Icon, label }) => (
                  <motion.button
                    key={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLinkClick}
                    className="p-2 rounded-lg glass neon-border hover:neon-glow transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-green-400" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {footerSections.slice(0, 2).map((section, index) => (
             <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <span className="text-lg font-semibold text-green-400">{section.title}</span>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
           <motion.div
              key={footerSections[2].title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 lg:col-span-1"
            >
              <span className="text-lg font-semibold text-green-400">{footerSections[2].title}</span>
              <ul className="space-y-2">
                {footerSections[2].links.map((link) => (
                  <li key={link.name}>
                     <Link to={link.path} className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                        {link.name}
                      </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Mirafra Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={handleLinkClick} className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Privacy Policy
            </button>
            <button onClick={handleLinkClick} className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Terms of Service
            </button>
            <button onClick={handleLinkClick} className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Cookie Policy
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;