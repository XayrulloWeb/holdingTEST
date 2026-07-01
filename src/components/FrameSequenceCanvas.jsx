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
  const [debugTick, setDebugTick]             = useState(0);

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
