import React, { useEffect, useRef, useState } from 'react';

/**
 * Efeitos das páginas /sites — sem dependência externa.
 * Ambos respeitam prefers-reduced-motion.
 */

export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Parallax sutil: aplicar o ref numa <img> dentro de um contêiner com
 * overflow-hidden e altura fixa. A imagem ganha scale pra ter sobra de
 * borda e desliza conforme o scroll. Só transform — nada de reflow.
 */
export function useParallax<T extends HTMLElement>(fator = 0.18) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const aplicar = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const centro = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${(-centro * fator).toFixed(1)}px) scale(1.18)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(aplicar);
    };
    aplicar();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [fator]);

  return ref;
}
