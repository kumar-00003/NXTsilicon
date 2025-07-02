import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const RtlDesignPage = () => {
  const pageData = {
    title: 'RTL Design',
    heroSubtitle: "High-Quality Register-Transfer Level Design for Optimal PPA.",
    overview: "Our RTL Design services focus on creating efficient and robust digital logic designs using Hardware Description Languages (HDLs) like Verilog, VHDL, and SystemVerilog. We specialize in micro-architecture design, IP integration, and adherence to best practices for linting, Clock Domain Crossing (CDC) analysis, and low-power techniques, ensuring your design is optimized for Power, Performance, and Area (PPA) and ready for synthesis.",
    keyBenefits: [
      { title: "Optimized PPA", description: "Achieve superior power, performance, and area characteristics for your digital designs." },
      { title: "High-Quality Code", description: "Deliver well-structured, maintainable, and synthesizable RTL code." },
      { title: "Reduced Design Risks", description: "Minimize issues through rigorous CDC analysis and adherence to design rules." }
    ],
    whatWeOffer: [
      'Digital Micro-architecture Design & Specification',
      'RTL Coding in Verilog, VHDL, & SystemVerilog',
      'Third-Party IP Integration & Custom IP Block Design',
      'Linting, Clock Domain Crossing (CDC), & Reset Domain Crossing (RDC) Analysis',
      'Advanced Low-Power Design Techniques (Clock Gating, Power Gating)',
      'Synthesis Preparation & Formal Verification Support',
      'RTL Design for Testability (DFT) Considerations'
    ],
    imageAlt: 'Block diagram representing a complex digital logic design at the Register-Transfer Level',
    departmentContactPath: '/contact?department=rtl-design'
  };

  return <ServicePageLayout {...pageData} />;
};

export default RtlDesignPage;