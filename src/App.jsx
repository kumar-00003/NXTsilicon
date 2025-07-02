import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Industries from '@/pages/Industries';
import Careers from '@/pages/Careers';
import Locations from '@/pages/Locations';
import Contact from '@/pages/Contact';
import AdminPanel from '@/pages/AdminPanel';

import SemiconductorPage from '@/pages/industries/SemiconductorPage';
import BfsiPage from '@/pages/industries/BfsiPage';
import InsurancePage from '@/pages/industries/InsurancePage';
import RetailPage from '@/pages/industries/RetailPage';
import AutomotivePage from '@/pages/industries/AutomotivePage';
import TelecomPage from '@/pages/industries/TelecomPage';

import AnalogMixedSignalPage from '@/pages/services/AnalogMixedSignalPage';
import AtePage from '@/pages/services/AtePage';
import BenchCharacterizationPage from '@/pages/services/BenchCharacterizationPage';
import DesignVerificationPage from '@/pages/services/DesignVerificationPage';
import DftPage from '@/pages/services/DftPage';
import FpgaDesignPage from '@/pages/services/FpgaDesignPage';
import InHouseSiliconValidationLabPage from '@/pages/services/InHouseSiliconValidationLabPage';
import PhysicalDesignPage from '@/pages/services/PhysicalDesignPage';
import PrototypingAndEmulationPage from '@/pages/services/PrototypingAndEmulationPage';
import RtlDesignPage from '@/pages/services/RtlDesignPage';
import DesignSignoffPage from '@/pages/services/DesignSignoffPage';
import SiliconValidationPage from '@/pages/services/SiliconValidationPage';
import SynthesisAndStaPage from '@/pages/services/SynthesisAndStaPage';
import BareMetalProgrammingPage from '@/pages/services/BareMetalProgrammingPage';
import BoardSupportPackagePage from '@/pages/services/BoardSupportPackagePage';
import CiCdPage from '@/pages/services/CiCdPage';
import DeviceDriversPage from '@/pages/services/DeviceDriversPage';
import DiagnosticsPage from '@/pages/services/DiagnosticsPage';
import OsPortingAndCustomizationPage from '@/pages/services/OsPortingAndCustomizationPage';
import CyberSecurityPage from '@/pages/services/CyberSecurityPage';
import VerificationAndValidationPage from '@/pages/services/VerificationAndValidationPage';

import DataAnalyticsAiMlPage from '@/pages/services/DataAnalyticsAiMlPage';
import CloudArchitectureEngineeringPage from '@/pages/services/CloudArchitectureEngineeringPage';
import SalesforceImplementationSupportPage from '@/pages/services/SalesforceImplementationSupportPage';
import ApplicationDevelopmentMaintenancePage from '@/pages/services/ApplicationDevelopmentMaintenancePage';
import QualityAssurancePage from '@/pages/services/QualityAssurancePage';
import ItInfrastructurePage from '@/pages/services/ItInfrastructurePage';
import EngineeringTechnicalServicesPage from '@/pages/services/EngineeringTechnicalServicesPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return storedTheme || (prefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen animated-bg ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/industries/semiconductor" element={<SemiconductorPage />} />
            <Route path="/industries/bfsi" element={<BfsiPage />} />
            <Route path="/industries/insurance" element={<InsurancePage />} />
            <Route path="/industries/retail" element={<RetailPage />} />
            <Route path="/industries/automotive" element={<AutomotivePage />} />
            <Route path="/industries/telecom-and-network" element={<TelecomPage />} />
            
            <Route path="/services/analog-and-mixed-signal" element={<AnalogMixedSignalPage />} />
            <Route path="/services/ate" element={<AtePage />} />
            <Route path="/services/bench-characterization" element={<BenchCharacterizationPage />} />
            <Route path="/services/design-verification" element={<DesignVerificationPage />} />
            <Route path="/services/dft" element={<DftPage />} />
            <Route path="/services/fpga-design" element={<FpgaDesignPage />} />
            <Route path="/services/in-house-silicon-validation-lab" element={<InHouseSiliconValidationLabPage />} />
            <Route path="/services/physical-design" element={<PhysicalDesignPage />} />
            <Route path="/services/prototyping-and-emulation" element={<PrototypingAndEmulationPage />} />
            <Route path="/services/rtl-design" element={<RtlDesignPage />} />
            <Route path="/services/design-signoff" element={<DesignSignoffPage />} />
            <Route path="/services/silicon-validation" element={<SiliconValidationPage />} />
            <Route path="/services/synthesis-and-sta" element={<SynthesisAndStaPage />} />
            <Route path="/services/bare-metal-programming" element={<BareMetalProgrammingPage />} />
            <Route path="/services/board-support-package" element={<BoardSupportPackagePage />} />
            <Route path="/services/ci-cd" element={<CiCdPage />} />
            <Route path="/services/device-drivers" element={<DeviceDriversPage />} />
            <Route path="/services/diagnostics" element={<DiagnosticsPage />} />
            <Route path="/services/os-porting-and-customization" element={<OsPortingAndCustomizationPage />} />
            <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
            <Route path="/services/verification-and-validation" element={<VerificationAndValidationPage />} />
            
            <Route path="/services/data-analytics-ai-and-machine-learning" element={<DataAnalyticsAiMlPage />} />
            <Route path="/services/cloud-architecture-and-engineering" element={<CloudArchitectureEngineeringPage />} />
            <Route path="/services/salesforce-implementation-and-support" element={<SalesforceImplementationSupportPage />} />
            <Route path="/services/application-development-and-maintenance" element={<ApplicationDevelopmentMaintenancePage />} />
            <Route path="/services/quality-assurance" element={<QualityAssurancePage />} />
            <Route path="/services/it-infrastructure" element={<ItInfrastructurePage />} />
            <Route path="/services/engineering-and-technical-services" element={<EngineeringTechnicalServicesPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;