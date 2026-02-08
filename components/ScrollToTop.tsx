import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Updated className to be 'hidden' by default and 'md:block' (visible) only on medium screens and up.
  // Also removed mobile positioning classes since it's hidden on mobile.
  return (
    <button
      onClick={scrollToTop}
      className={`hidden md:block fixed z-40 bottom-8 right-8 bg-brand-cyan text-white p-3 rounded-full shadow-lg hover:bg-brand-lightBlue transition-all duration-300 border border-white/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;