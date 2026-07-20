import { useCallback, useReducer } from 'react';

/**
 * @typedef {{ status: 'idle' | 'submitting' | 'success' | 'error', formData: object | null }} SubmissionState
 * @typedef {
 *   { type: 'SUBMIT_START', formData: object }
 *   | { type: 'SUBMIT_SUCCESS' }
 *   | { type: 'SUBMIT_ERROR' }
 *   | { type: 'RESET' }
 * } SubmissionAction
 */

/** @type {SubmissionState} */
export const initialSubmissionState = { status: 'idle', formData: null };

/**
 * Pure reducer for the lead form submission lifecycle.
 *
 * - `SUBMIT_START` dispatched while already `submitting` leaves the state unchanged (Req 7.8).
 * - `SUBMIT_SUCCESS` transitions `status` to `'success'` and clears the stored form data (Req 7.6).
 * - `SUBMIT_ERROR` transitions `status` to `'error'` and preserves the form data present before
 *   the submit (Req 7.7).
 * - `RESET` returns to the initial `idle` state.
 *
 * @param {SubmissionState} state
 * @param {SubmissionAction} action
 * @returns {SubmissionState}
 */
export function submissionReducer(state, action) {
  switch (action.type) {
    case 'SUBMIT_START':
      if (state.status === 'submitting') {
        return state;
      }
      return { status: 'submitting', formData: action.formData };
    case 'SUBMIT_SUCCESS':
      return { status: 'success', formData: null };
    case 'SUBMIT_ERROR':
      return { status: 'error', formData: state.formData };
    case 'RESET':
      return initialSubmissionState;
    default:
      return state;
  }
}

/**
 * @param {(formData: object) => Promise<void>} onSubmit
 * @returns {{ status: 'idle' | 'submitting' | 'success' | 'error', submit: (formData: object) => Promise<void>, reset: () => void }}
 */
export function useSubmissionLifecycle(onSubmit) {
  const [state, dispatch] = useReducer(submissionReducer, initialSubmissionState);

  const submit = useCallback(
    async (formData) => {
      dispatch({ type: 'SUBMIT_START', formData });
      try {
        await onSubmit(formData);
        dispatch({ type: 'SUBMIT_SUCCESS' });
      } catch {
        dispatch({ type: 'SUBMIT_ERROR' });
      }
    },
    [onSubmit],
  );

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return { status: state.status, submit, reset };
}
