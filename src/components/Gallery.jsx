import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import { useLightbox } from '../hooks/useLightbox';
import { projectInfo } from '../data/projectContent';

const PARALLAX_AMPLITUDE = 50;

export default function Gallery() {
  const sectionRef = useRef(null);
  const parallaxTargetRef = useRef(null);
  const { gallery } = projectInfo;
  const hasGallery = Array.isArray(gallery) && gallery.length > 0;

  // Stable array of refs (one per image), created once and reused across
  // re-renders so useScrollReveal doesn't tear down/recreate its ScrollTrigger.
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

  // Escape-to-close: listener is attached only while the lightbox is open
  // and removed on close/unmount, so no global listener is ever leaked.
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
      className="w-full py-24 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Gallery</h2>

        {hasGallery && (
          <div ref={parallaxTargetRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {gallery.map((src, index) => (
              <button
                key={src}
                ref={itemRefs[index]}
                type="button"
                onClick={() => open(index)}
                className="relative aspect-square overflow-hidden rounded-lg border border-brand-gold/20 hover:border-brand-gold/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <img
                  src={src}
                  alt={`Фото проекта ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {hasGallery && openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-brand-bg/90 flex items-center justify-center p-6"
          onClick={(event) => {
            // Close on backdrop click only, not on clicks bubbling from the
            // image container (which stops propagation below).
            if (event.target === event.currentTarget) {
              close();
            }
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="absolute top-6 right-6 text-brand-light hover:text-brand-gold transition-colors duration-300 text-3xl leading-none"
          >
            &times;
          </button>
          <div onClick={(event) => event.stopPropagation()} className="max-w-5xl max-h-[85vh]">
            <img
              src={gallery[openIndex]}
              alt={`Фото проекта ${openIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
