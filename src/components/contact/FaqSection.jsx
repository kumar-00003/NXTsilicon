import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const FaqSection = () => {
  const handleClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. Most projects range from 3-12 months, with detailed timelines provided during initial consultation.'
    },
    {
      question: 'Do you offer support after project completion?',
      answer: 'Yes, we provide comprehensive post-project support including maintenance, updates, and technical assistance as part of our service packages.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We excel at collaborating with client teams and can integrate seamlessly with your existing development processes and tools.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve automotive, aerospace, healthcare, consumer electronics, industrial, and energy sectors with specialized expertise in each domain.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Quick answers to common questions about our services and processes.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass neon-border rounded-xl p-6 cursor-pointer hover-lift"
              onClick={handleClick}
            >
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;