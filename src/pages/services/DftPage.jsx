import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const DftPage = () => {
  const pageData = {
    title: 'Design for Test (DFT)',
    heroSubtitle: "Ensuring High-Quality Manufacturing with Integrated IC Testability Features.",
    overview: "Our Design for Test (DFT) services focus on embedding testability features directly into your Integrated Circuit (IC) design. By incorporating techniques like scan insertion, ATPG, BIST, and JTAG, we ensure your chips can be thoroughly tested during manufacturing, leading to higher yields, improved reliability, and reduced production costs. We help you achieve comprehensive fault coverage and simplify diagnosis.",
    keyBenefits: [
      { title: "Improved Test Coverage", description: "Achieve high fault detection capabilities for complex IC designs." },
      { title: "Reduced Manufacturing Costs", description: "Lower test time and improve yield, leading to cost savings." },
      { title: "Enhanced Product Quality", description: "Ensure greater reliability and fewer field returns through thorough testing." }
    ],
    whatWeOffer: [
      'Scan Insertion, Compression, & Automatic Test Pattern Generation (ATPG)',
      'Memory Built-In Self-Test (MBIST) & Repair Implementation',
      'Logic Built-In Self-Test (LBIST) Solutions',
      'Boundary Scan (JTAG/IEEE 1149.1) Implementation & Test',
      'Hierarchical DFT Architectures for Complex SoCs',
      'DFT Rule Checking & Testability Analysis',
      'Post-Silicon Test Pattern Diagnosis & Yield Improvement Support'
    ],
    imageAlt: 'Integrated circuit design highlighting DFT scan chains and BIST structures',
    departmentContactPath: '/contact?department=dft-services'
  };

  return <ServicePageLayout {...pageData} />;
};

export default DftPage;