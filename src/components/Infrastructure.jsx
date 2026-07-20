import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';
import SectionHeading from './SectionHeading';

/**
 * Форматирует объект Distance в короткую строку:
 * `{ value: 300, unit: 'm' }` -> "300 м", `{ value: 5, unit: 'min' }` -> "5 мин".
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

  // Стабильный массив рефов (по одному на объект инфраструктуры).
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
      className="w-full py-28 md:py-40 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Инфраструктура"
          title="Всё необходимое — в шаговой доступности"
          subtitle="Образование, здоровье, отдых и сервис рядом с домом, чтобы каждый день был удобным."
        />

        {hasItems ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {items.map((item, index) => (
              <article
                key={`${item.category}-${item.name}`}
                ref={itemRefs[index]}
                className="card-premium group p-7 flex items-start justify-between gap-4"
              >
                <div>
                  <span className="eyebrow">{item.category}</span>
                  <h3 className="font-display text-lg font-light text-brand-gold-light mt-3">
                    {item.name}
                  </h3>
                </div>
                <span className="shrink-0 mt-1 text-sm text-brand-gold whitespace-nowrap font-light">
                  {formatDistance(item.distance)}
                </span>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg md:text-xl font-light text-brand-gray mt-16">
            Информация об инфраструктуре уточняется
          </p>
        )}
      </div>
    </section>
  );
}
