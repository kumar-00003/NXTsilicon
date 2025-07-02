import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const DiagnosticsPage = () => {
  const pageData = {
    title: 'Embedded Diagnostics',
    heroSubtitle: "Robust Fault Detection, Isolation, and System Health Monitoring for Embedded Systems.",
    overview: "Our Embedded Diagnostics services focus on developing sophisticated software for identifying, isolating, and reporting system faults in embedded devices. From Power-On Self-Tests (POST) to in-field diagnostics and predictive maintenance algorithms, we equip your products with the intelligence to monitor their own health, ensuring reliability and simplifying maintenance.",
    keyBenefits: [
      { title: "Increased Reliability", description: "Proactively detect and manage potential issues before they cause system failures." },
      { title: "Reduced Downtime", description: "Enable faster fault isolation and repair, minimizing operational disruptions." },
      { title: "Lower Maintenance Costs", description: "Implement predictive maintenance strategies to optimize service schedules." }
    ],
    whatWeOffer: [
      'Power-On Self-Test (POST) & Boot-Time Diagnostics Development',
      'Manufacturing & Production Line Diagnostic Software',
      'In-Field & Remote Diagnostic Capabilities',
      'Fault Injection & Failure Mode Effects Analysis (FMEA) Support',
      'Comprehensive Logging, Reporting, & Event Management Systems',
      'Predictive Maintenance Algorithm Development ( leveraging sensor data & ML)',
      'System Health Monitoring & Alerting Frameworks'
    ],
    imageAlt: 'Computer interface displaying system diagnostics, health status, and error logs',
    departmentContactPath: '/contact?department=embedded-diagnostics'
  };

  return <ServicePageLayout {...pageData} />;
};

export default DiagnosticsPage;