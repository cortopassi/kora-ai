import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { smoothScrollToId } from './smoothScroll';

const SECOES = ['servicos', 'metodo', 'contato'];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState('');

  useEffect(() => {
    let raf = 0;
    const aplicar = () => {
      raf = 0;
      setScrolled(window.scrollY > 20);
      // Scrollspy: a última seção cujo topo já passou da linha de leitura
      let ativa = '';
      for (const id of SECOES) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) ativa = id;
      }
      setSecaoAtiva(ativa);
    };
    const handleScroll = () => {
      if (!raf) raf = requestAnimationFrame(aplicar);
    };
    aplicar();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToSection = (id: string) => {
    smoothScrollToId(id);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 px-4">
      <div className="max-w-container mx-auto">
        <div className={`
          flex items-center justify-between px-6 py-4 rounded-full
          transition-all duration-500 ease-in-out
          ${scrolled 
            ? 'bg-[#0A1526]/85 backdrop-blur-xl border border-white/5 shadow-2xl' 
            : 'bg-transparent border border-transparent'}
        `}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group z-50">
             <img src="/kora-wordmark-branco.png" alt="KORA" className="h-7 w-auto" />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-[#16283F]/60 p-1 rounded-full border border-white/5">
            {['Serviços', 'Método', 'Contato'].map((item) => {
              const id = item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
              const ativa = secaoAtiva === id;
              return (
               <button 
                key={item}
                onClick={() => scrollToSection(id)}
                aria-current={ativa ? 'true' : undefined}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  ativa ? 'text-white bg-white/10' : 'text-brand-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {item}
              </button>
              );
            })}
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/5511998644004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hidden md:flex items-center gap-2 bg-white text-brand-bg px-5 py-2.5 text-sm font-bold rounded-full hover:bg-brand-primary hover:text-white active:scale-[0.97] transition-all duration-300"
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