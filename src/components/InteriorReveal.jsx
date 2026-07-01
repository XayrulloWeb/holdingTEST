import React from 'react';
import { projectInfo } from '../data/projectContent';

export default function InteriorReveal() {
  return (
    <section className="w-full min-h-screen bg-brand-light text-brand-bg py-24 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-sm tracking-widest uppercase text-brand-gold mb-4">Интерьер</h2>
        <p className="text-3xl md:text-5xl font-light leading-tight">
          {projectInfo.about}
        </p>
      </div>
      
      <div className="w-full max-w-6xl aspect-video bg-gray-200 relative overflow-hidden group">
        <img 
          src={projectInfo.gallery[0]} 
          alt="Interior Placeholder" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Placeholder for Hotspots later */}
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse cursor-pointer">
           <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Материалы
           </div>
        </div>
      </div>
    </section>
  );
}
