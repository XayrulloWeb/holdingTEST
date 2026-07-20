import {
  isValidLayoutItem,
  isValidInfrastructureItem,
  isValidLocationInfo,
  isValidFooterInfo
} from '../utils/contentSchema.js';

/**
 * @typedef {Object} LayoutItem
 * @property {string} type   - e.g. "Студия", "1-комнатная"
 * @property {number} area   - m², > 0
 * @property {number} rooms  - integer >= 0 (0 = studio)
 * @property {string} image  - path/URL to floor plan image
 */

/**
 * @typedef {Object} Distance
 * @property {number} value  - > 0
 * @property {'m'|'min'} unit
 */

/**
 * @typedef {Object} InfrastructureItem
 * @property {string} category  - non-empty, e.g. "Образование"
 * @property {string} name      - non-empty, e.g. "Школа №12"
 * @property {Distance} distance
 */

/**
 * @typedef {Object} Landmark
 * @property {string} name  - non-empty
 * @property {Distance} distance
 */

/**
 * @typedef {Object} LocationInfo
 * @property {string} address  - non-empty
 * @property {{ lat: number, lng: number }} coordinates
 * @property {Landmark[]} landmarks
 * @property {string} [backgroundImage]
 */

/**
 * @typedef {Object} FooterInfo
 * @property {string} phone      - e.g. "+7 999 123-45-67"
 * @property {string} email      - e.g. "info@holding.ru"
 * @property {string} legalText
 */

export const buildingCallouts = [
  {
    id: 1,
    eyebrow: "Локация",
    title: "Центр городской жизни",
    description: "Комплекс расположен в новом центре притяжения, обеспечивая удобный доступ ко всем ключевым точкам города.",
    startProgress: 0.1,
    endProgress: 0.4
  },
  {
    id: 2,
    eyebrow: "Пространство",
    title: "Продуманные планировки",
    description: "Каждый метр спроектирован с учетом современных требований к комфорту и функциональности.",
    startProgress: 0.3,
    endProgress: 0.6
  },
  {
    id: 3,
    eyebrow: "Комфорт",
    title: "Инфраструктура рядом",
    description: "Всё необходимое для жизни, отдыха и работы находится в шаговой доступности.",
    startProgress: 0.5,
    endProgress: 0.8
  }
];

/** @type {LayoutItem[]} */
const layoutsSeed = [
  { type: "Студия", area: 28.5, rooms: 0, image: "/media/holding/layouts/studio.webp" },
  { type: "1-комнатная", area: 42.3, rooms: 1, image: "/media/holding/layouts/one-room.webp" },
  { type: "2-комнатная", area: 61.8, rooms: 2, image: "/media/holding/layouts/two-room.webp" },
  { type: "3-комнатная", area: 89.4, rooms: 3, image: "/media/holding/layouts/three-room.webp" }
];

/** @type {InfrastructureItem[]} */
const infrastructureSeed = [
  { category: "Образование", name: "Школа №12", distance: { value: 350, unit: "m" } },
  { category: "Образование", name: "Детский сад №8", distance: { value: 5, unit: "min" } },
  { category: "Торговля", name: "Торговый центр «Галерея»", distance: { value: 10, unit: "min" } },
  { category: "Отдых", name: "Парк Победы", distance: { value: 600, unit: "m" } },
  { category: "Транспорт", name: "Станция метро «Проспект Мира»", distance: { value: 7, unit: "min" } }
];

/** @type {LocationInfo} */
const locationSeed = {
  address: "г. Москва, Проспект Мира, 118",
  coordinates: { lat: 55.812, lng: 37.638 },
  landmarks: [
    { name: "Станция метро «Проспект Мира»", distance: { value: 7, unit: "min" } },
    { name: "Остановка «Улица Гиляровского»", distance: { value: 250, unit: "m" } },
    { name: "МЦК «Ботанический сад»", distance: { value: 12, unit: "min" } }
  ],
  backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
};

/** @type {FooterInfo} */
const footerSeed = {
  phone: "+7 999 123-45-67",
  email: "info@holding.ru",
  legalText: "ООО «Холдинг Девелопмент». Проектная декларация опубликована на официальном сайте застройщика в соответствии с ФЗ №214-ФЗ."
};

if (import.meta.env.DEV) {
  if (!isValidLocationInfo(locationSeed)) {
    console.warn('[projectContent] Invalid location seed data:', locationSeed);
  }
  if (!isValidFooterInfo(footerSeed)) {
    console.warn('[projectContent] Invalid footer seed data:', footerSeed);
  }
  layoutsSeed.forEach((item) => {
    if (!isValidLayoutItem(item)) {
      console.warn('[projectContent] Invalid layout item filtered out:', item);
    }
  });
  infrastructureSeed.forEach((item) => {
    if (!isValidInfrastructureItem(item)) {
      console.warn('[projectContent] Invalid infrastructure item filtered out:', item);
    }
  });
}

export const projectInfo = {
  about: "Уникальный архитектурный проект, объединяющий современный дизайн, передовые технологии строительства и премиальный уровень сервиса. Это не просто дом, это пространство для жизни, которое вдохновляет.",
  benefits: [
    { title: "Панорамные окна", description: "Наслаждайтесь потрясающими видами на город каждый день." },
    { title: "Приватная территория", description: "Закрытый двор без машин, охрана 24/7 и система видеонаблюдения." },
    { title: "Премиальные материалы", description: "В отделке фасадов и лобби использованы только натуральные и экологичные материалы." }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
  ],
  layouts: layoutsSeed.filter(isValidLayoutItem),
  infrastructure: infrastructureSeed.filter(isValidInfrastructureItem),
  location: isValidLocationInfo(locationSeed) ? locationSeed : null,
  footer: isValidFooterInfo(footerSeed) ? footerSeed : null
};
