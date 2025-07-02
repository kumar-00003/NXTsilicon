import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const FpgaDesignPage = () => {
  const pageData = {
    title: 'FPGA Design',
    heroSubtitle: "Rapid Prototyping and Flexible Hardware Solutions with End-to-End FPGA Expertise.",
    overview: "Our FPGA Design services offer a fast track from concept to hardware realization. We provide complete solutions, from architecture definition and RTL coding to IP integration, timing closure, and system validation. FPGAs are ideal for rapid prototyping, low-volume production, and applications requiring reconfigurable hardware, and we help you leverage their full potential.",
    keyBenefits: [
      { title: "Accelerated Prototyping", description: "Quickly validate algorithms and system designs in real hardware." },
      { title: "Hardware Reconfigurability", description: "Adapt and update hardware functionality in the field post-deployment." },
      { title: "Faster Time-to-Market", description: "Reduce development cycles compared to ASIC design for specific applications." }
    ],
    whatWeOffer: [
      'FPGA Architecture Definition & Feasibility Analysis',
      'RTL Coding (VHDL, Verilog, SystemVerilog) & Logic Design',
      'Third-Party IP Core Integration & Custom IP Development',
      'High-Speed Interface Design (PCIe, DDR, Ethernet)',
      'Timing Closure, Synthesis & Place-and-Route Optimization',
      'FPGA Board Design & System Integration Support',
      'FPGA-to-ASIC Conversion Planning & Execution'
    ],
    imageAlt: 'Close-up of a complex FPGA chip mounted on a development board with peripherals',
    departmentContactPath: '/contact?department=fpga-design'
  };

  return <ServicePageLayout {...pageData} />;
};

export default FpgaDesignPage;