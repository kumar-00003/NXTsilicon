import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const SoftwareDevelopmentPage = () => {
  const pageData = {
    title: 'Custom Software Development',
    heroSubtitle: "Building Tailored Software Solutions to Meet Your Unique Business Needs.",
    overview: "Our Custom Software Development services focus on creating high-quality, scalable, and maintainable software applications designed specifically for your organization. From full-stack web development and desktop applications to complex embedded software and firmware, we leverage agile methodologies and modern technologies to deliver solutions that drive efficiency, innovation, and competitive advantage.",
    keyBenefits: [
      { title: "Tailored Functionality", description: "Solutions built to your exact requirements, addressing specific challenges." },
      { title: "Scalability & Flexibility", description: "Architectures designed to grow with your business and adapt to future needs." },
      { title: "Improved Efficiency", description: "Automate processes and streamline workflows with custom-built tools." }
    ],
    whatWeOffer: [
      'Full-Stack Web Application Development (React, Angular, Vue.js, Node.js, Python, Java, .NET)',
      'Enterprise Desktop Application Development',
      'Embedded Software & Firmware Development (C, C++, RTOS)',
      'API Design, Development, & Integration Services',
      'Cloud-Native Application Development (Microservices, Serverless)',
      'Agile Development Methodologies & DevOps Practices',
      'Ongoing Software Maintenance, Support, & Enhancement'
    ],
    imageAlt: 'Software developer working on a multi-monitor setup with lines of code visible',
    departmentContactPath: '/contact?department=software-development'
  };

  return <ServicePageLayout {...pageData} />;
};

export default SoftwareDevelopmentPage;