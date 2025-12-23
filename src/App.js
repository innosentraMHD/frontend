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
import { RetailSolutions } from './components/RetailSolutions'; // استيراد الكومبوننت الجديد
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
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;