import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Shield, Cpu, Rocket, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCTAClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const services = [
    {
      icon: Cpu,
      title: 'Semiconductor Solutions',
      description: 'Advanced chip design and verification services for next-generation semiconductors.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Engineering Services',
      description: 'Comprehensive engineering solutions from concept to production.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Testing & Validation',
      description: 'Rigorous testing protocols ensuring highest quality standards.',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Rocket,
      title: 'Innovation Labs',
      description: 'Cutting-edge research and development for future technologies.',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Expert Engineers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '50+', label: 'Global Clients' },
    { icon: Rocket, value: '1000+', label: 'Projects Delivered' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle bg-gradient-to-r from-green-400 to-blue-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 4 + 4}s`
              }}
            />
          ))}
        </div>

        {/* Mouse follower */}
        <motion.div
          className="fixed w-4 h-4 bg-green-400 rounded-full pointer-events-none z-50 mix-blend-difference"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold gradient-text leading-tight"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Engineering
              <br />
              Excellence
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Pioneering the future of technology through innovative semiconductor solutions, 
              advanced engineering services, and cutting-edge research & development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow text-white px-8 py-3 text-lg"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleCTAClick}
                className="neon-border text-green-400 hover:bg-green-400/10 px-8 py-3 text-lg"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating 3D elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"
        />
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate innovation and drive business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass neon-border rounded-xl p-6 hover-lift cursor-pointer"
                onClick={handleCTAClick}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 neon-glow`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing our latest innovations and breakthrough solutions across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass neon-border rounded-xl overflow-hidden hover-lift cursor-pointer"
                onClick={handleCTAClick}
              >
                <div className="h-48 bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center">
                  <img  alt={`Featured project ${project}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571836840806-559779928c63" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Next-Gen Processor Design
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Revolutionary chip architecture delivering unprecedented performance and efficiency.
                  </p>
                  <Button
                    variant="ghost"
                    className="text-green-400 hover:text-green-300 p-0"
                    onClick={handleCTAClick}
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-2xl p-12 pulse-glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to bring your most ambitious technology projects to life.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow text-white px-12 py-4 text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;