# Документация по коду проекта holdingTEST

## 1. Общее описание

Проект `holdingTEST` - это frontend-приложение на React и Vite. По структуре это лендинг для жилого/архитектурного проекта `HOLDING` с темной премиальной визуальной стилистикой, золотыми акцентами, плавным скроллом и киношной scroll-анимацией через последовательность WebP-кадров.

Главная особенность проекта - секция `CinematicStory`, где при прокрутке страницы на canvas отрисовываются кадры из папки `public/media`. Это создает эффект видео/3D-пролета, но технически работает как покадровая анимация.

## 2. Технологии

Проект использует:

- `React 19` - основная библиотека для интерфейса.
- `Vite` - сборщик и dev-сервер.
- `Tailwind CSS 4` - стилизация через utility-классы и тему.
- `GSAP` и `ScrollTrigger` - scroll-анимации.
- `Lenis` - плавный скролл.
- `sharp` - обработка и оптимизация изображений в скриптах.
- `oxlint` - линтер.
- `lucide-react` - библиотека иконок, подключена в зависимостях, но в текущем коде почти не используется.

## 3. Команды проекта

Файл: `package.json`

Основные команды:

```bash
npm run dev
```

Запускает локальный сервер Vite для разработки.

```bash
npm run build
```

Собирает production-версию проекта.

```bash
npm run preview
```

Запускает просмотр production-сборки.

```bash
npm run lint
```

Запускает проверку кода через `oxlint`.

## 4. Главная структура проекта

```text
holding/
  index.html
  package.json
  package-lock.json
  vite.config.js
  public/
    favicon.svg
    icons.svg
    media/
      earth/
      holding/
  scripts/
    fix-manifest-paths.mjs
    generate-comps.cjs
    optimize-earth.mjs
    optimize-media.mjs
  src/
    main.jsx
    App.jsx
    index.css
    App.css
    assets/
    components/
    data/
```

## 5. Точка входа

### `index.html`

HTML-файл, который содержит корневой элемент:

```html
<div id="root"></div>
```

И подключает React-приложение:

```html
<script type="module" src="/src/main.jsx"></script>
```

Сейчас title установлен как `temp_app`, его лучше заменить на название проекта, например `HOLDING`.

### `src/main.jsx`

Создает React root и рендерит главный компонент `App` внутрь элемента `#root`.

Логика простая:

- импортирует `StrictMode`;
- импортирует `createRoot`;
- подключает глобальные стили `index.css`;
- рендерит `<App />`.

## 6. Главный компонент приложения

### `src/App.jsx`

Это главный компонент, который собирает всю страницу.

Он импортирует:

- `Header`
- `Hero`
- `CinematicStory`
- `InteriorReveal`
- `About`
- `Benefits`
- `Gallery`
- `Layouts`
- `Infrastructure`
- `Location`
- `LeadForm`
- `Footer`

Также в `App.jsx` подключаются `Lenis`, `gsap` и `ScrollTrigger`.

Главная логика:

- регистрируется `ScrollTrigger`;
- создается экземпляр `Lenis` для плавного скролла;
- Lenis подключается к `gsap.ticker`, чтобы scroll-анимации и плавный скролл работали синхронно;
- при размонтировании Lenis уничтожается.

Визуально `App` строит страницу так:

1. Фиксированная шапка.
2. Hero-секция.
3. Иммерсивная scroll-анимация.
4. Секция интерьера.
5. Обычные информационные секции.
6. Footer.

## 7. Стили

### `src/index.css`

Основной файл стилей проекта.

В нем:

- подключается Tailwind CSS;
- задается дизайн-тема через `@theme`;
- объявлены брендовые цвета:
  - `brand-bg` - почти черный фон;
  - `brand-light` - светлый текст;
  - `brand-gold` - золотой акцент;
  - `brand-gold-light` - светлый золотой;
  - `brand-gray` - серый текст;
- задается базовый стиль `body`;
- добавлен utility-класс `.glass` для glassmorphism-эффекта.

### `src/App.css`

Содержит старые/шаблонные стили от стартового проекта. В текущем `App.jsx` этот файл не импортируется, поэтому большая часть этих стилей фактически не влияет на интерфейс.

Его можно удалить или почистить, если он не нужен.

## 8. Компоненты

### `src/components/Header.jsx`

Фиксированная шапка сайта.

Содержит:

- логотип/текст `HOLDING`;
- навигационные ссылки:
  - About;
  - Gallery;
  - Layouts;
- кнопку меню.

Шапка использует `mix-blend-difference`, чтобы оставаться видимой поверх темных и светлых участков.

Важно: русские тексты в этом файле сейчас отображаются в битой кодировке, например `Рћ РїСЂРѕРµРєС‚Рµ` вместо нормального `О проекте`.

### `src/components/Hero.jsx`

Первая полноэкранная секция.

Содержит:

- большой заголовок;
- описание;
- две кнопки;
- стрелку вниз;
- GSAP-анимацию появления текста.

При загрузке страницы заголовок плавно появляется снизу вверх через `gsap.fromTo`.

Важно: фон сейчас просто темный с затемняющим слоем. Импортированный `hero.png` в этом компоненте не используется.

### `src/components/CinematicStory.jsx`

Главная анимационная секция проекта.

Это самая важная и сложная часть кода.

Компонент делает:

- создает длинную scroll-секцию высотой `500vh`;
- внутри закрепляет sticky-блок на весь экран;
- отображает два canvas-слоя:
  - Earth sequence;
  - Holding/building sequence;
- управляет переходом между ними через opacity;
- показывает loading overlay до загрузки первого кадра;
- показывает текстовые overlay-блоки и callout-карточки во время прокрутки.

Данные для кадров берутся из:

```js
earthDesktopFrames
earthMobileFrames
holdingDesktopFrames
holdingMobileFrames
```

из файла `src/data/mediaManifest.js`.

Callout-карточки берутся из:

```js
buildingCallouts
```

из файла `src/data/projectContent.js`.

Логика скролла:

- `ScrollTrigger` отслеживает прогресс прокрутки от 0 до 1;
- первая часть прогресса показывает Earth-кадры;
- затем Earth плавно исчезает;
- Holding sequence плавно появляется;
- поверх Holding sequence выводятся текстовые блоки.

### `src/components/FrameSequenceCanvas.jsx`

Низкоуровневый компонент для покадровой canvas-анимации.

Он принимает:

```js
manifest
progress
style
className
debug
onFirstFrameLoaded
preloadHint
```

Главные задачи:

- выбрать desktop или mobile набор кадров;
- загрузить первый кадр;
- предзагружать соседние кадры;
- хранить изображения в LRU-кэше;
- отрисовывать нужный кадр на canvas;
- плавно двигаться к нужному кадру через lerp;
- подстраивать canvas под размер окна;
- рисовать изображения в режиме cover-fit;
- показывать debug-панель, если в URL есть `?debug`.

Оптимизации:

- используется `alpha: false` для canvas;
- используется `desynchronized: true`;
- изображения кэшируются;
- старые изображения удаляются из кэша;
- рисование идет через `gsap.ticker`, а не через React state.

Это сделано, чтобы анимация была плавнее и не вызывала лишние React re-render.

### `src/components/InteriorReveal.jsx`

Секция с описанием интерьера.

Берет текст из:

```js
projectInfo.about
```

И первое изображение из:

```js
projectInfo.gallery[0]
```

Также содержит placeholder-hotspot на изображении. При наведении появляется подпись.

### `src/components/About.jsx`

Простая секция-заготовка для блока `About`.

Сейчас содержит только:

- заголовок `About`;
- placeholder-текст.

### `src/components/Benefits.jsx`

Простая секция-заготовка для преимуществ.

Сейчас содержит только:

- заголовок `Benefits`;
- placeholder-текст.

Массив `projectInfo.benefits` уже есть в данных, но этот компонент пока его не использует.

### `src/components/Gallery.jsx`

Простая секция-заготовка для галереи.

Сейчас содержит только:

- заголовок `Gallery`;
- placeholder-текст.

Массив `projectInfo.gallery` уже есть в данных, но полноценная галерея пока не реализована.

### `src/components/Layouts.jsx`

Секция-заготовка для планировок.

Сейчас содержит только заголовок и placeholder-текст.

### `src/components/Infrastructure.jsx`

Секция-заготовка для инфраструктуры.

Сейчас содержит только заголовок и placeholder-текст.

### `src/components/Location.jsx`

Секция-заготовка для локации.

Сейчас содержит только заголовок и placeholder-текст.

### `src/components/LeadForm.jsx`

Секция-заготовка для формы заявки.

Сейчас настоящей формы нет, есть только placeholder.

### `src/components/Footer.jsx`

Footer-заготовка.

Сейчас содержит только заголовок и placeholder-текст.

### `src/components/Loader.jsx`

Отдельная секция-заготовка loader-компонента.

В текущем `App.jsx` этот компонент не используется. Loading overlay реализован прямо внутри `CinematicStory.jsx`.

## 9. Данные проекта

### `src/data/projectContent.js`

Файл содержит текстовые данные для проекта.

Экспортирует:

```js
buildingCallouts
projectInfo
```

`buildingCallouts` - это массив карточек, которые появляются поверх Holding-анимации. У каждой карточки есть:

- `id`;
- `eyebrow`;
- `title`;
- `description`;
- `startProgress`;
- `endProgress`.

Поля `startProgress` и `endProgress` управляют тем, на каком участке scroll-анимации карточка видна.

`projectInfo` содержит:

- описание проекта;
- преимущества;
- ссылки на изображения галереи.

Важно: русские тексты в этом файле тоже отображаются с битой кодировкой.

### `src/data/mediaManifest.js`

Автоматически сгенерированный файл со списками кадров.

В нем есть 4 массива:

- `earthDesktopFrames` - 241 кадр;
- `earthMobileFrames` - 121 кадр;
- `holdingDesktopFrames` - 450 кадров;
- `holdingMobileFrames` - 225 кадров.

Эти массивы используются компонентом `FrameSequenceCanvas`.

Пути выглядят примерно так:

```js
"/media/earth/desktop/..."
"/media/holding/desktop/..."
```

### `src/data/mediaManifest_backup.js`

Резервная копия media manifest. Нужна как backup, если основной `mediaManifest.js` будет перегенерирован или испорчен.

## 10. Медиа

### `public/media/earth`

Кадры для первой части scroll-анимации.

Есть desktop и mobile версии.

### `public/media/holding`

Кадры для второй части scroll-анимации с объектом/зданием.

Есть desktop и mobile версии.

### `public/favicon.svg`

Иконка сайта.

### `public/icons.svg`

SVG-спрайт или набор иконок. В текущем React-коде напрямую почти не используется.

## 11. Скрипты

### `scripts/fix-manifest-paths.mjs`

Скрипт исправляет пути в `src/data/mediaManifest.js`.

Он удаляет префикс:

```text
/public/
```

из путей к медиа, потому что в Vite файлы из папки `public` доступны от корня сайта.

Правильный путь:

```text
/media/...
```

А не:

```text
/public/media/...
```

### `scripts/generate-comps.cjs`

Скрипт автоматически генерирует простые placeholder-компоненты:

- Header
- About
- Benefits
- Gallery
- Layouts
- Infrastructure
- Location
- LeadForm
- Footer
- Loader

Сейчас многие компоненты действительно выглядят как результат этого генератора.

### `scripts/optimize-earth.mjs`

Скрипт для обработки Earth-кадров.

Он:

- читает изображения из исходной папки;
- конвертирует их в WebP через `sharp`;
- создает desktop-версии;
- создает mobile-версии;
- обновляет `mediaManifest.js`.

### `scripts/optimize-media.mjs`

Более общий скрипт для обработки медиа.

Он умеет:

- анализировать последовательности кадров;
- сортировать файлы естественным порядком;
- искать пропущенные номера кадров;
- конвертировать изображения в WebP;
- делать desktop и mobile версии;
- считать размер результата;
- генерировать `mediaManifest.js`.

В текущей версии обработка Holding sequence внутри этого скрипта закомментирована.

## 12. Vite config

### `vite.config.js`

Подключает плагины:

```js
react()
tailwindcss()
```

Это позволяет использовать React и Tailwind CSS 4 внутри Vite.

## 13. Assets

### `src/assets/hero.png`

Изображение для hero-секции, но сейчас оно не используется в `Hero.jsx`.

### `src/assets/react.svg` и `src/assets/vite.svg`

Стандартные assets из стартового шаблона Vite. В текущей странице они не используются.

## 14. Текущее состояние проекта

Проект уже имеет:

- рабочую React/Vite структуру;
- подключенный Tailwind;
- плавный скролл Lenis;
- GSAP ScrollTrigger;
- canvas-анимацию по кадрам;
- desktop/mobile media manifest;
- несколько секций страницы;
- заготовки для будущих блоков.

Но также есть недоделанные места:

- русские тексты отображаются в битой кодировке;
- многие секции пока placeholder;
- `LeadForm` пока не является настоящей формой;
- `Gallery` пока не выводит изображения из данных;
- `Benefits` пока не выводит массив преимуществ;
- `App.css` выглядит как старый шаблонный файл и не используется;
- `hero.png`, `react.svg`, `vite.svg` сейчас не подключены к интерфейсу;
- title в `index.html` стоит `temp_app`.

## 15. Что нужно сделать дальше

Рекомендуемые улучшения:

1. Исправить кодировку русских текстов.
2. Заменить placeholder-секции полноценным контентом.
3. Реализовать настоящую форму заявки в `LeadForm`.
4. Сделать настоящую галерею на основе `projectInfo.gallery`.
5. Использовать `projectInfo.benefits` в компоненте `Benefits`.
6. Удалить неиспользуемые assets и старый `App.css`, если они не нужны.
7. Переименовать проект в `package.json` и title в `index.html`.
8. Проверить production-сборку через `npm run build`.

## 16. Краткое резюме для отправки другому человеку

Это React/Vite лендинг для проекта `HOLDING`. Основной визуальный эффект построен на scroll-driven canvas-анимации: при прокрутке страницы компонент `CinematicStory` управляет прогрессом, а `FrameSequenceCanvas` отрисовывает WebP-кадры из `public/media`. Для плавности используются Lenis, GSAP и ScrollTrigger. Остальные секции страницы пока частично являются заготовками и требуют наполнения реальным контентом. Проект содержит оптимизированные media sequences для desktop и mobile, а также скрипты для генерации и обработки этих кадров.
