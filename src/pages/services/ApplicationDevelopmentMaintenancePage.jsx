import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const ApplicationDevelopmentMaintenancePage = () => {
  const pageData = {
    title: 'Application Development & Maintenance',
    heroSubtitle: "Building, Modernizing, and Supporting Your Critical Business Applications.",
    overview: "We deliver end-to-end application development and maintenance services, creating high-quality, scalable, and resilient software solutions tailored to your specific business requirements. From custom web and mobile applications to legacy system modernization and ongoing support, we ensure your applications drive value and adapt to evolving needs.",
    keyBenefits: [
      { title: "Tailored Solutions", description: "Applications built to your exact specifications, addressing unique business challenges." },
      { title: "Future-Proof Technology", description: "Utilizing modern architectures and agile practices for long-term scalability." },
      { title: "Reliable Support", description: "Dedicated maintenance teams ensuring optimal performance and uptime." }
    ],
    whatWeOffer: [
      'Full-Stack Custom Web Application Development (React, Angular, Node.js, Python, Java)',
      'Native & Cross-Platform Mobile App Development (iOS, Android, React Native, Flutter)',
      'Legacy Application Modernization & Re-engineering',
      'Microservices Architecture & API Development',
      'Agile Development & DevOps Practices Integration',
      'Application Performance Monitoring & Optimization',
      'Comprehensive Application Maintenance & Support Services'
    ],
    imageAlt: 'Collaborative team of software developers working on computer screens',
    departmentContactPath: '/contact?department=app-dev-maintenance'
  };

  return <ServicePageLayout {...pageData} />;
};

export default ApplicationDevelopmentMaintenancePage;