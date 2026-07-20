import { useCallback, useReducer } from 'react';

/**
 * @typedef {{ openIndex: number | null }} LightboxState
 * @typedef {{ type: 'OPEN', index: number } | { type: 'CLOSE' }} LightboxAction
 */

/** @type {LightboxState} */
export const initialLightboxState = { openIndex: null };

/**
 * Pure reducer for lightbox open/close state.
 * @param {LightboxState} state
 * @param {LightboxAction} action
 * @returns {LightboxState}
 */
export function lightboxReducer(state, action) {
  switch (action.type) {
    case 'OPEN':
      return { openIndex: action.index };
    case 'CLOSE':
      return { openIndex: null };
    default:
      return state;
  }
}

/**
 * @returns {{ openIndex: number | null, open: (index: number) => void, close: () => void }}
 */
export function useLightbox() {
  const [state, dispatch] = useReducer(lightboxReducer, initialLightboxState);

  const open = useCallback((index) => {
    dispatch({ type: 'OPEN', index });
  }, []);

  const close = useCallback(() => {
    dispatch({ type: 'CLOSE' });
  }, []);

  return { openIndex: state.openIndex, open, close };
}
