import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-container mx-auto px-6 flex justify-center">
        <div className={`
          w-full md:w-auto md:min-w-[600px] flex items-center justify-between px-6 py-3 rounded-pill
          transition-all duration-300 border
          ${scrolled 
            ? 'bg-brand-bg/80 backdrop-blur-md border-brand-border shadow-[0_8px_32px_rgba(0,0,0,0.2)]' 
            : 'bg-transparent border-transparent'}
        `}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity" aria-label="Kora AI Home">
              <span className="font-heading font-bold text-[24px] text-white tracking-tight leading-none">
                Kora
              </span>
          </a>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={scrollToContact}
              className="font-sans font-medium text-sm text-brand-muted hover:text-white transition-colors"
            >
              Contato
            </button>
            <a 
              href="https://wa.me/5511998644004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-brand-deepBlue px-5 py-2 text-sm font-heading font-bold rounded-full hover:bg-brand-cyan hover:text-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,180,216,0.4)]"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
          
          {/* Mobile Action */}
          <div className="md:hidden">
              <a 
              href="https://wa.me/5511998644004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-brand-deepBlue p-2 rounded-full hover:bg-brand-cyan transition-all flex items-center justify-center"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;