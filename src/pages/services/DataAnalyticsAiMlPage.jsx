import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const DataAnalyticsAiMlPage = () => {
  const pageData = {
    title: 'Data Analytics, AI & Machine Learning',
    heroSubtitle: "Transforming Data into Intelligence, Driving Innovation and Growth.",
    overview: "Leverage the power of your data with our advanced analytics, AI, and machine learning services. We help businesses extract actionable insights, automate decision-making, and create innovative products and services. From predictive modeling to custom AI solutions, we turn complex data challenges into strategic opportunities.",
    keyBenefits: [
      { title: "Data-Driven Decisions", description: "Make smarter, faster decisions based on robust data analysis and predictive insights." },
      { title: "Operational Efficiency", description: "Automate processes, optimize resource allocation, and reduce costs with AI." },
      { title: "Competitive Advantage", description: "Uncover new market opportunities and enhance customer experiences." }
    ],
    whatWeOffer: [
      'Advanced Predictive Modeling & Forecasting',
      'Natural Language Processing (NLP) & Text Analytics Solutions',
      'Computer Vision & Image/Video Recognition Systems',
      'Custom AI & Machine Learning Algorithm Development',
      'Big Data Analytics, Processing, & Visualization',
      'Machine Learning Operations (MLOps) & AI Model Management',
      'AI Strategy, Ethics, & Governance Consulting'
    ],
    imageAlt: 'Abstract visualization of an AI brain processing complex data streams and neural networks',
    departmentContactPath: '/contact?department=data-ai-ml'
  };

  return <ServicePageLayout {...pageData} />;
};

export default DataAnalyticsAiMlPage;