import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // استيراد الـ Router
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Offer } from './components/Offer';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Steps } from './components/Steps';
import { Chart } from './components/Chart';
import { RetailSolutions } from './components/RetailSolutions';
import { Traffic } from './components/Traffic';
import { Security } from './components/Security';
import { Industry } from './components/Industry'; 
import { Construction } from './components/Construction';
// استيراد المكونات القانونية الجديدة
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { CookiesSettings } from './components/CookiesSettings';
import { SecurityInfo } from './components/SecurityInfo';
import { SiteInfo } from './components/SiteInfo';
import {LegalMenu} from './components/LegalMenu';
// استيراد الكومبوننت الجديد
import './styles/global.css';
import { AnaliticsAPK } from './components/AnaliticsAPK'; // استيراد الكومبوننت الجديد
// مكون بسيط يجمع أقسام الصفحة الرئيسية لترتيب الكود
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Offer />
    <Chart />
    <Steps />
    <LegalMenu />
   
  </>
);

function App() {
  return (
    <Router>
      <div className="smooth-scroll">
        <Navbar />
        
        {/* إعداد الروابط هنا */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/retail-solutions" element={<RetailSolutions />} />
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/security" element={<Security />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/site-info" element={<SiteInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesSettings />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/security-info" element={<SecurityInfo />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;