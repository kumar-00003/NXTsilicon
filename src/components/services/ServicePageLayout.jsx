import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Info, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicePageLayout = ({ 
  title, 
  heroSubtitle, 
  overview,
  keyBenefits,
  whatWeOffer,
  imageAlt, 
  departmentContactPath = "/contact" 
}) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageLayout title={title} subtitle={heroSubtitle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass neon-border-primary rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="h-64 lg:h-80 rounded-xl overflow-hidden neon-shadow-primary">
                 <img  className="w-full h-full object-cover" alt={imageAlt || title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
            </div>
            <div className="lg:order-1">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold gradient-text mb-6 flex items-center"
              >
                <Info className="w-8 h-8 mr-3 text-primary" /> Service Overview
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-lg leading-relaxed mb-8"
              >
                {overview}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to={departmentContactPath}>
                  <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700/90 neon-glow-primary text-primary-foreground font-semibold px-8 py-3">
                    Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {keyBenefits && keyBenefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border-primary rounded-2xl p-8 lg:p-12"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold gradient-text mb-10 text-center flex items-center justify-center"
            >
              <Zap className="w-8 h-8 mr-3 text-blue-400" /> Key Benefits
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 bg-card/80 rounded-xl neon-shadow-sm-primary hover-lift transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary to-blue-600 mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {whatWeOffer && whatWeOffer.length > 0 && (
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border-primary rounded-2xl p-8 lg:p-12"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold gradient-text mb-10 text-center flex items-center justify-center"
            >
               <Target className="w-8 h-8 mr-3 text-purple-400" /> What We Offer
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatWeOffer.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-card/70 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
};

export default ServicePageLayout;