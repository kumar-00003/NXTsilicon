import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const CloudArchitectureEngineeringPage = () => {
  const pageData = {
    title: 'Cloud Architecture & Engineering',
    heroSubtitle: "Designing and Building Scalable, Resilient, and Secure Cloud Solutions.",
    overview: "Our Cloud Architecture and Engineering services help you harness the full potential of cloud computing. We design, build, and manage robust solutions on AWS, Azure, and GCP, focusing on scalability, security, and cost-efficiency. Whether you're migrating to the cloud, building cloud-native applications, or optimizing existing infrastructure, we provide expert guidance and implementation.",
    keyBenefits: [
      { title: "Enhanced Scalability", description: "Dynamically scale resources up or down to meet fluctuating demands." },
      { title: "Improved Resilience", description: "Design for high availability and disaster recovery to ensure business continuity." },
      { title: "Optimized Costs", description: "Leverage cloud efficiencies and right-sizing to reduce TCO." }
    ],
    whatWeOffer: [
      'Multi-Cloud & Hybrid Cloud Strategy & Architecture Design',
      'Cloud-Native Application Development (Serverless, Microservices, Containers)',
      'DevOps & CI/CD Pipeline Implementation for Cloud Environments',
      'Infrastructure as Code (IaC) using Terraform, CloudFormation, ARM Templates',
      'Cloud Security Architecture & Compliance (HIPAA, GDPR, SOC 2)',
      'Cloud Migration Planning & Execution Services',
      'Cloud Cost Optimization & Management'
    ],
    imageAlt: 'Complex diagram illustrating a modern multi-cloud architecture with various services',
    departmentContactPath: '/contact?department=cloud-architecture'
  };

  return <ServicePageLayout {...pageData} />;
};

export default CloudArchitectureEngineeringPage;