import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile, usePrefersReducedMotion } from './useMediaQuery';
import { isParallaxEnabled, getParallaxOffset } from '../utils/scrollAnimation';

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies a scroll-driven parallax translation to `targetRef.current` while
 * the user scrolls through `sectionRef.current`, following the same
 * `ScrollTrigger.create` + cleanup pattern already used in
 * `CinematicStory.jsx`.
 *
 * Parallax is gated by `isParallaxEnabled(isMobile, reducedMotion)`: when
 * disabled (mobile viewport and/or reduced-motion preference active), no
 * ScrollTrigger is created at all (Req 3.6, 6.7, 10.3, 11.5), and any
 * previously-applied offset is reset so the element sits at its natural
 * position.
 *
 * When enabled, exactly one `ScrollTrigger` is created for the section
 * (Req 11.3) that tracks the section's passage through the viewport and, on
 * every update, sets `targetRef.current`'s `y` transform to
 * `getParallaxOffset(self.progress, amplitude)` — a transform-only change
 * that does not affect layout.
 *
 * The effect re-runs only when `isMobile`, `reducedMotion`, or `amplitude`
 * change (not on every render), and its cleanup unconditionally kills the
 * trigger it created, so remounts/preference changes never leak triggers
 * (Req 11.1, 11.4).
 *
 * @param {React.RefObject} sectionRef
 * @param {React.RefObject} targetRef - element to translate
 * @param {number} [amplitude=60] max pixel travel
 */
export function useParallax(sectionRef, targetRef, amplitude = 60) {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !targetRef.current) {
      return undefined;
    }

    if (!isParallaxEnabled(isMobile, reducedMotion)) {
      // No parallax while disabled: ensure the element sits at rest.
      gsap.set(targetRef.current, { y: 0 });
      return undefined;
    }

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate(self) {
        const offset = getParallaxOffset(self.progress, amplitude);
        gsap.set(targetRef.current, { y: offset });
      },
    });

    return () => trigger.kill();
  }, [sectionRef, targetRef, isMobile, reducedMotion, amplitude]);
}
