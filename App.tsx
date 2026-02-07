import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Experience from './components/Experience';
import Methodology from './components/Methodology';
import FooterCTA from './components/FooterCTA';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden selection:bg-slate-200 selection:text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <Services />
        <Experience />
        <Methodology />
        <FooterCTA />
      </main>
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
};

export default App;