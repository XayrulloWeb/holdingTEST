import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 z-0 bg-black/60" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl" ref={titleRef}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-brand-light mb-6 tracking-wide">
          Пространство, в которое<br />хочется войти
        </h1>
        <p className="text-lg md:text-xl text-brand-gray mb-10 max-w-2xl mx-auto font-light">
          Современная архитектура, городская энергия и комфорт в одном месте.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-3 bg-brand-gold text-brand-bg uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-colors duration-300">
            Исследовать проект
          </button>
          <button className="px-8 py-3 border border-brand-gold/50 text-brand-gold uppercase tracking-widest text-sm hover:bg-brand-gold/10 transition-colors duration-300">
            Связаться с нами
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
