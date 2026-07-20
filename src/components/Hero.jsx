import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        gsap.set('[data-hero-fade]', { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        '[data-hero-fade]',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.4,
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-bg"
    >
      {/* Затемнение + золотое свечение */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-bg/40 via-black/60 to-brand-bg" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: 'radial-gradient(circle, #C7A36A 0%, transparent 70%)' }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span data-hero-fade className="eyebrow block mb-6">
          Премиальный жилой комплекс
        </span>
        <div data-hero-fade className="gold-rule mx-auto mb-8" aria-hidden="true" />
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-brand-light mb-8 leading-[1.1] tracking-wide">
          <span data-hero-fade className="block">Пространство,</span>
          <span data-hero-fade className="block text-gold-gradient">в которое хочется войти</span>
        </h1>
        <p
          data-hero-fade
          className="text-lg md:text-xl text-brand-gray mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Современная архитектура, городская энергия и премиальный комфорт — в одном адресе.
        </p>

        <div data-hero-fade className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#about"
            className="px-9 py-3.5 bg-brand-gold text-brand-bg uppercase tracking-[0.15em] text-sm font-medium rounded-lg transition-all duration-300 hover:bg-brand-gold-light hover:shadow-[0_10px_30px_-10px_rgba(199,163,106,0.6)] cursor-pointer"
          >
            Исследовать проект
          </a>
          <a
            href="#leadform"
            className="px-9 py-3.5 border border-brand-gold/40 text-brand-gold uppercase tracking-[0.15em] text-sm font-light rounded-lg transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10 cursor-pointer"
          >
            Оставить заявку
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Прокрутить вниз"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 hover:text-brand-gold transition-colors duration-300 animate-bounce cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
