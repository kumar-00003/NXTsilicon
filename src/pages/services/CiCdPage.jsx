import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const CiCdPage = () => {
  const pageData = {
    title: 'CI/CD for Embedded Systems',
    heroSubtitle: "Automating Build, Test, and Deployment to Accelerate Embedded Software Delivery.",
    overview: "We specialize in implementing Continuous Integration and Continuous Deployment (CI/CD) pipelines tailored for embedded systems. Our solutions automate the complexities of building, testing (including Hardware-in-the-Loop), and deploying firmware, enabling faster development cycles, improved code quality, and more reliable releases for your embedded products.",
    keyBenefits: [
      { title: "Faster Releases", description: "Automate build and deployment processes to significantly reduce time-to-market." },
      { title: "Improved Quality", description: "Integrate automated testing, including HIL, to catch bugs earlier." },
      { title: "Increased Efficiency", description: "Streamline development workflows and reduce manual intervention." }
    ],
    whatWeOffer: [
      'CI/CD Pipeline Design & Implementation (Jenkins, GitLab CI, GitHub Actions)',
      'Automated Build Environment Setup for Cross-Compilation',
      'Hardware-in-the-Loop (HIL) Test Automation Integration',
      'Static & Dynamic Code Analysis Tool Integration',
      'Automated Firmware Deployment & Over-The-Air (OTA) Update Solutions',
      'Containerization of Build Tools & Test Environments (Docker)',
      'Version Control & Artifact Management Strategies'
    ],
    imageAlt: 'Flowchart of a CI/CD pipeline specifically for embedded systems development',
    departmentContactPath: '/contact?department=embedded-cicd'
  };

  return <ServicePageLayout {...pageData} />;
};

export default CiCdPage;