import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSubmissionLifecycle } from '../hooks/useSubmissionLifecycle';
import { validateLeadForm } from '../utils/validation';
import SectionHeading from './SectionHeading';

/**
 * Дефолтный обработчик отправки, если проп `onSubmit` не передан.
 * Имитирует сетевой запрос с задержкой и успешно резолвится, оставляя
 * чёткую точку интеграции с реальным backend-эндпоинтом.
 *
 * @param {{ name: string, phone: string, consent: boolean }} formData
 * @returns {Promise<void>}
 */
async function defaultOnSubmit(formData) {
  // eslint-disable-next-line no-unused-vars
  const _formData = formData;
  await new Promise((resolve) => setTimeout(resolve, 800));
}

const inputClass =
  'w-full bg-brand-surface/60 border border-brand-gold/20 rounded-lg px-4 py-3.5 text-brand-light placeholder:text-brand-gray/50 transition-colors duration-300 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/40';

export default function LeadForm({ onSubmit = defaultOnSubmit }) {
  const sectionRef = useRef(null);

  // Стабильный массив из 3 рефов (поле имени, поле телефона, блок согласия+кнопка).
  const itemRefsContainer = useRef([{ current: null }, { current: null }, { current: null }]);
  const itemRefs = itemRefsContainer.current;

  useScrollReveal(sectionRef, { itemRefs });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});

  const { status, submit } = useSubmissionLifecycle(onSubmit);

  // При успешной отправке очищаем поля (Req 7.6). При ошибке значения сохраняются (Req 7.7).
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
      className="relative w-full py-28 md:py-40 px-6 bg-brand-bg text-brand-light border-t border-white/5 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[30rem] w-[30rem] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: 'radial-gradient(circle, #C7A36A 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-xl w-full mx-auto">
        <SectionHeading
          eyebrow="Заявка"
          title="Оставьте заявку"
          subtitle="Оставьте контакты — представитель отдела продаж свяжется с вами и подберёт лучший вариант."
        />

        <form onSubmit={handleSubmit} noValidate className="mt-12 flex flex-col gap-6 text-left">
          <div ref={itemRefs[0]}>
            <label htmlFor="leadform-name" className="block text-sm text-brand-gray mb-2 font-light">
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
              className={inputClass}
              placeholder="Ваше имя"
            />
            {errors.name && (
              <p id="leadform-name-error" className="mt-2 text-sm text-brand-gold-light">
                {errors.name}
              </p>
            )}
          </div>

          <div ref={itemRefs[1]}>
            <label htmlFor="leadform-phone" className="block text-sm text-brand-gray mb-2 font-light">
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
              className={inputClass}
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
              <label
                htmlFor="leadform-consent"
                className="flex items-start gap-3 text-sm text-brand-gray font-light cursor-pointer"
              >
                <input
                  id="leadform-consent"
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? 'leadform-consent-error' : undefined}
                  className="mt-0.5 h-4 w-4 accent-brand-gold shrink-0 cursor-pointer"
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
              className="w-full bg-brand-gold text-brand-bg font-medium tracking-[0.15em] uppercase text-sm py-4 rounded-lg transition-all duration-300 hover:bg-brand-gold-light hover:shadow-[0_10px_30px_-10px_rgba(199,163,106,0.6)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? 'Отправка…' : 'Отправить заявку'}
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
