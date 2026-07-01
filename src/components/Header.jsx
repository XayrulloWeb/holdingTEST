import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
      <div className="text-xl tracking-widest uppercase font-light pointer-events-auto">HOLDING</div>
      <nav className="hidden md:flex gap-8 text-sm tracking-wide pointer-events-auto">
        <a href="#about" className="hover:text-brand-gold transition-colors">О проекте</a>
        <a href="#gallery" className="hover:text-brand-gold transition-colors">Галерея</a>
        <a href="#layouts" className="hover:text-brand-gold transition-colors">Планировки</a>
      </nav>
      <button className="text-sm tracking-wide uppercase hover:text-brand-gold transition-colors pointer-events-auto">
        Меню
      </button>
    </header>
  );
}