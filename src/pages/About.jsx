import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Lightbulb, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const About = () => {
  const handleClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries and exploring new frontiers in technology.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results.',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering the highest quality in everything we do.',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency and ethical practices.',
      gradient: 'from-red-400 to-pink-500'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Executive Officer',
      experience: '20+ years in semiconductor industry',
      image: 'Professional CEO portrait in modern office setting'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Technology Officer',
      experience: '15+ years in engineering leadership',
      image: 'Technology executive in high-tech laboratory environment'
    },
    {
      name: 'Dr. Priya Patel',
      position: 'VP of Research & Development',
      experience: '18+ years in R&D and innovation',
      image: 'Research director in advanced technology lab'
    },
    {
      name: 'James Thompson',
      position: 'VP of Operations',
      experience: '12+ years in global operations',
      image: 'Operations executive in modern corporate setting'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
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
              About Mirafra
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Pioneering technology solutions since 2009, we've been at the forefront of 
              semiconductor innovation and engineering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded with a vision to revolutionize the semiconductor industry, Mirafra Technologies 
                has grown from a small startup to a global leader in engineering services. Our journey 
                began with a simple belief: that innovation thrives when brilliant minds collaborate 
                to solve complex challenges.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Today, we serve clients across the globe, delivering cutting-edge solutions that power 
                the next generation of technology. From automotive systems to consumer electronics, 
                our expertise spans multiple industries and applications.
              </p>
              <Button
                onClick={handleClick}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow"
              >
                Learn More About Our Journey
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass neon-border rounded-2xl p-8 hover-lift">
                <img  alt="Mirafra Technologies headquarters building" className="w-full h-64 object-cover rounded-lg mb-6" src="https://images.unsplash.com/photo-1633901230483-e6663be56210" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">500+</div>
                    <div className="text-gray-400">Engineers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-gray-400">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">50+</div>
                    <div className="text-gray-400">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">1000+</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass neon-border rounded-xl p-6 text-center hover-lift"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4 neon-glow`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the visionaries driving innovation and excellence at Mirafra Technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass neon-border rounded-xl overflow-hidden hover-lift cursor-pointer"
                onClick={handleClick}
              >
                <div className="h-64 bg-gradient-to-br from-green-400/20 to-blue-500/20">
                  <img  alt={`${leader.name} - ${leader.position}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595956553066-fe24a8c33395" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                  <p className="text-green-400 mb-2">{leader.position}</p>
                  <p className="text-gray-400 text-sm">{leader.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key milestones that shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              { year: '2009', title: 'Company Founded', description: 'Started with a vision to revolutionize semiconductor design services.' },
              { year: '2012', title: 'First Major Client', description: 'Secured partnership with leading automotive semiconductor company.' },
              { year: '2015', title: 'Global Expansion', description: 'Opened offices in Silicon Valley and expanded international presence.' },
              { year: '2018', title: 'Innovation Labs', description: 'Launched dedicated R&D facilities for next-generation technologies.' },
              { year: '2021', title: 'Industry Recognition', description: 'Received multiple awards for engineering excellence and innovation.' },
              { year: '2024', title: 'Future Forward', description: 'Continuing to lead the industry with cutting-edge solutions.' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="glass neon-border rounded-xl p-6 hover-lift">
                    <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full neon-glow flex-shrink-0"></div>
                <div className="flex-1"></div>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a team that's shaping the future of technology. Explore career opportunities at Mirafra.
            </p>
            <Button
              onClick={handleClick}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow text-white px-12 py-4 text-lg"
            >
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;