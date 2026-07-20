import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';
import SectionHeading from './SectionHeading';

export default function Benefits() {
  const sectionRef = useRef(null);
  const { benefits } = projectInfo;
  const hasBenefits = Array.isArray(benefits) && benefits.length > 0;

  // Стабильный массив рефов (по одному на карточку), создаётся один раз и
  // переиспользуется между ре-рендерами, чтобы useScrollReveal не пересоздавал ScrollTrigger.
  const itemRefsContainer = useRef([]);
  if (itemRefsContainer.current.length !== benefits.length) {
    itemRefsContainer.current = Array.from(
      { length: benefits.length },
      (_, index) => itemRefsContainer.current[index] || { current: null }
    );
  }
  const itemRefs = itemRefsContainer.current;

  useScrollReveal(sectionRef, { itemRefs });

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="w-full py-28 md:py-40 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Преимущества"
          title="Детали, определяющие статус"
          subtitle="Каждый элемент комплекса продуман для тех, кто ценит комфорт, приватность и безупречное качество."
        />

        {hasBenefits && (
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                ref={itemRefs[index]}
                className="card-premium group p-8 md:p-10"
              >
                <span className="font-display text-4xl font-light text-brand-gold/40 transition-colors duration-500 group-hover:text-brand-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-light text-brand-gold-light mt-5 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray font-light leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
