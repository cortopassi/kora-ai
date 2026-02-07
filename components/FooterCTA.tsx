import React from 'react';
import { MessageCircle } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-darkNavy py-section border-t border-brand-deepBlue/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-[32px] md:text-h1 text-white mb-6 tracking-tight">
          Vamos conversar sobre o seu negócio.
        </h2>
        <p className="font-sans text-[18px] md:text-[20px] text-slate-300 mb-10 max-w-2xl mx-auto">
          Sem compromisso, sem pressão de vendas. Apenas uma conversa profissional para entender se podemos ajudar.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href="https://wa.me/5511998644004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-brand-deepBlue px-8 py-4 text-lg font-heading font-semibold rounded-brand hover:bg-brand-lightBlue transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar conversa no WhatsApp
          </a>
        </div>

        <div className="pt-8 border-t border-brand-deepBlue/30 flex flex-col items-center gap-6">
            {/* Typographic Logo Version (Matching Navbar style but White for contrast) */}
            <span className="font-heading font-bold text-[26px] text-white tracking-tight leading-none">
              Kora
            </span>
            
            <div className="text-slate-400 text-sm flex flex-col md:flex-row justify-center items-center gap-4">
              <p>&copy; {new Date().getFullYear()} Kora AI. Todos os direitos reservados.</p>
              <p className="hidden md:block text-brand-deepBlue/50">•</p>
              <p className="font-heading text-xs text-brand-lightBlue/80 uppercase tracking-widest">Inteligência Aplicada</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;