import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Experience from './components/Experience';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-brand-bg text-brand-text selection:bg-brand-cyan selection:text-brand-bg overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <Clients />
        <ValueProposition />
        <Services />
        <Experience />
        <Methodology />
        <Testimonials />
        <FooterCTA />
      </main>
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
};

export default App;