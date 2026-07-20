import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import { projectInfo } from '../data/projectContent';

const PARALLAX_AMPLITUDE = 50;

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
      className="relative w-full py-24 px-6 bg-brand-bg text-brand-light border-t border-white/5 overflow-hidden"
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
              ? 'absolute inset-0 bg-brand-bg/80'
              : 'absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-gray/20 to-brand-bg'
          }
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8 text-center">Локация</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-brand-gold-light mb-4">Адрес</h3>
            <p className="text-lg text-brand-gray">{location?.address}</p>
          </div>

          {hasLandmarks && (
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-brand-gold-light mb-4">Рядом с домом</h3>
              <ul className="space-y-4">
                {landmarks.map((landmark) => (
                  <li
                    key={landmark.name}
                    className="flex items-center justify-between gap-4 p-4 bg-brand-gray/10 border border-brand-gold/20 rounded-lg hover:border-brand-gold/50 transition-colors duration-300"
                  >
                    <span className="text-brand-light">{landmark.name}</span>
                    <span className="text-brand-gold whitespace-nowrap">{formatDistance(landmark.distance)}</span>
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
