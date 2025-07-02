import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Layers, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Solutions = () => {
  const handleClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const solutions = [
    {
      icon: Lightbulb,
      title: 'Custom Solutions',
      description: 'Tailored technology solutions designed specifically for your unique business requirements and challenges.',
      features: ['Requirements Analysis', 'Custom Architecture', 'Scalable Design', 'Future-Proof Technology'],
      gradient: 'from-yellow-500 to-orange-600',
      image: 'Custom technology solution development in modern innovation lab'
    },
    {
      icon: Rocket,
      title: 'Product Development',
      description: 'End-to-end product development from concept to market launch with accelerated time-to-market.',
      features: ['Concept Design', 'Prototyping', 'Testing & Validation', 'Market Launch'],
      gradient: 'from-purple-500 to-pink-600',
      image: 'Product development team working on innovative technology prototypes'
    },
    {
      icon: Layers,
      title: 'System Integration',
      description: 'Seamless integration of complex systems, ensuring optimal performance and reliability.',
      features: ['Legacy Integration', 'API Development', 'Data Migration', 'Performance Optimization'],
      gradient: 'from-blue-500 to-cyan-600',
      image: 'Advanced system integration and network infrastructure setup'
    }
  ];

  const industries = [
    {
      name: 'Automotive',
      description: 'Advanced driver assistance systems, autonomous vehicle technology, and connected car solutions.',
      icon: '🚗',
      projects: ['ADAS Development', 'Infotainment Systems', 'Vehicle Connectivity', 'Safety Systems']
    },
    {
      name: 'Healthcare',
      description: 'Medical device development, diagnostic equipment, and healthcare IoT solutions.',
      icon: '🏥',
      projects: ['Medical Devices', 'Diagnostic Tools', 'Health Monitoring', 'Telemedicine']
    },
    {
      name: 'Aerospace',
      description: 'Avionics systems, satellite technology, and mission-critical aerospace applications.',
      icon: '✈️',
      projects: ['Avionics Systems', 'Satellite Tech', 'Navigation Systems', 'Flight Controls']
    },
    {
      name: 'Consumer Electronics',
      description: 'Smart devices, wearables, and next-generation consumer technology products.',
      icon: '📱',
      projects: ['Smart Devices', 'Wearable Tech', 'IoT Products', 'Mobile Apps']
    }
  ];

  const benefits = [
    {
      title: 'Faster Time-to-Market',
      description: 'Accelerate your product development with our proven methodologies and expertise.',
      icon: Rocket
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce development costs through efficient processes and reusable components.',
      icon: Target
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize project risks with comprehensive testing and validation protocols.',
      icon: CheckCircle
    },
    {
      title: 'Scalable Architecture',
      description: 'Build solutions that grow with your business and adapt to future needs.',
      icon: Layers
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => (
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
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Innovative technology solutions that transform ideas into reality 
              and drive business success across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Solutions Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-xl flex items-center justify-center mb-6 neon-glow`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-xl text-gray-400 mb-6">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={handleClick}
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow"
                  >
                    Explore Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass neon-border rounded-2xl overflow-hidden hover-lift"
                  >
                    <img  alt={solution.title} className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized solutions tailored for specific industry requirements and challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass neon-border rounded-xl p-8 hover-lift cursor-pointer"
                onClick={handleClick}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {industry.projects.map((project) => (
                    <div key={project} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{project}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why Choose Our Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key benefits that make our solutions the preferred choice for leading companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world examples of how our solutions have transformed businesses and driven innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((caseStudy, index) => (
              <motion.div
                key={caseStudy}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass neon-border rounded-xl overflow-hidden hover-lift cursor-pointer"
                onClick={handleClick}
              >
                <div className="h-48 bg-gradient-to-br from-green-400/20 to-blue-500/20">
                  <img  alt={`Case study ${caseStudy}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1661679538354-01ca763b12b9" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Automotive ADAS Solution
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Developed advanced driver assistance system reducing accidents by 40% and improving safety ratings.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold">40% Improvement</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClick}
                      className="text-green-400 hover:text-green-300 p-0"
                    >
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our solutions can help you achieve your technology goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleClick}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow text-white px-8 py-3"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                onClick={handleClick}
                className="neon-border text-green-400 hover:bg-green-400/10 px-8 py-3"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;