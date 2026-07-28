import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../sites/fx';

const FooterCTA: React.FC = () => {
  return (
    <footer id="contato" className="py-24 bg-[#081120] border-t border-brand-border">
      <div className="max-w-container mx-auto px-6 text-center">
        
        <Reveal>
        <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tighter leading-none mb-12">
          Vamos resolver <br />
          <span className="text-brand-muted">seu desafio?</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
           <a 
            href="https://wa.me/5511998644004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-5 text-lg font-bold rounded-full hover:bg-brand-primary hover:text-white active:scale-[0.98] transition-all duration-300"
          >
            Falar com Consultor
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <a href="mailto:contato@kora-ia.com" className="text-brand-muted hover:text-white font-medium transition-colors px-6 py-4">
            contato@kora-ia.com
          </a>
        </div>
        </Reveal>

        <div className="flex justify-center items-center pt-8 border-t border-white/5">
           <p className="text-xs text-brand-muted">© {new Date().getFullYear()} Kora AI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;