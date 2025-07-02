import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Heart, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import BenefitsSection from '@/components/careers/BenefitsSection';
import OpenPositions from '@/components/careers/OpenPositions';
import CultureSection from '@/components/careers/CultureSection';
import LifeAtMirafra from '@/components/careers/LifeAtMirafra';

const Careers = () => {
  const handleClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support.',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and skill development programs.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and generous time-off policies.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Star,
      title: 'Recognition & Rewards',
      description: 'Performance-based bonuses, stock options, and employee recognition programs.',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const openPositions = [
    {
      title: 'Senior ASIC Design Engineer',
      department: 'Engineering',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['Verilog', 'SystemVerilog', 'ASIC Design', 'Verification'],
      description: 'Lead ASIC design projects from specification to silicon validation.'
    },
    {
      title: 'Software Development Engineer',
      department: 'Software',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['C++', 'Python', 'Linux', 'Embedded Systems'],
      description: 'Develop embedded software solutions for next-generation products.'
    },
    {
      title: 'Verification Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['UVM', 'SystemVerilog', 'Verification', 'Protocols'],
      description: 'Design and implement verification environments for complex SoCs.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '6+ years',
      skills: ['Product Strategy', 'Market Analysis', 'Roadmap Planning'],
      description: 'Drive product strategy and roadmap for semiconductor solutions.'
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and provide resources to turn ideas into reality.',
      icon: '💡'
    },
    {
      title: 'Collaborative Environment',
      description: 'Cross-functional teams working together to achieve extraordinary results.',
      icon: '🤝'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'Building an inclusive workplace where everyone can thrive and contribute.',
      icon: '🌍'
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous learning and development opportunities for career advancement.',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Build the future of technology with us. Explore exciting career opportunities 
              and be part of a team that's shaping tomorrow's innovations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Button
              onClick={handleClick}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow text-white px-8 py-3 text-lg"
            >
              View All Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <BenefitsSection benefits={benefits} />
      <OpenPositions openPositions={openPositions} handleClick={handleClick} />
      <CultureSection culture={culture} />
      <LifeAtMirafra />

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-2xl p-12 pulse-glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of innovators and help shape the future of technology. 
              Your next career adventure starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleClick}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow text-white px-8 py-3"
              >
                Browse All Jobs
              </Button>
              <Button
                variant="outline"
                onClick={handleClick}
                className="neon-border text-green-400 hover:bg-green-400/10 px-8 py-3"
              >
                Submit Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;