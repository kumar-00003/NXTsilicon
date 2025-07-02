import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';

const MobilitySolutionsPage = () => {
  const pageData = {
    title: 'Mobility Solutions',
    heroSubtitle: "Creating Engaging and Powerful Mobile Applications for iOS and Android.",
    overview: "Our Mobility Solutions empower businesses with intuitive and high-performance mobile applications. We specialize in native iOS and Android development, as well as cross-platform solutions using React Native and Flutter. From UI/UX design to backend integration and app store deployment, we deliver mobile experiences that captivate users and drive business objectives.",
    keyBenefits: [
      { title: "Enhanced User Engagement", description: "Deliver seamless and intuitive mobile experiences that users love." },
      { title: "Broader Market Reach", description: "Connect with customers on their preferred devices, anytime, anywhere." },
      { title: "Increased Efficiency", description: "Streamline business processes and improve productivity with mobile tools." }
    ],
    whatWeOffer: [
      'Native iOS App Development (Swift, Objective-C)',
      'Native Android App Development (Kotlin, Java)',
      'Cross-Platform App Development (React Native, Flutter, Xamarin)',
      'Mobile UI/UX Design & Prototyping',
      'Mobile Backend Development & API Integration',
      'App Store Deployment (Apple App Store, Google Play Store) & Maintenance',
      'Mobile Analytics Integration & User Engagement Strategies'
    ],
    imageAlt: 'Smartphone displaying a sleek and modern mobile application interface design',
    departmentContactPath: '/contact?department=mobility'
  };

  return <ServicePageLayout {...pageData} />;
};

export default MobilitySolutionsPage;