import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const DevopsPage = () => {
  const pageData = {
    title: 'DevOps Services',
    heroSubtitle: "Accelerating Software Delivery and Enhancing Operational Efficiency with Modern DevOps.",
    overview: "Our DevOps services help organizations streamline their software development and IT operations through automation, collaboration, and continuous improvement. We implement robust CI/CD pipelines, infrastructure as code, and containerization strategies, enabling faster release cycles, improved reliability, and greater agility to respond to market demands.",
    keyBenefits: [
      { title: "Faster Time-to-Market", description: "Automate and accelerate the software delivery lifecycle." },
      { title: "Improved Collaboration", description: "Break down silos between development and operations teams." },
      { title: "Enhanced Reliability & Stability", description: "Implement continuous testing and monitoring for robust systems." }
    ],
    whatWeOffer: [
      'CI/CD Pipeline Design, Implementation, & Optimization (Jenkins, GitLab CI, Azure DevOps, GitHub Actions)',
      'Infrastructure as Code (IaC) using Terraform, Ansible, CloudFormation',
      'Containerization with Docker & Orchestration with Kubernetes (EKS, AKS, GKE)',
      'Automated Testing Strategy & Implementation (Unit, Integration, E2E)',
      'Monitoring, Logging, & Alerting Solutions (Prometheus, Grafana, ELK Stack)',
      'Site Reliability Engineering (SRE) Practices & Implementation',
      'DevSecOps: Integrating Security into the DevOps Lifecycle'
    ],
    imageAlt: 'Infinity loop diagram representing the continuous DevOps lifecycle stages',
    departmentContactPath: '/contact?department=devops'
  };

  return <ServicePageLayout {...pageData} />;
};

export default DevopsPage;