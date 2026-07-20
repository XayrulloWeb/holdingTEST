import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './useMediaQuery';
import { getRevealConfig, nextRevealState, getStaggerDelays } from '../utils/scrollAnimation';

gsap.registerPlugin(ScrollTrigger);

/**
 * Estimates the visible-height ratio (0..1) of an element within the
 * current viewport, used to feed the pure `nextRevealState` crossing
 * detector. Falls back to `0` when geometry is unavailable (e.g. jsdom
 * without a real layout engine).
 *
 * @param {Element} el
 * @returns {number}
 */
function computeVisibleRatio(el) {
  if (!el || typeof el.getBoundingClientRect !== 'function') return 0;

  const rect = el.getBoundingClientRect();
  const viewportHeight =
    (typeof window !== 'undefined' && window.innerHeight) ||
    (typeof document !== 'undefined' && document.documentElement.clientHeight) ||
    0;
  const height = rect.height || 1;

  const visibleTop = Math.max(rect.top, 0);
  const visibleBottom = Math.min(rect.bottom, viewportHeight);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);

  return visibleHeight / height;
}

/**
 * Wires a section (or a set of its child items) up to a single
 * scroll-triggered entrance-reveal animation, following the ScrollTrigger
 * lifecycle pattern already used by `CinematicStory.jsx`: plugin registered
 * once at module scope, trigger created inside an effect, `.kill()`ed on
 * cleanup.
 *
 * - When `prefers-reduced-motion` is active, the final visual state is
 *   applied immediately via `gsap.set` and **no** ScrollTrigger is created
 *   (Req 11.5).
 * - Otherwise exactly one `ScrollTrigger` is created per mount
 *   (`start: 'top 80%'`, Req 11.3/11.4), and repeat-reveal decisions are
 *   delegated to the pure `nextRevealState` state machine (Req 1.3).
 * - When `itemRefs` is provided, each item is animated individually with a
 *   delay from `getStaggerDelays`; otherwise `sectionRef.current` is
 *   animated as a single block.
 *
 * @param {React.RefObject} sectionRef - trigger element
 * @param {object} [options]
 * @param {React.RefObject[]} [options.itemRefs] - if provided, staggers these instead of animating sectionRef as one block
 * @param {number} [options.maxStaggerDelayMs=200]
 * @param {number} [options.y=30]
 * @returns {void}
 */
export function useScrollReveal(sectionRef, options = {}) {
  const { itemRefs, maxStaggerDelayMs = 200, y = 30 } = options;
  const hasItemRefs = Array.isArray(itemRefs);
  const itemRefsCount = hasItemRefs ? itemRefs.length : 0;
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealStateRef = useRef('idle');

  useEffect(() => {
    const sectionEl = sectionRef && sectionRef.current;
    if (!sectionEl) return undefined;

    const targets = hasItemRefs
      ? itemRefs.map((ref) => ref && ref.current).filter(Boolean)
      : [sectionEl];

    if (prefersReducedMotion) {
      const { to } = getRevealConfig(true, { y });
      if (targets.length > 0) {
        gsap.set(targets, { opacity: to.opacity, y: to.y });
      }
      return undefined;
    }

    revealStateRef.current = 'idle';

    const playReveal = () => {
      const config = getRevealConfig(false, { y });
      const durationSeconds = config.duration / 1000;

      if (hasItemRefs) {
        const delays = getStaggerDelays(targets.length, maxStaggerDelayMs);
        targets.forEach((target, index) => {
          gsap.fromTo(
            target,
            { opacity: config.from.opacity, y: config.from.y },
            {
              opacity: config.to.opacity,
              y: config.to.y,
              duration: durationSeconds,
              delay: delays[index] / 1000,
              overwrite: true,
            }
          );
        });
      } else if (targets.length > 0) {
        gsap.fromTo(
          targets,
          { opacity: config.from.opacity, y: config.from.y },
          {
            opacity: config.to.opacity,
            y: config.to.y,
            duration: durationSeconds,
            overwrite: true,
          }
        );
      }
    };

    const handleToggle = () => {
      const visibleRatio = computeVisibleRatio(sectionEl);
      const result = nextRevealState(revealStateRef.current, visibleRatio);
      revealStateRef.current = result.state;
      if (result.shouldPlay) {
        playReveal();
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 80%',
      onEnter: handleToggle,
      onEnterBack: handleToggle,
      onLeave: handleToggle,
      onLeaveBack: handleToggle,
    });

    return () => {
      trigger.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionRef, hasItemRefs, itemRefsCount, maxStaggerDelayMs, y, prefersReducedMotion]);
}
