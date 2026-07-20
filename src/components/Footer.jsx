import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';
import { buildTelHref, buildMailHref } from '../utils/links';

export default function Footer() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const footer = projectInfo.footer;

  return (
    <footer
      id="footer"
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="font-display text-2xl tracking-[0.3em] uppercase text-brand-light mb-3">
          HOLDING
        </span>
        <div className="gold-rule mb-10" aria-hidden="true" />

        {footer && (
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12 mb-12">
            <a
              href={buildTelHref(footer.phone)}
              className="font-display text-xl md:text-2xl font-light text-brand-light hover:text-brand-gold transition-colors duration-300"
            >
              {footer.phone}
            </a>
            <span className="hidden sm:block w-px h-6 bg-brand-gold/30" aria-hidden="true" />
            <a
              href={buildMailHref(footer.email)}
              className="font-display text-xl md:text-2xl font-light text-brand-light hover:text-brand-gold transition-colors duration-300"
            >
              {footer.email}
            </a>
          </div>
        )}

        {footer && (
          <p className="max-w-3xl text-xs md:text-sm font-light text-brand-gray/80 leading-relaxed">
            {footer.legalText}
          </p>
        )}
      </div>
    </footer>
  );
}
