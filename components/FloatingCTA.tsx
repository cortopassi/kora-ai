import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511998644004"
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-6 bg-brand-cyan text-brand-bg p-4 rounded-full shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:bg-white transition-colors z-50 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingCTA;