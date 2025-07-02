import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const DesignVerificationPage = () => {
  const pageData = {
    title: 'Design Verification',
    heroSubtitle: "Ensuring First-Pass Silicon Success for Complex SoCs with Comprehensive Verification.",
    overview: "Our Design Verification services employ state-of-the-art methodologies like UVM and SystemVerilog to rigorously validate complex System-on-Chips (SoCs) and IP blocks. We focus on achieving comprehensive functional and code coverage, utilizing advanced techniques such as formal verification and assertion-based verification to ensure your design is robust and functions as intended, minimizing risks and accelerating time-to-market.",
    keyBenefits: [
      { title: "Reduced Silicon Respins", description: "Catch bugs pre-silicon to avoid costly manufacturing iterations." },
      { title: "Increased Design Confidence", description: "Thorough verification ensures your design meets all specifications." },
      { title: "Faster Time-to-Market", description: "Efficient verification strategies accelerate the overall design cycle." }
    ],
    whatWeOffer: [
      'UVM & SystemVerilog Based Testbench Architecture & Development',
      'IP, Sub-system, & SoC Level Functional Verification',
      'Formal Verification & Model Checking',
      'Assertion-Based Verification (ABV) & SVA Development',
      'Code & Functional Coverage Closure Strategies',
      'Gate-Level Simulation & Power-Aware Verification',
      'Verification IP (VIP) Integration & Customization'
    ],
    imageAlt: 'Abstract representation of a complex SoC verification environment with multiple testbenches',
    departmentContactPath: '/contact?department=design-verification'
  };

  return <ServicePageLayout {...pageData} />;
};

export default DesignVerificationPage;