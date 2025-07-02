import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const DesignSignoffPage = () => {
  const pageData = {
    title: 'Design Signoff',
    heroSubtitle: "Ensuring Tape-Out Confidence with Rigorous Final IC Design Checks.",
    overview: "Our Design Signoff services provide the critical final verification steps before your chip design is committed to manufacturing (tape-out). We employ rigorous methodologies in Static Timing Analysis (STA), physical verification (DRC/LVS), power analysis, and formal verification to ensure your design meets all performance, power, and manufacturability requirements, minimizing the risk of costly silicon respins.",
    keyBenefits: [
      { title: "First-Pass Success", description: "Maximize the probability of working silicon on the first attempt." },
      { title: "Optimized PPA", description: "Ensure your design meets critical Power, Performance, and Area targets." },
      { title: "Reduced Manufacturing Risk", description: "Identify and fix potential DFM issues before tape-out." }
    ],
    whatWeOffer: [
      'Comprehensive Static Timing Analysis (STA) & Timing Closure',
      'Physical Verification: Design Rule Checking (DRC) & Layout Versus Schematic (LVS)',
      'Power Analysis: IR Drop, Electromigration (EM), & Power Integrity (PI)',
      'Formal Verification & Equivalence Checking',
      'Signal Integrity (SI) & Cross-Talk Analysis',
      'Full-Chip Integration & Tape-Out Checklist Review',
      'Low-Power Design Verification & Signoff'
    ],
    imageAlt: 'Magnified view of a GDSII layout showing intricate chip design details ready for signoff',
    departmentContactPath: '/contact?department=design-signoff'
  };

  return <ServicePageLayout {...pageData} />;
};

export default DesignSignoffPage;