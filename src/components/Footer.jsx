import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';
import { buildTelHref, buildMailHref } from '../utils/links';

export default function Footer() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const footer = projectInfo.footer;

  return (
    <section
      id="footer"
      ref={sectionRef}
      className="w-full py-24 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Контакты</h2>

        {footer && (
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 mb-12">
            <a
              href={buildTelHref(footer.phone)}
              className="text-xl md:text-2xl font-light text-brand-light hover:text-brand-gold transition-colors"
            >
              {footer.phone}
            </a>
            <a
              href={buildMailHref(footer.email)}
              className="text-xl md:text-2xl font-light text-brand-light hover:text-brand-gold transition-colors"
            >
              {footer.email}
            </a>
          </div>
        )}

        {footer && (
          <p className="max-w-3xl text-xs md:text-sm font-light text-brand-gray leading-relaxed">
            {footer.legalText}
          </p>
        )}
      </div>
    </section>
  );
}
