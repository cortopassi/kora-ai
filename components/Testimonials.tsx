import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "A Kora trouxe uma visão de agilidade que conectou nossos times técnicos diretamente aos objetivos estratégicos (OKRs). A eficiência operacional mudou drasticamente.",
    author: "Ricardo Mendes",
    role: "Diretor de Operações"
  },
  {
    id: 2,
    text: "Encontrar especialistas em SAP que também entendem de produtos digitais modernos é raro. A Kora integrou nossa ERP legada com novas soluções SaaS de forma impecável.",
    author: "Juliana Costa",
    role: "CIO, Varejo Enterprise"
  },
  {
    id: 3,
    text: "Os Product Managers da Kora assumiram a frente dos nossos produtos e trouxeram clareza para o roadmap. Atuaram como verdadeiros sócios do negócio.",
    author: "André Silva",
    role: "Founder, Fintech B2B"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-section bg-[#080808] border-t border-brand-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24 flex items-end justify-between">
          <div>
            <span className="text-brand-primary text-sm font-bold uppercase tracking-wider mb-2 block">Parceria Real</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">Quem confia na Kora</h2>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Próximo"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[300px] md:min-h-[250px] flex items-center">
          <div 
            className={`w-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-1">
                <Quote className="text-brand-primary/40 w-12 h-12 md:w-16 md:h-16" />
              </div>
              
              <div className="md:col-span-11">
                <p className="font-heading text-2xl md:text-4xl font-medium text-white leading-tight md:leading-snug mb-8">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="font-sans text-brand-muted text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation & Indicators */}
        <div className="mt-12 flex items-center justify-between md:hidden">
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-brand-primary' : 'w-2 bg-brand-border'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <div className="flex gap-4">
             <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;