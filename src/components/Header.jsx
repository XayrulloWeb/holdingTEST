import React from 'react';
import Logo from './Logo';

const navLinks = [
  { href: '#about', label: 'О проекте' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#layouts', label: 'Планировки' },
  { href: '#infrastructure', label: 'Инфраструктура' },
  { href: '#location', label: 'Локация' },
  { href: '#leadform', label: 'Заявка' },
  { href: '#footer', label: 'Контакты' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 text-white flex justify-between items-center pointer-events-none">
      <a href="#" className="pointer-events-auto mix-blend-difference cursor-pointer" aria-label="HOLDING — на главную">
        <Logo size={32} />
      </a>
      <nav className="hidden lg:flex gap-7 text-xs tracking-[0.15em] uppercase font-light pointer-events-auto mix-blend-difference">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative text-white/80 hover:text-white transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button className="lg:hidden text-xs tracking-[0.15em] uppercase font-light hover:text-brand-gold transition-colors duration-300 pointer-events-auto mix-blend-difference">
        Меню
      </button>
    </header>
  );
}
