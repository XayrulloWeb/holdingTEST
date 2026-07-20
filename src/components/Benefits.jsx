import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';

export default function Benefits() {
  const sectionRef = useRef(null);
  const { benefits } = projectInfo;
  const hasBenefits = Array.isArray(benefits) && benefits.length > 0;

  // Stable array of refs (one per benefit), created once and reused across
  // re-renders so useScrollReveal doesn't tear down/recreate its ScrollTrigger.
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
      className="w-full py-24 px-6 bg-brand-bg text-brand-light border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Benefits</h2>
        {hasBenefits && (
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                ref={itemRefs[index]}
                className="p-8 bg-brand-gray/10 border border-brand-gold/20 rounded-lg hover:border-brand-gold/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-light text-brand-gold-light mb-3">{benefit.title}</h3>
                <p className="text-brand-gray leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
