import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">About</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции About</p>
      </div>
    </section>
  );
}