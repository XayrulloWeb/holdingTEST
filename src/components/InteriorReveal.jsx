import React from 'react';
import { projectInfo } from '../data/projectContent';

export default function InteriorReveal() {
  return (
    <section className="w-full min-h-screen bg-brand-light text-brand-bg py-28 md:py-40 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="eyebrow mb-4 block" style={{ color: '#9c7c48' }}>
          Интерьер
        </span>
        <div
          className="mx-auto mb-8"
          aria-hidden="true"
          style={{ height: '1px', width: '4rem', background: 'linear-gradient(90deg, transparent, #9c7c48, transparent)' }}
        />
        <p className="font-display text-3xl md:text-5xl font-light leading-[1.2]">
          {projectInfo.about}
        </p>
      </div>

      <div className="w-full max-w-6xl aspect-video relative overflow-hidden rounded-2xl group shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
        <img
          src={projectInfo.gallery[0]}
          alt="Интерьер комплекса HOLDING"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 via-transparent to-transparent" />

        {/* Интерактивная точка «Материалы» */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
          <span className="relative flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-60 animate-ping" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(199,163,106,0.9)]" />
          </span>
          <span className="absolute top-7 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] uppercase text-brand-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-bg/70 backdrop-blur-sm px-3 py-1 rounded-full">
            Материалы
          </span>
        </div>
      </div>
    </section>
  );
}
