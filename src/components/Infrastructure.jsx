import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';

/**
 * Formats a `Distance` object into a short human-readable Russian string,
 * e.g. `{ value: 300, unit: 'm' }` -> "300 м", `{ value: 5, unit: 'min' }` -> "5 мин".
 *
 * @param {{ value: number, unit: 'm'|'min' }} distance
 * @returns {string}
 */
function formatDistance(distance) {
  if (!distance) return '';
  const unitLabel = distance.unit === 'min' ? 'мин' : 'м';
  return `${distance.value} ${unitLabel}`;
}

export default function Infrastructure() {
  const sectionRef = useRef(null);
  const { infrastructure } = projectInfo;
  const items = Array.isArray(infrastructure) ? infrastructure : [];
  const hasItems = items.length > 0;

  // Stable array of refs (one per infrastructure item), created once and
  // reused across re-renders so useScrollReveal doesn't tear down/recreate
  // its ScrollTrigger.
  const itemRefsContainer = useRef([]);
  if (itemRefsContainer.current.length !== items.length) {
    itemRefsContainer.current = Array.from(
      { length: items.length },
      (_, index) => itemRefsContainer.current[index] || { current: null }
    );
  }
  const itemRefs = itemRefsContainer.current;

  useScrollReveal(sectionRef, { itemRefs });

  return (
    <section
      id="infrastructure"
      ref={sectionRef}
      className="w-full py-24 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Инфраструктура</h2>

        {hasItems ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
            {items.map((item, index) => (
              <div
                key={`${item.category}-${item.name}`}
                ref={itemRefs[index]}
                className="p-6 bg-brand-gray/10 border border-brand-gold/20 rounded-lg hover:border-brand-gold/50 transition-colors duration-300"
              >
                <span className="text-xs tracking-widest text-brand-gold uppercase">{item.category}</span>
                <h3 className="mt-3 text-lg font-light text-brand-gold-light">{item.name}</h3>
                <p className="mt-2 text-brand-gray">{formatDistance(item.distance)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl md:text-2xl font-light text-brand-gray mt-12">
            Информация об инфраструктуре уточняется
          </p>
        )}
      </div>
    </section>
  );
}
