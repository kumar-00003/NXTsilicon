import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const SynthesisAndStaPage = () => {
  const pageData = {
    title: 'Synthesis & Static Timing Analysis (STA)',
    heroSubtitle: "Optimizing Your IC Design from RTL to Gate-Level Netlist for Timing and Power.",
    overview: "Our Synthesis and Static Timing Analysis (STA) services are crucial for transforming your Register-Transfer Level (RTL) code into an optimized gate-level netlist that meets timing, power, and area constraints. We utilize industry-standard tools and methodologies for logic synthesis, develop precise SDC constraints, and perform rigorous STA to ensure your design is ready for physical implementation and achieves desired performance.",
    keyBenefits: [
      { title: "Timing Closure", description: "Ensure your design meets critical timing paths and clock frequency targets." },
      { title: "Optimized Netlist", description: "Generate efficient gate-level netlists for better PPA (Power, Performance, Area)." },
      { title: "Reduced Iterations", description: "Identify and fix timing violations early, minimizing costly design iterations." }
    ],
    whatWeOffer: [
      'Advanced Logic Synthesis & Optimization for PPA',
      'SDC (Synopsys Design Constraints) Development & Validation',
      'Comprehensive Static Timing Analysis (STA) for Multiple Corners & Modes',
      'Timing Closure Strategies & ECO (Engineering Change Order) Implementation',
      'Power Optimization Techniques during Synthesis',
      'Gate-Level Simulation (GLS) Support & Debug',
      'Formal Equivalence Checking between RTL & Netlist'
    ],
    imageAlt: 'Graph illustrating timing analysis paths and slack in a digital integrated circuit',
    departmentContactPath: '/contact?department=synthesis-sta'
  };

  return <ServicePageLayout {...pageData} />;
};

export default SynthesisAndStaPage;