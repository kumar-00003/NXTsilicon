import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const SalesforceImplementationSupportPage = () => {
  const pageData = {
    title: 'Salesforce Implementation & Support',
    heroSubtitle: "Maximizing Your CRM Investment with Expert Salesforce Solutions.",
    overview: "Our Salesforce services cover the full spectrum, from strategic implementation and custom development to ongoing support and optimization. We help you leverage Sales Cloud, Service Cloud, Marketing Cloud, and other Salesforce products to streamline operations, enhance customer relationships, and drive business growth. Our certified consultants ensure your Salesforce instance is tailored to your unique needs.",
    keyBenefits: [
      { title: "Streamlined Operations", description: "Automate sales, service, and marketing processes for increased efficiency." },
      { title: "Enhanced Customer Insights", description: "Gain a 360-degree view of your customers to personalize interactions." },
      { title: "Improved ROI", description: "Maximize the value of your Salesforce investment with expert configuration and support." }
    ],
    whatWeOffer: [
      'Salesforce Sales Cloud, Service Cloud, & Marketing Cloud Implementation',
      'Custom Apex, Visualforce, & Lightning Web Component (LWC) Development',
      'Salesforce Data Migration, Integration with Third-Party Systems (e.g., ERP, Marketing Automation)',
      'Salesforce Administration, Ongoing Support, & Managed Services',
      'Custom AppExchange App Development & Deployment',
      'User Training, Adoption Strategies, & Change Management',
      'Salesforce CPQ (Configure, Price, Quote) Implementation'
    ],
    imageAlt: 'Salesforce cloud logo surrounded by icons representing various business processes',
    departmentContactPath: '/contact?department=salesforce-services'
  };

  return <ServicePageLayout {...pageData} />;
};

export default SalesforceImplementationSupportPage;