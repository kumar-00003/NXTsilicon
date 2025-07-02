import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const DeviceDriversPage = () => {
  const pageData = {
    title: 'Device Drivers',
    heroSubtitle: "Enabling Seamless Hardware-Software Communication with Custom Device Drivers.",
    overview: "Our Device Driver development services bridge the gap between your operating system and hardware peripherals. We create custom drivers for Linux, Windows, RTOS, and bare-metal systems, ensuring efficient and reliable communication for a wide range of interfaces like I2C, SPI, UART, USB, and PCIe. Our expertise ensures optimal performance and stability for your hardware components.",
    keyBenefits: [
      { title: "Optimal Hardware Performance", description: "Unlock the full capabilities of your hardware with tailored drivers." },
      { title: "System Stability", description: "Ensure reliable and consistent operation through robust driver design." },
      { title: "Cross-Platform Compatibility", description: "Develop drivers that can be ported or adapted for various operating systems." }
    ],
    whatWeOffer: [
      'Custom Driver Development for Linux, Windows, macOS, Android, & RTOS',
      'Drivers for Standard Interfaces: I2C, SPI, UART, USB, PCIe, Ethernet, MIPI',
      'Character, Block, & Network Device Driver Development',
      'Driver Porting, Migration, & Maintenance Services',
      'Performance Optimization & Latency Reduction for Drivers',
      'Driver Compliance, Certification, & WHQL Testing Support',
      'Firmware & Driver Co-development for Embedded Systems'
    ],
    imageAlt: 'Flowchart illustrating interaction between application, OS kernel, device driver, and hardware',
    departmentContactPath: '/contact?department=device-drivers'
  };

  return <ServicePageLayout {...pageData} />;
};

export default DeviceDriversPage;