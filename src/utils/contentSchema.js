/**
 * Валидаторы контрактов данных для контента секций (планировки, инфраструктура,
 * локация, футер). Чистые функции без DOM-зависимостей.
 *
 * Соответствуют JSDoc-типам `LayoutItem`, `Distance`, `InfrastructureItem`,
 * `Landmark`, `LocationInfo`, `FooterInfo` из design.md и Property 4
 * ("Data contract validation accepts exactly well-formed content items").
 *
 * Requirements: 4.1, 5.1, 6.1, 8.1
 */

/**
 * @typedef {Object} Distance
 * @property {number} value - положительное число
 * @property {'m'|'min'} unit
 */

/**
 * Проверяет, что значение — непустая строка (после trim).
 * @param {*} value
 * @returns {boolean}
 */
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Проверяет, что значение — конечное число.
 * @param {*} value
 * @returns {boolean}
 */
function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

/**
 * Проверяет, что значение — положительное конечное число.
 * @param {*} value
 * @returns {boolean}
 */
function isPositiveNumber(value) {
  return isFiniteNumber(value) && value > 0;
}

/**
 * Проверяет форму `Distance`: `{ value: number, unit: 'm'|'min' }`,
 * где `value` — положительное число.
 * @param {*} candidate
 * @returns {boolean}
 */
export function isValidDistance(candidate) {
  if (typeof candidate !== 'object' || candidate === null) {
    return false;
  }
  const { value, unit } = candidate;
  return isPositiveNumber(value) && (unit === 'm' || unit === 'min');
}

/**
 * Проверяет форму `LayoutItem`: `type` — непустая строка, `area` — положительное
 * число, `rooms` — целое неотрицательное число (0 допускается для студии),
 * `image` — непустая строка.
 * @param {*} candidate
 * @returns {boolean}
 */
export function isValidLayoutItem(candidate) {
  if (typeof candidate !== 'object' || candidate === null) {
    return false;
  }
  const { type, area, rooms, image } = candidate;
  return (
    isNonEmptyString(type) &&
    isPositiveNumber(area) &&
    Number.isInteger(rooms) &&
    rooms >= 0 &&
    isNonEmptyString(image)
  );
}

/**
 * Проверяет форму `InfrastructureItem`: `category` и `name` — непустые строки,
 * `distance` — валидная форма `Distance`.
 * @param {*} candidate
 * @returns {boolean}
 */
export function isValidInfrastructureItem(candidate) {
  if (typeof candidate !== 'object' || candidate === null) {
    return false;
  }
  const { category, name, distance } = candidate;
  return (
    isNonEmptyString(category) &&
    isNonEmptyString(name) &&
    isValidDistance(distance)
  );
}

/**
 * Проверяет форму `Landmark`: `name` — непустая строка, `distance` — валидная
 * форма `Distance`.
 * @param {*} candidate
 * @returns {boolean}
 */
function isValidLandmark(candidate) {
  if (typeof candidate !== 'object' || candidate === null) {
    return false;
  }
  const { name, distance } = candidate;
  return isNonEmptyString(name) && isValidDistance(distance);
}

/**
 * Проверяет форму `LocationInfo`: `address` — непустая строка, `coordinates`
 * содержит числовые `lat`/`lng`, каждый элемент `landmarks` независимо
 * удовлетворяет форме ориентира.
 * @param {*} candidate
 * @returns {boolean}
 */
export function isValidLocationInfo(candidate) {
  if (typeof candidate !== 'object' || candidate === null) {
    return false;
  }
  const { address, coordinates, landmarks } = candidate;

  if (!isNonEmptyString(address)) {
    return false;
  }

  if (typeof coordinates !== 'object' || coordinates === null) {
    return false;
  }
  if (!isFiniteNumber(coordinates.lat) || !isFiniteNumber(coordinates.lng)) {
    return false;
  }

  if (!Array.isArray(landmarks)) {
    return false;
  }
  return landmarks.every(isValidLandmark);
}

/**
 * Проверяет форму `FooterInfo`: `phone`, `email`, `legalText` — все непустые
 * строки.
 * @param {*} candidate
 * @returns {boolean}
 */
export function isValidFooterInfo(candidate) {
  if (typeof candidate !== 'object' || candidate === null) {
    return false;
  }
  const { phone, email, legalText } = candidate;
  return (
    isNonEmptyString(phone) && isNonEmptyString(email) && isNonEmptyString(legalText)
  );
}
