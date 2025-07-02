import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const OsPortingAndCustomizationPage = () => {
  const pageData = {
    title: 'OS Porting & Customization',
    heroSubtitle: "Adapting and Optimizing Operating Systems for Your Specific Hardware Needs.",
    overview: "Our OS Porting and Customization services involve tailoring operating systems like Linux, Android, and various RTOS (Real-Time Operating Systems) to function optimally on your unique hardware platforms. We handle kernel optimization, custom system builds (e.g., Yocto), security hardening, and performance tuning to ensure your embedded devices deliver peak performance and reliability.",
    keyBenefits: [
      { title: "Hardware Compatibility", description: "Ensure your chosen OS runs seamlessly on your custom hardware." },
      { title: "Optimized Performance", description: "Fine-tune the OS for specific hardware capabilities and application requirements." },
      { title: "Reduced Development Time", description: "Accelerate product development by leveraging existing OS frameworks." }
    ],
    whatWeOffer: [
      'Linux Kernel Porting & Customization for Embedded Systems',
      'Android (AOSP) Porting & Customization for Custom Devices',
      'RTOS Integration & Configuration (FreeRTOS, Zephyr, VxWorks)',
      'Custom Embedded Linux Distribution Builds (Yocto Project, Buildroot)',
      'OS Security Hardening & Secure Boot Enablement',
      'Performance Tuning & Footprint Optimization for Resource-Constrained Devices',
      'Board Support Package (BSP) Enhancement & Maintenance'
    ],
    imageAlt: 'Conceptual image showing logos of Linux, Android, and RTOS interacting with hardware',
    departmentContactPath: '/contact?department=os-porting'
  };

  return <ServicePageLayout {...pageData} />;
};

export default OsPortingAndCustomizationPage;