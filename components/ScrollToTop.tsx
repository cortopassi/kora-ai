import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { smoothScrollTo } from './smoothScroll';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    smoothScrollTo(0);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`hidden md:flex fixed z-40 bottom-8 right-8 bg-brand-surfaceHighlight text-white p-3 rounded-2xl border border-white/5 hover:bg-white hover:text-black transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;