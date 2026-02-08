import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <footer id="contato" className="py-24 bg-[#0A0A0A] border-t border-brand-border">
      <div className="max-w-container mx-auto px-6 text-center">
        
        <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tighter leading-none mb-12">
          Vamos construir <br />
          <span className="text-brand-muted">o próximo passo?</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
           <a 
            href="https://wa.me/5511998644004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-5 text-lg font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300"
          >
            Iniciar Projeto
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <a href="mailto:contato@kora.ai" className="text-brand-muted hover:text-white font-medium transition-colors px-6 py-4">
            contato@kora.ai
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
           <p className="text-xs text-brand-muted">© {new Date().getFullYear()} Kora AI. All rights reserved.</p>
           <div className="flex gap-6">
             <span className="text-xs text-brand-muted hover:text-white cursor-pointer">Privacy</span>
             <span className="text-xs text-brand-muted hover:text-white cursor-pointer">Terms</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;