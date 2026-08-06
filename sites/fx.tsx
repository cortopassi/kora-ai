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

/**
 * Tilt 3D sutil que acompanha o cursor. Desktop apenas (pointer: fine)
 * e desligado sob prefers-reduced-motion. A transição CSS suaviza o
 * acompanhamento e devolve o card ao repouso na saída.
 */
export const Tilt: React.FC<{
  children: React.ReactNode;
  max?: number;
  className?: string;
}> = ({ children, max = 4, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Só liga will-change/transição quando o tilt de fato roda (desktop com
  // mouse). No mobile o wrapper fica inerte — will-change permanente
  // promovia a camada e causava tremor sub-pixel em telas densas.
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setAtivo(true);

    let raf = 0;
    const mover = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(700px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
      });
    };
    const sair = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      el.style.transform = '';
    };
    el.addEventListener('mousemove', mover);
    el.addEventListener('mouseleave', sair);
    return () => {
      el.removeEventListener('mousemove', mover);
      el.removeEventListener('mouseleave', sair);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max]);

  return (
    <div
      ref={ref}
      className={`${ativo ? 'transition-transform duration-300 ease-out will-change-transform' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

/** Barra fina de progresso de leitura no topo da página. */
export const ScrollProgress: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const aplicar = () => {
      raf = 0;
      const doc = document.documentElement;
      const maximo = doc.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${maximo > 0 ? window.scrollY / maximo : 0})`;
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
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-brand-primary"
    />
  );
};
