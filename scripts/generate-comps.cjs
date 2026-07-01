const fs = require('fs');
const comps = ['Header','About','Benefits','Gallery','Layouts','Infrastructure','Location','LeadForm','Footer','Loader'];

comps.forEach(c => {
  const content = `import React from 'react';

export default function ${c}() {
  return (
    <section id="${c.toLowerCase()}" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">${c}</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции ${c}</p>
      </div>
    </section>
  );
}`;
  fs.writeFileSync(`src/components/${c}.jsx`, content);
});

const headerContent = `import React from 'react';

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
}`;
fs.writeFileSync('src/components/Header.jsx', headerContent);
