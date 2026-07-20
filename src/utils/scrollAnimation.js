/**
 * Pure, DOM/GSAP-free scroll-animation decision logic shared by the section
 * hooks (`useScrollReveal`, `useParallax`). Every function here is a plain
 * calculation over primitive inputs so it can be property-tested directly
 * in Node without a browser or GSAP mocks.
 *
 * @module utils/scrollAnimation
 */

/** Lower bound (inclusive) for the |from.y - to.y| reveal travel distance, in px. */
const MIN_REVEAL_Y = 10;
/** Upper bound (inclusive) for the |from.y - to.y| reveal travel distance, in px. */
const MAX_REVEAL_Y = 50;
/** Reveal animation duration in ms, always <= 1000. */
const REVEAL_DURATION_MS = 800;

/**
 * Builds the entrance-reveal animation configuration (from/to opacity + y
 * offset, duration) for a section or item.
 *
 * When `reducedMotion` is `false`, the returned `from`/`to` describe a fade
 * + vertical-slide entrance (`from.opacity === 0`, `to.opacity === 1`) that
 * takes at most 1000ms, with a travel distance clamped to [10, 50] px.
 *
 * When `reducedMotion` is `true`, `from` is set equal to `to` (final,
 * fully-visible state) so no animation delta exists and no ScrollTrigger
 * needs to be created by the caller.
 *
 * @param {boolean} reducedMotion
 * @param {{ y?: number }} [options]
 * @param {number} [options.y=30] desired vertical travel distance in px,
 *   clamped to [10, 50] before use.
 * @returns {{ from: { opacity: number, y: number }, to: { opacity: number, y: number }, duration: number }}
 */
export function getRevealConfig(reducedMotion, { y = 30 } = {}) {
  const clampedY = Math.min(MAX_REVEAL_Y, Math.max(MIN_REVEAL_Y, y));

  if (reducedMotion) {
    const finalState = { opacity: 1, y: 0 };
    return { from: finalState, to: finalState, duration: 0 };
  }

  return {
    from: { opacity: 0, y: clampedY },
    to: { opacity: 1, y: 0 },
    duration: REVEAL_DURATION_MS,
  };
}

/**
 * Pure state machine for repeatable enter/exit reveal triggering.
 *
 * Plays (returns `shouldPlay: true`) exactly when the visible ratio crosses
 * from below `threshold` to at-or-above it while the previous state was
 * `'idle'`. Transitions back to `'idle'` only once the ratio drops below
 * `threshold` again, so a play can never be reported twice in a row without
 * an intervening drop below the threshold.
 *
 * @param {'idle'|'revealed'} state current state
 * @param {number} visibleRatio current visible-height ratio of the section, 0..1
 * @param {number} [threshold=0.2]
 * @returns {{ state: 'idle'|'revealed', shouldPlay: boolean }}
 */
export function nextRevealState(state, visibleRatio, threshold = 0.2) {
  if (state === 'idle') {
    if (visibleRatio >= threshold) {
      return { state: 'revealed', shouldPlay: true };
    }
    return { state: 'idle', shouldPlay: false };
  }

  // state === 'revealed'
  if (visibleRatio < threshold) {
    return { state: 'idle', shouldPlay: false };
  }
  return { state: 'revealed', shouldPlay: false };
}

/**
 * Computes per-index stagger delays for a sequential reveal animation.
 *
 * The returned array always has length `count`, starts at `0` for index 0,
 * is non-decreasing, and never increases by more than `maxDelayMs` between
 * consecutive indices.
 *
 * @param {number} count
 * @param {number} [maxDelayMs=200]
 * @returns {number[]} delay in ms for the item at each index, index 0 === 0
 */
export function getStaggerDelays(count, maxDelayMs = 200) {
  const safeCount = Math.max(0, Math.trunc(count));
  const step = Math.max(0, maxDelayMs);
  return Array.from({ length: safeCount }, (_, index) => index * step);
}

/**
 * Determines whether parallax scrolling should be active.
 *
 * @param {boolean} isMobile
 * @param {boolean} reducedMotion
 * @returns {boolean} `true` if and only if `isMobile === false` and `reducedMotion === false`
 */
export function isParallaxEnabled(isMobile, reducedMotion) {
  return isMobile === false && reducedMotion === false;
}

/**
 * Computes the parallax pixel offset for the current scroll progress.
 *
 * `progress` is clamped to `[0, 1]` before mapping, so the result is always
 * within `[-amplitude, amplitude]` and monotonically non-decreasing as
 * `progress` increases, regardless of out-of-range inputs.
 *
 * @param {number} progress current scroll progress of the section, 0..1
 * @param {number} amplitude max pixel offset
 * @returns {number} pixel offset, always within [-amplitude, amplitude]
 */
export function getParallaxOffset(progress, amplitude) {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  return (clampedProgress * 2 - 1) * amplitude;
}
