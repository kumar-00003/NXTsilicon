import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cog, Code, ArrowRight, CheckCircle, Briefcase, Server, ShieldCheck, Layers, GitBranch, Code2, Database, Cloud, Wrench, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const toKebabCase = (str) => str.toLowerCase().replace(/ & /g, '-and-').replace(/\//g, '-').replace(/ /g, '-').replace(/,/g, '').replace(/\u200B/g, '');

const Services = () => {
  const handleClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const servicesData = {
    Semiconductors: {
      id: 'semiconductors',
      icon: Cpu,
      gradient: 'from-blue-500 to-purple-600',
      description: 'Precision-engineered semiconductor solutions from concept to silicon, ensuring optimal performance, power, and area (PPA) for next-generation chips.',
      items: [
        'Analog and mixed-signal', 'ATE', 'Bench characterization', 'Design verification', 'DFT', 'FPGA design', 'In-house silicon validation lab', 'Physical design', 'Prototyping and Emulation', 'RTL design', 'Design Signoff', 'Silicon validation', 'Synthesis and STA'
      ],
      image: 'Advanced semiconductor chip design and manufacturing facility'
    },
    Embedded: {
      id: 'embedded',
      icon: Cog,
      gradient: 'from-green-500 to-teal-600',
      description: 'Comprehensive embedded systems development, from bare-metal programming to full OS customization, ensuring robust and secure device performance.',
      items: [
        'Bare metal programming', 'Board support package', 'CI/CD', 'Device drivers', 'Diagnostics', 'OS porting and customization', 'Cyber security', 'Verification and validation'
      ],
      image: 'Modern engineering laboratory with embedded systems development tools'
    },
    Software: {
      id: 'software',
      icon: Code2,
      gradient: 'from-orange-500 to-red-600',
      description: 'End-to-end software engineering services, including AI/ML, cloud, and big data solutions, to build scalable and intelligent applications.',
      items: [
        'Data Analytics, AI and Machine Learning', 'Cloud Architecture and Engineering', 'Salesforce Implementation and Support​', 'Application Development and Maintenance', 'Quality Assurance', 'IT Infrastructure', 'Engineering and Technical Services'
      ],
      image: 'Software development team collaborating in a modern office environment'
    }
  };
  
  const serviceCategories = [
    {
      name: "Semiconductor Services",
      themeIcon: Cpu,
      themeGradient: servicesData.Semiconductors.gradient,
      description: "Cutting-edge solutions for the entire semiconductor lifecycle, from design to validation.",
      subcategories: [
        { 
          name: "Design & Verification", 
          icon: Layers,
          items: servicesData.Semiconductors.items.filter(item => ['Analog and mixed-signal', 'Design verification', 'RTL design', 'FPGA design'].includes(item))
        },
        { 
          name: "Implementation & Signoff", 
          icon: GitBranch,
          items: servicesData.Semiconductors.items.filter(item => ['Physical design', 'Synthesis and STA', 'Design Signoff'].includes(item))
        },
        { 
          name: "Test & Validation", 
          icon: CheckSquare,
          items: servicesData.Semiconductors.items.filter(item => ['ATE', 'Bench characterization', 'DFT', 'In-house silicon validation lab', 'Silicon validation', 'Prototyping and Emulation'].includes(item))
        }
      ]
    },
    {
      name: "Embedded Systems",
      themeIcon: Cog,
      themeGradient: servicesData.Embedded.gradient,
      description: "Robust development for embedded hardware and software, ensuring reliability and performance.",
      subcategories: [
        { 
          name: "Firmware & Drivers", 
          icon: Code,
          items: servicesData.Embedded.items.filter(item => ['Bare metal programming', 'Device drivers', 'Board support package'].includes(item))
        },
        { 
          name: "OS & Platform", 
          icon: Server,
          items: servicesData.Embedded.items.filter(item => ['OS porting and customization', 'CI/CD', 'Diagnostics'].includes(item))
        },
        { 
          name: "Security & V&V", 
          icon: ShieldCheck,
          items: servicesData.Embedded.items.filter(item => ['Cyber security', 'Verification and validation'].includes(item))
        }
      ]
    },
    {
      name: "Software Engineering",
      themeIcon: Code2,
      themeGradient: servicesData.Software.gradient,
      description: "Innovative software solutions to power digital transformation and business growth.",
      subcategories: [
        { 
          name: "AI, Data & Cloud", 
          icon: Cloud,
          items: servicesData.Software.items.filter(item => ['Data Analytics, AI and Machine Learning', 'Cloud Architecture and Engineering'].includes(item))
        },
        { 
          name: "Application Services", 
          icon: Briefcase,
          items: servicesData.Software.items.filter(item => ['Salesforce Implementation and Support​', 'Application Development and Maintenance', 'Quality Assurance'].includes(item))
        },
        { 
          name: "Infrastructure & Technical", 
          icon: Wrench,
          items: servicesData.Software.items.filter(item => ['IT Infrastructure', 'Engineering and Technical Services'].includes(item))
        }
      ]
    }
  ];


  return (
    <PageLayout title="Our Services" subtitle="Navigating the technological horizon with precision-engineered solutions that set new standards.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            className="glass neon-border-primary rounded-2xl p-8 lg:p-12"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8">
              <div className={`w-16 h-16 bg-gradient-to-r ${category.themeGradient} rounded-xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0 neon-glow-primary`}>
                <category.themeIcon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
                <p className="text-muted-foreground mt-1">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {category.subcategories.map((subcategory, subIndex) => (
                <motion.div
                  key={subcategory.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (subIndex * 0.1) + 0.2, duration: 0.4 }}
                  className="bg-card/80 p-6 rounded-xl neon-shadow-sm-primary hover-lift transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center mb-4">
                     {subcategory.icon && <subcategory.icon className="w-6 h-6 text-primary mr-3 flex-shrink-0" />}
                    <h3 className="text-xl font-semibold text-primary">{subcategory.name}</h3>
                  </div>
                  <ul className="space-y-2.5 flex-grow">
                    {subcategory.items.map((item) => (
                      <li key={item} className="flex items-start space-x-2.5">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <Link to={`/services/${toKebabCase(item)}`} className="text-foreground/90 hover:text-primary transition-colors text-sm leading-normal">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
      
      <section className="py-20 mt-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border-primary rounded-2xl p-12 pulse-glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with us to leverage our expertise and accelerate your next groundbreaking project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleClick}
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700/90 neon-glow-primary text-primary-foreground px-8 py-3 text-lg"
              >
                Request Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={handleClick}
                className="neon-border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;