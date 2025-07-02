import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const SiliconValidationPage = () => {
  const pageData = {
    title: 'Silicon Validation',
    heroSubtitle: "Rigorous Post-Silicon Testing to Ensure Chip Functionality and Performance.",
    overview: "Our Silicon Validation services encompass a comprehensive suite of post-silicon testing activities to verify that your manufactured chips meet all functional, performance, and reliability specifications. From initial device bring-up and sanity testing to in-depth functional validation, performance characterization, and failure analysis, we ensure your silicon is ready for market.",
    keyBenefits: [
      { title: "Guaranteed Functionality", description: "Confirm that all features of your chip operate as designed." },
      { title: "Performance Assurance", description: "Verify that your silicon meets specified speed, power, and other performance targets." },
      { title: "Faster Time-to-Market", description: "Efficiently identify and resolve issues to accelerate product release." }
    ],
    whatWeOffer: [
      'First Silicon Bring-up & Basic Sanity Testing',
      'Comprehensive Functional Validation against Specifications',
      'Performance Characterization (Speed, Power, Signal Integrity)',
      'Electrical Parametric Testing across PVT (Process, Voltage, Temperature)',
      'Compliance & Interoperability Testing for Standard Interfaces',
      'Debug & Failure Analysis using Advanced Lab Equipment',
      'Reliability Testing & Stress Test Execution (HTOL, ESD, Latch-up)'
    ],
    imageAlt: 'Microscopic view of a silicon wafer with probes making contact for testing',
    departmentContactPath: '/contact?department=silicon-validation'
  };

  return <ServicePageLayout {...pageData} />;
};

export default SiliconValidationPage;