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

// Global scroll progress ref — updated by GSAP, read by RAF in FrameSequenceCanvas
const scrollProgressRef = { value: 0 };

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
