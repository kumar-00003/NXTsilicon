import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const BareMetalProgrammingPage = () => {
  const pageData = {
    title: 'Bare Metal Programming',
    heroSubtitle: "Optimized Low-Level Firmware for Direct Hardware Control and Maximum Performance.",
    overview: "Our Bare Metal Programming services focus on developing highly efficient, low-level firmware that interacts directly with hardware components. We craft lean and robust code for microcontrollers and embedded systems, ensuring optimal performance, minimal overhead, and precise control for resource-constrained environments.",
    keyBenefits: [
      { title: "Peak Performance", description: "Achieve maximum processing speed and responsiveness by eliminating OS overhead." },
      { title: "Resource Efficiency", description: "Minimize memory footprint and power consumption for embedded devices." },
      { title: "Deterministic Control", description: "Ensure precise timing and control over hardware peripherals for critical applications." }
    ],
    whatWeOffer: [
      'Custom Microcontroller (MCU) Firmware Development (ARM Cortex-M, RISC-V, etc.)',
      'Peripheral Driver Development (GPIO, SPI, I2C, UART, ADC, DAC)',
      'Interrupt Service Routine (ISR) Design & Optimization',
      'Direct Memory Access (DMA) Controller Programming',
      'Custom Bootloader Development & Secure Boot Implementation',
      'Hardware Abstraction Layer (HAL) Design for Portability',
      'Real-Time Control Loop Implementation'
    ],
    imageAlt: 'Close-up of a microcontroller chip with lines of C code overlayed',
    departmentContactPath: '/contact?department=bare-metal'
  };

  return <ServicePageLayout {...pageData} />;
};

export default BareMetalProgrammingPage;