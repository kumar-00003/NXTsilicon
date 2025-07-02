import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const QualityAssurancePage = () => {
  const pageData = {
    title: 'Quality Assurance',
    heroSubtitle: "Ensuring Flawless Software Performance and Exceptional User Experience.",
    overview: "Our Quality Assurance (QA) services are dedicated to ensuring your software applications meet the highest standards of quality, reliability, and performance. We offer a comprehensive suite of testing services, from manual and automated testing to performance and security assessments, helping you deliver flawless products and delightful user experiences, minimizing risks and enhancing brand reputation.",
    keyBenefits: [
      { title: "Reduced Defects", description: "Identify and resolve issues early in the development lifecycle, minimizing costly fixes later." },
      { title: "Improved User Satisfaction", description: "Deliver reliable and intuitive applications that meet user expectations." },
      { title: "Enhanced Product Quality", description: "Ensure your software is robust, secure, and performs optimally under various conditions." }
    ],
    whatWeOffer: [
      'Comprehensive Test Strategy & Planning',
      'Manual Testing (Functional, Regression, Exploratory, Usability)',
      'Test Automation (Web, Mobile, API using Selenium, Appium, Cypress, Playwright)',
      'Performance, Load, & Stress Testing',
      'Security Testing (Vulnerability Assessment, Penetration Testing)',
      'API & Web Services Testing',
      'Mobile Application Testing (iOS & Android, Cross-Platform)',
      'Continuous Testing Integration within DevOps Pipelines'
    ],
    imageAlt: 'Quality assurance concept with a magnifying glass over a checklist and code',
    departmentContactPath: '/contact?department=qa-testing'
  };

  return <ServicePageLayout {...pageData} />;
};

export default QualityAssurancePage;