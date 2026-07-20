import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import { projectInfo } from '../data/projectContent';
import SectionHeading from './SectionHeading';

const PARALLAX_AMPLITUDE = 50;

/**
 * Форматирует объект Distance в короткую строку.
 * @param {{ value: number, unit: 'm'|'min' }} distance
 * @returns {string}
 */
function formatDistance(distance) {
  if (!distance) return '';
  const unitLabel = distance.unit === 'min' ? 'мин' : 'м';
  return `${distance.value} ${unitLabel}`;
}

export default function Location() {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const location = projectInfo.location;
  const landmarks = Array.isArray(location?.landmarks) ? location.landmarks : [];
  const hasLandmarks = landmarks.length > 0;

  useScrollReveal(sectionRef);
  useParallax(sectionRef, backgroundRef, PARALLAX_AMPLITUDE);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative w-full py-28 md:py-40 px-6 bg-brand-bg text-brand-light border-t border-white/5 overflow-hidden"
    >
      <div
        ref={backgroundRef}
        aria-hidden="true"
        className="absolute inset-0 -z-0"
        style={
          location?.backgroundImage
            ? {
                backgroundImage: `url(${location.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : undefined
        }
      >
        <div
          className={
            location?.backgroundImage
              ? 'absolute inset-0 bg-brand-bg/85'
              : 'absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg'
          }
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Локация"
          title="В сердце новой географии города"
          align="left"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-16 items-start">
          <div>
            <span className="eyebrow">Адрес</span>
            <p className="font-display text-2xl md:text-3xl font-light text-brand-light mt-4 leading-snug">
              {location?.address}
            </p>
          </div>

          {hasLandmarks && (
            <div>
              <span className="eyebrow">Рядом с домом</span>
              <ul className="mt-6 space-y-3">
                {landmarks.map((landmark) => (
                  <li
                    key={landmark.name}
                    className="card-premium flex items-center justify-between gap-4 px-5 py-4"
                  >
                    <span className="text-brand-light font-light">{landmark.name}</span>
                    <span className="text-brand-gold whitespace-nowrap font-light">
                      {formatDistance(landmark.distance)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
