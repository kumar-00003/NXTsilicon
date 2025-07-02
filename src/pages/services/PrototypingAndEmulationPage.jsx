import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const PrototypingAndEmulationPage = () => {
  const pageData = {
    title: 'Prototyping & Emulation',
    heroSubtitle: "Accelerating Pre-Silicon Verification and Software Development with Advanced Platforms.",
    overview: "Our Prototyping and Emulation services enable early validation of complex SoC designs and facilitate pre-silicon software development. By leveraging FPGA-based prototyping and hardware emulation platforms (like Palladium or Zebu), we help you identify issues sooner, reduce verification cycles, and accelerate your overall time-to-market for new silicon products.",
    keyBenefits: [
      { title: "Early Bug Detection", description: "Find and fix hardware and software issues before silicon tape-out." },
      { title: "Reduced Verification Time", description: "Achieve faster runtimes compared to simulation for system-level validation." },
      { title: "Parallel Software Development", description: "Enable software teams to develop and test on near-real hardware." }
    ],
    whatWeOffer: [
      'FPGA-Based Prototyping Platform Development & Bring-up',
      'Hardware Emulation Environment Setup & Support (Cadence Palladium, Synopsys Zebu)',
      'System-Level Validation & Use-Case Testing on Prototypes/Emulators',
      'Early Software/Firmware Development & Integration',
      'Performance Validation & Bottleneck Analysis',
      'Hybrid Emulation & Co-simulation Setups',
      'Debugging & Trace Capabilities for In-Depth Analysis'
    ],
    imageAlt: 'Large-scale hardware emulation system with multiple interconnected boards in a data center environment',
    departmentContactPath: '/contact?department=prototyping-emulation'
  };

  return <ServicePageLayout {...pageData} />;
};

export default PrototypingAndEmulationPage;