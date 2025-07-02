import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const ItInfrastructurePage = () => {
  const pageData = {
    title: 'IT Infrastructure Services',
    heroSubtitle: "Building and Managing Resilient, Secure, and Optimized IT Foundations.",
    overview: "Our IT Infrastructure services focus on designing, implementing, and managing robust and scalable IT environments that underpin your business operations. From on-premise data centers to hybrid cloud solutions and comprehensive cybersecurity, we ensure your infrastructure is agile, secure, and aligned with your strategic goals, supporting growth and innovation.",
    keyBenefits: [
      { title: "Enhanced Reliability", description: "Ensure high availability and business continuity with resilient infrastructure." },
      { title: "Improved Security", description: "Protect critical assets and data with multi-layered security solutions." },
      { title: "Operational Excellence", description: "Optimize IT operations for efficiency, performance, and cost-effectiveness." }
    ],
    whatWeOffer: [
      'Network Design, Implementation, & Optimization (LAN, WAN, SD-WAN)',
      'Data Center Design, Build, & Management (On-Premise & Co-location)',
      'Comprehensive Cybersecurity Solutions (Firewalls, IDS/IPS, SIEM, Endpoint Protection)',
      'Cloud Infrastructure Management (IaaS, PaaS on AWS, Azure, GCP)',
      'IT Support, Helpdesk, & Managed Services',
      'Disaster Recovery Planning & Business Continuity Solutions',
      'Unified Communications & Collaboration Systems'
    ],
    imageAlt: 'Network server racks in a data center with glowing blue lights and cable connections',
    departmentContactPath: '/contact?department=it-infrastructure'
  };

  return <ServicePageLayout {...pageData} />;
};

export default ItInfrastructurePage;