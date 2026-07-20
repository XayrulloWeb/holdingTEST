import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';
import SectionHeading from './SectionHeading';

/**
 * Форматирует количество комнат в короткую подпись.
 * Студия (rooms === 0) — "Студия", иначе "N комн.".
 *
 * @param {number} rooms
 * @returns {string}
 */
function formatRooms(rooms) {
  return rooms === 0 ? 'Студия' : `${rooms} комн.`;
}

export default function Layouts() {
  const sectionRef = useRef(null);
  const { layouts } = projectInfo;
  const hasLayouts = Array.isArray(layouts) && layouts.length > 0;

  // Стабильный массив рефов (по одному на карточку планировки).
  const itemRefsContainer = useRef([]);
  if (itemRefsContainer.current.length !== layouts.length) {
    itemRefsContainer.current = Array.from(
      { length: layouts.length },
      (_, index) => itemRefsContainer.current[index] || { current: null }
    );
  }
  const itemRefs = itemRefsContainer.current;

  useScrollReveal(sectionRef, { itemRefs });

  return (
    <section
      id="layouts"
      ref={sectionRef}
      className="w-full py-28 md:py-40 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Планировки"
          title="Выберите свой формат жизни"
          subtitle="От камерных студий до просторных семейных резиденций — с продуманной геометрией пространства."
        />

        {hasLayouts ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
            {layouts.map((layout, index) => (
              <article
                key={`${layout.type}-${index}`}
                ref={itemRefs[index]}
                className="card-premium group overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-surface to-brand-bg">
                  <img
                    src={layout.image}
                    alt={`Планировка: ${layout.type}`}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/70 via-transparent to-transparent"
                  />
                  <span className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs font-light text-brand-gold-light tracking-wide">
                    {layout.area} м²
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-light text-brand-gold-light mb-2">
                    {layout.type}
                  </h3>
                  <span className="block w-8 h-px bg-brand-gold/40 mb-3 transition-all duration-500 group-hover:w-14 group-hover:bg-brand-gold" aria-hidden="true" />
                  <div className="flex items-center gap-3 text-sm text-brand-gray">
                    <span className="text-brand-light">{layout.area} м²</span>
                    <span className="w-1 h-1 rounded-full bg-brand-gold/50" aria-hidden="true" />
                    <span>{formatRooms(layout.rooms)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg md:text-xl font-light text-brand-gray mt-16">
            Информация о планировках уточняется
          </p>
        )}
      </div>
    </section>
  );
}
