/**
 * Построители контактных ссылок (Footer_Section).
 *
 * Правила:
 * - `buildTelHref` возвращает строку, начинающуюся с `"tel:"`, за которой
 *   следует значение `phone` с удалёнными пробельными символами;
 * - `buildMailHref` возвращает строку, равную `"mailto:" + email`, без
 *   каких-либо преобразований самого адреса.
 *
 * Requirements: 8.2, 8.3
 */

/**
 * @param {string} phone
 * @returns {string} e.g. "tel:+79991234567"
 */
export function buildTelHref(phone) {
  const normalizedPhone = phone.replace(/\s+/g, '');
  return `tel:${normalizedPhone}`;
}

/**
 * @param {string} email
 * @returns {string} e.g. "mailto:info@holding.ru"
 */
export function buildMailHref(email) {
  return `mailto:${email}`;
}
