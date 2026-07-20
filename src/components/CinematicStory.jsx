import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FrameSequenceCanvas from './FrameSequenceCanvas';
import { earthDesktopFrames, earthMobileFrames, holdingDesktopFrames, holdingMobileFrames } from '../data/mediaManifest';
import { buildingCallouts } from '../data/projectContent';

gsap.registerPlugin(ScrollTrigger);

const EARTH_MANIFEST   = { desktop: earthDesktopFrames,   mobile: earthMobileFrames   };
const HOLDING_MANIFEST = { desktop: holdingDesktopFrames, mobile: holdingMobileFrames };
const EARTH_END_RATIO = 150 / Math.max(earthDesktopFrames.length, 1);

export default function CinematicStory() {
  const sectionRef = useRef(null);
  
  // Прямые рефы прогресса для передачи в Canvas без перерендеров
  const earthProgressRef = useRef(0);
  const holdingProgressRef = useRef(0);

  // Стейты только для редких изменений интерфейса (опасити и тексты)
  const [opacities, setOpacities] = useState({ earth: 1, holding: 0 });
  const [showEarthText, setShowEarthText] = useState(false);
  const [activeCallouts, setActiveCallouts] = useState([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const FADE_START = 0.35;
    const FADE_END   = 0.45;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1,
      onUpdate(self) {
        const p = self.progress;

        // 1. Прямая запись в мутабельные рефы (0 тяжелых рендеров React)
        earthProgressRef.current = Math.min(EARTH_END_RATIO, (p / FADE_END) * EARTH_END_RATIO);
        holdingProgressRef.current = Math.max(0, (p - FADE_START) / (1 - FADE_START));

        // 2. Оптимизированное обновление прозрачностей (только при изменении диапазона)
        let earthOpacity = 1;
        let holdingOpacity = 0;
        if (p >= FADE_START && p <= FADE_END) {
          const ratio = (p - FADE_START) / (FADE_END - FADE_START);
          earthOpacity = 1 - ratio;
          holdingOpacity = ratio;
        } else if (p > FADE_END) {
          earthOpacity = 0;
          holdingOpacity = 1;
        }

        setOpacities({ earth: earthOpacity, holding: holdingOpacity });

        // 3. Текст Земли (переключаем стейт только на границах, а не на каждый пиксель)
        const shouldShowText = p > 0.05 && p < 0.3;
        setShowEarthText((prev) => (prev !== shouldShowText ? shouldShowText : prev));

        // 4. Оверлеи карточек (сверяем только изменившиеся)
        const currentProgress = holdingProgressRef.current;
        const visibleCallouts = buildingCallouts
          .filter(b => currentProgress > b.startProgress && currentProgress < b.endProgress)
          .map(b => b.id);

        setActiveCallouts((prev) => {
          if (JSON.stringify(prev) === JSON.stringify(visibleCallouts)) return prev;
          return visibleCallouts;
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black" style={{ height: '500vh' }}>
      
      {!firstFrameLoaded && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-5">
          <div className="w-10 h-10 border border-[#C7A36A]/60 border-t-[#C7A36A] rounded-full animate-spin" />
          <p className="text-[#A6A19A] text-xs tracking-[0.3em] uppercase">Загрузка</p>
        </div>
      )}

      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        <FrameSequenceCanvas
          manifest={EARTH_MANIFEST}
          progressRef={earthProgressRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: opacities.earth, transition: 'opacity 0.4s ease' }}
          onFirstFrameLoaded={() => setFirstFrameLoaded(true)}
        />

        <FrameSequenceCanvas
          manifest={HOLDING_MANIFEST}
          progressRef={holdingProgressRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: opacities.holding, transition: 'opacity 0.4s ease' }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ opacity: showEarthText ? 1 : 0, transition: 'opacity 0.8s ease' }}
          >
            <p className="text-[11px] tracking-[0.35em] text-[#F3F0EA]/70 uppercase bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              Открывая новую точку города
            </p>
          </div>

          {holdingProgressRef.current > 0 && holdingProgressRef.current < 0.82 && (
            <div className="absolute inset-0 max-w-7xl mx-auto px-8 flex items-center justify-between">
              
              <div
                style={{
                  opacity: holdingProgressRef.current > 0.08 ? 1 : 0,
                  transform: `translateY(${holdingProgressRef.current > 0.08 ? 0 : 24}px)`,
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

              <div className="flex flex-col gap-8 max-w-xs">
                {buildingCallouts.map((block) => {
                  const visible = activeCallouts.includes(block.id);
                  return (
                    <div
                      key={block.id}
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: `translateY(${visible ? 0 : 16}px)`,
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
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
        </div>
      </div>
    </section>
  );
}
