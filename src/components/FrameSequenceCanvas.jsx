import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const PRELOAD_AHEAD  = 12;
const PRELOAD_BEHIND = 4;
const MAX_CACHE      = 90; // Увеличенный лимит на инстанс
const LERP_SPEED     = 0.85; // Почти мгновенный догон кадра, убирает «ватность»

export default function FrameSequenceCanvas({
  manifest,
  progressRef, // ПЕРЕДАЕМ РЕФ, А НЕ СТЕЙТ. Компонент больше не рендерится при скролле!
  className,
  style,
  debug,
  onFirstFrameLoaded,
}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  
  // Локальный кэш для конкретного инстанса во избежание конфликтов
  const instanceCache = useRef(new Map());
  const inFlight = useRef(new Set());

  const lerpFrameRef = useRef(0);
  const lastDrawnRef = useRef(-1);
  const lastGoodImgRef = useRef(null);
  const isMobileRef = useRef(false);
  const framesRef = useRef([]);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Кэш размеров для исключения математики из тикера
  const dimensionsRef = useRef({ dx: 0, dy: 0, dw: 0, dh: 0 });

  const lruEvict = () => {
    const cache = instanceCache.current;
    if (cache.size <= MAX_CACHE) return;
    const key = cache.keys().next().value;
    const img = cache.get(key);
    if (img) img.src = '';
    cache.delete(key);
  };

  const preload = (src) => {
    if (!src || instanceCache.current.has(src) || inFlight.current.has(src)) return;
    inFlight.current.add(src);
    const img = new Image();
    img.onload = () => {
      lruEvict();
      instanceCache.current.set(src, img);
      inFlight.current.delete(src);
      
      // Если это первая картинка и размеры еще не считались
      if (instanceCache.current.size === 1) {
        recalcDimensions(img);
      }
    };
    img.onerror = () => inFlight.current.delete(src);
    img.src = src;
  };

  const recalcDimensions = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const cw = canvas.width, ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale, dh = ih * scale;
    dimensionsRef.current = {
      dw,
      dh,
      dx: (cw - dw) / 2,
      dy: (ch - dh) / 2
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      isMobileRef.current = window.innerWidth <= 768;
      const isMob = isMobileRef.current;
      framesRef.current = (isMob && manifest.mobile?.length)
        ? manifest.mobile
        : manifest.desktop;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if (lastGoodImgRef.current) {
        recalcDimensions(lastGoodImgRef.current);
      }
      lastDrawnRef.current = -1;
    };

    resize();
    ctxRef.current = canvas.getContext('2d', { alpha: false, desynchronized: true });

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [manifest]);

  // Загрузка первого кадра
  useEffect(() => {
    const frames = framesRef.current;
    if (!frames?.length) return;

    const src0 = frames[0];
    const cache = instanceCache.current;

    if (cache.has(src0)) {
      setFirstFrameReady(true);
      onFirstFrameLoaded?.();
      return;
    }

    const img = new Image();
    img.onload = () => {
      cache.set(src0, img);
      recalcDimensions(img);
      setFirstFrameReady(true);
      onFirstFrameLoaded?.();
      // Мягкий предзаказ первых кадров
      for (let i = 1; i < Math.min(8, frames.length); i++) preload(frames[i]);
    };
    img.src = src0;
  }, [manifest]);

  // Основной цикл рендеринга на gsap.ticker
  useEffect(() => {
    if (!firstFrameReady) return;

    const tickerFn = () => {
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;
      if (!canvas || !ctx) return;

      const frames = framesRef.current;
      const total = frames?.length || 0;
      if (!total) return;

      // Читаем прогресс напрямую из рефа без ререндеров компонента!
      const target = Math.max(0, Math.min(total - 1, progressRef.current * (total - 1)));
      lerpFrameRef.current += (target - lerpFrameRef.current) * LERP_SPEED;

      const idx = Math.min(total - 1, Math.max(0, Math.round(lerpFrameRef.current)));

      // Умный предзаказ скользящего окна
      const lo = Math.max(0, idx - PRELOAD_BEHIND);
      const hi = Math.min(total - 1, idx + PRELOAD_AHEAD);
      for (let i = lo; i <= hi; i++) preload(frames[i]);

      if (idx === lastDrawnRef.current) return;

      let img = instanceCache.current.get(frames[idx]);
      if (!img) {
        // Поиск ближайшего соседа в кэше
        for (let off = 1; off <= 5; off++) {
          const prev = frames[idx - off];
          if (prev && instanceCache.current.has(prev)) { img = instanceCache.current.get(prev); break; }
          const next = frames[idx + off];
          if (next && instanceCache.current.has(next)) { img = instanceCache.current.get(next); break; }
        }
      }
      if (!img) img = lastGoodImgRef.current;

      if (!img || !img.complete) return;

      // Если сменилась базовая картинка, обновляем размеры один раз
      if (lastGoodImgRef.current !== img) {
        recalcDimensions(img);
      }

      const { dx, dy, dw, dh } = dimensionsRef.current;
      ctx.drawImage(img, dx, dy, dw, dh);

      lastGoodImgRef.current = img;
      lastDrawnRef.current = idx;
    };

    gsap.ticker.add(tickerFn);
    return () => gsap.ticker.remove(tickerFn);
  }, [firstFrameReady, manifest]);

  return <canvas ref={canvasRef} className={className} style={style} />;
}
