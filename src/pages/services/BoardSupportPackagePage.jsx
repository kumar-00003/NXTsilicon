import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const BoardSupportPackagePage = () => {
  const pageData = {
    title: 'Board Support Package (BSP)',
    heroSubtitle: "Seamless OS Integration for Custom Hardware with Comprehensive BSP Development.",
    overview: "Our Board Support Package (BSP) development services ensure smooth and efficient integration of operating systems (Linux, Android, RTOS) onto your custom hardware platforms. We provide everything from bootloader development and kernel porting to custom device drivers and power management, accelerating your product's time-to-market.",
    keyBenefits: [
      { title: "Accelerated Development", description: "Quickly bring up your OS on custom hardware with a tailored BSP." },
      { title: "Optimized Performance", description: "Fine-tune the OS and drivers for maximum hardware efficiency and stability." },
      { title: "Reduced Integration Risk", description: "Ensure compatibility and proper functionality between hardware and software." }
    ],
    whatWeOffer: [
      'Custom Bootloader Development (U-Boot, UEFI, etc.) & Secure Boot',
      'Operating System Kernel Porting & Customization (Linux, Android, RTOS)',
      'Device Driver Development for Custom Peripherals',
      'Hardware Abstraction Layer (HAL) Design & Implementation',
      'Power Management & Optimization for Embedded Systems',
      'Toolchain Setup & Build System Configuration (Yocto, Buildroot)',
      'BSP Testing, Validation & Long-Term Maintenance'
    ],
    imageAlt: 'Diagram showing layers of a Board Support Package connecting hardware to OS',
    departmentContactPath: '/contact?department=bsp-development'
  };

  return <ServicePageLayout {...pageData} />;
};

export default BoardSupportPackagePage;