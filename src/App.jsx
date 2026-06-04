import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsWholeBlood from './components/WhatIsWholeBlood';
import Applications from './components/Applications';
import WhyChooseUs from './components/WhyChooseUs';
import DetailedContent from './components/DetailedContent';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatIsWholeBlood />
<Applications/>
        <DetailedContent />
        <WhyChooseUs/>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
