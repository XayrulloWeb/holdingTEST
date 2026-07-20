import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import { useLightbox } from '../hooks/useLightbox';
import { projectInfo } from '../data/projectContent';
import SectionHeading from './SectionHeading';

const PARALLAX_AMPLITUDE = 50;

export default function Gallery() {
  const sectionRef = useRef(null);
  const parallaxTargetRef = useRef(null);
  const { gallery } = projectInfo;
  const hasGallery = Array.isArray(gallery) && gallery.length > 0;

  // Стабильный массив рефов (по одному на изображение).
  const itemRefsContainer = useRef([]);
  if (itemRefsContainer.current.length !== gallery.length) {
    itemRefsContainer.current = Array.from(
      { length: gallery.length },
      (_, index) => itemRefsContainer.current[index] || { current: null }
    );
  }
  const itemRefs = itemRefsContainer.current;

  useScrollReveal(sectionRef, { itemRefs });
  useParallax(sectionRef, parallaxTargetRef, PARALLAX_AMPLITUDE);

  const { openIndex, open, close } = useLightbox();

  // Escape-закрытие: слушатель навешивается только при открытом лайтбоксе
  // и снимается при закрытии/размонтировании — без утечки глобального listener'а.
  useEffect(() => {
    if (openIndex === null) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        close();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openIndex, close]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="w-full py-28 md:py-40 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Галерея"
          title="Архитектура в деталях"
          subtitle="Загляните внутрь проекта — фасады, интерьеры и пространства, созданные с вниманием к каждой линии."
        />

        {hasGallery && (
          <div
            ref={parallaxTargetRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mt-16"
          >
            {gallery.map((src, index) => (
              <button
                key={src}
                ref={itemRefs[index]}
                type="button"
                onClick={() => open(index)}
                className="group relative aspect-square overflow-hidden rounded-xl border border-brand-gold/15 cursor-pointer transition-colors duration-500 hover:border-brand-gold/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              >
                <img
                  src={src}
                  alt={`Фото проекта ${index + 1}`}
                  className="w-full h-full object-cover opacity-85 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {hasGallery && openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-brand-bg/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              close();
            }
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="absolute top-6 right-6 text-brand-light hover:text-brand-gold transition-colors duration-300 text-4xl leading-none cursor-pointer"
          >
            &times;
          </button>
          <div onClick={(event) => event.stopPropagation()} className="max-w-5xl max-h-[85vh]">
            <img
              src={gallery[openIndex]}
              alt={`Фото проекта ${openIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-brand-gold/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}
