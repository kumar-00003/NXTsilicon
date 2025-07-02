import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const CloudEngineeringServicesPage = () => {
  const pageData = {
    title: 'Cloud Engineering Excellence',
    heroSubtitle: "Building and Managing High-Performance Cloud Infrastructure for Modern Applications.",
    overview: "Our Cloud Engineering services provide end-to-end solutions for designing, implementing, and managing scalable and resilient cloud infrastructures. We leverage best practices in DevOps, Infrastructure as Code, and containerization to empower your applications with the agility and reliability of the cloud, ensuring optimal performance and cost-efficiency.",
    keyBenefits: [
      { title: "Accelerated Deployment", description: "Automate infrastructure provisioning and application deployment cycles." },
      { title: "Enhanced Reliability", description: "Build fault-tolerant systems with robust monitoring and self-healing capabilities." },
      { title: "Operational Efficiency", description: "Streamline cloud operations and reduce manual overhead through automation." }
    ],
    whatWeOffer: [
      'Cloud Infrastructure Design & Implementation (AWS, Azure, GCP)',
      'Infrastructure as Code (IaC) using Terraform, Ansible, Pulumi',
      'Kubernetes & Container Orchestration (EKS, AKS, GKE, OpenShift)',
      'Serverless Architecture Design & Implementation (Lambda, Azure Functions)',
      'Cloud Migration Strategy & Execution (Rehost, Replatform, Rearchitect)',
      'Cloud Security Best Practices & Compliance Automation',
      'FinOps & Cloud Cost Management Solutions'
    ],
    imageAlt: 'Network of interconnected cloud services icons representing a robust infrastructure',
    departmentContactPath: '/contact?department=cloud-engineering-services'
  };

  return <ServicePageLayout {...pageData} />;
};

export default CloudEngineeringServicesPage;