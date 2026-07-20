/**
 * Валидация формы заявки (Lead_Form).
 *
 * Правила:
 * - `name` должен быть непустым после `trim()`
 *   (ограничение в 100 символов обеспечивается на уровне поля ввода);
 * - `phone` после удаления пробелов, дефисов, круглых скобок и символа `+`
 *   должен состоять только из цифр в количестве от 10 до 15;
 * - `consent` должен быть строго равен `true`.
 *
 * Requirements: 7.2, 7.3, 7.4, 7.5
 */

/**
 * @param {{ name: string, phone: string, consent: boolean }} formData
 * @returns {{ valid: boolean, errors: { name?: string, phone?: string, consent?: string } }}
 */
export function validateLeadForm(formData) {
  const { name, phone, consent } = formData;
  const errors = {};

  const trimmedName = typeof name === 'string' ? name.trim() : '';
  if (trimmedName.length === 0) {
    errors.name = 'Введите имя';
  }

  const digitsOnlyPhone =
    typeof phone === 'string' ? phone.replace(/[\s\-()+]/g, '') : '';
  const isAllDigits = /^\d+$/.test(digitsOnlyPhone);
  if (
    !isAllDigits ||
    digitsOnlyPhone.length < 10 ||
    digitsOnlyPhone.length > 15
  ) {
    errors.phone = 'Введите корректный номер телефона';
  }

  if (consent !== true) {
    errors.consent = 'Необходимо согласие на обработку персональных данных';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
