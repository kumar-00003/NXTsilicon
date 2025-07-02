import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Globe, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import GlobalStats from '@/components/locations/GlobalStats';
import LocationsGrid from '@/components/locations/LocationsGrid';
import InteractiveMap from '@/components/locations/InteractiveMap';
import OfficeInfo from '@/components/locations/OfficeInfo';

const Locations =() => {
  const handleClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const locations = [
    {
      name: 'Silicon Valley Headquarters',
      address: '1234 Innovation Drive, Palo Alto, CA 94301',
      phone: '+1 (650) 555-0100',
      email: 'siliconvalley@mirafra.com',
      employees: '150+',
      established: '2009',
      specialties: ['Semiconductor Design', 'R&D', 'Product Management'],
      image: 'Modern Silicon Valley headquarters building with glass facade and tech architecture',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Austin Engineering Center',
      address: '5678 Tech Boulevard, Austin, TX 78701',
      phone: '+1 (512) 555-0200',
      email: 'austin@mirafra.com',
      employees: '100+',
      established: '2015',
      specialties: ['Software Development', 'Embedded Systems', 'Testing'],
      image: 'Austin technology center with modern design and collaborative workspaces',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Bangalore Development Hub',
      address: 'Electronic City Phase 1, Bangalore, Karnataka 560100',
      phone: '+91 80 5555 0300',
      email: 'bangalore@mirafra.com',
      employees: '200+',
      established: '2012',
      specialties: ['ASIC Design', 'Verification', 'System Integration'],
      image: 'Bangalore development center with state-of-the-art facilities and innovation labs',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Tokyo Innovation Center',
      address: '7890 Innovation District, Tokyo 100-0001, Japan',
      phone: '+81 3 5555 0600',
      email: 'tokyo@mirafra.com',
      employees: '60+',
      established: '2021',
      specialties: ['Automotive Solutions', 'IoT Development', 'Asia-Pacific Operations'],
      image: 'Tokyo innovation center with Japanese design aesthetics and modern technology',
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  const globalStats = [
    { icon: Globe, value: '6', label: 'Global Offices' },
    { icon: Users, value: '635+', label: 'Team Members' },
    { icon: Building, value: '15+', label: 'Years of Growth' },
    { icon: MapPin, value: '50+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Global Locations
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Our worldwide presence enables us to serve clients across the globe 
              with local expertise and global capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      <GlobalStats stats={globalStats} />
      <LocationsGrid locations={locations} handleClick={handleClick} />
      <InteractiveMap handleClick={handleClick} />
      <OfficeInfo handleClick={handleClick} />

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-2xl p-12 pulse-glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Visit Our Offices
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We'd love to meet you in person. Schedule a visit to any of our global offices 
              and experience our innovative work environment firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleClick}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow text-white px-8 py-3"
              >
                Schedule a Visit
              </Button>
              <Button
                variant="outline"
                onClick={handleClick}
                className="neon-border text-green-400 hover:bg-green-400/10 px-8 py-3"
              >
                Virtual Office Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Locations;