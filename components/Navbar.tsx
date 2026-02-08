import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 px-4">
      <div className="max-w-container mx-auto">
        <div className={`
          flex items-center justify-between px-6 py-4 rounded-full
          transition-all duration-500 ease-in-out
          ${scrolled 
            ? 'bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/5 shadow-2xl' 
            : 'bg-transparent border border-transparent'}
        `}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group z-50">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-bg font-bold font-heading">K</div>
             <span className="font-heading font-bold text-lg tracking-tight text-white">Kora</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-[#1A1A1A]/50 p-1 rounded-full border border-white/5">
            {['Serviços', 'Método', 'Contato'].map((item) => (
               <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="px-5 py-2 text-sm font-medium text-brand-muted hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/5511998644004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hidden md:flex items-center gap-2 bg-white text-brand-bg px-5 py-2.5 text-sm font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              Falar no WhatsApp
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

             {/* Mobile Icon */}
             <a 
              href="https://wa.me/5511998644004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:hidden w-10 h-10 bg-white text-brand-bg rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;