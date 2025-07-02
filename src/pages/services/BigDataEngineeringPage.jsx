import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const BigDataEngineeringPage = () => {
  const pageData = {
    title: 'Big Data Engineering',
    heroSubtitle: "Building Scalable and Robust Pipelines for Massive Data Volumes.",
    overview: "Our Big Data Engineering services focus on designing, building, and managing resilient data infrastructures capable of handling vast amounts of information. We leverage technologies like Apache Spark, Hadoop, and cloud-native platforms to create efficient data lakes, warehouses, and real-time streaming pipelines, enabling advanced analytics and AI applications.",
    keyBenefits: [
      { title: "Scalable Infrastructure", description: "Handle growing data volumes and processing needs with flexible architectures." },
      { title: "Actionable Data", description: "Transform raw data into a structured, queryable format for analytics and insights." },
      { title: "Real-time Processing", description: "Enable immediate insights and actions with low-latency data streaming capabilities." }
    ],
    whatWeOffer: [
      'Data Lake & Data Warehouse Architecture Design (AWS, Azure, GCP, On-Premise)',
      'Apache Spark, Hadoop, Kafka, Flink Ecosystem Implementation',
      'Real-time Data Streaming & Processing Pipelines',
      'ETL/ELT Pipeline Development & Optimization',
      'Data Modeling, Governance, & Quality Assurance',
      'Cloud-Based Big Data Platform Management & Automation',
      'Performance Tuning for Big Data Workloads'
    ],
    imageAlt: 'Abstract visualization of complex data streams flowing through processing nodes',
    departmentContactPath: '/contact?department=big-data'
  };

  return <ServicePageLayout {...pageData} />;
};

export default BigDataEngineeringPage;