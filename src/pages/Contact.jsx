import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import PageLayout from '@/components/PageLayout';
import ContactMethods from '@/components/contact/ContactMethods';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import FaqSection from '@/components/contact/FaqSection';

const Contact = () => {
    const handleClick = () => {
        toast({
            title: "🚧 Feature Coming Soon!",
            description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
    };
  
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Ready to start your next project? Get in touch with our team of experts and let's discuss how we can help bring your vision to life."
    >
      <ContactMethods />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <FaqSection />

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-2xl p-12 pulse-glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and explore how we can help 
              bring your technology vision to life.
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
                Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;