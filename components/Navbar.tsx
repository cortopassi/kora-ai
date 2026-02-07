import React from 'react';
import { MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-brand-gray/10 transition-all duration-300 shadow-sm">
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo - Typographic version for maximum readability per request */}
        {/* Using clean Montserrat font (font-heading), bold, solid color, no visual effects */}
        <a href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity" aria-label="Kora AI Home">
            <span className="font-heading font-bold text-[26px] text-brand-deepBlue tracking-tight leading-none">
              Kora
            </span>
        </a>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={scrollToContact}
            className="font-heading font-semibold text-sm text-brand-gray hover:text-brand-deepBlue transition-colors"
          >
            Contato
          </button>
          <a 
            href="https://wa.me/5511998644004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-deepBlue text-white px-5 py-2 text-sm font-heading font-semibold rounded-brand hover:bg-brand-darkNavy transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
        </div>
        
        {/* Mobile Action - Highlighted Button for better visibility */}
        <div className="md:hidden">
            <a 
            href="https://wa.me/5511998644004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-deepBlue text-white p-2.5 rounded-brand hover:bg-brand-darkNavy transition-all flex items-center justify-center shadow-sm active:scale-95"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;