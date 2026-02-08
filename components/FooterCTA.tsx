import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#010208] pt-section pb-12 border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-8 tracking-tight">
          Pronto para elevar o nível?
        </h2>
        <p className="font-sans text-xl text-brand-muted mb-12 max-w-2xl mx-auto">
          Sem pressão de vendas. Apenas uma conversa profissional para entender se podemos ajudar seu negócio a escalar com inteligência.
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-20">
          <a 
            href="https://wa.me/5511998644004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 bg-brand-cyan text-brand-bg px-10 py-5 text-lg font-heading font-bold rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(0,180,216,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Iniciar conversa agora
            </span>
          </a>
        </div>

        <div className="pt-12 border-t border-brand-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-heading font-bold text-2xl text-white">
                Kora
              </span>
              <span className="text-brand-border">|</span>
              <span className="font-sans text-xs text-brand-muted uppercase tracking-widest">Inteligência Aplicada</span>
            </div>
            
            <p className="text-brand-muted text-sm">&copy; {new Date().getFullYear()} Kora AI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;