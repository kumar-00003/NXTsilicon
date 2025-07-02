import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const CyberSecurityPage = () => {
  const pageData = {
    title: 'Embedded Cyber Security',
    heroSubtitle: "Protecting Your Connected Devices with Robust, End-to-End Security Solutions.",
    overview: "In an increasingly connected world, securing embedded devices is paramount. Our Embedded Cyber Security services offer comprehensive solutions to protect your hardware and software from evolving threats. We implement multi-layered security, from secure boot and firmware updates to cryptographic integration and penetration testing, ensuring the integrity and resilience of your products.",
    keyBenefits: [
      { title: "Enhanced Protection", description: "Safeguard devices against unauthorized access, malware, and data breaches." },
      { title: "Reduced Risk", description: "Proactively identify and mitigate vulnerabilities throughout the product lifecycle." },
      { title: "Assured Compliance", description: "Meet industry-specific security standards and regulatory requirements." }
    ],
    whatWeOffer: [
      'Threat Modeling & Security Risk Assessment for Embedded Systems',
      'Secure Boot & Trusted Execution Environment (TEE) Implementation',
      'Secure Firmware Over-The-Air (FOTA/SOTA) Update Mechanisms',
      'Cryptography Integration & Hardware Security Module (HSM) Utilization',
      'Device Identity & Access Management Solutions',
      'Penetration Testing & Vulnerability Assessment for IoT/Embedded Devices',
      'Security Audits & Compliance Support (e.g., IEC 62443, ISO 21434)'
    ],
    imageAlt: 'Digital shield icon protecting a network of interconnected embedded devices',
    departmentContactPath: '/contact?department=embedded-cybersecurity'
  };

  return <ServicePageLayout {...pageData} />;
};

export default CyberSecurityPage;