import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const AtePage = () => {
  const pageData = {
    title: 'ATE Services',
    heroSubtitle: "Efficient Silicon Bring-Up and Production Testing with Automated Test Equipment.",
    overview: "Our Automated Test Equipment (ATE) services provide comprehensive solutions for silicon validation, from initial bring-up to high-volume production testing. We specialize in test program development, load board design, and yield optimization, ensuring your devices meet quality standards while minimizing test time and cost.",
    keyBenefits: [
      { title: "Faster Validation", description: "Accelerate silicon bring-up and characterization cycles with optimized test programs." },
      { title: "Improved Yield", description: "Enhance manufacturing yield through effective test strategies and data analysis." },
      { title: "Reduced Test Costs", description: "Optimize test time and resource utilization for cost-effective production." }
    ],
    whatWeOffer: [
      'Test Program Development for Major ATE Platforms (Advantest, Teradyne)',
      'Load Board & Probe Card Design and Development',
      'Comprehensive Characterization Testing & Data Analysis',
      'High-Volume Production Test Solutions',
      'Test Time Reduction & Optimization Strategies',
      'Yield Analysis, Enhancement & Failure Diagnosis',
      'ATE Hardware & Software Integration'
    ],
    imageAlt: 'Automated Test Equipment (ATE) system with a robotic arm handling silicon wafers',
    departmentContactPath: '/contact?department=ate-services'
  };

  return <ServicePageLayout {...pageData} />;
};

export default AtePage;