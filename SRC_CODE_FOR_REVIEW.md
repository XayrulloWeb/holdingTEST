# SRC CODE FOR REVIEW

Ниже полный текст файлов из `/src/`. Бинарные картинки не вставлены. В конце добавлен `scripts/optimize-media.mjs`, потому что он показывает автоматическую sharp-конвертацию тяжелых кадров в WebP/AVIF.

## src/App.css

``css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
````

## src/App.jsx

``jsx
import React, { useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import CinematicStory from './components/CinematicStory';
import InteriorReveal from './components/InteriorReveal';
import About from './components/About';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Layouts from './components/Layouts';
import Infrastructure from './components/Infrastructure';
import Location from './components/Location';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const appRef = useRef(null);

  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
      ScrollTrigger.update();
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, { scope: appRef });

  return (
    <div ref={appRef} className="bg-brand-bg text-brand-light font-sans selection:bg-brand-gold selection:text-brand-bg">
      <Header />

      <main>
        <Hero />

        <CinematicStory />
        <InteriorReveal />

        <About />
        <Benefits />
        <Gallery />
        <Layouts />
        <Infrastructure />
        <Location />
        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
````

## src/assets/react.svg

``xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## src/assets/vite.svg

``xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

## src/components/About.jsx

``jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">About</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции About</p>
      </div>
    </section>
  );
}
````

## src/components/Benefits.jsx

``jsx
import React from 'react';

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Benefits</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Benefits</p>
      </div>
    </section>
  );
}
````

## src/components/CinematicStory.jsx

``jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FrameSequenceCanvas from './FrameSequenceCanvas';
import {
  earthDesktopFrames,
  earthMobileFrames,
  holdingDesktopFrames,
  holdingMobileFrames,
} from '../data/mediaManifest';
import { buildingCallouts } from '../data/projectContent';

gsap.registerPlugin(ScrollTrigger);

const EARTH_MANIFEST   = { desktop: earthDesktopFrames,   mobile: earthMobileFrames   };
const HOLDING_MANIFEST = { desktop: holdingDesktopFrames, mobile: holdingMobileFrames };

// How many frames of Earth to show before crossfading (0-1 of Earth total)
const EARTH_END_RATIO = 150 / Math.max(earthDesktopFrames.length, 1);

export default function CinematicStory() {
  const sectionRef  = useRef(null);
  const progressRef = useRef(0);

  // Derived scroll state for UI overlays only (no RAF-critical data here)
  const [uiState, setUiState] = useState({
    earthP:      0,
    holdingP:    0,
    earthOpacity:   1,
    holdingOpacity: 0,
    showEarthText: false,
  });

  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const debugMode = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.search : ''
  ).has('debug');

  // First 10 holding frames to warm up while user is in earth sequence
  const holdingWarmup = holdingDesktopFrames.slice(0, 10);

  useEffect(() => {
    if (!sectionRef.current) return;

    const FADE_START = 0.35;
    const FADE_END   = 0.45;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      // scrub: 1.5 → the ONE parameter that gives Apple-grade smoothness.
      // GSAP chases scroll position over 1.5 seconds with easing.
      // Frame lerp inside Canvas is fast (0.55) so it instantly follows this smoothed value.
      scrub: 1.5,
      onUpdate(self) {
        const p = self.progress;
        progressRef.current = p;

        // Earth progress: stop at EARTH_END_RATIO of earth sequence
        const earthP = Math.min(EARTH_END_RATIO, (p / FADE_END) * EARTH_END_RATIO);

        // Holding progress: starts warming up from FADE_START
        const holdingP = Math.max(0, (p - FADE_START) / (1 - FADE_START));

        // Crossfade opacity
        let earthOpacity   = 1;
        let holdingOpacity = 0;
        if (p >= FADE_START && p <= FADE_END) {
          const ratio = (p - FADE_START) / (FADE_END - FADE_START);
          earthOpacity   = 1 - ratio;
          holdingOpacity = ratio;
        } else if (p > FADE_END) {
          earthOpacity   = 0;
          holdingOpacity = 1;
        }

        // Update UI state (low-frequency — CSS transitions handle smoothing)
        setUiState({
          earthP,
          holdingP,
          earthOpacity,
          holdingOpacity,
          showEarthText: p > 0.05 && p < 0.3,
        });
      },
    });

    return () => st.kill();
  }, []);

  const { earthP, holdingP, earthOpacity, holdingOpacity, showEarthText } = uiState;

  return (
    <section ref={sectionRef} className="relative w-full bg-black" style={{ height: '500vh' }}>

      {/* Loading overlay — hide once first frame is ready */}
      {!firstFrameLoaded && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-5">
          <div className="w-10 h-10 border border-[#C7A36A]/60 border-t-[#C7A36A] rounded-full animate-spin" />
          <p className="text-[#A6A19A] text-xs tracking-[0.3em] uppercase">Загрузка</p>
        </div>
      )}

      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* ── Earth canvas ── */}
        <FrameSequenceCanvas
          manifest={EARTH_MANIFEST}
          progress={earthP}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: earthOpacity, transition: 'opacity 0.6s ease', willChange: 'opacity' }}
          debug={debugMode}
          onFirstFrameLoaded={() => setFirstFrameLoaded(true)}
          preloadHint={holdingWarmup}
        />

        {/* ── Holding canvas ── */}
        <FrameSequenceCanvas
          manifest={HOLDING_MANIFEST}
          progress={holdingP}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: holdingOpacity, transition: 'opacity 0.6s ease', willChange: 'opacity' }}
        />

        {/* ── Overlays ── */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Earth label */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ opacity: showEarthText ? 1 : 0, transition: 'opacity 1.2s ease' }}
          >
            <p className="text-[11px] tracking-[0.35em] text-[#F3F0EA]/70 uppercase
                          bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              Открывая новую точку города
            </p>
          </div>

          {/* Holding callouts */}
          {holdingP > 0 && holdingP < 0.82 && (
            <div className="absolute inset-0 max-w-7xl mx-auto px-8 flex items-center justify-between">

              {/* Left headline */}
              <div
                style={{
                  opacity:   holdingP > 0.08 ? 1 : 0,
                  transform: `translateY(${holdingP > 0.08 ? 0 : 24}px)`,
                  transition: 'opacity 0.9s ease, transform 0.9s ease',
                }}
                className="max-w-md"
              >
                <h2 className="text-[#F3F0EA] text-5xl md:text-[5.5rem] font-extralight leading-none tracking-tight mb-5">
                  НОВАЯ<br />ТОЧКА<br />ГОРОДА
                </h2>
                <p className="text-[#A6A19A] text-base font-light leading-relaxed">
                  Архитектура, созданная<br />для современного ритма жизни.
                </p>
              </div>

              {/* Right callout cards */}
              <div className="flex flex-col gap-8 max-w-xs">
                {buildingCallouts.map((block) => {
                  const visible =
                    holdingP > block.startProgress && holdingP < block.endProgress;
                  return (
                    <div
                      key={block.id}
                      style={{
                        opacity:   visible ? 1 : 0,
                        transform: `translateY(${visible ? 0 : 16}px)`,
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                      }}
                      className="glass p-5 rounded-xl"
                    >
                      <div className="text-[#C7A36A] text-[10px] tracking-[0.3em] uppercase mb-1.5">
                        {block.eyebrow}
                      </div>
                      <div className="text-[#F3F0EA] text-lg font-light mb-1">
                        {block.title}
                      </div>
                      <div className="text-[#A6A19A] text-xs leading-relaxed">
                        {block.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Final warm glow before window */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(199,163,106,0.18) 0%, transparent 70%)',
              mixBlendMode: 'overlay',
              opacity: holdingP > 0.88 ? (holdingP - 0.88) / 0.12 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
        </div>
      </div>
    </section>
  );
}
````

## src/components/Footer.jsx

``jsx
import React from 'react';

export default function Footer() {
  return (
    <section id="footer" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Footer</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Footer</p>
      </div>
    </section>
  );
}
````

## src/components/FrameSequenceCanvas.jsx

``jsx
import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

// ─── Config ─────────────────────────────────────────────────────────────────
const LERP_SPEED     = 0.55;  // fast-follow: GSAP scrub handles main easing
const PRELOAD_AHEAD  = 10;
const PRELOAD_BEHIND = 4;
const MAX_CACHE      = 35;

// ─── Module-level image cache (LRU, shared across instances) ─────────────────
const imgCache = new Map();   // src → HTMLImageElement
const inFlight = new Set();   // srcs currently loading
const dlStats  = { frames: 0 };

function lruEvict() {
  if (imgCache.size <= MAX_CACHE) return;
  const key = imgCache.keys().next().value;
  const img = imgCache.get(key);
  if (img) img.src = ''; // release browser decode memory
  imgCache.delete(key);
}

function preload(src) {
  if (!src || imgCache.has(src) || inFlight.has(src)) return;
  inFlight.add(src);
  const img = new Image();
  img.onload = () => {
    lruEvict();
    imgCache.set(src, img);
    inFlight.delete(src);
    dlStats.frames++;
  };
  img.onerror = () => inFlight.delete(src);
  img.src = src;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function FrameSequenceCanvas({
  manifest,       // { desktop: string[], mobile: string[] }
  progress,       // 0–1, driven by GSAP scrub (updated every render synchronously)
  style,
  className,
  debug,
  onFirstFrameLoaded,
  preloadHint,    // string[] – first N frames of next sequence to warm up
}) {
  const canvasRef       = useRef(null);
  const ctxRef          = useRef(null);

  // ── Hot-path refs (never cause React re-renders) ──────────────────────────
  const progressRef     = useRef(0);
  const lerpFrameRef    = useRef(0);   // float – smoothed current frame
  const lastDrawnRef    = useRef(-1);  // last integer frame index drawn
  const lastGoodImgRef  = useRef(null);// fallback: last successfully drawn img
  const isMobileRef     = useRef(false);
  const framesRef       = useRef([]);  // active frame list (desktop or mobile)
  const readyRef        = useRef(false);

  // Synchronous update of progressRef (no useEffect delay!)
  progressRef.current = progress;

  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [, setDebugTick]                      = useState(0);

  // ── Canvas setup ─────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      isMobileRef.current = window.innerWidth <= 768;

      // Update active frames on resize (mobile ↔ desktop switch)
      const isMob = isMobileRef.current;
      framesRef.current = (isMob && manifest.mobile?.length)
        ? manifest.mobile
        : manifest.desktop;

      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;

      // Force redraw after resize
      lastDrawnRef.current = -1;
    };

    resize();

    // ─ Point 4: alpha:false + desynchronized for GPU acceleration ──────────
    ctxRef.current = canvas.getContext('2d', {
      alpha: false,          // HUGE perf boost: browser skips alpha compositing
      desynchronized: true,  // allow GPU to render without waiting for CPU sync
    });

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest]);

  // ── Keep framesRef in sync when manifest prop changes ─────────────────────
  useLayoutEffect(() => {
    const isMob = isMobileRef.current;
    framesRef.current = (isMob && manifest.mobile?.length)
      ? manifest.mobile
      : manifest.desktop;
    // Reset lerp so next scene starts from frame 0 smoothly
    lerpFrameRef.current = 0;
    lastDrawnRef.current = -1;
  }, [manifest]);

  // ── Bootstrap: load frame 0, then silently preload next 8 ────────────────
  useLayoutEffect(() => {
    const frames = framesRef.current;
    if (!frames?.length) return;

    const src0 = frames[0];

    if (imgCache.has(src0)) {
      readyRef.current = true;
      setFirstFrameReady(true);
      onFirstFrameLoaded?.();
      for (let i = 1; i < Math.min(8, frames.length); i++) preload(frames[i]);
      return;
    }

    inFlight.add(src0);
    const img = new Image();
    img.onload = () => {
      lruEvict();
      imgCache.set(src0, img);
      inFlight.delete(src0);
      dlStats.frames++;
      readyRef.current = true;
      setFirstFrameReady(true);
      onFirstFrameLoaded?.();
      for (let i = 1; i < Math.min(8, frames.length); i++) preload(frames[i]);
    };
    img.onerror = () => inFlight.delete(src0);
    img.src = src0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest]);

  // ── Preload hint: warm up first N frames of next sequence ─────────────────
  useEffect(() => {
    if (!preloadHint?.length) return;
    const t = setTimeout(() => preloadHint.forEach(preload), 1200);
    return () => clearTimeout(t);
  }, [preloadHint]);

  // ── MAIN RENDER LOOP via gsap.ticker ─────────────────────────────────────
  // ─ Point 1: Math and render are decoupled.
  //   GSAP ScrollTrigger onUpdate only writes to progressRef (no drawing!).
  //   gsap.ticker fires ONCE per monitor frame regardless of how fast the
  //   user scrolls. That's where we lerp + drawImage.
  useEffect(() => {
    if (!firstFrameReady) return;

    const tickerFn = () => {
      const canvas = canvasRef.current;
      const ctx    = ctxRef.current;
      if (!canvas || !ctx) return;

      const frames = framesRef.current;
      if (!frames?.length) return;

      const total = frames.length;

      // ─ Compute target frame from current (smoothed by GSAP scrub) progress
      const target = Math.max(0, Math.min(total - 1, progressRef.current * (total - 1)));

      // ─ Lerp smoothly toward target (eliminates integer-index micro-jumps)
      lerpFrameRef.current += (target - lerpFrameRef.current) * LERP_SPEED;

      // ─ Point 2: clamp + round safely
      const idx = Math.min(total - 1, Math.max(0, Math.round(lerpFrameRef.current)));

      // ─ Preload window around current index
      const lo = Math.max(0, idx - PRELOAD_BEHIND);
      const hi = Math.min(total - 1, idx + PRELOAD_AHEAD);
      for (let i = lo; i <= hi; i++) preload(frames[i]);

      // ─ Skip draw if index hasn't changed
      if (idx === lastDrawnRef.current) return;

      // ─ Find best image: exact → nearest neighbor → last good
      let img = imgCache.get(frames[idx]);

      if (!img) {
        for (let off = 1; off <= 8; off++) {
          const prev = frames[idx - off];
          if (prev && imgCache.has(prev)) { img = imgCache.get(prev); break; }
          const next = frames[idx + off];
          if (next && imgCache.has(next)) { img = imgCache.get(next); break; }
        }
      }
      if (!img) img = lastGoodImgRef.current;

      // ─ Point 2: safe draw — check img exists and is decoded
      if (!img || !img.complete || !img.naturalWidth) return;

      // ─ Cover-fit calculation
      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale, dh = ih * scale;
      const dx = (cw - dw) / 2, dy = (ch - dh) / 2;

      // ─ With alpha:false, drawImage overwrites pixels directly — no clearRect needed
      ctx.drawImage(img, dx, dy, dw, dh);

      lastGoodImgRef.current = img;
      lastDrawnRef.current   = idx;

      // Debug panel re-render (throttled to actual draws)
      if (debug) setDebugTick(n => n + 1);
    };

    gsap.ticker.add(tickerFn);
    return () => gsap.ticker.remove(tickerFn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstFrameReady, manifest, debug]);

  // ─── Render ───────────────────────────────────────────────────────────────
  const frames      = framesRef.current;
  const totalFrames = frames?.length ?? 0;

  return (
    <>
      <canvas
        ref={canvasRef}
        className={className}
        style={style}
      />

      {debug && (
        <div
          style={{ zIndex: 9999 }}
          className="fixed top-4 left-4 bg-black/85 text-green-400 p-3 rounded-lg
                     text-[11px] font-mono space-y-0.5 backdrop-blur-sm pointer-events-none"
        >
          <div className="text-yellow-400 font-bold text-xs mb-1">⚡ DEBUG</div>
          <div>Frame:    <b>{lastDrawnRef.current}</b> / {totalFrames - 1}</div>
          <div>LerpIdx:  {lerpFrameRef.current.toFixed(1)}</div>
          <div>Target:   {(progressRef.current * (totalFrames - 1)).toFixed(1)}</div>
          <div>Progress: {(progress * 100).toFixed(1)}%</div>
          <div>ImgCache: {imgCache.size} / {MAX_CACHE}</div>
          <div>InFlight: {inFlight.size}</div>
          <div>DL'd:     {dlStats.frames} imgs</div>
          <div>Mode:     {isMobileRef.current ? '📱 Mobile' : '🖥 Desktop'}</div>
          <div>α:false   desync ✅</div>
          <div>Ready:    {firstFrameReady ? '✅' : '⏳'}</div>
        </div>
      )}
    </>
  );
}
````

## src/components/Gallery.jsx

``jsx
import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Gallery</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Gallery</p>
      </div>
    </section>
  );
}
````

## src/components/Header.jsx

``jsx
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
      <div className="text-xl tracking-widest uppercase font-light pointer-events-auto">HOLDING</div>
      <nav className="hidden md:flex gap-8 text-sm tracking-wide pointer-events-auto">
        <a href="#about" className="hover:text-brand-gold transition-colors">О проекте</a>
        <a href="#gallery" className="hover:text-brand-gold transition-colors">Галерея</a>
        <a href="#layouts" className="hover:text-brand-gold transition-colors">Планировки</a>
      </nav>
      <button className="text-sm tracking-wide uppercase hover:text-brand-gold transition-colors pointer-events-auto">
        Меню
      </button>
    </header>
  );
}
````

## src/components/Hero.jsx

``jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 z-0 bg-black/60" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl" ref={titleRef}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-brand-light mb-6 tracking-wide">
          Пространство, в которое<br />хочется войти
        </h1>
        <p className="text-lg md:text-xl text-brand-gray mb-10 max-w-2xl mx-auto font-light">
          Современная архитектура, городская энергия и комфорт в одном месте.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-3 bg-brand-gold text-brand-bg uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-colors duration-300">
            Исследовать проект
          </button>
          <button className="px-8 py-3 border border-brand-gold/50 text-brand-gold uppercase tracking-widest text-sm hover:bg-brand-gold/10 transition-colors duration-300">
            Связаться с нами
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
````

## src/components/Infrastructure.jsx

``jsx
import React from 'react';

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Infrastructure</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Infrastructure</p>
      </div>
    </section>
  );
}
````

## src/components/InteriorReveal.jsx

``jsx
import React from 'react';
import { projectInfo } from '../data/projectContent';

export default function InteriorReveal() {
  return (
    <section className="w-full min-h-screen bg-brand-light text-brand-bg py-24 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-sm tracking-widest uppercase text-brand-gold mb-4">Интерьер</h2>
        <p className="text-3xl md:text-5xl font-light leading-tight">
          {projectInfo.about}
        </p>
      </div>
      
      <div className="w-full max-w-6xl aspect-video bg-gray-200 relative overflow-hidden group">
        <img 
          src={projectInfo.gallery[0]} 
          alt="Interior Placeholder" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Placeholder for Hotspots later */}
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse cursor-pointer">
           <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Материалы
           </div>
        </div>
      </div>
    </section>
  );
}
````

## src/components/Layouts.jsx

``jsx
import React from 'react';

export default function Layouts() {
  return (
    <section id="layouts" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Layouts</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Layouts</p>
      </div>
    </section>
  );
}
````

## src/components/LeadForm.jsx

``jsx
import React from 'react';

export default function LeadForm() {
  return (
    <section id="leadform" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">LeadForm</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции LeadForm</p>
      </div>
    </section>
  );
}
````

## src/components/Loader.jsx

``jsx
import React from 'react';

export default function Loader() {
  return (
    <section id="loader" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Loader</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Loader</p>
      </div>
    </section>
  );
}
````

## src/components/Location.jsx

``jsx
import React from 'react';

export default function Location() {
  return (
    <section id="location" className="w-full py-24 px-6 bg-brand-bg text-brand-light flex items-center justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-brand-gold uppercase mb-8">Location</h2>
        <p className="text-xl md:text-3xl font-light text-brand-gray">Контент секции Location</p>
      </div>
    </section>
  );
}
````

## src/data/mediaManifest.js

``js

// Auto-generated by optimize-media.mjs
export const earthDesktopFrames = [
  "/media/earth/desktop/Без названия_000.webp",
  "/media/earth/desktop/Без названия_001.webp",
  "/media/earth/desktop/Без названия_002.webp",
  "/media/earth/desktop/Без названия_003.webp",
  "/media/earth/desktop/Без названия_004.webp",
  "/media/earth/desktop/Без названия_005.webp",
  "/media/earth/desktop/Без названия_006.webp",
  "/media/earth/desktop/Без названия_007.webp",
  "/media/earth/desktop/Без названия_008.webp",
  "/media/earth/desktop/Без названия_009.webp",
  "/media/earth/desktop/Без названия_010.webp",
  "/media/earth/desktop/Без названия_011.webp",
  "/media/earth/desktop/Без названия_012.webp",
  "/media/earth/desktop/Без названия_013.webp",
  "/media/earth/desktop/Без названия_014.webp",
  "/media/earth/desktop/Без названия_015.webp",
  "/media/earth/desktop/Без названия_016.webp",
  "/media/earth/desktop/Без названия_017.webp",
  "/media/earth/desktop/Без названия_018.webp",
  "/media/earth/desktop/Без названия_019.webp",
  "/media/earth/desktop/Без названия_020.webp",
  "/media/earth/desktop/Без названия_021.webp",
  "/media/earth/desktop/Без названия_022.webp",
  "/media/earth/desktop/Без названия_023.webp",
  "/media/earth/desktop/Без названия_024.webp",
  "/media/earth/desktop/Без названия_025.webp",
  "/media/earth/desktop/Без названия_026.webp",
  "/media/earth/desktop/Без названия_027.webp",
  "/media/earth/desktop/Без названия_028.webp",
  "/media/earth/desktop/Без названия_029.webp",
  "/media/earth/desktop/Без названия_030.webp",
  "/media/earth/desktop/Без названия_031.webp",
  "/media/earth/desktop/Без названия_032.webp",
  "/media/earth/desktop/Без названия_033.webp",
  "/media/earth/desktop/Без названия_034.webp",
  "/media/earth/desktop/Без названия_035.webp",
  "/media/earth/desktop/Без названия_036.webp",
  "/media/earth/desktop/Без названия_037.webp",
  "/media/earth/desktop/Без названия_038.webp",
  "/media/earth/desktop/Без названия_039.webp",
  "/media/earth/desktop/Без названия_040.webp",
  "/media/earth/desktop/Без названия_041.webp",
  "/media/earth/desktop/Без названия_042.webp",
  "/media/earth/desktop/Без названия_043.webp",
  "/media/earth/desktop/Без названия_044.webp",
  "/media/earth/desktop/Без названия_045.webp",
  "/media/earth/desktop/Без названия_046.webp",
  "/media/earth/desktop/Без названия_047.webp",
  "/media/earth/desktop/Без названия_048.webp",
  "/media/earth/desktop/Без названия_049.webp",
  "/media/earth/desktop/Без названия_050.webp",
  "/media/earth/desktop/Без названия_051.webp",
  "/media/earth/desktop/Без названия_052.webp",
  "/media/earth/desktop/Без названия_053.webp",
  "/media/earth/desktop/Без названия_054.webp",
  "/media/earth/desktop/Без названия_055.webp",
  "/media/earth/desktop/Без названия_056.webp",
  "/media/earth/desktop/Без названия_057.webp",
  "/media/earth/desktop/Без названия_058.webp",
  "/media/earth/desktop/Без названия_059.webp",
  "/media/earth/desktop/Без названия_060.webp",
  "/media/earth/desktop/Без названия_061.webp",
  "/media/earth/desktop/Без названия_062.webp",
  "/media/earth/desktop/Без названия_063.webp",
  "/media/earth/desktop/Без названия_064.webp",
  "/media/earth/desktop/Без названия_065.webp",
  "/media/earth/desktop/Без названия_066.webp",
  "/media/earth/desktop/Без названия_067.webp",
  "/media/earth/desktop/Без названия_068.webp",
  "/media/earth/desktop/Без названия_069.webp",
  "/media/earth/desktop/Без названия_070.webp",
  "/media/earth/desktop/Без названия_071.webp",
  "/media/earth/desktop/Без названия_072.webp",
  "/media/earth/desktop/Без названия_073.webp",
  "/media/earth/desktop/Без названия_074.webp",
  "/media/earth/desktop/Без названия_075.webp",
  "/media/earth/desktop/Без названия_076.webp",
  "/media/earth/desktop/Без названия_077.webp",
  "/media/earth/desktop/Без названия_078.webp",
  "/media/earth/desktop/Без названия_079.webp",
  "/media/earth/desktop/Без названия_080.webp",
  "/media/earth/desktop/Без названия_081.webp",
  "/media/earth/desktop/Без названия_082.webp",
  "/media/earth/desktop/Без названия_083.webp",
  "/media/earth/desktop/Без названия_084.webp",
  "/media/earth/desktop/Без названия_085.webp",
  "/media/earth/desktop/Без названия_086.webp",
  "/media/earth/desktop/Без названия_087.webp",
  "/media/earth/desktop/Без названия_088.webp",
  "/media/earth/desktop/Без названия_089.webp",
  "/media/earth/desktop/Без названия_090.webp",
  "/media/earth/desktop/Без названия_091.webp",
  "/media/earth/desktop/Без названия_092.webp",
  "/media/earth/desktop/Без названия_093.webp",
  "/media/earth/desktop/Без названия_094.webp",
  "/media/earth/desktop/Без названия_095.webp",
  "/media/earth/desktop/Без названия_096.webp",
  "/media/earth/desktop/Без названия_097.webp",
  "/media/earth/desktop/Без названия_098.webp",
  "/media/earth/desktop/Без названия_099.webp",
  "/media/earth/desktop/Без названия_100.webp",
  "/media/earth/desktop/Без названия_101.webp",
  "/media/earth/desktop/Без названия_102.webp",
  "/media/earth/desktop/Без названия_103.webp",
  "/media/earth/desktop/Без названия_104.webp",
  "/media/earth/desktop/Без названия_105.webp",
  "/media/earth/desktop/Без названия_106.webp",
  "/media/earth/desktop/Без названия_107.webp",
  "/media/earth/desktop/Без названия_108.webp",
  "/media/earth/desktop/Без названия_109.webp",
  "/media/earth/desktop/Без названия_110.webp",
  "/media/earth/desktop/Без названия_111.webp",
  "/media/earth/desktop/Без названия_112.webp",
  "/media/earth/desktop/Без названия_113.webp",
  "/media/earth/desktop/Без названия_114.webp",
  "/media/earth/desktop/Без названия_115.webp",
  "/media/earth/desktop/Без названия_116.webp",
  "/media/earth/desktop/Без названия_117.webp",
  "/media/earth/desktop/Без названия_118.webp",
  "/media/earth/desktop/Без названия_119.webp",
  "/media/earth/desktop/Без названия_120.webp",
  "/media/earth/desktop/Без названия_121.webp",
  "/media/earth/desktop/Без названия_122.webp",
  "/media/earth/desktop/Без названия_123.webp",
  "/media/earth/desktop/Без названия_124.webp",
  "/media/earth/desktop/Без названия_125.webp",
  "/media/earth/desktop/Без названия_126.webp",
  "/media/earth/desktop/Без названия_127.webp",
  "/media/earth/desktop/Без названия_128.webp",
  "/media/earth/desktop/Без названия_129.webp",
  "/media/earth/desktop/Без названия_130.webp",
  "/media/earth/desktop/Без названия_131.webp",
  "/media/earth/desktop/Без названия_132.webp",
  "/media/earth/desktop/Без названия_133.webp",
  "/media/earth/desktop/Без названия_134.webp",
  "/media/earth/desktop/Без названия_135.webp",
  "/media/earth/desktop/Без названия_136.webp",
  "/media/earth/desktop/Без названия_137.webp",
  "/media/earth/desktop/Без названия_138.webp",
  "/media/earth/desktop/Без названия_139.webp",
  "/media/earth/desktop/Без названия_140.webp",
  "/media/earth/desktop/Без названия_141.webp",
  "/media/earth/desktop/Без названия_142.webp",
  "/media/earth/desktop/Без названия_143.webp",
  "/media/earth/desktop/Без названия_144.webp",
  "/media/earth/desktop/Без названия_145.webp",
  "/media/earth/desktop/Без названия_146.webp",
  "/media/earth/desktop/Без названия_147.webp",
  "/media/earth/desktop/Без названия_148.webp",
  "/media/earth/desktop/Без названия_149.webp",
  "/media/earth/desktop/Без названия_150.webp",
  "/media/earth/desktop/Без названия_151.webp",
  "/media/earth/desktop/Без названия_152.webp",
  "/media/earth/desktop/Без названия_153.webp",
  "/media/earth/desktop/Без названия_154.webp",
  "/media/earth/desktop/Без названия_155.webp",
  "/media/earth/desktop/Без названия_156.webp",
  "/media/earth/desktop/Без названия_157.webp",
  "/media/earth/desktop/Без названия_158.webp",
  "/media/earth/desktop/Без названия_159.webp",
  "/media/earth/desktop/Без названия_160.webp",
  "/media/earth/desktop/Без названия_161.webp",
  "/media/earth/desktop/Без названия_162.webp",
  "/media/earth/desktop/Без названия_163.webp",
  "/media/earth/desktop/Без названия_164.webp",
  "/media/earth/desktop/Без названия_165.webp",
  "/media/earth/desktop/Без названия_166.webp",
  "/media/earth/desktop/Без названия_167.webp",
  "/media/earth/desktop/Без названия_168.webp",
  "/media/earth/desktop/Без названия_169.webp",
  "/media/earth/desktop/Без названия_170.webp",
  "/media/earth/desktop/Без названия_171.webp",
  "/media/earth/desktop/Без названия_172.webp",
  "/media/earth/desktop/Без названия_173.webp",
  "/media/earth/desktop/Без названия_174.webp",
  "/media/earth/desktop/Без названия_175.webp",
  "/media/earth/desktop/Без названия_176.webp",
  "/media/earth/desktop/Без названия_177.webp",
  "/media/earth/desktop/Без названия_178.webp",
  "/media/earth/desktop/Без названия_179.webp",
  "/media/earth/desktop/Без названия_180.webp",
  "/media/earth/desktop/Без названия_181.webp",
  "/media/earth/desktop/Без названия_182.webp",
  "/media/earth/desktop/Без названия_183.webp",
  "/media/earth/desktop/Без названия_184.webp",
  "/media/earth/desktop/Без названия_185.webp",
  "/media/earth/desktop/Без названия_186.webp",
  "/media/earth/desktop/Без названия_187.webp",
  "/media/earth/desktop/Без названия_188.webp",
  "/media/earth/desktop/Без названия_189.webp",
  "/media/earth/desktop/Без названия_190.webp",
  "/media/earth/desktop/Без названия_191.webp",
  "/media/earth/desktop/Без названия_192.webp",
  "/media/earth/desktop/Без названия_193.webp",
  "/media/earth/desktop/Без названия_194.webp",
  "/media/earth/desktop/Без названия_195.webp",
  "/media/earth/desktop/Без названия_196.webp",
  "/media/earth/desktop/Без названия_197.webp",
  "/media/earth/desktop/Без названия_198.webp",
  "/media/earth/desktop/Без названия_199.webp",
  "/media/earth/desktop/Без названия_200.webp",
  "/media/earth/desktop/Без названия_201.webp",
  "/media/earth/desktop/Без названия_202.webp",
  "/media/earth/desktop/Без названия_203.webp",
  "/media/earth/desktop/Без названия_204.webp",
  "/media/earth/desktop/Без названия_205.webp",
  "/media/earth/desktop/Без названия_206.webp",
  "/media/earth/desktop/Без названия_207.webp",
  "/media/earth/desktop/Без названия_208.webp",
  "/media/earth/desktop/Без названия_209.webp",
  "/media/earth/desktop/Без названия_210.webp",
  "/media/earth/desktop/Без названия_211.webp",
  "/media/earth/desktop/Без названия_212.webp",
  "/media/earth/desktop/Без названия_213.webp",
  "/media/earth/desktop/Без названия_214.webp",
  "/media/earth/desktop/Без названия_215.webp",
  "/media/earth/desktop/Без названия_216.webp",
  "/media/earth/desktop/Без названия_217.webp",
  "/media/earth/desktop/Без названия_218.webp",
  "/media/earth/desktop/Без названия_219.webp",
  "/media/earth/desktop/Без названия_220.webp",
  "/media/earth/desktop/Без названия_221.webp",
  "/media/earth/desktop/Без названия_222.webp",
  "/media/earth/desktop/Без названия_223.webp",
  "/media/earth/desktop/Без названия_224.webp",
  "/media/earth/desktop/Без названия_225.webp",
  "/media/earth/desktop/Без названия_226.webp",
  "/media/earth/desktop/Без названия_227.webp",
  "/media/earth/desktop/Без названия_228.webp",
  "/media/earth/desktop/Без названия_229.webp",
  "/media/earth/desktop/Без названия_230.webp",
  "/media/earth/desktop/Без названия_231.webp",
  "/media/earth/desktop/Без названия_232.webp",
  "/media/earth/desktop/Без названия_233.webp",
  "/media/earth/desktop/Без названия_234.webp",
  "/media/earth/desktop/Без названия_235.webp",
  "/media/earth/desktop/Без названия_236.webp",
  "/media/earth/desktop/Без названия_237.webp",
  "/media/earth/desktop/Без названия_238.webp",
  "/media/earth/desktop/Без названия_239.webp",
  "/media/earth/desktop/Без названия_240.webp"
];
export const earthMobileFrames = [
  "/media/earth/mobile/Без названия_000.webp",
  "/media/earth/mobile/Без названия_002.webp",
  "/media/earth/mobile/Без названия_004.webp",
  "/media/earth/mobile/Без названия_006.webp",
  "/media/earth/mobile/Без названия_008.webp",
  "/media/earth/mobile/Без названия_010.webp",
  "/media/earth/mobile/Без названия_012.webp",
  "/media/earth/mobile/Без названия_014.webp",
  "/media/earth/mobile/Без названия_016.webp",
  "/media/earth/mobile/Без названия_018.webp",
  "/media/earth/mobile/Без названия_020.webp",
  "/media/earth/mobile/Без названия_022.webp",
  "/media/earth/mobile/Без названия_024.webp",
  "/media/earth/mobile/Без названия_026.webp",
  "/media/earth/mobile/Без названия_028.webp",
  "/media/earth/mobile/Без названия_030.webp",
  "/media/earth/mobile/Без названия_032.webp",
  "/media/earth/mobile/Без названия_034.webp",
  "/media/earth/mobile/Без названия_036.webp",
  "/media/earth/mobile/Без названия_038.webp",
  "/media/earth/mobile/Без названия_040.webp",
  "/media/earth/mobile/Без названия_042.webp",
  "/media/earth/mobile/Без названия_044.webp",
  "/media/earth/mobile/Без названия_046.webp",
  "/media/earth/mobile/Без названия_048.webp",
  "/media/earth/mobile/Без названия_050.webp",
  "/media/earth/mobile/Без названия_052.webp",
  "/media/earth/mobile/Без названия_054.webp",
  "/media/earth/mobile/Без названия_056.webp",
  "/media/earth/mobile/Без названия_058.webp",
  "/media/earth/mobile/Без названия_060.webp",
  "/media/earth/mobile/Без названия_062.webp",
  "/media/earth/mobile/Без названия_064.webp",
  "/media/earth/mobile/Без названия_066.webp",
  "/media/earth/mobile/Без названия_068.webp",
  "/media/earth/mobile/Без названия_070.webp",
  "/media/earth/mobile/Без названия_072.webp",
  "/media/earth/mobile/Без названия_074.webp",
  "/media/earth/mobile/Без названия_076.webp",
  "/media/earth/mobile/Без названия_078.webp",
  "/media/earth/mobile/Без названия_080.webp",
  "/media/earth/mobile/Без названия_082.webp",
  "/media/earth/mobile/Без названия_084.webp",
  "/media/earth/mobile/Без названия_086.webp",
  "/media/earth/mobile/Без названия_088.webp",
  "/media/earth/mobile/Без названия_090.webp",
  "/media/earth/mobile/Без названия_092.webp",
  "/media/earth/mobile/Без названия_094.webp",
  "/media/earth/mobile/Без названия_096.webp",
  "/media/earth/mobile/Без названия_098.webp",
  "/media/earth/mobile/Без названия_100.webp",
  "/media/earth/mobile/Без названия_102.webp",
  "/media/earth/mobile/Без названия_104.webp",
  "/media/earth/mobile/Без названия_106.webp",
  "/media/earth/mobile/Без названия_108.webp",
  "/media/earth/mobile/Без названия_110.webp",
  "/media/earth/mobile/Без названия_112.webp",
  "/media/earth/mobile/Без названия_114.webp",
  "/media/earth/mobile/Без названия_116.webp",
  "/media/earth/mobile/Без названия_118.webp",
  "/media/earth/mobile/Без названия_120.webp",
  "/media/earth/mobile/Без названия_122.webp",
  "/media/earth/mobile/Без названия_124.webp",
  "/media/earth/mobile/Без названия_126.webp",
  "/media/earth/mobile/Без названия_128.webp",
  "/media/earth/mobile/Без названия_130.webp",
  "/media/earth/mobile/Без названия_132.webp",
  "/media/earth/mobile/Без названия_134.webp",
  "/media/earth/mobile/Без названия_136.webp",
  "/media/earth/mobile/Без названия_138.webp",
  "/media/earth/mobile/Без названия_140.webp",
  "/media/earth/mobile/Без названия_142.webp",
  "/media/earth/mobile/Без названия_144.webp",
  "/media/earth/mobile/Без названия_146.webp",
  "/media/earth/mobile/Без названия_148.webp",
  "/media/earth/mobile/Без названия_150.webp",
  "/media/earth/mobile/Без названия_152.webp",
  "/media/earth/mobile/Без названия_154.webp",
  "/media/earth/mobile/Без названия_156.webp",
  "/media/earth/mobile/Без названия_158.webp",
  "/media/earth/mobile/Без названия_160.webp",
  "/media/earth/mobile/Без названия_162.webp",
  "/media/earth/mobile/Без названия_164.webp",
  "/media/earth/mobile/Без названия_166.webp",
  "/media/earth/mobile/Без названия_168.webp",
  "/media/earth/mobile/Без названия_170.webp",
  "/media/earth/mobile/Без названия_172.webp",
  "/media/earth/mobile/Без названия_174.webp",
  "/media/earth/mobile/Без названия_176.webp",
  "/media/earth/mobile/Без названия_178.webp",
  "/media/earth/mobile/Без названия_180.webp",
  "/media/earth/mobile/Без названия_182.webp",
  "/media/earth/mobile/Без названия_184.webp",
  "/media/earth/mobile/Без названия_186.webp",
  "/media/earth/mobile/Без названия_188.webp",
  "/media/earth/mobile/Без названия_190.webp",
  "/media/earth/mobile/Без названия_192.webp",
  "/media/earth/mobile/Без названия_194.webp",
  "/media/earth/mobile/Без названия_196.webp",
  "/media/earth/mobile/Без названия_198.webp",
  "/media/earth/mobile/Без названия_200.webp",
  "/media/earth/mobile/Без названия_202.webp",
  "/media/earth/mobile/Без названия_204.webp",
  "/media/earth/mobile/Без названия_206.webp",
  "/media/earth/mobile/Без названия_208.webp",
  "/media/earth/mobile/Без названия_210.webp",
  "/media/earth/mobile/Без названия_212.webp",
  "/media/earth/mobile/Без названия_214.webp",
  "/media/earth/mobile/Без названия_216.webp",
  "/media/earth/mobile/Без названия_218.webp",
  "/media/earth/mobile/Без названия_220.webp",
  "/media/earth/mobile/Без названия_222.webp",
  "/media/earth/mobile/Без названия_224.webp",
  "/media/earth/mobile/Без названия_226.webp",
  "/media/earth/mobile/Без названия_228.webp",
  "/media/earth/mobile/Без названия_230.webp",
  "/media/earth/mobile/Без названия_232.webp",
  "/media/earth/mobile/Без названия_234.webp",
  "/media/earth/mobile/Без названия_236.webp",
  "/media/earth/mobile/Без названия_238.webp",
  "/media/earth/mobile/Без названия_240.webp"
];
export const holdingDesktopFrames = [
  "/media/holding/desktop/0629 (1)_000001.webp",
  "/media/holding/desktop/0629 (1)_000002.webp",
  "/media/holding/desktop/0629 (1)_000003.webp",
  "/media/holding/desktop/0629 (1)_000004.webp",
  "/media/holding/desktop/0629 (1)_000005.webp",
  "/media/holding/desktop/0629 (1)_000006.webp",
  "/media/holding/desktop/0629 (1)_000007.webp",
  "/media/holding/desktop/0629 (1)_000008.webp",
  "/media/holding/desktop/0629 (1)_000009.webp",
  "/media/holding/desktop/0629 (1)_000010.webp",
  "/media/holding/desktop/0629 (1)_000011.webp",
  "/media/holding/desktop/0629 (1)_000012.webp",
  "/media/holding/desktop/0629 (1)_000013.webp",
  "/media/holding/desktop/0629 (1)_000014.webp",
  "/media/holding/desktop/0629 (1)_000015.webp",
  "/media/holding/desktop/0629 (1)_000016.webp",
  "/media/holding/desktop/0629 (1)_000017.webp",
  "/media/holding/desktop/0629 (1)_000018.webp",
  "/media/holding/desktop/0629 (1)_000019.webp",
  "/media/holding/desktop/0629 (1)_000020.webp",
  "/media/holding/desktop/0629 (1)_000021.webp",
  "/media/holding/desktop/0629 (1)_000022.webp",
  "/media/holding/desktop/0629 (1)_000023.webp",
  "/media/holding/desktop/0629 (1)_000024.webp",
  "/media/holding/desktop/0629 (1)_000025.webp",
  "/media/holding/desktop/0629 (1)_000026.webp",
  "/media/holding/desktop/0629 (1)_000027.webp",
  "/media/holding/desktop/0629 (1)_000028.webp",
  "/media/holding/desktop/0629 (1)_000029.webp",
  "/media/holding/desktop/0629 (1)_000030.webp",
  "/media/holding/desktop/0629 (1)_000031.webp",
  "/media/holding/desktop/0629 (1)_000032.webp",
  "/media/holding/desktop/0629 (1)_000033.webp",
  "/media/holding/desktop/0629 (1)_000034.webp",
  "/media/holding/desktop/0629 (1)_000035.webp",
  "/media/holding/desktop/0629 (1)_000036.webp",
  "/media/holding/desktop/0629 (1)_000039.webp",
  "/media/holding/desktop/0629 (1)_000040.webp",
  "/media/holding/desktop/0629 (1)_000041.webp",
  "/media/holding/desktop/0629 (1)_000042.webp",
  "/media/holding/desktop/0629 (1)_000043.webp",
  "/media/holding/desktop/0629 (1)_000044.webp",
  "/media/holding/desktop/0629 (1)_000045.webp",
  "/media/holding/desktop/0629 (1)_000046.webp",
  "/media/holding/desktop/0629 (1)_000047.webp",
  "/media/holding/desktop/0629 (1)_000048.webp",
  "/media/holding/desktop/0629 (1)_000049.webp",
  "/media/holding/desktop/0629 (1)_000050.webp",
  "/media/holding/desktop/0629 (1)_000051.webp",
  "/media/holding/desktop/0629 (1)_000052.webp",
  "/media/holding/desktop/0629 (1)_000053.webp",
  "/media/holding/desktop/0629 (1)_000054.webp",
  "/media/holding/desktop/0629 (1)_000055.webp",
  "/media/holding/desktop/0629 (1)_000056.webp",
  "/media/holding/desktop/0629 (1)_000057.webp",
  "/media/holding/desktop/0629 (1)_000058.webp",
  "/media/holding/desktop/0629 (1)_000059.webp",
  "/media/holding/desktop/0629 (1)_000060.webp",
  "/media/holding/desktop/0629 (1)_000061.webp",
  "/media/holding/desktop/0629 (1)_000062.webp",
  "/media/holding/desktop/0629 (1)_000063.webp",
  "/media/holding/desktop/0629 (1)_000064.webp",
  "/media/holding/desktop/0629 (1)_000065.webp",
  "/media/holding/desktop/0629 (1)_000066.webp",
  "/media/holding/desktop/0629 (1)_000067.webp",
  "/media/holding/desktop/0629 (1)_000068.webp",
  "/media/holding/desktop/0629 (1)_000069.webp",
  "/media/holding/desktop/0629 (1)_000070.webp",
  "/media/holding/desktop/0629 (1)_000071.webp",
  "/media/holding/desktop/0629 (1)_000072.webp",
  "/media/holding/desktop/0629 (1)_000073.webp",
  "/media/holding/desktop/0629 (1)_000074.webp",
  "/media/holding/desktop/0629 (1)_000075.webp",
  "/media/holding/desktop/0629 (1)_000076.webp",
  "/media/holding/desktop/0629 (1)_000077.webp",
  "/media/holding/desktop/0629 (1)_000078.webp",
  "/media/holding/desktop/0629 (1)_000079.webp",
  "/media/holding/desktop/0629 (1)_000080.webp",
  "/media/holding/desktop/0629 (1)_000081.webp",
  "/media/holding/desktop/0629 (1)_000082.webp",
  "/media/holding/desktop/0629 (1)_000083.webp",
  "/media/holding/desktop/0629 (1)_000084.webp",
  "/media/holding/desktop/0629 (1)_000085.webp",
  "/media/holding/desktop/0629 (1)_000086.webp",
  "/media/holding/desktop/0629 (1)_000087.webp",
  "/media/holding/desktop/0629 (1)_000088.webp",
  "/media/holding/desktop/0629 (1)_000089.webp",
  "/media/holding/desktop/0629 (1)_000090.webp",
  "/media/holding/desktop/0629 (1)_000091.webp",
  "/media/holding/desktop/0629 (1)_000092.webp",
  "/media/holding/desktop/0629 (1)_000093.webp",
  "/media/holding/desktop/0629 (1)_000094.webp",
  "/media/holding/desktop/0629 (1)_000095.webp",
  "/media/holding/desktop/0629 (1)_000096.webp",
  "/media/holding/desktop/0629 (1)_000097.webp",
  "/media/holding/desktop/0629 (1)_000098.webp",
  "/media/holding/desktop/0629 (1)_000099.webp",
  "/media/holding/desktop/0629 (1)_000100.webp",
  "/media/holding/desktop/0629 (1)_000101.webp",
  "/media/holding/desktop/0629 (1)_000102.webp",
  "/media/holding/desktop/0629 (1)_000103.webp",
  "/media/holding/desktop/0629 (1)_000104.webp",
  "/media/holding/desktop/0629 (1)_000105.webp",
  "/media/holding/desktop/0629 (1)_000106.webp",
  "/media/holding/desktop/0629 (1)_000107.webp",
  "/media/holding/desktop/0629 (1)_000108.webp",
  "/media/holding/desktop/0629 (1)_000109.webp",
  "/media/holding/desktop/0629 (1)_000110.webp",
  "/media/holding/desktop/0629 (1)_000111.webp",
  "/media/holding/desktop/0629 (1)_000112.webp",
  "/media/holding/desktop/0629 (1)_000113.webp",
  "/media/holding/desktop/0629 (1)_000114.webp",
  "/media/holding/desktop/0629 (1)_000115.webp",
  "/media/holding/desktop/0629 (1)_000116.webp",
  "/media/holding/desktop/0629 (1)_000117.webp",
  "/media/holding/desktop/0629 (1)_000118.webp",
  "/media/holding/desktop/0629 (1)_000119.webp",
  "/media/holding/desktop/0629 (1)_000120.webp",
  "/media/holding/desktop/0629 (1)_000121.webp",
  "/media/holding/desktop/0629 (1)_000122.webp",
  "/media/holding/desktop/0629 (1)_000123.webp",
  "/media/holding/desktop/0629 (1)_000124.webp",
  "/media/holding/desktop/0629 (1)_000125.webp",
  "/media/holding/desktop/0629 (1)_000126.webp",
  "/media/holding/desktop/0629 (1)_000127.webp",
  "/media/holding/desktop/0629 (1)_000128.webp",
  "/media/holding/desktop/0629 (1)_000129.webp",
  "/media/holding/desktop/0629 (1)_000130.webp",
  "/media/holding/desktop/0629 (1)_000131.webp",
  "/media/holding/desktop/0629 (1)_000132.webp",
  "/media/holding/desktop/0629 (1)_000133.webp",
  "/media/holding/desktop/0629 (1)_000134.webp",
  "/media/holding/desktop/0629 (1)_000135.webp",
  "/media/holding/desktop/0629 (1)_000136.webp",
  "/media/holding/desktop/0629 (1)_000137.webp",
  "/media/holding/desktop/0629 (1)_000138.webp",
  "/media/holding/desktop/0629 (1)_000139.webp",
  "/media/holding/desktop/0629 (1)_000140.webp",
  "/media/holding/desktop/0629 (1)_000141.webp",
  "/media/holding/desktop/0629 (1)_000142.webp",
  "/media/holding/desktop/0629 (1)_000143.webp",
  "/media/holding/desktop/0629 (1)_000144.webp",
  "/media/holding/desktop/0629 (1)_000145.webp",
  "/media/holding/desktop/0629 (1)_000146.webp",
  "/media/holding/desktop/0629 (1)_000147.webp",
  "/media/holding/desktop/0629 (1)_000148.webp",
  "/media/holding/desktop/0629 (1)_000149.webp",
  "/media/holding/desktop/0629 (1)_000150.webp",
  "/media/holding/desktop/0629 (1)_000151.webp",
  "/media/holding/desktop/0629 (1)_000152.webp",
  "/media/holding/desktop/0629 (1)_000153.webp",
  "/media/holding/desktop/0629 (1)_000154.webp",
  "/media/holding/desktop/0629 (1)_000155.webp",
  "/media/holding/desktop/0629 (1)_000156.webp",
  "/media/holding/desktop/0629 (1)_000157.webp",
  "/media/holding/desktop/0629 (1)_000158.webp",
  "/media/holding/desktop/0629 (1)_000159.webp",
  "/media/holding/desktop/0629 (1)_000160.webp",
  "/media/holding/desktop/0629 (1)_000161.webp",
  "/media/holding/desktop/0629 (1)_000162.webp",
  "/media/holding/desktop/0629 (1)_000163.webp",
  "/media/holding/desktop/0629 (1)_000164.webp",
  "/media/holding/desktop/0629 (1)_000165.webp",
  "/media/holding/desktop/0629 (1)_000166.webp",
  "/media/holding/desktop/0629 (1)_000167.webp",
  "/media/holding/desktop/0629 (1)_000168.webp",
  "/media/holding/desktop/0629 (1)_000169.webp",
  "/media/holding/desktop/0629 (1)_000170.webp",
  "/media/holding/desktop/0629 (1)_000171.webp",
  "/media/holding/desktop/0629 (1)_000172.webp",
  "/media/holding/desktop/0629 (1)_000173.webp",
  "/media/holding/desktop/0629 (1)_000174.webp",
  "/media/holding/desktop/0629 (1)_000175.webp",
  "/media/holding/desktop/0629 (1)_000176.webp",
  "/media/holding/desktop/0629 (1)_000177.webp",
  "/media/holding/desktop/0629 (1)_000178.webp",
  "/media/holding/desktop/0629 (1)_000179.webp",
  "/media/holding/desktop/0629 (1)_000180.webp",
  "/media/holding/desktop/0629 (1)_000181.webp",
  "/media/holding/desktop/0629 (1)_000182.webp",
  "/media/holding/desktop/0629 (1)_000183.webp",
  "/media/holding/desktop/0629 (1)_000184.webp",
  "/media/holding/desktop/0629 (1)_000185.webp",
  "/media/holding/desktop/0629 (1)_000186.webp",
  "/media/holding/desktop/0629 (1)_000187.webp",
  "/media/holding/desktop/0629 (1)_000188.webp",
  "/media/holding/desktop/0629 (1)_000189.webp",
  "/media/holding/desktop/0629 (1)_000190.webp",
  "/media/holding/desktop/0629 (1)_000191.webp",
  "/media/holding/desktop/0629 (1)_000192.webp",
  "/media/holding/desktop/0629 (1)_000193.webp",
  "/media/holding/desktop/0629 (1)_000194.webp",
  "/media/holding/desktop/0629 (1)_000195.webp",
  "/media/holding/desktop/0629 (1)_000196.webp",
  "/media/holding/desktop/0629 (1)_000197.webp",
  "/media/holding/desktop/0629 (1)_000198.webp",
  "/media/holding/desktop/0629 (1)_000199.webp",
  "/media/holding/desktop/0629 (1)_000200.webp",
  "/media/holding/desktop/0629 (1)_000201.webp",
  "/media/holding/desktop/0629 (1)_000202.webp",
  "/media/holding/desktop/0629 (1)_000203.webp",
  "/media/holding/desktop/0629 (1)_000204.webp",
  "/media/holding/desktop/0629 (1)_000205.webp",
  "/media/holding/desktop/0629 (1)_000206.webp",
  "/media/holding/desktop/0629 (1)_000207.webp",
  "/media/holding/desktop/0629 (1)_000208.webp",
  "/media/holding/desktop/0629 (1)_000209.webp",
  "/media/holding/desktop/0629 (1)_000210.webp",
  "/media/holding/desktop/0629 (1)_000211.webp",
  "/media/holding/desktop/0629 (1)_000212.webp",
  "/media/holding/desktop/0629 (1)_000213.webp",
  "/media/holding/desktop/0629 (1)_000214.webp",
  "/media/holding/desktop/0629 (1)_000215.webp",
  "/media/holding/desktop/0629 (1)_000216.webp",
  "/media/holding/desktop/0629 (1)_000217.webp",
  "/media/holding/desktop/0629 (1)_000218.webp",
  "/media/holding/desktop/0629 (1)_000219.webp",
  "/media/holding/desktop/0629 (1)_000220.webp",
  "/media/holding/desktop/0629 (1)_000221.webp",
  "/media/holding/desktop/0629 (1)_000222.webp",
  "/media/holding/desktop/0629 (1)_000223.webp",
  "/media/holding/desktop/0629 (1)_000224.webp",
  "/media/holding/desktop/0629 (1)_000225.webp",
  "/media/holding/desktop/0629 (1)_000226.webp",
  "/media/holding/desktop/0629 (1)_000227.webp",
  "/media/holding/desktop/0629 (1)_000228.webp",
  "/media/holding/desktop/0629 (1)_000229.webp",
  "/media/holding/desktop/0629 (1)_000230.webp",
  "/media/holding/desktop/0629 (1)_000231.webp",
  "/media/holding/desktop/0629 (1)_000232.webp",
  "/media/holding/desktop/0629 (1)_000233.webp",
  "/media/holding/desktop/0629 (1)_000234.webp",
  "/media/holding/desktop/0629 (1)_000235.webp",
  "/media/holding/desktop/0629 (1)_000236.webp",
  "/media/holding/desktop/0629 (1)_000237.webp",
  "/media/holding/desktop/0629 (1)_000238.webp",
  "/media/holding/desktop/0629 (1)_000239.webp",
  "/media/holding/desktop/0629 (1)_000255.webp",
  "/media/holding/desktop/0629 (1)_000256.webp",
  "/media/holding/desktop/0629 (1)_000257.webp",
  "/media/holding/desktop/0629 (1)_000258.webp",
  "/media/holding/desktop/0629 (1)_000259.webp",
  "/media/holding/desktop/0629 (1)_000260.webp",
  "/media/holding/desktop/0629 (1)_000261.webp",
  "/media/holding/desktop/0629 (1)_000262.webp",
  "/media/holding/desktop/0629 (1)_000263.webp",
  "/media/holding/desktop/0629 (1)_000264.webp",
  "/media/holding/desktop/0629 (1)_000265.webp",
  "/media/holding/desktop/0629 (1)_000266.webp",
  "/media/holding/desktop/0629 (1)_000267.webp",
  "/media/holding/desktop/0629 (1)_000268.webp",
  "/media/holding/desktop/0629 (1)_000269.webp",
  "/media/holding/desktop/0629 (1)_000270.webp",
  "/media/holding/desktop/0629 (1)_000271.webp",
  "/media/holding/desktop/0629 (1)_000272.webp",
  "/media/holding/desktop/0629 (1)_000273.webp",
  "/media/holding/desktop/0629 (1)_000274.webp",
  "/media/holding/desktop/0629 (1)_000275.webp",
  "/media/holding/desktop/0629 (1)_000276.webp",
  "/media/holding/desktop/0629 (1)_000277.webp",
  "/media/holding/desktop/0629 (1)_000278.webp",
  "/media/holding/desktop/0629 (1)_000279.webp",
  "/media/holding/desktop/0629 (1)_000280.webp",
  "/media/holding/desktop/0629 (1)_000281.webp",
  "/media/holding/desktop/0629 (1)_000282.webp",
  "/media/holding/desktop/0629 (1)_000283.webp",
  "/media/holding/desktop/0629 (1)_000284.webp",
  "/media/holding/desktop/0629 (1)_000285.webp",
  "/media/holding/desktop/0629 (1)_000286.webp",
  "/media/holding/desktop/0629 (1)_000287.webp",
  "/media/holding/desktop/0629 (1)_000288.webp",
  "/media/holding/desktop/0629 (1)_000289.webp",
  "/media/holding/desktop/0629 (1)_000290.webp",
  "/media/holding/desktop/0629 (1)_000291.webp",
  "/media/holding/desktop/0629 (1)_000292.webp",
  "/media/holding/desktop/0629 (1)_000293.webp",
  "/media/holding/desktop/0629 (1)_000294.webp",
  "/media/holding/desktop/0629 (1)_000295.webp",
  "/media/holding/desktop/0629 (1)_000296.webp",
  "/media/holding/desktop/0629 (1)_000297.webp",
  "/media/holding/desktop/0629 (1)_000298.webp",
  "/media/holding/desktop/0629 (1)_000299.webp",
  "/media/holding/desktop/0629 (1)_000300.webp",
  "/media/holding/desktop/0629 (1)_000301.webp",
  "/media/holding/desktop/0629 (1)_000302.webp",
  "/media/holding/desktop/0629 (1)_000303.webp",
  "/media/holding/desktop/0629 (1)_000304.webp",
  "/media/holding/desktop/0629 (1)_000305.webp",
  "/media/holding/desktop/0629 (1)_000306.webp",
  "/media/holding/desktop/0629 (1)_000307.webp",
  "/media/holding/desktop/0629 (1)_000308.webp",
  "/media/holding/desktop/0629 (1)_000309.webp",
  "/media/holding/desktop/0629 (1)_000310.webp",
  "/media/holding/desktop/0629 (1)_000311.webp",
  "/media/holding/desktop/0629 (1)_000312.webp",
  "/media/holding/desktop/0629 (1)_000313.webp",
  "/media/holding/desktop/0629 (1)_000314.webp",
  "/media/holding/desktop/0629 (1)_000315.webp",
  "/media/holding/desktop/0629 (1)_000316.webp",
  "/media/holding/desktop/0629 (1)_000317.webp",
  "/media/holding/desktop/0629 (1)_000318.webp",
  "/media/holding/desktop/0629 (1)_000319.webp",
  "/media/holding/desktop/0629 (1)_000320.webp",
  "/media/holding/desktop/0629 (1)_000321.webp",
  "/media/holding/desktop/0629 (1)_000322.webp",
  "/media/holding/desktop/0629 (1)_000323.webp",
  "/media/holding/desktop/0629 (1)_000324.webp",
  "/media/holding/desktop/0629 (1)_000325.webp",
  "/media/holding/desktop/0629 (1)_000326.webp",
  "/media/holding/desktop/0629 (1)_000327.webp",
  "/media/holding/desktop/0629 (1)_000328.webp",
  "/media/holding/desktop/0629 (1)_000329.webp",
  "/media/holding/desktop/0629 (1)_000330.webp",
  "/media/holding/desktop/0629 (1)_000331.webp",
  "/media/holding/desktop/0629 (1)_000332.webp",
  "/media/holding/desktop/0629 (1)_000333.webp",
  "/media/holding/desktop/0629 (1)_000334.webp",
  "/media/holding/desktop/0629 (1)_000335.webp",
  "/media/holding/desktop/0629 (1)_000336.webp",
  "/media/holding/desktop/0629 (1)_000337.webp",
  "/media/holding/desktop/0629 (1)_000338.webp",
  "/media/holding/desktop/0629 (1)_000339.webp",
  "/media/holding/desktop/0629 (1)_000340.webp",
  "/media/holding/desktop/0629 (1)_000341.webp",
  "/media/holding/desktop/0629 (1)_000342.webp",
  "/media/holding/desktop/0629 (1)_000343.webp",
  "/media/holding/desktop/0629 (1)_000344.webp",
  "/media/holding/desktop/0629 (1)_000345.webp",
  "/media/holding/desktop/0629 (1)_000346.webp",
  "/media/holding/desktop/0629 (1)_000347.webp",
  "/media/holding/desktop/0629 (1)_000348.webp",
  "/media/holding/desktop/0629 (1)_000349.webp",
  "/media/holding/desktop/0629 (1)_000350.webp",
  "/media/holding/desktop/0629 (1)_000351.webp",
  "/media/holding/desktop/0629 (1)_000352.webp",
  "/media/holding/desktop/0629 (1)_000353.webp",
  "/media/holding/desktop/0629 (1)_000354.webp",
  "/media/holding/desktop/0629 (1)_000355.webp",
  "/media/holding/desktop/0629 (1)_000356.webp",
  "/media/holding/desktop/0629 (1)_000357.webp",
  "/media/holding/desktop/0629 (1)_000358.webp",
  "/media/holding/desktop/0629 (1)_000359.webp",
  "/media/holding/desktop/0629 (1)_000360.webp",
  "/media/holding/desktop/0629 (1)_000361.webp",
  "/media/holding/desktop/0629 (1)_000362.webp",
  "/media/holding/desktop/0629 (1)_000363.webp",
  "/media/holding/desktop/0629 (1)_000364.webp",
  "/media/holding/desktop/0629 (1)_000365.webp",
  "/media/holding/desktop/0629 (1)_000366.webp",
  "/media/holding/desktop/0629 (1)_000367.webp",
  "/media/holding/desktop/0629 (1)_000368.webp",
  "/media/holding/desktop/0629 (1)_000369.webp",
  "/media/holding/desktop/0629 (1)_000370.webp",
  "/media/holding/desktop/0629 (1)_000371.webp",
  "/media/holding/desktop/0629 (1)_000372.webp",
  "/media/holding/desktop/0629 (1)_000373.webp",
  "/media/holding/desktop/0629 (1)_000374.webp",
  "/media/holding/desktop/0629 (1)_000375.webp",
  "/media/holding/desktop/0629 (1)_000376.webp",
  "/media/holding/desktop/0629 (1)_000377.webp",
  "/media/holding/desktop/0629 (1)_000378.webp",
  "/media/holding/desktop/0629 (1)_000379.webp",
  "/media/holding/desktop/0629 (1)_000380.webp",
  "/media/holding/desktop/0629 (1)_000381.webp",
  "/media/holding/desktop/0629 (1)_000382.webp",
  "/media/holding/desktop/0629 (1)_000383.webp",
  "/media/holding/desktop/0629 (1)_000384.webp",
  "/media/holding/desktop/0629 (1)_000385.webp",
  "/media/holding/desktop/0629 (1)_000386.webp",
  "/media/holding/desktop/0629 (1)_000387.webp",
  "/media/holding/desktop/0629 (1)_000388.webp",
  "/media/holding/desktop/0629 (1)_000389.webp",
  "/media/holding/desktop/0629 (1)_000390.webp",
  "/media/holding/desktop/0629 (1)_000391.webp",
  "/media/holding/desktop/0629 (1)_000392.webp",
  "/media/holding/desktop/0629 (1)_000393.webp",
  "/media/holding/desktop/0629 (1)_000394.webp",
  "/media/holding/desktop/0629 (1)_000395.webp",
  "/media/holding/desktop/0629 (1)_000396.webp",
  "/media/holding/desktop/0629 (1)_000397.webp",
  "/media/holding/desktop/0629 (1)_000398.webp",
  "/media/holding/desktop/0629 (1)_000399.webp",
  "/media/holding/desktop/0629 (1)_000400.webp",
  "/media/holding/desktop/0629 (1)_000401.webp",
  "/media/holding/desktop/0629 (1)_000402.webp",
  "/media/holding/desktop/0629 (1)_000403.webp",
  "/media/holding/desktop/0629 (1)_000404.webp",
  "/media/holding/desktop/0629 (1)_000405.webp",
  "/media/holding/desktop/0629 (1)_000406.webp",
  "/media/holding/desktop/0629 (1)_000407.webp",
  "/media/holding/desktop/0629 (1)_000408.webp",
  "/media/holding/desktop/0629 (1)_000409.webp",
  "/media/holding/desktop/0629 (1)_000410.webp",
  "/media/holding/desktop/0629 (1)_000411.webp",
  "/media/holding/desktop/0629 (1)_000412.webp",
  "/media/holding/desktop/0629 (1)_000413.webp",
  "/media/holding/desktop/0629 (1)_000414.webp",
  "/media/holding/desktop/0629 (1)_000415.webp",
  "/media/holding/desktop/0629 (1)_000416.webp",
  "/media/holding/desktop/0629 (1)_000417.webp",
  "/media/holding/desktop/0629 (1)_000418.webp",
  "/media/holding/desktop/0629 (1)_000419.webp",
  "/media/holding/desktop/0629 (1)_000420.webp",
  "/media/holding/desktop/0629 (1)_000421.webp",
  "/media/holding/desktop/0629 (1)_000422.webp",
  "/media/holding/desktop/0629 (1)_000423.webp",
  "/media/holding/desktop/0629 (1)_000424.webp",
  "/media/holding/desktop/0629 (1)_000425.webp",
  "/media/holding/desktop/0629 (1)_000426.webp",
  "/media/holding/desktop/0629 (1)_000427.webp",
  "/media/holding/desktop/0629 (1)_000428.webp",
  "/media/holding/desktop/0629 (1)_000429.webp",
  "/media/holding/desktop/0629 (1)_000430.webp",
  "/media/holding/desktop/0629 (1)_000431.webp",
  "/media/holding/desktop/0629 (1)_000432.webp",
  "/media/holding/desktop/0629 (1)_000433.webp",
  "/media/holding/desktop/0629 (1)_000434.webp",
  "/media/holding/desktop/0629 (1)_000435.webp",
  "/media/holding/desktop/0629 (1)_000436.webp",
  "/media/holding/desktop/0629 (1)_000437.webp",
  "/media/holding/desktop/0629 (1)_000438.webp",
  "/media/holding/desktop/0629 (1)_000439.webp",
  "/media/holding/desktop/0629 (1)_000440.webp",
  "/media/holding/desktop/0629 (1)_000441.webp",
  "/media/holding/desktop/0629 (1)_000442.webp",
  "/media/holding/desktop/0629 (1)_000443.webp",
  "/media/holding/desktop/0629 (1)_000444.webp",
  "/media/holding/desktop/0629 (1)_000445.webp",
  "/media/holding/desktop/0629 (1)_000446.webp",
  "/media/holding/desktop/0629 (1)_000447.webp",
  "/media/holding/desktop/0629 (1)_000448.webp",
  "/media/holding/desktop/0629 (1)_000449.webp",
  "/media/holding/desktop/0629 (1)_000450.webp",
  "/media/holding/desktop/0629 (1)_000451.webp",
  "/media/holding/desktop/0629 (1)_000452.webp",
  "/media/holding/desktop/0629 (1)_000453.webp",
  "/media/holding/desktop/0629 (1)_000454.webp",
  "/media/holding/desktop/0629 (1)_000455.webp",
  "/media/holding/desktop/0629 (1)_000456.webp",
  "/media/holding/desktop/0629 (1)_000457.webp",
  "/media/holding/desktop/0629 (1)_000458.webp",
  "/media/holding/desktop/0629 (1)_000459.webp",
  "/media/holding/desktop/0629 (1)_000460.webp",
  "/media/holding/desktop/0629 (1)_000461.webp",
  "/media/holding/desktop/0629 (1)_000462.webp",
  "/media/holding/desktop/0629 (1)_000463.webp",
  "/media/holding/desktop/0629 (1)_000464.webp",
  "/media/holding/desktop/0629 (1)_000465.webp",
  "/media/holding/desktop/0629 (1)_000466.webp",
  "/media/holding/desktop/0629 (1)_000467.webp"
];
export const holdingMobileFrames = [
  "/media/holding/mobile/0629 (1)_000001.webp",
  "/media/holding/mobile/0629 (1)_000003.webp",
  "/media/holding/mobile/0629 (1)_000005.webp",
  "/media/holding/mobile/0629 (1)_000007.webp",
  "/media/holding/mobile/0629 (1)_000009.webp",
  "/media/holding/mobile/0629 (1)_000011.webp",
  "/media/holding/mobile/0629 (1)_000013.webp",
  "/media/holding/mobile/0629 (1)_000015.webp",
  "/media/holding/mobile/0629 (1)_000017.webp",
  "/media/holding/mobile/0629 (1)_000019.webp",
  "/media/holding/mobile/0629 (1)_000021.webp",
  "/media/holding/mobile/0629 (1)_000023.webp",
  "/media/holding/mobile/0629 (1)_000025.webp",
  "/media/holding/mobile/0629 (1)_000027.webp",
  "/media/holding/mobile/0629 (1)_000029.webp",
  "/media/holding/mobile/0629 (1)_000031.webp",
  "/media/holding/mobile/0629 (1)_000033.webp",
  "/media/holding/mobile/0629 (1)_000035.webp",
  "/media/holding/mobile/0629 (1)_000039.webp",
  "/media/holding/mobile/0629 (1)_000041.webp",
  "/media/holding/mobile/0629 (1)_000043.webp",
  "/media/holding/mobile/0629 (1)_000045.webp",
  "/media/holding/mobile/0629 (1)_000047.webp",
  "/media/holding/mobile/0629 (1)_000049.webp",
  "/media/holding/mobile/0629 (1)_000051.webp",
  "/media/holding/mobile/0629 (1)_000053.webp",
  "/media/holding/mobile/0629 (1)_000055.webp",
  "/media/holding/mobile/0629 (1)_000057.webp",
  "/media/holding/mobile/0629 (1)_000059.webp",
  "/media/holding/mobile/0629 (1)_000061.webp",
  "/media/holding/mobile/0629 (1)_000063.webp",
  "/media/holding/mobile/0629 (1)_000065.webp",
  "/media/holding/mobile/0629 (1)_000067.webp",
  "/media/holding/mobile/0629 (1)_000069.webp",
  "/media/holding/mobile/0629 (1)_000071.webp",
  "/media/holding/mobile/0629 (1)_000073.webp",
  "/media/holding/mobile/0629 (1)_000075.webp",
  "/media/holding/mobile/0629 (1)_000077.webp",
  "/media/holding/mobile/0629 (1)_000079.webp",
  "/media/holding/mobile/0629 (1)_000081.webp",
  "/media/holding/mobile/0629 (1)_000083.webp",
  "/media/holding/mobile/0629 (1)_000085.webp",
  "/media/holding/mobile/0629 (1)_000087.webp",
  "/media/holding/mobile/0629 (1)_000089.webp",
  "/media/holding/mobile/0629 (1)_000091.webp",
  "/media/holding/mobile/0629 (1)_000093.webp",
  "/media/holding/mobile/0629 (1)_000095.webp",
  "/media/holding/mobile/0629 (1)_000097.webp",
  "/media/holding/mobile/0629 (1)_000099.webp",
  "/media/holding/mobile/0629 (1)_000101.webp",
  "/media/holding/mobile/0629 (1)_000103.webp",
  "/media/holding/mobile/0629 (1)_000105.webp",
  "/media/holding/mobile/0629 (1)_000107.webp",
  "/media/holding/mobile/0629 (1)_000109.webp",
  "/media/holding/mobile/0629 (1)_000111.webp",
  "/media/holding/mobile/0629 (1)_000113.webp",
  "/media/holding/mobile/0629 (1)_000115.webp",
  "/media/holding/mobile/0629 (1)_000117.webp",
  "/media/holding/mobile/0629 (1)_000119.webp",
  "/media/holding/mobile/0629 (1)_000121.webp",
  "/media/holding/mobile/0629 (1)_000123.webp",
  "/media/holding/mobile/0629 (1)_000125.webp",
  "/media/holding/mobile/0629 (1)_000127.webp",
  "/media/holding/mobile/0629 (1)_000129.webp",
  "/media/holding/mobile/0629 (1)_000131.webp",
  "/media/holding/mobile/0629 (1)_000133.webp",
  "/media/holding/mobile/0629 (1)_000135.webp",
  "/media/holding/mobile/0629 (1)_000137.webp",
  "/media/holding/mobile/0629 (1)_000139.webp",
  "/media/holding/mobile/0629 (1)_000141.webp",
  "/media/holding/mobile/0629 (1)_000143.webp",
  "/media/holding/mobile/0629 (1)_000145.webp",
  "/media/holding/mobile/0629 (1)_000147.webp",
  "/media/holding/mobile/0629 (1)_000149.webp",
  "/media/holding/mobile/0629 (1)_000151.webp",
  "/media/holding/mobile/0629 (1)_000153.webp",
  "/media/holding/mobile/0629 (1)_000155.webp",
  "/media/holding/mobile/0629 (1)_000157.webp",
  "/media/holding/mobile/0629 (1)_000159.webp",
  "/media/holding/mobile/0629 (1)_000161.webp",
  "/media/holding/mobile/0629 (1)_000163.webp",
  "/media/holding/mobile/0629 (1)_000165.webp",
  "/media/holding/mobile/0629 (1)_000167.webp",
  "/media/holding/mobile/0629 (1)_000169.webp",
  "/media/holding/mobile/0629 (1)_000171.webp",
  "/media/holding/mobile/0629 (1)_000173.webp",
  "/media/holding/mobile/0629 (1)_000175.webp",
  "/media/holding/mobile/0629 (1)_000177.webp",
  "/media/holding/mobile/0629 (1)_000179.webp",
  "/media/holding/mobile/0629 (1)_000181.webp",
  "/media/holding/mobile/0629 (1)_000183.webp",
  "/media/holding/mobile/0629 (1)_000185.webp",
  "/media/holding/mobile/0629 (1)_000187.webp",
  "/media/holding/mobile/0629 (1)_000189.webp",
  "/media/holding/mobile/0629 (1)_000191.webp",
  "/media/holding/mobile/0629 (1)_000193.webp",
  "/media/holding/mobile/0629 (1)_000195.webp",
  "/media/holding/mobile/0629 (1)_000197.webp",
  "/media/holding/mobile/0629 (1)_000199.webp",
  "/media/holding/mobile/0629 (1)_000201.webp",
  "/media/holding/mobile/0629 (1)_000203.webp",
  "/media/holding/mobile/0629 (1)_000205.webp",
  "/media/holding/mobile/0629 (1)_000207.webp",
  "/media/holding/mobile/0629 (1)_000209.webp",
  "/media/holding/mobile/0629 (1)_000211.webp",
  "/media/holding/mobile/0629 (1)_000213.webp",
  "/media/holding/mobile/0629 (1)_000215.webp",
  "/media/holding/mobile/0629 (1)_000217.webp",
  "/media/holding/mobile/0629 (1)_000219.webp",
  "/media/holding/mobile/0629 (1)_000221.webp",
  "/media/holding/mobile/0629 (1)_000223.webp",
  "/media/holding/mobile/0629 (1)_000225.webp",
  "/media/holding/mobile/0629 (1)_000227.webp",
  "/media/holding/mobile/0629 (1)_000229.webp",
  "/media/holding/mobile/0629 (1)_000231.webp",
  "/media/holding/mobile/0629 (1)_000233.webp",
  "/media/holding/mobile/0629 (1)_000235.webp",
  "/media/holding/mobile/0629 (1)_000237.webp",
  "/media/holding/mobile/0629 (1)_000239.webp",
  "/media/holding/mobile/0629 (1)_000256.webp",
  "/media/holding/mobile/0629 (1)_000258.webp",
  "/media/holding/mobile/0629 (1)_000260.webp",
  "/media/holding/mobile/0629 (1)_000262.webp",
  "/media/holding/mobile/0629 (1)_000264.webp",
  "/media/holding/mobile/0629 (1)_000266.webp",
  "/media/holding/mobile/0629 (1)_000268.webp",
  "/media/holding/mobile/0629 (1)_000270.webp",
  "/media/holding/mobile/0629 (1)_000272.webp",
  "/media/holding/mobile/0629 (1)_000274.webp",
  "/media/holding/mobile/0629 (1)_000276.webp",
  "/media/holding/mobile/0629 (1)_000278.webp",
  "/media/holding/mobile/0629 (1)_000280.webp",
  "/media/holding/mobile/0629 (1)_000282.webp",
  "/media/holding/mobile/0629 (1)_000284.webp",
  "/media/holding/mobile/0629 (1)_000286.webp",
  "/media/holding/mobile/0629 (1)_000288.webp",
  "/media/holding/mobile/0629 (1)_000290.webp",
  "/media/holding/mobile/0629 (1)_000292.webp",
  "/media/holding/mobile/0629 (1)_000294.webp",
  "/media/holding/mobile/0629 (1)_000296.webp",
  "/media/holding/mobile/0629 (1)_000298.webp",
  "/media/holding/mobile/0629 (1)_000300.webp",
  "/media/holding/mobile/0629 (1)_000302.webp",
  "/media/holding/mobile/0629 (1)_000304.webp",
  "/media/holding/mobile/0629 (1)_000306.webp",
  "/media/holding/mobile/0629 (1)_000308.webp",
  "/media/holding/mobile/0629 (1)_000310.webp",
  "/media/holding/mobile/0629 (1)_000312.webp",
  "/media/holding/mobile/0629 (1)_000314.webp",
  "/media/holding/mobile/0629 (1)_000316.webp",
  "/media/holding/mobile/0629 (1)_000318.webp",
  "/media/holding/mobile/0629 (1)_000320.webp",
  "/media/holding/mobile/0629 (1)_000322.webp",
  "/media/holding/mobile/0629 (1)_000324.webp",
  "/media/holding/mobile/0629 (1)_000326.webp",
  "/media/holding/mobile/0629 (1)_000328.webp",
  "/media/holding/mobile/0629 (1)_000330.webp",
  "/media/holding/mobile/0629 (1)_000332.webp",
  "/media/holding/mobile/0629 (1)_000334.webp",
  "/media/holding/mobile/0629 (1)_000336.webp",
  "/media/holding/mobile/0629 (1)_000338.webp",
  "/media/holding/mobile/0629 (1)_000340.webp",
  "/media/holding/mobile/0629 (1)_000342.webp",
  "/media/holding/mobile/0629 (1)_000344.webp",
  "/media/holding/mobile/0629 (1)_000346.webp",
  "/media/holding/mobile/0629 (1)_000348.webp",
  "/media/holding/mobile/0629 (1)_000350.webp",
  "/media/holding/mobile/0629 (1)_000352.webp",
  "/media/holding/mobile/0629 (1)_000354.webp",
  "/media/holding/mobile/0629 (1)_000356.webp",
  "/media/holding/mobile/0629 (1)_000358.webp",
  "/media/holding/mobile/0629 (1)_000360.webp",
  "/media/holding/mobile/0629 (1)_000362.webp",
  "/media/holding/mobile/0629 (1)_000364.webp",
  "/media/holding/mobile/0629 (1)_000366.webp",
  "/media/holding/mobile/0629 (1)_000368.webp",
  "/media/holding/mobile/0629 (1)_000370.webp",
  "/media/holding/mobile/0629 (1)_000372.webp",
  "/media/holding/mobile/0629 (1)_000374.webp",
  "/media/holding/mobile/0629 (1)_000376.webp",
  "/media/holding/mobile/0629 (1)_000378.webp",
  "/media/holding/mobile/0629 (1)_000380.webp",
  "/media/holding/mobile/0629 (1)_000382.webp",
  "/media/holding/mobile/0629 (1)_000384.webp",
  "/media/holding/mobile/0629 (1)_000386.webp",
  "/media/holding/mobile/0629 (1)_000388.webp",
  "/media/holding/mobile/0629 (1)_000390.webp",
  "/media/holding/mobile/0629 (1)_000392.webp",
  "/media/holding/mobile/0629 (1)_000394.webp",
  "/media/holding/mobile/0629 (1)_000396.webp",
  "/media/holding/mobile/0629 (1)_000398.webp",
  "/media/holding/mobile/0629 (1)_000400.webp",
  "/media/holding/mobile/0629 (1)_000402.webp",
  "/media/holding/mobile/0629 (1)_000404.webp",
  "/media/holding/mobile/0629 (1)_000406.webp",
  "/media/holding/mobile/0629 (1)_000408.webp",
  "/media/holding/mobile/0629 (1)_000410.webp",
  "/media/holding/mobile/0629 (1)_000412.webp",
  "/media/holding/mobile/0629 (1)_000414.webp",
  "/media/holding/mobile/0629 (1)_000416.webp",
  "/media/holding/mobile/0629 (1)_000418.webp",
  "/media/holding/mobile/0629 (1)_000420.webp",
  "/media/holding/mobile/0629 (1)_000422.webp",
  "/media/holding/mobile/0629 (1)_000424.webp",
  "/media/holding/mobile/0629 (1)_000426.webp",
  "/media/holding/mobile/0629 (1)_000428.webp",
  "/media/holding/mobile/0629 (1)_000430.webp",
  "/media/holding/mobile/0629 (1)_000432.webp",
  "/media/holding/mobile/0629 (1)_000434.webp",
  "/media/holding/mobile/0629 (1)_000436.webp",
  "/media/holding/mobile/0629 (1)_000438.webp",
  "/media/holding/mobile/0629 (1)_000440.webp",
  "/media/holding/mobile/0629 (1)_000442.webp",
  "/media/holding/mobile/0629 (1)_000444.webp",
  "/media/holding/mobile/0629 (1)_000446.webp",
  "/media/holding/mobile/0629 (1)_000448.webp",
  "/media/holding/mobile/0629 (1)_000450.webp",
  "/media/holding/mobile/0629 (1)_000452.webp",
  "/media/holding/mobile/0629 (1)_000454.webp",
  "/media/holding/mobile/0629 (1)_000456.webp",
  "/media/holding/mobile/0629 (1)_000458.webp",
  "/media/holding/mobile/0629 (1)_000460.webp",
  "/media/holding/mobile/0629 (1)_000462.webp",
  "/media/holding/mobile/0629 (1)_000464.webp",
  "/media/holding/mobile/0629 (1)_000466.webp"
];
````

## src/data/mediaManifest_backup.js

``js

// Auto-generated by optimize-media.mjs
export const earthDesktopFrames = [
  "/public/media/earth/desktop/Без названия_000.webp",
  "/public/media/earth/desktop/Без названия_001.webp",
  "/public/media/earth/desktop/Без названия_002.webp",
  "/public/media/earth/desktop/Без названия_003.webp",
  "/public/media/earth/desktop/Без названия_004.webp",
  "/public/media/earth/desktop/Без названия_005.webp",
  "/public/media/earth/desktop/Без названия_006.webp",
  "/public/media/earth/desktop/Без названия_007.webp",
  "/public/media/earth/desktop/Без названия_008.webp",
  "/public/media/earth/desktop/Без названия_009.webp",
  "/public/media/earth/desktop/Без названия_010.webp",
  "/public/media/earth/desktop/Без названия_011.webp",
  "/public/media/earth/desktop/Без названия_012.webp",
  "/public/media/earth/desktop/Без названия_013.webp",
  "/public/media/earth/desktop/Без названия_014.webp",
  "/public/media/earth/desktop/Без названия_015.webp",
  "/public/media/earth/desktop/Без названия_016.webp",
  "/public/media/earth/desktop/Без названия_017.webp",
  "/public/media/earth/desktop/Без названия_018.webp",
  "/public/media/earth/desktop/Без названия_019.webp",
  "/public/media/earth/desktop/Без названия_020.webp",
  "/public/media/earth/desktop/Без названия_021.webp",
  "/public/media/earth/desktop/Без названия_022.webp",
  "/public/media/earth/desktop/Без названия_023.webp",
  "/public/media/earth/desktop/Без названия_024.webp",
  "/public/media/earth/desktop/Без названия_025.webp",
  "/public/media/earth/desktop/Без названия_026.webp",
  "/public/media/earth/desktop/Без названия_027.webp",
  "/public/media/earth/desktop/Без названия_028.webp",
  "/public/media/earth/desktop/Без названия_029.webp",
  "/public/media/earth/desktop/Без названия_030.webp",
  "/public/media/earth/desktop/Без названия_031.webp",
  "/public/media/earth/desktop/Без названия_032.webp",
  "/public/media/earth/desktop/Без названия_033.webp",
  "/public/media/earth/desktop/Без названия_034.webp",
  "/public/media/earth/desktop/Без названия_035.webp",
  "/public/media/earth/desktop/Без названия_036.webp",
  "/public/media/earth/desktop/Без названия_037.webp",
  "/public/media/earth/desktop/Без названия_038.webp",
  "/public/media/earth/desktop/Без названия_039.webp",
  "/public/media/earth/desktop/Без названия_040.webp",
  "/public/media/earth/desktop/Без названия_041.webp",
  "/public/media/earth/desktop/Без названия_042.webp",
  "/public/media/earth/desktop/Без названия_043.webp",
  "/public/media/earth/desktop/Без названия_044.webp",
  "/public/media/earth/desktop/Без названия_045.webp",
  "/public/media/earth/desktop/Без названия_046.webp",
  "/public/media/earth/desktop/Без названия_047.webp",
  "/public/media/earth/desktop/Без названия_048.webp",
  "/public/media/earth/desktop/Без названия_049.webp",
  "/public/media/earth/desktop/Без названия_050.webp",
  "/public/media/earth/desktop/Без названия_051.webp",
  "/public/media/earth/desktop/Без названия_052.webp",
  "/public/media/earth/desktop/Без названия_053.webp",
  "/public/media/earth/desktop/Без названия_054.webp",
  "/public/media/earth/desktop/Без названия_055.webp",
  "/public/media/earth/desktop/Без названия_056.webp",
  "/public/media/earth/desktop/Без названия_057.webp",
  "/public/media/earth/desktop/Без названия_058.webp",
  "/public/media/earth/desktop/Без названия_059.webp",
  "/public/media/earth/desktop/Без названия_060.webp",
  "/public/media/earth/desktop/Без названия_061.webp",
  "/public/media/earth/desktop/Без названия_062.webp",
  "/public/media/earth/desktop/Без названия_063.webp",
  "/public/media/earth/desktop/Без названия_064.webp",
  "/public/media/earth/desktop/Без названия_065.webp",
  "/public/media/earth/desktop/Без названия_066.webp",
  "/public/media/earth/desktop/Без названия_067.webp",
  "/public/media/earth/desktop/Без названия_068.webp",
  "/public/media/earth/desktop/Без названия_069.webp",
  "/public/media/earth/desktop/Без названия_070.webp",
  "/public/media/earth/desktop/Без названия_071.webp",
  "/public/media/earth/desktop/Без названия_072.webp",
  "/public/media/earth/desktop/Без названия_073.webp",
  "/public/media/earth/desktop/Без названия_074.webp",
  "/public/media/earth/desktop/Без названия_075.webp",
  "/public/media/earth/desktop/Без названия_076.webp",
  "/public/media/earth/desktop/Без названия_077.webp",
  "/public/media/earth/desktop/Без названия_078.webp",
  "/public/media/earth/desktop/Без названия_079.webp",
  "/public/media/earth/desktop/Без названия_080.webp",
  "/public/media/earth/desktop/Без названия_081.webp",
  "/public/media/earth/desktop/Без названия_082.webp",
  "/public/media/earth/desktop/Без названия_083.webp",
  "/public/media/earth/desktop/Без названия_084.webp",
  "/public/media/earth/desktop/Без названия_085.webp",
  "/public/media/earth/desktop/Без названия_086.webp",
  "/public/media/earth/desktop/Без названия_087.webp",
  "/public/media/earth/desktop/Без названия_088.webp",
  "/public/media/earth/desktop/Без названия_089.webp",
  "/public/media/earth/desktop/Без названия_090.webp",
  "/public/media/earth/desktop/Без названия_091.webp",
  "/public/media/earth/desktop/Без названия_092.webp",
  "/public/media/earth/desktop/Без названия_093.webp",
  "/public/media/earth/desktop/Без названия_094.webp",
  "/public/media/earth/desktop/Без названия_095.webp",
  "/public/media/earth/desktop/Без названия_096.webp",
  "/public/media/earth/desktop/Без названия_097.webp",
  "/public/media/earth/desktop/Без названия_098.webp",
  "/public/media/earth/desktop/Без названия_099.webp",
  "/public/media/earth/desktop/Без названия_100.webp",
  "/public/media/earth/desktop/Без названия_101.webp",
  "/public/media/earth/desktop/Без названия_102.webp",
  "/public/media/earth/desktop/Без названия_103.webp",
  "/public/media/earth/desktop/Без названия_104.webp",
  "/public/media/earth/desktop/Без названия_105.webp",
  "/public/media/earth/desktop/Без названия_106.webp",
  "/public/media/earth/desktop/Без названия_107.webp",
  "/public/media/earth/desktop/Без названия_108.webp",
  "/public/media/earth/desktop/Без названия_109.webp",
  "/public/media/earth/desktop/Без названия_110.webp",
  "/public/media/earth/desktop/Без названия_111.webp",
  "/public/media/earth/desktop/Без названия_112.webp",
  "/public/media/earth/desktop/Без названия_113.webp",
  "/public/media/earth/desktop/Без названия_114.webp",
  "/public/media/earth/desktop/Без названия_115.webp",
  "/public/media/earth/desktop/Без названия_116.webp",
  "/public/media/earth/desktop/Без названия_117.webp",
  "/public/media/earth/desktop/Без названия_118.webp",
  "/public/media/earth/desktop/Без названия_119.webp",
  "/public/media/earth/desktop/Без названия_120.webp",
  "/public/media/earth/desktop/Без названия_121.webp",
  "/public/media/earth/desktop/Без названия_122.webp",
  "/public/media/earth/desktop/Без названия_123.webp",
  "/public/media/earth/desktop/Без названия_124.webp",
  "/public/media/earth/desktop/Без названия_125.webp",
  "/public/media/earth/desktop/Без названия_126.webp",
  "/public/media/earth/desktop/Без названия_127.webp",
  "/public/media/earth/desktop/Без названия_128.webp",
  "/public/media/earth/desktop/Без названия_129.webp",
  "/public/media/earth/desktop/Без названия_130.webp",
  "/public/media/earth/desktop/Без названия_131.webp",
  "/public/media/earth/desktop/Без названия_132.webp",
  "/public/media/earth/desktop/Без названия_133.webp",
  "/public/media/earth/desktop/Без названия_134.webp",
  "/public/media/earth/desktop/Без названия_135.webp",
  "/public/media/earth/desktop/Без названия_136.webp",
  "/public/media/earth/desktop/Без названия_137.webp",
  "/public/media/earth/desktop/Без названия_138.webp",
  "/public/media/earth/desktop/Без названия_139.webp",
  "/public/media/earth/desktop/Без названия_140.webp",
  "/public/media/earth/desktop/Без названия_141.webp",
  "/public/media/earth/desktop/Без названия_142.webp",
  "/public/media/earth/desktop/Без названия_143.webp",
  "/public/media/earth/desktop/Без названия_144.webp",
  "/public/media/earth/desktop/Без названия_145.webp",
  "/public/media/earth/desktop/Без названия_146.webp",
  "/public/media/earth/desktop/Без названия_147.webp",
  "/public/media/earth/desktop/Без названия_148.webp",
  "/public/media/earth/desktop/Без названия_149.webp",
  "/public/media/earth/desktop/Без названия_150.webp",
  "/public/media/earth/desktop/Без названия_151.webp",
  "/public/media/earth/desktop/Без названия_152.webp",
  "/public/media/earth/desktop/Без названия_153.webp",
  "/public/media/earth/desktop/Без названия_154.webp",
  "/public/media/earth/desktop/Без названия_155.webp",
  "/public/media/earth/desktop/Без названия_156.webp",
  "/public/media/earth/desktop/Без названия_157.webp",
  "/public/media/earth/desktop/Без названия_158.webp",
  "/public/media/earth/desktop/Без названия_159.webp",
  "/public/media/earth/desktop/Без названия_160.webp",
  "/public/media/earth/desktop/Без названия_161.webp",
  "/public/media/earth/desktop/Без названия_162.webp",
  "/public/media/earth/desktop/Без названия_163.webp",
  "/public/media/earth/desktop/Без названия_164.webp",
  "/public/media/earth/desktop/Без названия_165.webp",
  "/public/media/earth/desktop/Без названия_166.webp",
  "/public/media/earth/desktop/Без названия_167.webp",
  "/public/media/earth/desktop/Без названия_168.webp",
  "/public/media/earth/desktop/Без названия_169.webp",
  "/public/media/earth/desktop/Без названия_170.webp",
  "/public/media/earth/desktop/Без названия_171.webp",
  "/public/media/earth/desktop/Без названия_172.webp",
  "/public/media/earth/desktop/Без названия_173.webp",
  "/public/media/earth/desktop/Без названия_174.webp",
  "/public/media/earth/desktop/Без названия_175.webp",
  "/public/media/earth/desktop/Без названия_176.webp",
  "/public/media/earth/desktop/Без названия_177.webp",
  "/public/media/earth/desktop/Без названия_178.webp",
  "/public/media/earth/desktop/Без названия_179.webp",
  "/public/media/earth/desktop/Без названия_180.webp",
  "/public/media/earth/desktop/Без названия_181.webp",
  "/public/media/earth/desktop/Без названия_182.webp",
  "/public/media/earth/desktop/Без названия_183.webp",
  "/public/media/earth/desktop/Без названия_184.webp",
  "/public/media/earth/desktop/Без названия_185.webp",
  "/public/media/earth/desktop/Без названия_186.webp",
  "/public/media/earth/desktop/Без названия_187.webp",
  "/public/media/earth/desktop/Без названия_188.webp",
  "/public/media/earth/desktop/Без названия_189.webp",
  "/public/media/earth/desktop/Без названия_190.webp",
  "/public/media/earth/desktop/Без названия_191.webp",
  "/public/media/earth/desktop/Без названия_192.webp",
  "/public/media/earth/desktop/Без названия_193.webp",
  "/public/media/earth/desktop/Без названия_194.webp",
  "/public/media/earth/desktop/Без названия_195.webp",
  "/public/media/earth/desktop/Без названия_196.webp",
  "/public/media/earth/desktop/Без названия_197.webp",
  "/public/media/earth/desktop/Без названия_198.webp",
  "/public/media/earth/desktop/Без названия_199.webp",
  "/public/media/earth/desktop/Без названия_200.webp",
  "/public/media/earth/desktop/Без названия_201.webp",
  "/public/media/earth/desktop/Без названия_202.webp",
  "/public/media/earth/desktop/Без названия_203.webp",
  "/public/media/earth/desktop/Без названия_204.webp",
  "/public/media/earth/desktop/Без названия_205.webp",
  "/public/media/earth/desktop/Без названия_206.webp",
  "/public/media/earth/desktop/Без названия_207.webp",
  "/public/media/earth/desktop/Без названия_208.webp",
  "/public/media/earth/desktop/Без названия_209.webp",
  "/public/media/earth/desktop/Без названия_210.webp",
  "/public/media/earth/desktop/Без названия_211.webp",
  "/public/media/earth/desktop/Без названия_212.webp",
  "/public/media/earth/desktop/Без названия_213.webp",
  "/public/media/earth/desktop/Без названия_214.webp",
  "/public/media/earth/desktop/Без названия_215.webp",
  "/public/media/earth/desktop/Без названия_216.webp",
  "/public/media/earth/desktop/Без названия_217.webp",
  "/public/media/earth/desktop/Без названия_218.webp",
  "/public/media/earth/desktop/Без названия_219.webp",
  "/public/media/earth/desktop/Без названия_220.webp",
  "/public/media/earth/desktop/Без названия_221.webp",
  "/public/media/earth/desktop/Без названия_222.webp",
  "/public/media/earth/desktop/Без названия_223.webp",
  "/public/media/earth/desktop/Без названия_224.webp",
  "/public/media/earth/desktop/Без названия_225.webp",
  "/public/media/earth/desktop/Без названия_226.webp",
  "/public/media/earth/desktop/Без названия_227.webp",
  "/public/media/earth/desktop/Без названия_228.webp",
  "/public/media/earth/desktop/Без названия_229.webp",
  "/public/media/earth/desktop/Без названия_230.webp",
  "/public/media/earth/desktop/Без названия_231.webp",
  "/public/media/earth/desktop/Без названия_232.webp",
  "/public/media/earth/desktop/Без названия_233.webp",
  "/public/media/earth/desktop/Без названия_234.webp",
  "/public/media/earth/desktop/Без названия_235.webp",
  "/public/media/earth/desktop/Без названия_236.webp",
  "/public/media/earth/desktop/Без названия_237.webp",
  "/public/media/earth/desktop/Без названия_238.webp",
  "/public/media/earth/desktop/Без названия_239.webp",
  "/public/media/earth/desktop/Без названия_240.webp"
];
export const earthMobileFrames = [
  "/public/media/earth/mobile/Без названия_000.webp",
  "/public/media/earth/mobile/Без названия_002.webp",
  "/public/media/earth/mobile/Без названия_004.webp",
  "/public/media/earth/mobile/Без названия_006.webp",
  "/public/media/earth/mobile/Без названия_008.webp",
  "/public/media/earth/mobile/Без названия_010.webp",
  "/public/media/earth/mobile/Без названия_012.webp",
  "/public/media/earth/mobile/Без названия_014.webp",
  "/public/media/earth/mobile/Без названия_016.webp",
  "/public/media/earth/mobile/Без названия_018.webp",
  "/public/media/earth/mobile/Без названия_020.webp",
  "/public/media/earth/mobile/Без названия_022.webp",
  "/public/media/earth/mobile/Без названия_024.webp",
  "/public/media/earth/mobile/Без названия_026.webp",
  "/public/media/earth/mobile/Без названия_028.webp",
  "/public/media/earth/mobile/Без названия_030.webp",
  "/public/media/earth/mobile/Без названия_032.webp",
  "/public/media/earth/mobile/Без названия_034.webp",
  "/public/media/earth/mobile/Без названия_036.webp",
  "/public/media/earth/mobile/Без названия_038.webp",
  "/public/media/earth/mobile/Без названия_040.webp",
  "/public/media/earth/mobile/Без названия_042.webp",
  "/public/media/earth/mobile/Без названия_044.webp",
  "/public/media/earth/mobile/Без названия_046.webp",
  "/public/media/earth/mobile/Без названия_048.webp",
  "/public/media/earth/mobile/Без названия_050.webp",
  "/public/media/earth/mobile/Без названия_052.webp",
  "/public/media/earth/mobile/Без названия_054.webp",
  "/public/media/earth/mobile/Без названия_056.webp",
  "/public/media/earth/mobile/Без названия_058.webp",
  "/public/media/earth/mobile/Без названия_060.webp",
  "/public/media/earth/mobile/Без названия_062.webp",
  "/public/media/earth/mobile/Без названия_064.webp",
  "/public/media/earth/mobile/Без названия_066.webp",
  "/public/media/earth/mobile/Без названия_068.webp",
  "/public/media/earth/mobile/Без названия_070.webp",
  "/public/media/earth/mobile/Без названия_072.webp",
  "/public/media/earth/mobile/Без названия_074.webp",
  "/public/media/earth/mobile/Без названия_076.webp",
  "/public/media/earth/mobile/Без названия_078.webp",
  "/public/media/earth/mobile/Без названия_080.webp",
  "/public/media/earth/mobile/Без названия_082.webp",
  "/public/media/earth/mobile/Без названия_084.webp",
  "/public/media/earth/mobile/Без названия_086.webp",
  "/public/media/earth/mobile/Без названия_088.webp",
  "/public/media/earth/mobile/Без названия_090.webp",
  "/public/media/earth/mobile/Без названия_092.webp",
  "/public/media/earth/mobile/Без названия_094.webp",
  "/public/media/earth/mobile/Без названия_096.webp",
  "/public/media/earth/mobile/Без названия_098.webp",
  "/public/media/earth/mobile/Без названия_100.webp",
  "/public/media/earth/mobile/Без названия_102.webp",
  "/public/media/earth/mobile/Без названия_104.webp",
  "/public/media/earth/mobile/Без названия_106.webp",
  "/public/media/earth/mobile/Без названия_108.webp",
  "/public/media/earth/mobile/Без названия_110.webp",
  "/public/media/earth/mobile/Без названия_112.webp",
  "/public/media/earth/mobile/Без названия_114.webp",
  "/public/media/earth/mobile/Без названия_116.webp",
  "/public/media/earth/mobile/Без названия_118.webp",
  "/public/media/earth/mobile/Без названия_120.webp",
  "/public/media/earth/mobile/Без названия_122.webp",
  "/public/media/earth/mobile/Без названия_124.webp",
  "/public/media/earth/mobile/Без названия_126.webp",
  "/public/media/earth/mobile/Без названия_128.webp",
  "/public/media/earth/mobile/Без названия_130.webp",
  "/public/media/earth/mobile/Без названия_132.webp",
  "/public/media/earth/mobile/Без названия_134.webp",
  "/public/media/earth/mobile/Без названия_136.webp",
  "/public/media/earth/mobile/Без названия_138.webp",
  "/public/media/earth/mobile/Без названия_140.webp",
  "/public/media/earth/mobile/Без названия_142.webp",
  "/public/media/earth/mobile/Без названия_144.webp",
  "/public/media/earth/mobile/Без названия_146.webp",
  "/public/media/earth/mobile/Без названия_148.webp",
  "/public/media/earth/mobile/Без названия_150.webp",
  "/public/media/earth/mobile/Без названия_152.webp",
  "/public/media/earth/mobile/Без названия_154.webp",
  "/public/media/earth/mobile/Без названия_156.webp",
  "/public/media/earth/mobile/Без названия_158.webp",
  "/public/media/earth/mobile/Без названия_160.webp",
  "/public/media/earth/mobile/Без названия_162.webp",
  "/public/media/earth/mobile/Без названия_164.webp",
  "/public/media/earth/mobile/Без названия_166.webp",
  "/public/media/earth/mobile/Без названия_168.webp",
  "/public/media/earth/mobile/Без названия_170.webp",
  "/public/media/earth/mobile/Без названия_172.webp",
  "/public/media/earth/mobile/Без названия_174.webp",
  "/public/media/earth/mobile/Без названия_176.webp",
  "/public/media/earth/mobile/Без названия_178.webp",
  "/public/media/earth/mobile/Без названия_180.webp",
  "/public/media/earth/mobile/Без названия_182.webp",
  "/public/media/earth/mobile/Без названия_184.webp",
  "/public/media/earth/mobile/Без названия_186.webp",
  "/public/media/earth/mobile/Без названия_188.webp",
  "/public/media/earth/mobile/Без названия_190.webp",
  "/public/media/earth/mobile/Без названия_192.webp",
  "/public/media/earth/mobile/Без названия_194.webp",
  "/public/media/earth/mobile/Без названия_196.webp",
  "/public/media/earth/mobile/Без названия_198.webp",
  "/public/media/earth/mobile/Без названия_200.webp",
  "/public/media/earth/mobile/Без названия_202.webp",
  "/public/media/earth/mobile/Без названия_204.webp",
  "/public/media/earth/mobile/Без названия_206.webp",
  "/public/media/earth/mobile/Без названия_208.webp",
  "/public/media/earth/mobile/Без названия_210.webp",
  "/public/media/earth/mobile/Без названия_212.webp",
  "/public/media/earth/mobile/Без названия_214.webp",
  "/public/media/earth/mobile/Без названия_216.webp",
  "/public/media/earth/mobile/Без названия_218.webp",
  "/public/media/earth/mobile/Без названия_220.webp",
  "/public/media/earth/mobile/Без названия_222.webp",
  "/public/media/earth/mobile/Без названия_224.webp",
  "/public/media/earth/mobile/Без названия_226.webp",
  "/public/media/earth/mobile/Без названия_228.webp",
  "/public/media/earth/mobile/Без названия_230.webp",
  "/public/media/earth/mobile/Без названия_232.webp",
  "/public/media/earth/mobile/Без названия_234.webp",
  "/public/media/earth/mobile/Без названия_236.webp",
  "/public/media/earth/mobile/Без названия_238.webp",
  "/public/media/earth/mobile/Без названия_240.webp"
];
export const holdingDesktopFrames = [
  "/public/media/holding/desktop/0629 (1)_000001.webp",
  "/public/media/holding/desktop/0629 (1)_000002.webp",
  "/public/media/holding/desktop/0629 (1)_000003.webp",
  "/public/media/holding/desktop/0629 (1)_000004.webp",
  "/public/media/holding/desktop/0629 (1)_000005.webp",
  "/public/media/holding/desktop/0629 (1)_000006.webp",
  "/public/media/holding/desktop/0629 (1)_000007.webp",
  "/public/media/holding/desktop/0629 (1)_000008.webp",
  "/public/media/holding/desktop/0629 (1)_000009.webp",
  "/public/media/holding/desktop/0629 (1)_000010.webp",
  "/public/media/holding/desktop/0629 (1)_000011.webp",
  "/public/media/holding/desktop/0629 (1)_000012.webp",
  "/public/media/holding/desktop/0629 (1)_000013.webp",
  "/public/media/holding/desktop/0629 (1)_000014.webp",
  "/public/media/holding/desktop/0629 (1)_000015.webp",
  "/public/media/holding/desktop/0629 (1)_000016.webp",
  "/public/media/holding/desktop/0629 (1)_000017.webp",
  "/public/media/holding/desktop/0629 (1)_000018.webp",
  "/public/media/holding/desktop/0629 (1)_000019.webp",
  "/public/media/holding/desktop/0629 (1)_000020.webp",
  "/public/media/holding/desktop/0629 (1)_000021.webp",
  "/public/media/holding/desktop/0629 (1)_000022.webp",
  "/public/media/holding/desktop/0629 (1)_000023.webp",
  "/public/media/holding/desktop/0629 (1)_000024.webp",
  "/public/media/holding/desktop/0629 (1)_000025.webp",
  "/public/media/holding/desktop/0629 (1)_000026.webp",
  "/public/media/holding/desktop/0629 (1)_000027.webp",
  "/public/media/holding/desktop/0629 (1)_000028.webp",
  "/public/media/holding/desktop/0629 (1)_000029.webp",
  "/public/media/holding/desktop/0629 (1)_000030.webp",
  "/public/media/holding/desktop/0629 (1)_000031.webp",
  "/public/media/holding/desktop/0629 (1)_000032.webp",
  "/public/media/holding/desktop/0629 (1)_000033.webp",
  "/public/media/holding/desktop/0629 (1)_000034.webp",
  "/public/media/holding/desktop/0629 (1)_000035.webp",
  "/public/media/holding/desktop/0629 (1)_000036.webp",
  "/public/media/holding/desktop/0629 (1)_000039.webp",
  "/public/media/holding/desktop/0629 (1)_000040.webp",
  "/public/media/holding/desktop/0629 (1)_000041.webp",
  "/public/media/holding/desktop/0629 (1)_000042.webp",
  "/public/media/holding/desktop/0629 (1)_000043.webp",
  "/public/media/holding/desktop/0629 (1)_000044.webp",
  "/public/media/holding/desktop/0629 (1)_000045.webp",
  "/public/media/holding/desktop/0629 (1)_000046.webp",
  "/public/media/holding/desktop/0629 (1)_000047.webp",
  "/public/media/holding/desktop/0629 (1)_000048.webp",
  "/public/media/holding/desktop/0629 (1)_000049.webp",
  "/public/media/holding/desktop/0629 (1)_000050.webp",
  "/public/media/holding/desktop/0629 (1)_000051.webp",
  "/public/media/holding/desktop/0629 (1)_000052.webp",
  "/public/media/holding/desktop/0629 (1)_000053.webp",
  "/public/media/holding/desktop/0629 (1)_000054.webp",
  "/public/media/holding/desktop/0629 (1)_000055.webp",
  "/public/media/holding/desktop/0629 (1)_000056.webp",
  "/public/media/holding/desktop/0629 (1)_000057.webp",
  "/public/media/holding/desktop/0629 (1)_000058.webp",
  "/public/media/holding/desktop/0629 (1)_000059.webp",
  "/public/media/holding/desktop/0629 (1)_000060.webp",
  "/public/media/holding/desktop/0629 (1)_000061.webp",
  "/public/media/holding/desktop/0629 (1)_000062.webp",
  "/public/media/holding/desktop/0629 (1)_000063.webp",
  "/public/media/holding/desktop/0629 (1)_000064.webp",
  "/public/media/holding/desktop/0629 (1)_000065.webp",
  "/public/media/holding/desktop/0629 (1)_000066.webp",
  "/public/media/holding/desktop/0629 (1)_000067.webp",
  "/public/media/holding/desktop/0629 (1)_000068.webp",
  "/public/media/holding/desktop/0629 (1)_000069.webp",
  "/public/media/holding/desktop/0629 (1)_000070.webp",
  "/public/media/holding/desktop/0629 (1)_000071.webp",
  "/public/media/holding/desktop/0629 (1)_000072.webp",
  "/public/media/holding/desktop/0629 (1)_000073.webp",
  "/public/media/holding/desktop/0629 (1)_000074.webp",
  "/public/media/holding/desktop/0629 (1)_000075.webp",
  "/public/media/holding/desktop/0629 (1)_000076.webp",
  "/public/media/holding/desktop/0629 (1)_000077.webp",
  "/public/media/holding/desktop/0629 (1)_000078.webp",
  "/public/media/holding/desktop/0629 (1)_000079.webp",
  "/public/media/holding/desktop/0629 (1)_000080.webp",
  "/public/media/holding/desktop/0629 (1)_000081.webp",
  "/public/media/holding/desktop/0629 (1)_000082.webp",
  "/public/media/holding/desktop/0629 (1)_000083.webp",
  "/public/media/holding/desktop/0629 (1)_000084.webp",
  "/public/media/holding/desktop/0629 (1)_000085.webp",
  "/public/media/holding/desktop/0629 (1)_000086.webp",
  "/public/media/holding/desktop/0629 (1)_000087.webp",
  "/public/media/holding/desktop/0629 (1)_000088.webp",
  "/public/media/holding/desktop/0629 (1)_000089.webp",
  "/public/media/holding/desktop/0629 (1)_000090.webp",
  "/public/media/holding/desktop/0629 (1)_000091.webp",
  "/public/media/holding/desktop/0629 (1)_000092.webp",
  "/public/media/holding/desktop/0629 (1)_000093.webp",
  "/public/media/holding/desktop/0629 (1)_000094.webp",
  "/public/media/holding/desktop/0629 (1)_000095.webp",
  "/public/media/holding/desktop/0629 (1)_000096.webp",
  "/public/media/holding/desktop/0629 (1)_000097.webp",
  "/public/media/holding/desktop/0629 (1)_000098.webp",
  "/public/media/holding/desktop/0629 (1)_000099.webp",
  "/public/media/holding/desktop/0629 (1)_000100.webp",
  "/public/media/holding/desktop/0629 (1)_000101.webp",
  "/public/media/holding/desktop/0629 (1)_000102.webp",
  "/public/media/holding/desktop/0629 (1)_000103.webp",
  "/public/media/holding/desktop/0629 (1)_000104.webp",
  "/public/media/holding/desktop/0629 (1)_000105.webp",
  "/public/media/holding/desktop/0629 (1)_000106.webp",
  "/public/media/holding/desktop/0629 (1)_000107.webp",
  "/public/media/holding/desktop/0629 (1)_000108.webp",
  "/public/media/holding/desktop/0629 (1)_000109.webp",
  "/public/media/holding/desktop/0629 (1)_000110.webp",
  "/public/media/holding/desktop/0629 (1)_000111.webp",
  "/public/media/holding/desktop/0629 (1)_000112.webp",
  "/public/media/holding/desktop/0629 (1)_000113.webp",
  "/public/media/holding/desktop/0629 (1)_000114.webp",
  "/public/media/holding/desktop/0629 (1)_000115.webp",
  "/public/media/holding/desktop/0629 (1)_000116.webp",
  "/public/media/holding/desktop/0629 (1)_000117.webp",
  "/public/media/holding/desktop/0629 (1)_000118.webp",
  "/public/media/holding/desktop/0629 (1)_000119.webp",
  "/public/media/holding/desktop/0629 (1)_000120.webp",
  "/public/media/holding/desktop/0629 (1)_000121.webp",
  "/public/media/holding/desktop/0629 (1)_000122.webp",
  "/public/media/holding/desktop/0629 (1)_000123.webp",
  "/public/media/holding/desktop/0629 (1)_000124.webp",
  "/public/media/holding/desktop/0629 (1)_000125.webp",
  "/public/media/holding/desktop/0629 (1)_000126.webp",
  "/public/media/holding/desktop/0629 (1)_000127.webp",
  "/public/media/holding/desktop/0629 (1)_000128.webp",
  "/public/media/holding/desktop/0629 (1)_000129.webp",
  "/public/media/holding/desktop/0629 (1)_000130.webp",
  "/public/media/holding/desktop/0629 (1)_000131.webp",
  "/public/media/holding/desktop/0629 (1)_000132.webp",
  "/public/media/holding/desktop/0629 (1)_000133.webp",
  "/public/media/holding/desktop/0629 (1)_000134.webp",
  "/public/media/holding/desktop/0629 (1)_000135.webp",
  "/public/media/holding/desktop/0629 (1)_000136.webp",
  "/public/media/holding/desktop/0629 (1)_000137.webp",
  "/public/media/holding/desktop/0629 (1)_000138.webp",
  "/public/media/holding/desktop/0629 (1)_000139.webp",
  "/public/media/holding/desktop/0629 (1)_000140.webp",
  "/public/media/holding/desktop/0629 (1)_000141.webp",
  "/public/media/holding/desktop/0629 (1)_000142.webp",
  "/public/media/holding/desktop/0629 (1)_000143.webp",
  "/public/media/holding/desktop/0629 (1)_000144.webp",
  "/public/media/holding/desktop/0629 (1)_000145.webp",
  "/public/media/holding/desktop/0629 (1)_000146.webp",
  "/public/media/holding/desktop/0629 (1)_000147.webp",
  "/public/media/holding/desktop/0629 (1)_000148.webp",
  "/public/media/holding/desktop/0629 (1)_000149.webp",
  "/public/media/holding/desktop/0629 (1)_000150.webp",
  "/public/media/holding/desktop/0629 (1)_000151.webp",
  "/public/media/holding/desktop/0629 (1)_000152.webp",
  "/public/media/holding/desktop/0629 (1)_000153.webp",
  "/public/media/holding/desktop/0629 (1)_000154.webp",
  "/public/media/holding/desktop/0629 (1)_000155.webp",
  "/public/media/holding/desktop/0629 (1)_000156.webp",
  "/public/media/holding/desktop/0629 (1)_000157.webp",
  "/public/media/holding/desktop/0629 (1)_000158.webp",
  "/public/media/holding/desktop/0629 (1)_000159.webp",
  "/public/media/holding/desktop/0629 (1)_000160.webp",
  "/public/media/holding/desktop/0629 (1)_000161.webp",
  "/public/media/holding/desktop/0629 (1)_000162.webp",
  "/public/media/holding/desktop/0629 (1)_000163.webp",
  "/public/media/holding/desktop/0629 (1)_000164.webp",
  "/public/media/holding/desktop/0629 (1)_000165.webp",
  "/public/media/holding/desktop/0629 (1)_000166.webp",
  "/public/media/holding/desktop/0629 (1)_000167.webp",
  "/public/media/holding/desktop/0629 (1)_000168.webp",
  "/public/media/holding/desktop/0629 (1)_000169.webp",
  "/public/media/holding/desktop/0629 (1)_000170.webp",
  "/public/media/holding/desktop/0629 (1)_000171.webp",
  "/public/media/holding/desktop/0629 (1)_000172.webp",
  "/public/media/holding/desktop/0629 (1)_000173.webp",
  "/public/media/holding/desktop/0629 (1)_000174.webp",
  "/public/media/holding/desktop/0629 (1)_000175.webp",
  "/public/media/holding/desktop/0629 (1)_000176.webp",
  "/public/media/holding/desktop/0629 (1)_000177.webp",
  "/public/media/holding/desktop/0629 (1)_000178.webp",
  "/public/media/holding/desktop/0629 (1)_000179.webp",
  "/public/media/holding/desktop/0629 (1)_000180.webp",
  "/public/media/holding/desktop/0629 (1)_000181.webp",
  "/public/media/holding/desktop/0629 (1)_000182.webp",
  "/public/media/holding/desktop/0629 (1)_000183.webp",
  "/public/media/holding/desktop/0629 (1)_000184.webp",
  "/public/media/holding/desktop/0629 (1)_000185.webp",
  "/public/media/holding/desktop/0629 (1)_000186.webp",
  "/public/media/holding/desktop/0629 (1)_000187.webp",
  "/public/media/holding/desktop/0629 (1)_000188.webp",
  "/public/media/holding/desktop/0629 (1)_000189.webp",
  "/public/media/holding/desktop/0629 (1)_000190.webp",
  "/public/media/holding/desktop/0629 (1)_000191.webp",
  "/public/media/holding/desktop/0629 (1)_000192.webp",
  "/public/media/holding/desktop/0629 (1)_000193.webp",
  "/public/media/holding/desktop/0629 (1)_000194.webp",
  "/public/media/holding/desktop/0629 (1)_000195.webp",
  "/public/media/holding/desktop/0629 (1)_000196.webp",
  "/public/media/holding/desktop/0629 (1)_000197.webp",
  "/public/media/holding/desktop/0629 (1)_000198.webp",
  "/public/media/holding/desktop/0629 (1)_000199.webp",
  "/public/media/holding/desktop/0629 (1)_000200.webp",
  "/public/media/holding/desktop/0629 (1)_000201.webp",
  "/public/media/holding/desktop/0629 (1)_000202.webp",
  "/public/media/holding/desktop/0629 (1)_000203.webp",
  "/public/media/holding/desktop/0629 (1)_000204.webp",
  "/public/media/holding/desktop/0629 (1)_000205.webp",
  "/public/media/holding/desktop/0629 (1)_000206.webp",
  "/public/media/holding/desktop/0629 (1)_000207.webp",
  "/public/media/holding/desktop/0629 (1)_000208.webp",
  "/public/media/holding/desktop/0629 (1)_000209.webp",
  "/public/media/holding/desktop/0629 (1)_000210.webp",
  "/public/media/holding/desktop/0629 (1)_000211.webp",
  "/public/media/holding/desktop/0629 (1)_000212.webp",
  "/public/media/holding/desktop/0629 (1)_000213.webp",
  "/public/media/holding/desktop/0629 (1)_000214.webp",
  "/public/media/holding/desktop/0629 (1)_000215.webp",
  "/public/media/holding/desktop/0629 (1)_000216.webp",
  "/public/media/holding/desktop/0629 (1)_000217.webp",
  "/public/media/holding/desktop/0629 (1)_000218.webp",
  "/public/media/holding/desktop/0629 (1)_000219.webp",
  "/public/media/holding/desktop/0629 (1)_000220.webp",
  "/public/media/holding/desktop/0629 (1)_000221.webp",
  "/public/media/holding/desktop/0629 (1)_000222.webp",
  "/public/media/holding/desktop/0629 (1)_000223.webp",
  "/public/media/holding/desktop/0629 (1)_000224.webp",
  "/public/media/holding/desktop/0629 (1)_000225.webp",
  "/public/media/holding/desktop/0629 (1)_000226.webp",
  "/public/media/holding/desktop/0629 (1)_000227.webp",
  "/public/media/holding/desktop/0629 (1)_000228.webp",
  "/public/media/holding/desktop/0629 (1)_000229.webp",
  "/public/media/holding/desktop/0629 (1)_000230.webp",
  "/public/media/holding/desktop/0629 (1)_000231.webp",
  "/public/media/holding/desktop/0629 (1)_000232.webp",
  "/public/media/holding/desktop/0629 (1)_000233.webp",
  "/public/media/holding/desktop/0629 (1)_000234.webp",
  "/public/media/holding/desktop/0629 (1)_000235.webp",
  "/public/media/holding/desktop/0629 (1)_000236.webp",
  "/public/media/holding/desktop/0629 (1)_000237.webp",
  "/public/media/holding/desktop/0629 (1)_000238.webp",
  "/public/media/holding/desktop/0629 (1)_000239.webp",
  "/public/media/holding/desktop/0629 (1)_000255.webp",
  "/public/media/holding/desktop/0629 (1)_000256.webp",
  "/public/media/holding/desktop/0629 (1)_000257.webp",
  "/public/media/holding/desktop/0629 (1)_000258.webp",
  "/public/media/holding/desktop/0629 (1)_000259.webp",
  "/public/media/holding/desktop/0629 (1)_000260.webp",
  "/public/media/holding/desktop/0629 (1)_000261.webp",
  "/public/media/holding/desktop/0629 (1)_000262.webp",
  "/public/media/holding/desktop/0629 (1)_000263.webp",
  "/public/media/holding/desktop/0629 (1)_000264.webp",
  "/public/media/holding/desktop/0629 (1)_000265.webp",
  "/public/media/holding/desktop/0629 (1)_000266.webp",
  "/public/media/holding/desktop/0629 (1)_000267.webp",
  "/public/media/holding/desktop/0629 (1)_000268.webp",
  "/public/media/holding/desktop/0629 (1)_000269.webp",
  "/public/media/holding/desktop/0629 (1)_000270.webp",
  "/public/media/holding/desktop/0629 (1)_000271.webp",
  "/public/media/holding/desktop/0629 (1)_000272.webp",
  "/public/media/holding/desktop/0629 (1)_000273.webp",
  "/public/media/holding/desktop/0629 (1)_000274.webp",
  "/public/media/holding/desktop/0629 (1)_000275.webp",
  "/public/media/holding/desktop/0629 (1)_000276.webp",
  "/public/media/holding/desktop/0629 (1)_000277.webp",
  "/public/media/holding/desktop/0629 (1)_000278.webp",
  "/public/media/holding/desktop/0629 (1)_000279.webp",
  "/public/media/holding/desktop/0629 (1)_000280.webp",
  "/public/media/holding/desktop/0629 (1)_000281.webp",
  "/public/media/holding/desktop/0629 (1)_000282.webp",
  "/public/media/holding/desktop/0629 (1)_000283.webp",
  "/public/media/holding/desktop/0629 (1)_000284.webp",
  "/public/media/holding/desktop/0629 (1)_000285.webp",
  "/public/media/holding/desktop/0629 (1)_000286.webp",
  "/public/media/holding/desktop/0629 (1)_000287.webp",
  "/public/media/holding/desktop/0629 (1)_000288.webp",
  "/public/media/holding/desktop/0629 (1)_000289.webp",
  "/public/media/holding/desktop/0629 (1)_000290.webp",
  "/public/media/holding/desktop/0629 (1)_000291.webp",
  "/public/media/holding/desktop/0629 (1)_000292.webp",
  "/public/media/holding/desktop/0629 (1)_000293.webp",
  "/public/media/holding/desktop/0629 (1)_000294.webp",
  "/public/media/holding/desktop/0629 (1)_000295.webp",
  "/public/media/holding/desktop/0629 (1)_000296.webp",
  "/public/media/holding/desktop/0629 (1)_000297.webp",
  "/public/media/holding/desktop/0629 (1)_000298.webp",
  "/public/media/holding/desktop/0629 (1)_000299.webp",
  "/public/media/holding/desktop/0629 (1)_000300.webp",
  "/public/media/holding/desktop/0629 (1)_000301.webp",
  "/public/media/holding/desktop/0629 (1)_000302.webp",
  "/public/media/holding/desktop/0629 (1)_000303.webp",
  "/public/media/holding/desktop/0629 (1)_000304.webp",
  "/public/media/holding/desktop/0629 (1)_000305.webp",
  "/public/media/holding/desktop/0629 (1)_000306.webp",
  "/public/media/holding/desktop/0629 (1)_000307.webp",
  "/public/media/holding/desktop/0629 (1)_000308.webp",
  "/public/media/holding/desktop/0629 (1)_000309.webp",
  "/public/media/holding/desktop/0629 (1)_000310.webp",
  "/public/media/holding/desktop/0629 (1)_000311.webp",
  "/public/media/holding/desktop/0629 (1)_000312.webp",
  "/public/media/holding/desktop/0629 (1)_000313.webp",
  "/public/media/holding/desktop/0629 (1)_000314.webp",
  "/public/media/holding/desktop/0629 (1)_000315.webp",
  "/public/media/holding/desktop/0629 (1)_000316.webp",
  "/public/media/holding/desktop/0629 (1)_000317.webp",
  "/public/media/holding/desktop/0629 (1)_000318.webp",
  "/public/media/holding/desktop/0629 (1)_000319.webp",
  "/public/media/holding/desktop/0629 (1)_000320.webp",
  "/public/media/holding/desktop/0629 (1)_000321.webp",
  "/public/media/holding/desktop/0629 (1)_000322.webp",
  "/public/media/holding/desktop/0629 (1)_000323.webp",
  "/public/media/holding/desktop/0629 (1)_000324.webp",
  "/public/media/holding/desktop/0629 (1)_000325.webp",
  "/public/media/holding/desktop/0629 (1)_000326.webp",
  "/public/media/holding/desktop/0629 (1)_000327.webp",
  "/public/media/holding/desktop/0629 (1)_000328.webp",
  "/public/media/holding/desktop/0629 (1)_000329.webp",
  "/public/media/holding/desktop/0629 (1)_000330.webp",
  "/public/media/holding/desktop/0629 (1)_000331.webp",
  "/public/media/holding/desktop/0629 (1)_000332.webp",
  "/public/media/holding/desktop/0629 (1)_000333.webp",
  "/public/media/holding/desktop/0629 (1)_000334.webp",
  "/public/media/holding/desktop/0629 (1)_000335.webp",
  "/public/media/holding/desktop/0629 (1)_000336.webp",
  "/public/media/holding/desktop/0629 (1)_000337.webp",
  "/public/media/holding/desktop/0629 (1)_000338.webp",
  "/public/media/holding/desktop/0629 (1)_000339.webp",
  "/public/media/holding/desktop/0629 (1)_000340.webp",
  "/public/media/holding/desktop/0629 (1)_000341.webp",
  "/public/media/holding/desktop/0629 (1)_000342.webp",
  "/public/media/holding/desktop/0629 (1)_000343.webp",
  "/public/media/holding/desktop/0629 (1)_000344.webp",
  "/public/media/holding/desktop/0629 (1)_000345.webp",
  "/public/media/holding/desktop/0629 (1)_000346.webp",
  "/public/media/holding/desktop/0629 (1)_000347.webp",
  "/public/media/holding/desktop/0629 (1)_000348.webp",
  "/public/media/holding/desktop/0629 (1)_000349.webp",
  "/public/media/holding/desktop/0629 (1)_000350.webp",
  "/public/media/holding/desktop/0629 (1)_000351.webp",
  "/public/media/holding/desktop/0629 (1)_000352.webp",
  "/public/media/holding/desktop/0629 (1)_000353.webp",
  "/public/media/holding/desktop/0629 (1)_000354.webp",
  "/public/media/holding/desktop/0629 (1)_000355.webp",
  "/public/media/holding/desktop/0629 (1)_000356.webp",
  "/public/media/holding/desktop/0629 (1)_000357.webp",
  "/public/media/holding/desktop/0629 (1)_000358.webp",
  "/public/media/holding/desktop/0629 (1)_000359.webp",
  "/public/media/holding/desktop/0629 (1)_000360.webp",
  "/public/media/holding/desktop/0629 (1)_000361.webp",
  "/public/media/holding/desktop/0629 (1)_000362.webp",
  "/public/media/holding/desktop/0629 (1)_000363.webp",
  "/public/media/holding/desktop/0629 (1)_000364.webp",
  "/public/media/holding/desktop/0629 (1)_000365.webp",
  "/public/media/holding/desktop/0629 (1)_000366.webp",
  "/public/media/holding/desktop/0629 (1)_000367.webp",
  "/public/media/holding/desktop/0629 (1)_000368.webp",
  "/public/media/holding/desktop/0629 (1)_000369.webp",
  "/public/media/holding/desktop/0629 (1)_000370.webp",
  "/public/media/holding/desktop/0629 (1)_000371.webp",
  "/public/media/holding/desktop/0629 (1)_000372.webp",
  "/public/media/holding/desktop/0629 (1)_000373.webp",
  "/public/media/holding/desktop/0629 (1)_000374.webp",
  "/public/media/holding/desktop/0629 (1)_000375.webp",
  "/public/media/holding/desktop/0629 (1)_000376.webp",
  "/public/media/holding/desktop/0629 (1)_000377.webp",
  "/public/media/holding/desktop/0629 (1)_000378.webp",
  "/public/media/holding/desktop/0629 (1)_000379.webp",
  "/public/media/holding/desktop/0629 (1)_000380.webp",
  "/public/media/holding/desktop/0629 (1)_000381.webp",
  "/public/media/holding/desktop/0629 (1)_000382.webp",
  "/public/media/holding/desktop/0629 (1)_000383.webp",
  "/public/media/holding/desktop/0629 (1)_000384.webp",
  "/public/media/holding/desktop/0629 (1)_000385.webp",
  "/public/media/holding/desktop/0629 (1)_000386.webp",
  "/public/media/holding/desktop/0629 (1)_000387.webp",
  "/public/media/holding/desktop/0629 (1)_000388.webp",
  "/public/media/holding/desktop/0629 (1)_000389.webp",
  "/public/media/holding/desktop/0629 (1)_000390.webp",
  "/public/media/holding/desktop/0629 (1)_000391.webp",
  "/public/media/holding/desktop/0629 (1)_000392.webp",
  "/public/media/holding/desktop/0629 (1)_000393.webp",
  "/public/media/holding/desktop/0629 (1)_000394.webp",
  "/public/media/holding/desktop/0629 (1)_000395.webp",
  "/public/media/holding/desktop/0629 (1)_000396.webp",
  "/public/media/holding/desktop/0629 (1)_000397.webp",
  "/public/media/holding/desktop/0629 (1)_000398.webp",
  "/public/media/holding/desktop/0629 (1)_000399.webp",
  "/public/media/holding/desktop/0629 (1)_000400.webp",
  "/public/media/holding/desktop/0629 (1)_000401.webp",
  "/public/media/holding/desktop/0629 (1)_000402.webp",
  "/public/media/holding/desktop/0629 (1)_000403.webp",
  "/public/media/holding/desktop/0629 (1)_000404.webp",
  "/public/media/holding/desktop/0629 (1)_000405.webp",
  "/public/media/holding/desktop/0629 (1)_000406.webp",
  "/public/media/holding/desktop/0629 (1)_000407.webp",
  "/public/media/holding/desktop/0629 (1)_000408.webp",
  "/public/media/holding/desktop/0629 (1)_000409.webp",
  "/public/media/holding/desktop/0629 (1)_000410.webp",
  "/public/media/holding/desktop/0629 (1)_000411.webp",
  "/public/media/holding/desktop/0629 (1)_000412.webp",
  "/public/media/holding/desktop/0629 (1)_000413.webp",
  "/public/media/holding/desktop/0629 (1)_000414.webp",
  "/public/media/holding/desktop/0629 (1)_000415.webp",
  "/public/media/holding/desktop/0629 (1)_000416.webp",
  "/public/media/holding/desktop/0629 (1)_000417.webp",
  "/public/media/holding/desktop/0629 (1)_000418.webp",
  "/public/media/holding/desktop/0629 (1)_000419.webp",
  "/public/media/holding/desktop/0629 (1)_000420.webp",
  "/public/media/holding/desktop/0629 (1)_000421.webp",
  "/public/media/holding/desktop/0629 (1)_000422.webp",
  "/public/media/holding/desktop/0629 (1)_000423.webp",
  "/public/media/holding/desktop/0629 (1)_000424.webp",
  "/public/media/holding/desktop/0629 (1)_000425.webp",
  "/public/media/holding/desktop/0629 (1)_000426.webp",
  "/public/media/holding/desktop/0629 (1)_000427.webp",
  "/public/media/holding/desktop/0629 (1)_000428.webp",
  "/public/media/holding/desktop/0629 (1)_000429.webp",
  "/public/media/holding/desktop/0629 (1)_000430.webp",
  "/public/media/holding/desktop/0629 (1)_000431.webp",
  "/public/media/holding/desktop/0629 (1)_000432.webp",
  "/public/media/holding/desktop/0629 (1)_000433.webp",
  "/public/media/holding/desktop/0629 (1)_000434.webp",
  "/public/media/holding/desktop/0629 (1)_000435.webp",
  "/public/media/holding/desktop/0629 (1)_000436.webp",
  "/public/media/holding/desktop/0629 (1)_000437.webp",
  "/public/media/holding/desktop/0629 (1)_000438.webp",
  "/public/media/holding/desktop/0629 (1)_000439.webp",
  "/public/media/holding/desktop/0629 (1)_000440.webp",
  "/public/media/holding/desktop/0629 (1)_000441.webp",
  "/public/media/holding/desktop/0629 (1)_000442.webp",
  "/public/media/holding/desktop/0629 (1)_000443.webp",
  "/public/media/holding/desktop/0629 (1)_000444.webp",
  "/public/media/holding/desktop/0629 (1)_000445.webp",
  "/public/media/holding/desktop/0629 (1)_000446.webp",
  "/public/media/holding/desktop/0629 (1)_000447.webp",
  "/public/media/holding/desktop/0629 (1)_000448.webp",
  "/public/media/holding/desktop/0629 (1)_000449.webp",
  "/public/media/holding/desktop/0629 (1)_000450.webp",
  "/public/media/holding/desktop/0629 (1)_000451.webp",
  "/public/media/holding/desktop/0629 (1)_000452.webp",
  "/public/media/holding/desktop/0629 (1)_000453.webp",
  "/public/media/holding/desktop/0629 (1)_000454.webp",
  "/public/media/holding/desktop/0629 (1)_000455.webp",
  "/public/media/holding/desktop/0629 (1)_000456.webp",
  "/public/media/holding/desktop/0629 (1)_000457.webp",
  "/public/media/holding/desktop/0629 (1)_000458.webp",
  "/public/media/holding/desktop/0629 (1)_000459.webp",
  "/public/media/holding/desktop/0629 (1)_000460.webp",
  "/public/media/holding/desktop/0629 (1)_000461.webp",
  "/public/media/holding/desktop/0629 (1)_000462.webp",
  "/public/media/holding/desktop/0629 (1)_000463.webp",
  "/public/media/holding/desktop/0629 (1)_000464.webp",
  "/public/media/holding/desktop/0629 (1)_000465.webp",
  "/public/media/holding/desktop/0629 (1)_000466.webp",
  "/public/media/holding/desktop/0629 (1)_000467.webp"
];
export const holdingMobileFrames = [
  "/public/media/holding/mobile/0629 (1)_000001.webp",
  "/public/media/holding/mobile/0629 (1)_000003.webp",
  "/public/media/holding/mobile/0629 (1)_000005.webp",
  "/public/media/holding/mobile/0629 (1)_000007.webp",
  "/public/media/holding/mobile/0629 (1)_000009.webp",
  "/public/media/holding/mobile/0629 (1)_000011.webp",
  "/public/media/holding/mobile/0629 (1)_000013.webp",
  "/public/media/holding/mobile/0629 (1)_000015.webp",
  "/public/media/holding/mobile/0629 (1)_000017.webp",
  "/public/media/holding/mobile/0629 (1)_000019.webp",
  "/public/media/holding/mobile/0629 (1)_000021.webp",
  "/public/media/holding/mobile/0629 (1)_000023.webp",
  "/public/media/holding/mobile/0629 (1)_000025.webp",
  "/public/media/holding/mobile/0629 (1)_000027.webp",
  "/public/media/holding/mobile/0629 (1)_000029.webp",
  "/public/media/holding/mobile/0629 (1)_000031.webp",
  "/public/media/holding/mobile/0629 (1)_000033.webp",
  "/public/media/holding/mobile/0629 (1)_000035.webp",
  "/public/media/holding/mobile/0629 (1)_000039.webp",
  "/public/media/holding/mobile/0629 (1)_000041.webp",
  "/public/media/holding/mobile/0629 (1)_000043.webp",
  "/public/media/holding/mobile/0629 (1)_000045.webp",
  "/public/media/holding/mobile/0629 (1)_000047.webp",
  "/public/media/holding/mobile/0629 (1)_000049.webp",
  "/public/media/holding/mobile/0629 (1)_000051.webp",
  "/public/media/holding/mobile/0629 (1)_000053.webp",
  "/public/media/holding/mobile/0629 (1)_000055.webp",
  "/public/media/holding/mobile/0629 (1)_000057.webp",
  "/public/media/holding/mobile/0629 (1)_000059.webp",
  "/public/media/holding/mobile/0629 (1)_000061.webp",
  "/public/media/holding/mobile/0629 (1)_000063.webp",
  "/public/media/holding/mobile/0629 (1)_000065.webp",
  "/public/media/holding/mobile/0629 (1)_000067.webp",
  "/public/media/holding/mobile/0629 (1)_000069.webp",
  "/public/media/holding/mobile/0629 (1)_000071.webp",
  "/public/media/holding/mobile/0629 (1)_000073.webp",
  "/public/media/holding/mobile/0629 (1)_000075.webp",
  "/public/media/holding/mobile/0629 (1)_000077.webp",
  "/public/media/holding/mobile/0629 (1)_000079.webp",
  "/public/media/holding/mobile/0629 (1)_000081.webp",
  "/public/media/holding/mobile/0629 (1)_000083.webp",
  "/public/media/holding/mobile/0629 (1)_000085.webp",
  "/public/media/holding/mobile/0629 (1)_000087.webp",
  "/public/media/holding/mobile/0629 (1)_000089.webp",
  "/public/media/holding/mobile/0629 (1)_000091.webp",
  "/public/media/holding/mobile/0629 (1)_000093.webp",
  "/public/media/holding/mobile/0629 (1)_000095.webp",
  "/public/media/holding/mobile/0629 (1)_000097.webp",
  "/public/media/holding/mobile/0629 (1)_000099.webp",
  "/public/media/holding/mobile/0629 (1)_000101.webp",
  "/public/media/holding/mobile/0629 (1)_000103.webp",
  "/public/media/holding/mobile/0629 (1)_000105.webp",
  "/public/media/holding/mobile/0629 (1)_000107.webp",
  "/public/media/holding/mobile/0629 (1)_000109.webp",
  "/public/media/holding/mobile/0629 (1)_000111.webp",
  "/public/media/holding/mobile/0629 (1)_000113.webp",
  "/public/media/holding/mobile/0629 (1)_000115.webp",
  "/public/media/holding/mobile/0629 (1)_000117.webp",
  "/public/media/holding/mobile/0629 (1)_000119.webp",
  "/public/media/holding/mobile/0629 (1)_000121.webp",
  "/public/media/holding/mobile/0629 (1)_000123.webp",
  "/public/media/holding/mobile/0629 (1)_000125.webp",
  "/public/media/holding/mobile/0629 (1)_000127.webp",
  "/public/media/holding/mobile/0629 (1)_000129.webp",
  "/public/media/holding/mobile/0629 (1)_000131.webp",
  "/public/media/holding/mobile/0629 (1)_000133.webp",
  "/public/media/holding/mobile/0629 (1)_000135.webp",
  "/public/media/holding/mobile/0629 (1)_000137.webp",
  "/public/media/holding/mobile/0629 (1)_000139.webp",
  "/public/media/holding/mobile/0629 (1)_000141.webp",
  "/public/media/holding/mobile/0629 (1)_000143.webp",
  "/public/media/holding/mobile/0629 (1)_000145.webp",
  "/public/media/holding/mobile/0629 (1)_000147.webp",
  "/public/media/holding/mobile/0629 (1)_000149.webp",
  "/public/media/holding/mobile/0629 (1)_000151.webp",
  "/public/media/holding/mobile/0629 (1)_000153.webp",
  "/public/media/holding/mobile/0629 (1)_000155.webp",
  "/public/media/holding/mobile/0629 (1)_000157.webp",
  "/public/media/holding/mobile/0629 (1)_000159.webp",
  "/public/media/holding/mobile/0629 (1)_000161.webp",
  "/public/media/holding/mobile/0629 (1)_000163.webp",
  "/public/media/holding/mobile/0629 (1)_000165.webp",
  "/public/media/holding/mobile/0629 (1)_000167.webp",
  "/public/media/holding/mobile/0629 (1)_000169.webp",
  "/public/media/holding/mobile/0629 (1)_000171.webp",
  "/public/media/holding/mobile/0629 (1)_000173.webp",
  "/public/media/holding/mobile/0629 (1)_000175.webp",
  "/public/media/holding/mobile/0629 (1)_000177.webp",
  "/public/media/holding/mobile/0629 (1)_000179.webp",
  "/public/media/holding/mobile/0629 (1)_000181.webp",
  "/public/media/holding/mobile/0629 (1)_000183.webp",
  "/public/media/holding/mobile/0629 (1)_000185.webp",
  "/public/media/holding/mobile/0629 (1)_000187.webp",
  "/public/media/holding/mobile/0629 (1)_000189.webp",
  "/public/media/holding/mobile/0629 (1)_000191.webp",
  "/public/media/holding/mobile/0629 (1)_000193.webp",
  "/public/media/holding/mobile/0629 (1)_000195.webp",
  "/public/media/holding/mobile/0629 (1)_000197.webp",
  "/public/media/holding/mobile/0629 (1)_000199.webp",
  "/public/media/holding/mobile/0629 (1)_000201.webp",
  "/public/media/holding/mobile/0629 (1)_000203.webp",
  "/public/media/holding/mobile/0629 (1)_000205.webp",
  "/public/media/holding/mobile/0629 (1)_000207.webp",
  "/public/media/holding/mobile/0629 (1)_000209.webp",
  "/public/media/holding/mobile/0629 (1)_000211.webp",
  "/public/media/holding/mobile/0629 (1)_000213.webp",
  "/public/media/holding/mobile/0629 (1)_000215.webp",
  "/public/media/holding/mobile/0629 (1)_000217.webp",
  "/public/media/holding/mobile/0629 (1)_000219.webp",
  "/public/media/holding/mobile/0629 (1)_000221.webp",
  "/public/media/holding/mobile/0629 (1)_000223.webp",
  "/public/media/holding/mobile/0629 (1)_000225.webp",
  "/public/media/holding/mobile/0629 (1)_000227.webp",
  "/public/media/holding/mobile/0629 (1)_000229.webp",
  "/public/media/holding/mobile/0629 (1)_000231.webp",
  "/public/media/holding/mobile/0629 (1)_000233.webp",
  "/public/media/holding/mobile/0629 (1)_000235.webp",
  "/public/media/holding/mobile/0629 (1)_000237.webp",
  "/public/media/holding/mobile/0629 (1)_000239.webp",
  "/public/media/holding/mobile/0629 (1)_000256.webp",
  "/public/media/holding/mobile/0629 (1)_000258.webp",
  "/public/media/holding/mobile/0629 (1)_000260.webp",
  "/public/media/holding/mobile/0629 (1)_000262.webp",
  "/public/media/holding/mobile/0629 (1)_000264.webp",
  "/public/media/holding/mobile/0629 (1)_000266.webp",
  "/public/media/holding/mobile/0629 (1)_000268.webp",
  "/public/media/holding/mobile/0629 (1)_000270.webp",
  "/public/media/holding/mobile/0629 (1)_000272.webp",
  "/public/media/holding/mobile/0629 (1)_000274.webp",
  "/public/media/holding/mobile/0629 (1)_000276.webp",
  "/public/media/holding/mobile/0629 (1)_000278.webp",
  "/public/media/holding/mobile/0629 (1)_000280.webp",
  "/public/media/holding/mobile/0629 (1)_000282.webp",
  "/public/media/holding/mobile/0629 (1)_000284.webp",
  "/public/media/holding/mobile/0629 (1)_000286.webp",
  "/public/media/holding/mobile/0629 (1)_000288.webp",
  "/public/media/holding/mobile/0629 (1)_000290.webp",
  "/public/media/holding/mobile/0629 (1)_000292.webp",
  "/public/media/holding/mobile/0629 (1)_000294.webp",
  "/public/media/holding/mobile/0629 (1)_000296.webp",
  "/public/media/holding/mobile/0629 (1)_000298.webp",
  "/public/media/holding/mobile/0629 (1)_000300.webp",
  "/public/media/holding/mobile/0629 (1)_000302.webp",
  "/public/media/holding/mobile/0629 (1)_000304.webp",
  "/public/media/holding/mobile/0629 (1)_000306.webp",
  "/public/media/holding/mobile/0629 (1)_000308.webp",
  "/public/media/holding/mobile/0629 (1)_000310.webp",
  "/public/media/holding/mobile/0629 (1)_000312.webp",
  "/public/media/holding/mobile/0629 (1)_000314.webp",
  "/public/media/holding/mobile/0629 (1)_000316.webp",
  "/public/media/holding/mobile/0629 (1)_000318.webp",
  "/public/media/holding/mobile/0629 (1)_000320.webp",
  "/public/media/holding/mobile/0629 (1)_000322.webp",
  "/public/media/holding/mobile/0629 (1)_000324.webp",
  "/public/media/holding/mobile/0629 (1)_000326.webp",
  "/public/media/holding/mobile/0629 (1)_000328.webp",
  "/public/media/holding/mobile/0629 (1)_000330.webp",
  "/public/media/holding/mobile/0629 (1)_000332.webp",
  "/public/media/holding/mobile/0629 (1)_000334.webp",
  "/public/media/holding/mobile/0629 (1)_000336.webp",
  "/public/media/holding/mobile/0629 (1)_000338.webp",
  "/public/media/holding/mobile/0629 (1)_000340.webp",
  "/public/media/holding/mobile/0629 (1)_000342.webp",
  "/public/media/holding/mobile/0629 (1)_000344.webp",
  "/public/media/holding/mobile/0629 (1)_000346.webp",
  "/public/media/holding/mobile/0629 (1)_000348.webp",
  "/public/media/holding/mobile/0629 (1)_000350.webp",
  "/public/media/holding/mobile/0629 (1)_000352.webp",
  "/public/media/holding/mobile/0629 (1)_000354.webp",
  "/public/media/holding/mobile/0629 (1)_000356.webp",
  "/public/media/holding/mobile/0629 (1)_000358.webp",
  "/public/media/holding/mobile/0629 (1)_000360.webp",
  "/public/media/holding/mobile/0629 (1)_000362.webp",
  "/public/media/holding/mobile/0629 (1)_000364.webp",
  "/public/media/holding/mobile/0629 (1)_000366.webp",
  "/public/media/holding/mobile/0629 (1)_000368.webp",
  "/public/media/holding/mobile/0629 (1)_000370.webp",
  "/public/media/holding/mobile/0629 (1)_000372.webp",
  "/public/media/holding/mobile/0629 (1)_000374.webp",
  "/public/media/holding/mobile/0629 (1)_000376.webp",
  "/public/media/holding/mobile/0629 (1)_000378.webp",
  "/public/media/holding/mobile/0629 (1)_000380.webp",
  "/public/media/holding/mobile/0629 (1)_000382.webp",
  "/public/media/holding/mobile/0629 (1)_000384.webp",
  "/public/media/holding/mobile/0629 (1)_000386.webp",
  "/public/media/holding/mobile/0629 (1)_000388.webp",
  "/public/media/holding/mobile/0629 (1)_000390.webp",
  "/public/media/holding/mobile/0629 (1)_000392.webp",
  "/public/media/holding/mobile/0629 (1)_000394.webp",
  "/public/media/holding/mobile/0629 (1)_000396.webp",
  "/public/media/holding/mobile/0629 (1)_000398.webp",
  "/public/media/holding/mobile/0629 (1)_000400.webp",
  "/public/media/holding/mobile/0629 (1)_000402.webp",
  "/public/media/holding/mobile/0629 (1)_000404.webp",
  "/public/media/holding/mobile/0629 (1)_000406.webp",
  "/public/media/holding/mobile/0629 (1)_000408.webp",
  "/public/media/holding/mobile/0629 (1)_000410.webp",
  "/public/media/holding/mobile/0629 (1)_000412.webp",
  "/public/media/holding/mobile/0629 (1)_000414.webp",
  "/public/media/holding/mobile/0629 (1)_000416.webp",
  "/public/media/holding/mobile/0629 (1)_000418.webp",
  "/public/media/holding/mobile/0629 (1)_000420.webp",
  "/public/media/holding/mobile/0629 (1)_000422.webp",
  "/public/media/holding/mobile/0629 (1)_000424.webp",
  "/public/media/holding/mobile/0629 (1)_000426.webp",
  "/public/media/holding/mobile/0629 (1)_000428.webp",
  "/public/media/holding/mobile/0629 (1)_000430.webp",
  "/public/media/holding/mobile/0629 (1)_000432.webp",
  "/public/media/holding/mobile/0629 (1)_000434.webp",
  "/public/media/holding/mobile/0629 (1)_000436.webp",
  "/public/media/holding/mobile/0629 (1)_000438.webp",
  "/public/media/holding/mobile/0629 (1)_000440.webp",
  "/public/media/holding/mobile/0629 (1)_000442.webp",
  "/public/media/holding/mobile/0629 (1)_000444.webp",
  "/public/media/holding/mobile/0629 (1)_000446.webp",
  "/public/media/holding/mobile/0629 (1)_000448.webp",
  "/public/media/holding/mobile/0629 (1)_000450.webp",
  "/public/media/holding/mobile/0629 (1)_000452.webp",
  "/public/media/holding/mobile/0629 (1)_000454.webp",
  "/public/media/holding/mobile/0629 (1)_000456.webp",
  "/public/media/holding/mobile/0629 (1)_000458.webp",
  "/public/media/holding/mobile/0629 (1)_000460.webp",
  "/public/media/holding/mobile/0629 (1)_000462.webp",
  "/public/media/holding/mobile/0629 (1)_000464.webp",
  "/public/media/holding/mobile/0629 (1)_000466.webp"
];
````

## src/data/projectContent.js

``js
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
  ]
};
````

## src/index.css

``css
@import "tailwindcss";

@theme {
  --color-brand-bg: #0B0D10;
  --color-brand-light: #F3F0EA;
  --color-brand-gold: #C7A36A;
  --color-brand-gold-light: #E0C18A;
  --color-brand-gray: #A6A19A;
  --font-sans: "Inter", "Roboto", sans-serif;
}

body {
  background-color: var(--color-brand-bg);
  color: var(--color-brand-light);
  margin: 0;
  font-family: var(--font-sans);
  overscroll-behavior: none;
}

/* Custom utility for glassmorphism */
.glass {
  background: rgba(243, 240, 234, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(243, 240, 234, 0.1);
}

.text-gold {
  color: var(--color-brand-gold);
}

.text-gray {
  color: var(--color-brand-gray);
}
````

## src/main.jsx

``jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

# Requested supporting files

## scripts/optimize-media.mjs

``js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = process.cwd();

const SOURCE_EARTH = path.resolve(ROOT, 'footage');
const SOURCE_HOLDING = path.resolve(ROOT, 'holdingIMG/upscayl_png_upscayl-lite-4x_4x');

const TARGETS = {
  earth: {
    desktop: path.resolve(ROOT, 'public/media/earth/desktop'),
    mobile: path.resolve(ROOT, 'public/media/earth/mobile'),
  },
  holding: {
    desktop: path.resolve(ROOT, 'public/media/holding/desktop'),
    mobile: path.resolve(ROOT, 'public/media/holding/mobile'),
  },
};

const MANIFEST_FILE = path.resolve(ROOT, 'src/data/mediaManifest.js');
const FORMAT = getArgValue('--format') || process.env.IMAGE_FORMAT || 'webp';

const FORMAT_OPTIONS = {
  webp: {
    extension: 'webp',
    desktop: { quality: 84 },
    mobile: { quality: 82 },
  },
  avif: {
    extension: 'avif',
    desktop: { quality: 52, effort: 6 },
    mobile: { quality: 48, effort: 6 },
  },
};

const SEQUENCES = [
  {
    key: 'earth',
    label: 'Earth footage',
    source: SOURCE_EARTH,
    desktopWidth: 1440,
    mobileWidth: 1080,
    mobileEverySecondFrame: true,
  },
  {
    key: 'holding',
    label: 'Holding footage',
    source: SOURCE_HOLDING,
    desktopWidth: 1920,
    mobileWidth: 1080,
    mobileEverySecondFrame: true,
  },
];

function getArgValue(name) {
  const arg = process.argv.find((item) => item.startsWith(`${name}=`));
  return arg ? arg.split('=').slice(1).join('=').trim() : null;
}

function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getFilesNaturalSort(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|tiff?)$/i.test(file))
    .filter((file) => fs.statSync(path.join(dir, file)).size > 0)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

function analyzeSequence(files, name) {
  console.log(`\n--- Analysis: ${name} ---`);
  console.log(`Total source frames: ${files.length}`);
  if (!files.length) return;

  console.log(`First frame: ${files[0]}`);
  console.log(`Last frame: ${files[files.length - 1]}`);

  const numbers = files
    .map((file) => {
      const match = file.match(/\d+/g);
      return match ? Number.parseInt(match.at(-1), 10) : null;
    })
    .filter((value) => value !== null);

  if (numbers.length <= 1) return;

  const existing = new Set(numbers);
  const missing = [];
  for (let i = numbers[0]; i <= numbers.at(-1); i += 1) {
    if (!existing.has(i)) missing.push(i);
  }

  console.log(missing.length ? `Missing frame numbers: ${missing.join(', ')}` : 'No missing frame numbers detected.');
}

async function getDirSize(dir, extension) {
  if (!fs.existsSync(dir)) return 0;

  let size = 0;
  for (const file of fs.readdirSync(dir)) {
    if (extension && !file.endsWith(`.${extension}`)) continue;
    const target = path.join(dir, file);
    if (fs.statSync(target).isFile()) size += fs.statSync(target).size;
  }
  return size;
}

function formatSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function toPublicPath(absolutePath) {
  return absolutePath
    .replace(path.resolve(ROOT, 'public'), '')
    .replaceAll(path.sep, '/');
}

async function writeOptimizedFrame(sourcePath, targetPath, width, formatConfig) {
  const pipeline = sharp(sourcePath).resize({ width, withoutEnlargement: true });

  if (FORMAT === 'avif') {
    await pipeline.avif(formatConfig).toFile(targetPath);
    return;
  }

  await pipeline.webp(formatConfig).toFile(targetPath);
}

async function processSequence(sequence, files, formatConfig) {
  const targets = TARGETS[sequence.key];
  ensureDirExists(targets.desktop);
  ensureDirExists(targets.mobile);

  const desktopFrames = [];
  const mobileFrames = [];
  const extension = formatConfig.extension;

  const originalSize = files.reduce((total, file) => {
    return total + fs.statSync(path.join(sequence.source, file)).size;
  }, 0);

  console.log(`Original size: ${formatSize(originalSize)}`);

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const sourcePath = path.join(sequence.source, file);
    const baseName = path.parse(file).name;
    const outputName = `${baseName}.${extension}`;

    try {
      const desktopTarget = path.join(targets.desktop, outputName);
      await writeOptimizedFrame(
        sourcePath,
        desktopTarget,
        sequence.desktopWidth,
        formatConfig.desktop,
      );
      desktopFrames.push(toPublicPath(desktopTarget));

      const includeMobile = sequence.mobileEverySecondFrame ? i % 2 === 0 : true;
      if (includeMobile) {
        const mobileTarget = path.join(targets.mobile, outputName);
        await writeOptimizedFrame(
          sourcePath,
          mobileTarget,
          sequence.mobileWidth,
          formatConfig.mobile,
        );
        mobileFrames.push(toPublicPath(mobileTarget));
      }
    } catch (error) {
      console.error(`Skipping ${file}: ${error.message}`);
    }

    if ((i + 1) % 50 === 0) {
      console.log(`Processed ${i + 1}/${files.length} frames...`);
    }
  }

  const desktopSize = await getDirSize(targets.desktop, extension);
  const mobileSize = await getDirSize(targets.mobile, extension);

  console.log(`Desktop optimized size: ${formatSize(desktopSize)} (${desktopFrames.length} frames)`);
  console.log(`Mobile optimized size: ${formatSize(mobileSize)} (${mobileFrames.length} frames)`);

  return { desktopFrames, mobileFrames };
}

function writeManifest(results) {
  const manifestContent = `// Auto-generated by scripts/optimize-media.mjs
export const earthDesktopFrames = ${JSON.stringify(results.earth.desktopFrames, null, 2)};
export const earthMobileFrames = ${JSON.stringify(results.earth.mobileFrames, null, 2)};
export const holdingDesktopFrames = ${JSON.stringify(results.holding.desktopFrames, null, 2)};
export const holdingMobileFrames = ${JSON.stringify(results.holding.mobileFrames, null, 2)};
`;

  fs.writeFileSync(MANIFEST_FILE, manifestContent);
}

async function main() {
  const formatConfig = FORMAT_OPTIONS[FORMAT];
  if (!formatConfig) {
    throw new Error(`Unsupported format "${FORMAT}". Use --format=webp or --format=avif.`);
  }

  console.log(`Starting media optimization. Output format: ${FORMAT}`);
  ensureDirExists(path.dirname(MANIFEST_FILE));

  const results = {};

  for (const sequence of SEQUENCES) {
    const files = getFilesNaturalSort(sequence.source);
    analyzeSequence(files, sequence.label);

    if (!files.length) {
      results[sequence.key] = { desktopFrames: [], mobileFrames: [] };
      continue;
    }

    results[sequence.key] = await processSequence(sequence, files, formatConfig);
  }

  writeManifest(results);
  console.log(`\nManifest written to ${MANIFEST_FILE}`);
  console.log('Optimization complete.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
````

## package.json

``json
{
  "name": "temp_app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "optimize:media": "node scripts/optimize-media.mjs --format=webp",
    "optimize:media:avif": "node scripts/optimize-media.mjs --format=avif",
    "preview": "vite preview"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "gsap": "^3.15.0",
    "lenis": "^1.3.25",
    "lucide-react": "^1.22.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.1",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.2",
    "oxlint": "^1.69.0",
    "sharp": "^0.35.2",
    "tailwindcss": "^4.0.0",
    "vite": "^8.1.0"
  }
}
````

