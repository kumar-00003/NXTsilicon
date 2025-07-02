import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const AnalogMixedSignalPage = () => {
  const pageData = {
    title: 'Analog & Mixed-Signal Design',
    heroSubtitle: "Precision Engineering for High-Performance Analog and Mixed-Signal ICs.",
    overview: "We provide expert design and verification services for complex analog and mixed-signal (AMS) integrated circuits. Our team excels in delivering high-performance IPs and SoCs, covering everything from high-speed SerDes and data converters to power management ICs (PMICs) and custom RF solutions, ensuring your silicon meets the most demanding specifications.",
    keyBenefits: [
      { title: "Optimized Performance", description: "Achieve superior signal integrity and power efficiency for your AMS designs." },
      { title: "Reduced Risk", description: "Comprehensive verification methodologies minimize silicon respins." },
      { title: "Faster Time-to-Market", description: "Efficient design flows and experienced team accelerate your product development." }
    ],
    whatWeOffer: [
      'High-Speed SerDes Design & Verification (PCIe, Ethernet, USB)',
      'Advanced Data Converters (ADC/DAC) Design',
      'Phase-Locked Loops (PLLs) & Clocking Solutions',
      'Power Management ICs (PMICs) – LDOs, Buck/Boost Converters',
      'RF & Wireless IP Design (LNAs, PAs, Mixers)',
      'Custom Analog IP Development & Integration',
      'AMS Verification using UVM-AMS and Real Number Modeling'
    ],
    imageAlt: 'Intricate schematic of an analog mixed-signal integrated circuit',
    departmentContactPath: '/contact?department=ams-design'
  };

  return <ServicePageLayout {...pageData} />;
};

export default AnalogMixedSignalPage;