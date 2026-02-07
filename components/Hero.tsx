import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const bgRef1 = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Main visual - Shield (Mid ground)
      // Only apply parallax on larger screens to prevent mobile jitter
      if (window.innerWidth > 768 && parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.12}px)`;
      }

      // Top right blob (Background far)
      if (bgRef1.current) {
        bgRef1.current.style.transform = `translateY(${scrolled * 0.05}px)`;
      }

      // Bottom left blob (Background near)
      if (bgRef2.current) {
        bgRef2.current.style.transform = `translateY(${scrolled * 0.08}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Using the specific GitHub Raw URL for the Kora Shield asset
  const heroImageSrc = "https://raw.githubusercontent.com/cortopassi/kora-ai/main/IMG/kora-shield.png";

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-deepBlue text-white pt-24 md:pt-20 pb-12">
      {/* Mature Corporate Background - Clean Solid Base */}
      <div className="absolute inset-0 bg-brand-deepBlue" />
      
      {/* Subtle Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deepBlue via-brand-deepBlue to-[#051540]" />
      
      {/* Ambient Lighting */}
      <div 
        ref={bgRef1}
        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none will-change-transform" 
      />
      <div 
        ref={bgRef2}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-darkNavy/40 rounded-full blur-[120px] pointer-events-none will-change-transform" 
      />
      
      <div className="max-w-container w-full mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="font-heading text-h1 text-white relative z-10 tracking-tight">
              Kora
            </h1>
            <p className="font-heading text-[32px] md:text-[40px] font-semibold text-white/90 tracking-tight relative z-10 leading-tight">
              Inteligência aplicada <br />
              <span className="text-brand-lightBlue">às decisões de negócio.</span>
            </p>
          </div>
          
          <div className="h-px w-16 bg-brand-cyan/50 my-8 relative z-10" />
          
          <p className="font-sans text-body text-slate-300 max-w-lg relative z-10 leading-relaxed">
            Construímos soluções fundamentadas em dados e IA para empresas que buscam eficiência operacional e clareza estratégica.
          </p>

          <div className="pt-6 relative z-10">
            <a 
              href="https://wa.me/5511998644004" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-deepBlue px-8 py-4 text-body font-heading font-semibold rounded-brand hover:bg-brand-lightBlue transition-all group shadow-lg"
            >
              Falar no WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Hero Visual - Image Replacement */}
        <div 
          ref={parallaxRef}
          className="flex justify-center items-center relative order-1 md:order-2 will-change-transform mb-8 md:mb-0"
        >
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] animate-fade-in-up">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-cyan/20 blur-[60px] rounded-full z-0 transform scale-90"></div>
            
            <img 
              src={heroImageSrc}
              alt="Kora Shield Icon - Inteligência Aplicada" 
              className="w-full h-full object-contain drop-shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-700 ease-in-out"
              onError={(e) => {
                 // Fallback to text shield if image fails to load
                 e.currentTarget.style.display = 'none';
                 const parent = e.currentTarget.parentElement;
                 if (parent) {
                    const fallback = document.createElement('div');
                    fallback.innerHTML = '🛡️';
                    fallback.style.fontSize = '150px';
                    fallback.style.display = 'flex';
                    fallback.style.justifyContent = 'center';
                    fallback.style.alignItems = 'center';
                    fallback.style.width = '100%';
                    fallback.style.height = '100%';
                    parent.appendChild(fallback);
                 }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;