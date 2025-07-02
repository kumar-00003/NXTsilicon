import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const InHouseSiliconValidationLabPage = () => {
  const pageData = {
    title: 'In-House Silicon Validation Lab',
    heroSubtitle: "State-of-the-Art Facilities for Comprehensive Post-Silicon Validation.",
    overview: "Our In-House Silicon Validation Lab is equipped with advanced testing and measurement equipment to perform thorough post-silicon validation and characterization. We offer a controlled environment for functional testing, performance benchmarking, and reliability analysis, ensuring your ICs meet stringent quality standards and perform as expected in real-world applications.",
    keyBenefits: [
      { title: "Accurate Characterization", description: "Precise measurement of device parameters under various conditions." },
      { title: "Faster Debug Cycles", description: "Rapidly identify and resolve issues with dedicated lab resources." },
      { title: "Reduced Time-to-Production", description: "Streamline the validation process to accelerate product launch." }
    ],
    whatWeOffer: [
      'Access to High-Speed Oscilloscopes & Logic Analyzers',
      'Vector Network Analyzers (VNAs) & Spectrum Analyzers',
      'Programmable Power Supplies & Electronic Loads',
      'Thermal Chambers & Environmental Test Setups',
      'Custom Test Fixture Design & Fabrication',
      'Automated Test Script Development & Execution Environment',
      'ESD & Latch-up Testing Support'
    ],
    imageAlt: 'Modern electronics laboratory with various advanced testing equipment and workstations',
    departmentContactPath: '/contact?department=validation-lab'
  };

  return <ServicePageLayout {...pageData} />;
};

export default InHouseSiliconValidationLabPage;