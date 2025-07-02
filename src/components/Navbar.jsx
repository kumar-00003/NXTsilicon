import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const toKebabCase = (str) => str.toLowerCase().replace(/ & /g, '-and-').replace(/\//g, '-').replace(/ /g, '-').replace(/,/g, '').replace(/\u200B/g, '');

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const rawMenuItems = {
    Semiconductors: [
      'Analog and mixed-signal', 'ATE', 'Bench characterization', 'Design verification', 'DFT', 'FPGA design', 'In-house silicon validation lab', 'Physical design', 'Prototyping and Emulation', 'RTL design', 'Design Signoff', 'Silicon validation', 'Synthesis and STA'
    ],
    Embedded: [
      'Bare metal programming', 'Board support package', 'CI/CD', 'Device drivers', 'Diagnostics', 'OS porting and customization', 'Cyber security', 'Verification and validation'
    ],
    Software: [
      'Data Analytics, AI and Machine Learning', 'Cloud Architecture and Engineering', 'Salesforce Implementation and Support​', 'Application Development and Maintenance', 'Quality Assurance', 'IT Infrastructure', 'Engineering and Technical Services'
    ]
  };

  const servicesMegamenu = Object.keys(rawMenuItems).reduce((acc, category) => {
    acc[category] = rawMenuItems[category].map(name => ({ name, path: `/services/${toKebabCase(name)}` }));
    return acc;
  }, {});

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      submenu: [
        { name: 'Company Overview', path: '/about' },
        { name: 'Leadership Team', path: '/about#leadership' },
        { name: 'Our Values', path: '/about#values' },
        { name: 'History', path: '/about#history' }
      ]
    },
    {
      name: 'Services',
      path: '/services',
      megamenu: servicesMegamenu
    },
    {
      name: 'Industries',
      path: '/industries',
      submenu: [
        { name: 'Semiconductor', path: '/industries/semiconductor' },
        { name: 'BFSI', path: '/industries/bfsi' },
        { name: 'Insurance', path: '/industries/insurance' },
        { name: 'Retail', path: '/industries/retail' },
        { name: 'Automotive', path: '/industries/automotive' },
        { name: 'Telecom and Network', path: '/industries/telecom-and-network' }
      ]
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMobileMenu = () => setIsOpen(false);
  const closeDropdowns = () => setActiveDropdown(null);

  const handleLinkClick = (isSubOrMega) => {
    if (!isSubOrMega) {
      closeMobileMenu();
    }
    closeDropdowns();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/" className="flex items-center space-x-2" onClick={() => handleLinkClick(false)}>
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-bold gradient-text">NXTsilicon</span>
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => (item.submenu || item.megamenu) && setActiveDropdown(index)}
                onMouseLeave={closeDropdowns}
              >
                <Link
                  to={item.path}
                  onClick={() => handleLinkClick(!!(item.submenu || item.megamenu))}
                  className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-1 hover-lift ${
                    location.pathname.startsWith(item.path) && item.path !== '/' || location.pathname === item.path
                      ? 'text-primary neon-text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  <span>{item.name}</span>
                  {(item.submenu || item.megamenu) && <ChevronDown className="w-4 h-4" />}
                </Link>
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-background/95 backdrop-blur-sm border border-border/60 rounded-lg shadow-lg ${
                        item.megamenu ? 'w-[56rem] p-6' : 'w-56'
                      }`}
                    >
                      {item.submenu && item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={closeDropdowns}
                          className="block w-full text-left px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/30 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                      {item.megamenu && (
                        <div className="grid grid-cols-3 gap-6">
                          {Object.entries(item.megamenu).map(([category, subItems]) => (
                            <div key={category}>
                              <h3 className="text-lg font-bold text-primary mb-3 px-2">{category}</h3>
                              <ul className="space-y-1">
                                {subItems.map(subItem => (
                                  <li key={subItem.name}>
                                    <Link
                                      to={subItem.path}
                                      onClick={closeDropdowns}
                                      className="block w-full text-left px-2 py-1.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-foreground/80 hover:text-primary ml-2 md:ml-4">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="md:hidden ml-2">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground/80 hover:text-primary">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => handleLinkClick(!!(item.submenu || item.megamenu))}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname.startsWith(item.path) && item.path !== '/' || location.pathname === item.path
                        ? 'text-primary neon-text-primary'
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {(item.submenu || item.megamenu) && (
                     <div className="pl-4 mt-1 space-y-1">
                        {item.submenu?.map((subItem) => (
                           <Link key={subItem.name} to={subItem.path} onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-foreground/70 hover:text-primary rounded-md transition-colors">
                            {subItem.name}
                          </Link>
                        ))}
                        {item.megamenu && Object.entries(item.megamenu).map(([category, subItems]) => (
                          <div key={category} className="pt-1">
                            <h4 className="font-semibold text-primary text-sm px-3 py-1">{category}</h4>
                              {subItems.map(subItem => (
                                <Link key={subItem.name} to={subItem.path} onClick={closeMobileMenu} className="block px-3 py-1.5 ml-2 text-sm text-foreground/70 hover:text-primary rounded-md transition-colors">
                                  {subItem.name}
                                </Link>
                              ))}
                          </div>
                        ))}
                     </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;