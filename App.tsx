
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import AxesSection from './components/AxesSection';
import PricingSection from './components/PricingSection';
import NextStepsSection from './components/NextStepsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-[#3a3a3a] bg-[#f4f0e8]">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <AxesSection />
        <PricingSection />
        <NextStepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
