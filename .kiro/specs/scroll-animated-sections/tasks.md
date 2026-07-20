# Implementation Plan: scroll-animated-sections

## Overview

Реализация сводится к трём слоям, которые собираются снизу вверх: сначала чистые утилиты и хуки (`src/utils/*`, `src/hooks/*`) без DOM-зависимостей — они покрываются property-based тестами напрямую; затем расширение модели данных `src/data/projectContent.js`; затем восемь презентационных секций (`src/components/*.jsx`), которые подключают хуки и данные и остаются простыми JSX-компонентами. Стек — React 19 + GSAP/ScrollTrigger (уже используется в `CinematicStory.jsx`), тестирование — Vitest + fast-check + `@testing-library/react` (новые devDependencies, ничего не заменяется).

## Tasks

- [x] 1. Настроить тестовую инфраструктуру
  - [x] 1.1 Установить и настроить Vitest, fast-check и `@testing-library/react`
    - Добавить `vitest`, `fast-check`, `@testing-library/react`, `@testing-library/jest-dom` в `devDependencies` (точные зафиксированные версии)
    - Добавить скрипт `"test": "vitest run"` в `package.json` (без watch-режима)
    - Добавить минимальный `vitest.config.js`/секцию `test` в `vite.config.js` с окружением `jsdom`
    - _Requirements: инфраструктурная задача, поддерживающая проверку Property 1–13_

- [x] 2. Реализовать чистые функции скролл-анимации (`src/utils/scrollAnimation.js`)
  - [x] 2.1 Реализовать `getRevealConfig`, `nextRevealState`, `getStaggerDelays`, `isParallaxEnabled`, `getParallaxOffset`
    - Функции без DOM/GSAP-зависимостей, точно по контрактам из дизайна (JSDoc-сигнатуры)
    - _Requirements: 1.2, 1.3, 1.4, 2.2, 2.4, 3.2, 3.3, 3.6, 3.8, 4.3, 4.5, 5.3, 5.5, 6.3, 6.4, 6.6, 6.7, 7.9, 7.10, 8.5, 8.6, 10.2, 10.3, 11.5_

  - [ ]* 2.2 Написать property-тест для `getRevealConfig`
    - **Property 1: Entrance reveal configuration is bounded and respects motion preference**
    - **Validates: Requirements 1.2, 1.4, 2.4, 3.2, 3.8, 4.5, 5.5, 6.3, 6.6, 7.9, 7.10, 8.5, 8.6**

  - [ ]* 2.3 Написать property-тест для `nextRevealState`
    - **Property 2: Visibility threshold re-triggering is a correct crossing detector**
    - **Validates: Requirements 1.3**

  - [ ]* 2.4 Написать property-тест для `getStaggerDelays`
    - **Property 7: Stagger delays are bounded and index-ordered**
    - **Validates: Requirements 2.2, 4.3, 5.3, 10.2**

  - [ ]* 2.5 Написать property-тест для `isParallaxEnabled`
    - **Property 8: Parallax is enabled only off mobile and without reduced motion**
    - **Validates: Requirements 3.6, 6.7, 10.3, 11.5**

  - [ ]* 2.6 Написать property-тест для `getParallaxOffset`
    - **Property 9: Parallax offset is bounded and continuous in progress**
    - **Validates: Requirements 3.3, 6.4**

- [x] 3. Реализовать хуки определения среды (`src/hooks/useMediaQuery.js`)
  - [x] 3.1 Реализовать `useMediaQuery`, `useIsMobile`, `usePrefersReducedMotion`
    - Обёртка над `window.matchMedia` с подпиской на изменения через `change`-listener и отпиской при размонтировании
    - _Requirements: 1.4, 3.6, 6.7, 10.1, 10.3, 11.5_

  - [ ]* 3.2 Написать unit-тесты для `useMediaQuery`
    - Замокать `window.matchMedia`, проверить начальное значение и реакцию на `change`-событие
    - _Requirements: 1.4, 10.3_

- [x] 4. Чекпоинт — убедиться, что все тесты проходят
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Реализовать хук `useScrollReveal` (`src/hooks/useScrollReveal.js`)
  - [x] 5.1 Реализовать `useScrollReveal` по паттерну `CinematicStory.jsx`
    - Регистрация плагина ScrollTrigger один раз на уровне модуля
    - При `prefersReducedMotion === true` — применить финальное состояние из `getRevealConfig(true)` без создания ScrollTrigger
    - Иначе — создать один `ScrollTrigger` (`start: 'top 80%'`), делегировать повторный показ в `nextRevealState`, стаггер для `itemRefs` — через `getStaggerDelays`
    - Гарантированный `.kill()` всех созданных триггеров в cleanup-функции эффекта
    - _Requirements: 1.2, 1.3, 1.4, 2.2, 2.4, 4.3, 4.5, 5.3, 5.5, 6.3, 6.6, 7.9, 7.10, 8.5, 8.6, 11.1, 11.3, 11.4, 11.5_

  - [ ]* 5.2 Написать unit-тесты для `useScrollReveal`
    - Замокать `gsap`/`ScrollTrigger`; проверить создание ровно одного набора триггеров при монтировании, отсутствие повторного создания при ре-рендере без размонтирования, и вызов `.kill()` при размонтировании
    - _Requirements: 11.1, 11.3, 11.4_

- [x] 6. Реализовать хук `useParallax` (`src/hooks/useParallax.js`)
  - [x] 6.1 Реализовать `useParallax`
    - Гейтинг создания ScrollTrigger через `isParallaxEnabled(isMobile, reducedMotion)`; смещение через `getParallaxOffset(self.progress, amplitude)` в `onUpdate`
    - Гарантированный `.kill()` в cleanup
    - _Requirements: 3.3, 3.6, 6.4, 6.7, 10.3, 11.1, 11.3, 11.4, 11.5_

  - [ ]* 6.2 Написать unit-тесты для `useParallax`
    - Замокать `gsap`/`ScrollTrigger`; проверить, что триггер не создаётся при `isMobile` или `reducedMotion`, и что `.kill()` вызывается при размонтировании
    - _Requirements: 3.6, 6.7, 11.1, 11.3_

- [x] 7. Чекпоинт — убедиться, что все тесты проходят
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Реализовать редьюсер и хук лайтбокса (`src/hooks/useLightbox.js`)
  - [x] 8.1 Реализовать `lightboxReducer` и `useLightbox`
    - Действия `{type:'OPEN', index}` / `{type:'CLOSE'}`, состояние `{ openIndex }`
    - _Requirements: 3.4, 3.5_

  - [ ]* 8.2 Написать property-тест для `lightboxReducer`
    - **Property 10: Lightbox reducer transitions are consistent**
    - **Validates: Requirements 3.4, 3.5**

- [x] 9. Реализовать валидацию формы заявки (`src/utils/validation.js`)
  - [x] 9.1 Реализовать `validateLeadForm`
    - Правила: `name` непустой после trim (≤100 символов); `phone` после удаления пробелов/`-`/`()`/`+` состоит только из 10–15 цифр; `consent === true`
    - _Requirements: 7.2, 7.3, 7.4, 7.5_

  - [ ]* 9.2 Написать property-тест для `validateLeadForm`
    - **Property 11: Lead form validation accepts exactly well-formed submissions**
    - **Validates: Requirements 7.2, 7.3, 7.4, 7.5**

- [x] 10. Реализовать редьюсер и хук жизненного цикла отправки (`src/hooks/useSubmissionLifecycle.js`)
  - [x] 10.1 Реализовать `submissionReducer` и `useSubmissionLifecycle`
    - Действия `SUBMIT_START`/`SUBMIT_SUCCESS`/`SUBMIT_ERROR`/`RESET`; `SUBMIT_START` игнорируется в состоянии `submitting`; `SUBMIT_SUCCESS` очищает данные формы; `SUBMIT_ERROR` сохраняет их
    - _Requirements: 7.6, 7.7, 7.8_

  - [ ]* 10.2 Написать property-тест для `submissionReducer`
    - **Property 12: Submission lifecycle reducer enforces single in-flight submission and correct terminal states**
    - **Validates: Requirements 7.6, 7.7, 7.8**

- [x] 11. Реализовать построители контактных ссылок (`src/utils/links.js`)
  - [x] 11.1 Реализовать `buildTelHref` и `buildMailHref`
    - _Requirements: 8.2, 8.3_

  - [ ]* 11.2 Написать property-тест для `buildTelHref`/`buildMailHref`
    - **Property 13: Contact link builders produce correctly-schemed URIs**
    - **Validates: Requirements 8.2, 8.3**

- [x] 12. Реализовать валидаторы контрактов данных (`src/utils/contentSchema.js`)
  - [x] 12.1 Реализовать `isValidLayoutItem`, `isValidInfrastructureItem`, `isValidLocationInfo`, `isValidFooterInfo`
    - _Requirements: 4.1, 5.1, 6.1, 8.1_

  - [ ]* 12.2 Написать property-тест для валидаторов контента
    - **Property 4: Data contract validation accepts exactly well-formed content items**
    - **Validates: Requirements 4.1, 5.1, 6.1, 8.1**

- [x] 13. Чекпоинт — убедиться, что все тесты проходят
  - Ensure all tests pass, ask the user if questions arise.

- [x] 14. Расширить модель данных проекта (`src/data/projectContent.js`)
  - [x] 14.1 Добавить поля `layouts`, `infrastructure`, `location`, `footer` в `projectInfo`
    - Задокументировать формы через JSDoc-типы (`LayoutItem`, `InfrastructureItem`, `LocationInfo`, `FooterInfo`, `Distance`, `Landmark`); существующие `about`/`benefits`/`gallery` не менять
    - Отфильтровывать/логировать (`console.warn` в dev) элементы, не проходящие валидаторы из `contentSchema.js`, не давая одному некорректному элементу обрушить рендер секции
    - _Requirements: 4.1, 5.1, 6.1, 8.1_

  - [ ]* 14.2 Написать unit-тест, проверяющий сид-данные против валидаторов схемы
    - Прогнать каждый элемент `layouts`/`infrastructure` и объекты `location`/`footer` через `isValidLayoutItem`/`isValidInfrastructureItem`/`isValidLocationInfo`/`isValidFooterInfo`
    - _Requirements: 4.1, 5.1, 6.1, 8.1_

- [x] 15. Реализовать секцию About
  - [x] 15.1 Обновить `About.jsx`: рендер `projectInfo.about`, подключить `useScrollReveal`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 9.1, 9.2_

  - [ ]* 15.2 Написать unit-тест для `About`
    - Проверить, что рендерится текст из `projectInfo.about`, а не плейсхолдер
    - _Requirements: 1.1_

- [x] 16. Реализовать секцию Benefits
  - [x] 16.1 Обновить `Benefits.jsx`: маппинг `projectInfo.benefits` в карточки с рефами, стаггер через `useScrollReveal({ itemRefs })`, отсутствие рендера при пустом массиве
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 9.1, 9.2_

  - [ ]* 16.2 Написать property-тесты рендеринга для `Benefits`
    - **Property 3: Rendering completeness for data-driven collections** (срез для `benefits`)
    - **Property 5: Empty collections render no empty placeholders** (срез для `benefits`)
    - **Validates: Requirements 2.1, 2.3**

- [x] 17. Реализовать секцию Gallery с лайтбоксом
  - [x] 17.1 Обновить `Gallery.jsx`: маппинг `projectInfo.gallery`, `useParallax` на элементах (отключается на мобильных/reduced-motion), интеграция `useLightbox`, обработчик `Escape`/клика по фону/кнопке закрытия, отсутствие рендера при пустом массиве
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 9.1, 9.2, 11.1, 11.3, 11.4_

  - [ ]* 17.2 Написать property-тесты рендеринга для `Gallery`
    - **Property 3: Rendering completeness for data-driven collections** (срез для `gallery`)
    - **Property 5: Empty collections render no empty placeholders** (срез для `gallery`)
    - **Validates: Requirements 3.1, 3.7**

  - [ ]* 17.3 Написать unit-тест закрытия лайтбокса
    - Проверить закрытие по клику на элемент закрытия, клику по фону и клавише `Escape`, включая снятие `keydown`-слушателя при закрытии/размонтировании
    - _Requirements: 3.4, 3.5_

- [x] 18. Реализовать секцию Layouts
  - [x] 18.1 Обновить `Layouts.jsx`: маппинг `projectInfo.layouts` в карточки (тип, площадь, комнаты, изображение), стаггер через `useScrollReveal`, фолбэк-сообщение при пустом массиве
    - _Requirements: 4.2, 4.3, 4.4, 4.5, 9.1, 9.2_

  - [ ]* 18.2 Написать property-тесты рендеринга для `Layouts`
    - **Property 3: Rendering completeness for data-driven collections** (срез для `layouts`)
    - **Property 6: Empty collections trigger an explicit fallback message** (срез для `layouts`)
    - **Validates: Requirements 4.2, 4.4**

- [x] 19. Реализовать секцию Infrastructure
  - [x] 19.1 Обновить `Infrastructure.jsx`: маппинг `projectInfo.infrastructure` в карточки (категория, название, расстояние/время), стаггер через `useScrollReveal`, фолбэк-сообщение при пустом массиве
    - _Requirements: 5.2, 5.3, 5.4, 5.5, 9.1, 9.2_

  - [ ]* 19.2 Написать property-тесты рендеринга для `Infrastructure`
    - **Property 3: Rendering completeness for data-driven collections** (срез для `infrastructure`)
    - **Property 6: Empty collections trigger an explicit fallback message** (срез для `infrastructure`)
    - **Validates: Requirements 5.2, 5.4**

- [x] 20. Реализовать секцию Location
  - [x] 20.1 Обновить `Location.jsx`: рендер адреса и `landmarks`, фон/карта с `useParallax`, скрытие списка ориентиров при пустом массиве, `useScrollReveal` на появление секции
    - _Requirements: 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 9.1, 9.2_

  - [ ]* 20.2 Написать property-тесты рендеринга для `Location`
    - **Property 3: Rendering completeness for data-driven collections** (срез для `location.landmarks`)
    - **Property 5: Empty collections render no empty placeholders** (срез для `location.landmarks`)
    - **Validates: Requirements 6.2, 6.5**

- [x] 21. Чекпоинт — убедиться, что все тесты проходят
  - Ensure all tests pass, ask the user if questions arise.

- [x] 22. Реализовать секцию Footer
  - [x] 22.1 Обновить `Footer.jsx`: ссылки `tel:`/`mailto:` через `buildTelHref`/`buildMailHref`, рендер `legalText`, `useScrollReveal` на появление
    - _Requirements: 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_

  - [ ]* 22.2 Написать unit-тест для `Footer`
    - Проверить корректность `href`-схем (`tel:`, `mailto:`) и наличие `legalText`
    - _Requirements: 8.2, 8.3, 8.4_

- [x] 23. Реализовать форму заявки LeadForm
  - [x] 23.1 Обновить `LeadForm.jsx`: контролируемые поля (`name`, `phone`, `consent`), инъецируемый пропс `onSubmit` (по умолчанию — стаб с симулированной задержкой), вызов `validateLeadForm` перед отправкой, `useSubmissionLifecycle`, блокировка кнопки отправки при `status === 'submitting'`, стаггер полей через `useScrollReveal`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 9.1, 9.2, 11.1, 11.2_

  - [ ]* 23.2 Написать unit-тест наличия контролов `LeadForm`
    - Проверить, что поле имени, поле телефона и чекбокс согласия присутствуют в DOM
    - _Requirements: 7.1_

  - [ ]* 23.3 Написать unit-тесты жизненного цикла отправки `LeadForm`
    - С инъецированным `onSubmit`-стабом: успешная отправка очищает поля, ошибка отправки сохраняет введённые значения и показывает сообщение, повторная отправка блокируется во время `submitting`
    - _Requirements: 7.6, 7.7, 7.8_

- [x] 24. Чекпоинт — убедиться, что все тесты проходят
  - Ensure all tests pass, ask the user if questions arise.

- [x] 25. Проверить согласованность якорей навигации
  - [x] 25.1 Свести `id` всех секций и ссылки `Header.jsx`
    - Убедиться, что каждая секция (`about`, `benefits`, `gallery`, `layouts`, `infrastructure`, `location`, `leadform`, `footer`) имеет уникальный `id`, точно совпадающий с якорем соответствующей ссылки навигации в `Header.jsx`; дополнить навигацию отсутствующими пунктами
    - _Requirements: 9.2_

  - [ ]* 25.2 Написать unit-тест соответствия якорей
    - Для каждой ссылки `Header` проверить наличие секции с совпадающим `id` на странице
    - _Requirements: 9.2_

- [x] 26. Финальный чекпоинт — убедиться, что все тесты проходят
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Задачи, помеченные `*`, опциональны и не реализуются в рамках выполнения плана автоматическим агентом — их можно пропустить для более быстрого MVP.
- Каждая property-тест задача ссылается на ровно одно свойство корректности из `design.md` и явные пункты `requirements.md`.
- Чекпоинты фиксируют точки, где стоит остановиться и прогнать полный набор тестов (`npm run test`) перед продолжением.
- Секции 15–20, 22–23 переиспользуют один и тот же общий слой хуков (задачи 3, 5, 6, 8–12), поэтому этот слой реализуется первым.
- Задача 25 выполняется последней среди секций, так как требует финальных `id` всех секций.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1", "3.1", "8.1", "9.1", "10.1", "11.1", "12.1"] },
    { "id": 1, "tasks": ["2.2", "3.2", "5.1", "6.1", "8.2", "9.2", "10.2", "11.2", "12.2", "14.1"] },
    { "id": 2, "tasks": ["2.3", "5.2", "6.2", "14.2", "15.1", "16.1", "17.1", "18.1", "19.1", "20.1", "22.1", "23.1"] },
    { "id": 3, "tasks": ["2.4", "15.2", "16.2", "17.2", "18.2", "19.2", "20.2", "22.2", "23.2", "25.1"] },
    { "id": 4, "tasks": ["2.5", "17.3", "23.3", "25.2"] },
    { "id": 5, "tasks": ["2.6"] }
  ]
}
```
