import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';

/**
 * Formats the rooms count of a layout item into a short human-readable label.
 * Studios (rooms === 0) are labelled "Студия", otherwise "N комн.".
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

  // Stable array of refs (one per layout card), created once and reused
  // across re-renders so useScrollReveal doesn't tear down/recreate its
  // ScrollTrigger.
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
      className="w-full py-24 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Планировки</h2>

        {hasLayouts ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-left">
            {layouts.map((layout, index) => (
              <div
                key={`${layout.type}-${index}`}
                ref={itemRefs[index]}
                className="group bg-brand-gray/10 border border-brand-gold/20 rounded-lg overflow-hidden hover:border-brand-gold/50 transition-colors duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-bg">
                  <img
                    src={layout.image}
                    alt={`Планировка: ${layout.type}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-brand-gold-light mb-2">{layout.type}</h3>
                  <div className="flex items-center gap-4 text-brand-gray">
                    <span>{layout.area} м²</span>
                    <span className="w-1 h-1 rounded-full bg-brand-gray/50" aria-hidden="true" />
                    <span>{formatRooms(layout.rooms)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl md:text-2xl font-light text-brand-gray mt-12">
            Информация о планировках уточняется
          </p>
        )}
      </div>
    </section>
  );
}
