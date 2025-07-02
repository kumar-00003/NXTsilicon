import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const BenchCharacterizationPage = () => {
  const pageData = {
    title: 'Bench Characterization',
    heroSubtitle: "In-Depth Silicon Performance Analysis in a Controlled Lab Environment.",
    overview: "Our Bench Characterization services provide thorough analysis and validation of silicon performance under various operating conditions. Using state-of-the-art lab equipment, we conduct electrical validation, performance benchmarking, and stress testing to ensure your ICs meet design specifications and reliability standards before mass production.",
    keyBenefits: [
      { title: "Validated Performance", description: "Confirm device functionality and performance against datasheet specifications." },
      { title: "Risk Mitigation", description: "Identify potential issues and design marginalities early in the development cycle." },
      { title: "Data-Driven Insights", description: "Gain comprehensive understanding of device behavior across different conditions." }
    ],
    whatWeOffer: [
      'Electrical Parametric Validation (Voltage, Current, Timing)',
      'Functional Testing & Performance Benchmarking',
      'Power Consumption & Thermal Analysis',
      'Signal Integrity & Jitter Measurement',
      'Environmental Stress Testing (Temperature, Voltage Margining)',
      'Failure Analysis & Root Cause Debugging',
      'Compliance & Pre-Certification Testing Support'
    ],
    imageAlt: 'Electronics workbench setup with oscilloscope, signal generator, and device under test',
    departmentContactPath: '/contact?department=bench-characterization'
  };

  return <ServicePageLayout {...pageData} />;
};

export default BenchCharacterizationPage;