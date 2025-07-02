import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const AnalyticsServicesPage = () => {
  const pageData = {
    title: 'Data Analytics Services',
    heroSubtitle: "Transforming Data into Actionable Intelligence and Strategic Advantage.",
    overview: "Our comprehensive Data Analytics services empower your organization to unlock the full potential of its data. We help you move from raw data to insightful dashboards, robust data warehouses, and real-time analytics, enabling data-driven decision-making across all levels of your business and fostering a culture of continuous improvement.",
    keyBenefits: [
      { title: "Informed Decisions", description: "Leverage data-driven insights for better strategic planning and operational efficiency." },
      { title: "Enhanced Performance", description: "Identify key performance indicators (KPIs) and track progress towards business goals." },
      { title: "Competitive Edge", description: "Uncover hidden trends and opportunities to stay ahead in your market." }
    ],
    whatWeOffer: [
      'Business Intelligence (BI) Dashboard Development & Visualization',
      'Data Warehousing & Data Lake Solutions (Cloud & On-Premise)',
      'ETL (Extract, Transform, Load) & Data Pipeline Automation',
      'Real-Time Data Analytics & Streaming Solutions',
      'Advanced Statistical Analysis & Data Mining',
      'Performance Metrics & KPI Framework Design',
      'Data Governance & Quality Management'
    ],
    imageAlt: 'Dynamic business intelligence dashboard showcasing various charts and KPIs',
    departmentContactPath: '/contact?department=analytics'
  };

  return <ServicePageLayout {...pageData} />;
};

export default AnalyticsServicesPage;