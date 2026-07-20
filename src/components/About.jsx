import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectInfo } from '../data/projectContent';
import SectionHeading from './SectionHeading';

export default function About() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-28 md:py-40 px-6 bg-brand-bg text-brand-light border-t border-white/5 overflow-hidden"
    >
      {/* Мягкое золотое свечение фона */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: 'radial-gradient(circle, #C7A36A 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SectionHeading eyebrow="О проекте" title="Пространство, вдохновляющее жить" />
        <p className="mt-10 text-xl md:text-3xl font-light leading-relaxed text-brand-gray">
          {projectInfo.about}
        </p>
      </div>
    </section>
  );
}
