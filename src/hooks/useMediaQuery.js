import { useEffect, useState } from 'react';

/**
 * Subscribes to a CSS media query and returns whether it currently matches.
 * Wraps `window.matchMedia`, updating on the `change` event and cleaning up
 * the listener on unmount or when `query` changes.
 *
 * Falls back to the deprecated `addListener`/`removeListener` API when the
 * modern `addEventListener`/`removeEventListener` API is unavailable (older
 * Safari), and safely returns `false` when `window.matchMedia` itself is
 * unavailable (e.g. server-side rendering).
 *
 * @param {string} query - a CSS media query, e.g. '(max-width: 767px)'
 * @returns {boolean} whether the query currently matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Sync immediately in case the query string changed between renders.
    setMatches(mediaQueryList.matches);

    if (typeof mediaQueryList.addEventListener === 'function') {
      mediaQueryList.addEventListener('change', handleChange);
      return () => mediaQueryList.removeEventListener('change', handleChange);
    }

    // Legacy fallback for browsers without addEventListener on MediaQueryList.
    mediaQueryList.addListener(handleChange);
    return () => mediaQueryList.removeListener(handleChange);
  }, [query]);

  return matches;
}

/**
 * Whether the viewport currently matches the Mobile_Viewport definition
 * (width < 768px), per requirements.md.
 *
 * @returns {boolean}
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)');
}

/**
 * Whether the user has requested reduced motion at the OS/browser level.
 *
 * @returns {boolean}
 */
export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
