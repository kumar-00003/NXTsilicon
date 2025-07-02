import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const SoftwareTestingPage = () => {
  const pageData = {
    title: 'Software Testing & QA',
    heroSubtitle: "Ensuring Quality, Reliability, and Performance for Your Software Applications.",
    overview: "Our Software Testing and Quality Assurance (QA) services are designed to help you deliver robust, reliable, and high-performing software. We offer a full range of testing solutions, including manual and automated testing, performance testing, security testing, and API testing. Our goal is to identify defects early, ensure compliance with requirements, and enhance the overall user experience of your applications.",
    keyBenefits: [
      { title: "Reduced Defects", description: "Identify and fix bugs early in the lifecycle, lowering development costs." },
      { title: "Enhanced User Experience", description: "Deliver smooth, intuitive, and error-free applications." },
      { title: "Increased Confidence", description: "Launch your software with assurance in its quality and reliability." }
    ],
    whatWeOffer: [
      'Comprehensive Test Planning & Strategy Development',
      'Manual Testing: Functional, Regression, Usability, Compatibility',
      'Test Automation: Web (Selenium, Cypress), Mobile (Appium), API (RestAssured, Postman)',
      'Performance, Load, & Stress Testing',
      'Security Testing: Vulnerability Assessment & Penetration Testing',
      'API & Web Services Testing (Functional & Non-Functional)',
      'Mobile Application Testing (iOS, Android, Hybrid)',
      'Integration with CI/CD Pipelines for Continuous Testing'
    ],
    imageAlt: 'Software testing concept with a checklist, magnifying glass, and bug icons',
    departmentContactPath: '/contact?department=software-testing'
  };

  return <ServicePageLayout {...pageData} />;
};

export default SoftwareTestingPage;