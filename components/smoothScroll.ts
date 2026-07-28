/**
 * Rolagem suave por JavaScript (requestAnimationFrame + easing).
 *
 * Por que não usar scrollIntoView({ behavior: 'smooth' }) ou a propriedade
 * CSS scroll-behavior: o comportamento nativo depende do navegador e das
 * configurações de acessibilidade do aparelho — em vários Androids o
 * resultado é um teleporte seco. Aqui a animação é nossa, então é igual
 * em qualquer lugar.
 *
 * A duração escala com a distância (mais longe, um pouco mais de tempo),
 * com piso e teto pra nunca ficar arrastado nem instantâneo.
 */

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function smoothScrollTo(alvoY: number): void {
  const inicioY = window.scrollY;
  const delta = alvoY - inicioY;
  if (Math.abs(delta) < 2) return;

  const duracao = Math.min(1000, Math.max(450, Math.abs(delta) * 0.45));
  const inicio = performance.now();

  const passo = (agora: number) => {
    const t = Math.min(1, (agora - inicio) / duracao);
    window.scrollTo(0, inicioY + delta * easeInOutCubic(t));
    if (t < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}

/** Rola até uma seção compensando a altura da navbar fixa. */
export function smoothScrollToId(id: string, compensacao = 96): void {
  const el = document.getElementById(id);
  if (!el) return;
  const alvo = el.getBoundingClientRect().top + window.scrollY - compensacao;
  smoothScrollTo(Math.max(0, alvo));
}
