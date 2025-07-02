import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const VerificationAndValidationPage = () => {
  const pageData = {
    title: 'Embedded Verification & Validation (V&V)',
    heroSubtitle: "Rigorous Testing to Ensure Quality, Reliability, and Safety of Embedded Systems.",
    overview: "Our Embedded Verification and Validation (V&V) services provide a systematic approach to ensure your embedded systems meet all specified requirements and perform reliably and safely. We cover the entire V-model, from requirements traceability and unit testing to system integration testing and hardware-in-the-loop (HIL) validation, adhering to industry standards like ISO 26262 for safety-critical applications.",
    keyBenefits: [
      { title: "Assured Compliance", description: "Meet stringent industry standards and regulatory requirements (e.g., functional safety)." },
      { title: "Enhanced System Reliability", description: "Identify and mitigate potential failures through comprehensive testing." },
      { title: "Reduced Development Risk", description: "Validate system behavior early and often throughout the lifecycle." }
    ],
    whatWeOffer: [
      'Requirements Elicitation, Analysis, & Traceability Management',
      'Software Unit Testing, Integration Testing, & System Testing',
      'Hardware-in-the-Loop (HIL) & Model-in-the-Loop (MIL) Testing',
      'Software-in-the-Loop (SIL) & Processor-in-the-Loop (PIL) Testing',
      'Code Coverage Analysis (Statement, Branch, MC/DC)',
      'Static & Dynamic Code Analysis',
      'Support for Compliance & Certification (e.g., ISO 26262, DO-178C)'
    ],
    imageAlt: 'Diagram of the V-model for software development, highlighting verification and validation stages',
    departmentContactPath: '/contact?department=embedded-vv'
  };

  return <ServicePageLayout {...pageData} />;
};

export default VerificationAndValidationPage;