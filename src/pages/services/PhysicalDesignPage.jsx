import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const PhysicalDesignPage = () => {
  const pageData = {
    title: 'Physical Design',
    heroSubtitle: "Transforming RTL Netlists into Optimized GDSII Layouts for Manufacturing.",
    overview: "Our Physical Design services bridge the gap between logical design (RTL) and silicon manufacturing. We take your synthesized netlist and meticulously craft an optimized GDSII layout, focusing on floorplanning, power planning, placement, routing, and clock tree synthesis (CTS). Our expertise ensures your chip meets PPA (Power, Performance, Area) targets and is ready for successful tape-out.",
    keyBenefits: [
      { title: "Optimized PPA", description: "Achieve the best balance of power, performance, and area for your IC." },
      { title: "Manufacturability", description: "Design layouts that adhere to foundry rules and ensure high yield." },
      { title: "Timing Closure", description: "Meet critical timing requirements through expert CTS and routing strategies." }
    ],
    whatWeOffer: [
      'Hierarchical Floorplanning & Power Grid Design (PGN)',
      'Advanced Placement & Routing Solutions',
      'Clock Tree Synthesis (CTS) & Optimization',
      'Static Timing Analysis (STA) Integration within Physical Design Flow',
      'Physical Verification (DRC, LVS, Antenna, ERC) & DFM Checks',
      'Low Power Implementation Techniques (Multi-Vt, Power Gating, Voltage Islands)',
      'Signal Integrity (SI) & Electromigration/IR Drop (EM/IR) Analysis & Fixing'
    ],
    imageAlt: 'Zoomed-in GDSII layout view of an integrated circuit showing intricate routing and cell placement',
    departmentContactPath: '/contact?department=physical-design'
  };

  return <ServicePageLayout {...pageData} />;
};

export default PhysicalDesignPage;