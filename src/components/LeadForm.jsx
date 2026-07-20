import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSubmissionLifecycle } from '../hooks/useSubmissionLifecycle';
import { validateLeadForm } from '../utils/validation';

/**
 * Default submission handler used when no `onSubmit` prop is injected.
 * Simulates a network request with a short delay and resolves successfully,
 * leaving a clear seam for wiring a real backend endpoint later.
 *
 * @param {{ name: string, phone: string, consent: boolean }} formData
 * @returns {Promise<void>}
 */
async function defaultOnSubmit(formData) {
  // eslint-disable-next-line no-unused-vars
  const _formData = formData;
  await new Promise((resolve) => setTimeout(resolve, 800));
}

export default function LeadForm({ onSubmit = defaultOnSubmit }) {
  const sectionRef = useRef(null);

  // Stable array of 3 refs (name field, phone field, consent+submit block),
  // created once so useScrollReveal doesn't tear down/recreate its ScrollTrigger.
  const itemRefsContainer = useRef([{ current: null }, { current: null }, { current: null }]);
  const itemRefs = itemRefsContainer.current;

  useScrollReveal(sectionRef, { itemRefs });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});

  const { status, submit } = useSubmissionLifecycle(onSubmit);

  // On successful submission, clear the locally-controlled field values
  // (Req 7.6). On error, values are intentionally left untouched (Req 7.7).
  useEffect(() => {
    if (status === 'success') {
      setName('');
      setPhone('');
      setConsent(false);
    }
  }, [status]);

  const isSubmitting = status === 'submitting';

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const { valid, errors: validationErrors } = validateLeadForm({ name, phone, consent });
    if (!valid) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    submit({ name, phone, consent });
  }

  return (
    <section
      id="leadform"
      ref={sectionRef}
      className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5"
    >
      <div className="max-w-xl w-full mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Оставить заявку</h2>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 text-left">
          <div ref={itemRefs[0]}>
            <label htmlFor="leadform-name" className="block text-sm text-brand-gray mb-2">
              Имя
            </label>
            <input
              id="leadform-name"
              name="name"
              type="text"
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'leadform-name-error' : undefined}
              className="w-full bg-brand-bg border border-brand-gold/30 rounded-md px-4 py-3 text-brand-light placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-gold transition-colors"
              placeholder="Ваше имя"
            />
            {errors.name && (
              <p id="leadform-name-error" className="mt-2 text-sm text-brand-gold-light">
                {errors.name}
              </p>
            )}
          </div>

          <div ref={itemRefs[1]}>
            <label htmlFor="leadform-phone" className="block text-sm text-brand-gray mb-2">
              Телефон
            </label>
            <input
              id="leadform-phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'leadform-phone-error' : undefined}
              className="w-full bg-brand-bg border border-brand-gold/30 rounded-md px-4 py-3 text-brand-light placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-gold transition-colors"
              placeholder="+7 999 123-45-67"
            />
            {errors.phone && (
              <p id="leadform-phone-error" className="mt-2 text-sm text-brand-gold-light">
                {errors.phone}
              </p>
            )}
          </div>

          <div ref={itemRefs[2]} className="flex flex-col gap-6">
            <div>
              <label htmlFor="leadform-consent" className="flex items-start gap-3 text-sm text-brand-gray">
                <input
                  id="leadform-consent"
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? 'leadform-consent-error' : undefined}
                  className="mt-1 h-4 w-4 accent-brand-gold shrink-0"
                />
                <span>Я согласен на обработку персональных данных</span>
              </label>
              {errors.consent && (
                <p id="leadform-consent-error" className="mt-2 text-sm text-brand-gold-light">
                  {errors.consent}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-gold text-brand-bg font-light tracking-wide uppercase text-sm py-3 rounded-md transition-colors hover:bg-brand-gold-light disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>

            {status === 'success' && (
              <p role="status" className="text-sm text-brand-gold-light text-center">
                Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
              </p>
            )}

            {status === 'error' && (
              <p role="alert" className="text-sm text-brand-gold-light text-center">
                Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
