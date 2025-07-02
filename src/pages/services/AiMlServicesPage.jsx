import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const AiMlServicesPage = () => {
  const pageData = {
    title: 'AI & Machine Learning',
    heroSubtitle: "Empowering Your Business with Intelligent AI & ML Solutions.",
    overview: "Our AI and Machine Learning services are designed to help you leverage the transformative power of artificial intelligence. We specialize in developing custom models, implementing cutting-edge NLP and computer vision solutions, and deploying robust MLOps pipelines to drive data-driven decision-making and automate complex processes.",
    keyBenefits: [
      { title: "Unlock Insights", description: "Gain deeper understanding from your data to make informed strategic decisions." },
      { title: "Boost Efficiency", description: "Automate tasks and optimize processes with intelligent algorithms." },
      { title: "Innovate Faster", description: "Develop new products and services powered by AI capabilities." }
    ],
    whatWeOffer: [
      'Custom AI/ML Model Development & Deployment',
      'Natural Language Processing (NLP) & Text Analytics',
      'Computer Vision & Image/Video Analysis',
      'Predictive Analytics & Forecasting Solutions',
      'Machine Learning Operations (MLOps) Implementation',
      'AI-Powered Automation & Process Optimization',
      'Data Strategy & AI Readiness Consulting'
    ],
    imageAlt: 'Futuristic AI brain interface with glowing neural connections',
    departmentContactPath: '/contact?department=ai-ml'
  };

  return <ServicePageLayout {...pageData} />;
};

export default AiMlServicesPage;