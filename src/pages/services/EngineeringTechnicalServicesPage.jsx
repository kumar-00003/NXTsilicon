import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const EngineeringTechnicalServicesPage = () => {
  const pageData = {
    title: 'Engineering & Technical Services',
    heroSubtitle: "Specialized Talent and Expertise to Accelerate Your Complex Engineering Projects.",
    overview: "Our Engineering and Technical Services provide access to highly skilled professionals and domain-specific expertise to support your most challenging projects. Whether you need staff augmentation to bridge skill gaps, project-based teams for specific deliverables, or technical consulting to navigate complex engineering problems, we deliver the talent and solutions to drive innovation and ensure project success.",
    keyBenefits: [
      { title: "Access to Expertise", description: "Leverage specialized engineering skills and knowledge on demand." },
      { title: "Increased Flexibility", description: "Scale your team up or down quickly to meet project requirements." },
      { title: "Accelerated Innovation", description: "Bridge internal skill gaps and bring fresh perspectives to complex challenges." }
    ],
    whatWeOffer: [
      'Engineering Staff Augmentation & Talent Sourcing (Onsite & Remote)',
      'Dedicated Project-Based Engineering Teams',
      'Domain-Specific Technical Consulting (Semiconductors, Embedded, Software)',
      'Product Design & Development Support (Concept to Production)',
      'CAD/CAM/CAE Services & Simulation Expertise',
      'Technical Documentation, Training Material Development & Delivery',
      'Reverse Engineering & Obsolescence Management'
    ],
    imageAlt: 'Team of engineers collaborating over technical blueprints and 3D models',
    departmentContactPath: '/contact?department=engineering-technical-services'
  };

  return <ServicePageLayout {...pageData} />;
};

export default EngineeringTechnicalServicesPage;