import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Clock } from 'lucide-react';

const ContactInfo = () => {
    const handleClick = () => {
        toast({
            title: "🚧 Feature Coming Soon!",
            description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
    };
    
  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM PST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const departments = [
    { name: 'General Inquiries', email: 'info@mirafra.com' },
    { name: 'Sales & Business Development', email: 'sales@mirafra.com' },
    { name: 'Technical Support', email: 'support@mirafra.com' },
    { name: 'Careers & HR', email: 'careers@mirafra.com' },
    { name: 'Media & Press', email: 'press@mirafra.com' },
    { name: 'Partnerships', email: 'partnerships@mirafra.com' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="glass neon-border rounded-xl p-6">
        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 neon-glow">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
        <div className="space-y-2">
          {officeHours.map((schedule) => (
            <div key={schedule.day} className="flex justify-between items-center">
              <span className="text-gray-400">{schedule.day}</span>
              <span className="text-green-400">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass neon-border rounded-xl p-6">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 neon-glow">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Department Contacts</h3>
        <div className="space-y-3">
          {departments.map((dept) => (
            <div key={dept.name} className="border-b border-gray-700 pb-2 last:border-b-0">
              <div className="text-sm text-gray-400">{dept.name}</div>
              <button
                onClick={handleClick}
                className="text-green-400 hover:text-green-300 text-sm transition-colors"
              >
                {dept.email}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="glass neon-border rounded-xl p-6">
        <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-4 neon-glow">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">24/7 Emergency Support</h3>
        <p className="text-gray-400 mb-3">
          For critical issues requiring immediate attention, our emergency support team is available around the clock.
        </p>
        <Button
          onClick={handleClick}
          variant="outline"
          className="neon-border text-red-400 hover:bg-red-400/10"
        >
          Emergency Contact
        </Button>
      </div>
    </motion.div>
  );
};

export default ContactInfo;