import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
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

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // ─── Lenis: smooth native scroll ───────────────────────────────────────
    // Lenis replaces the browser's default scroll momentum with a
    // consistent, high-quality easing curve on every device.
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });

    // ─── Critical: wire Lenis into GSAP's ticker ──────────────────────────
    // Without this, ScrollTrigger reads the browser's raw scroll position
    // (jerky) instead of Lenis's smoothed position.
    // This is the official Lenis + GSAP integration pattern.
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0); // prevent GSAP from skipping frames on tab blur

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="bg-brand-bg text-brand-light font-sans selection:bg-brand-gold selection:text-brand-bg">
      <Header />
      
      <main>
        <Hero />
        
        {/* The immersive part */}
        <CinematicStory />
        <InteriorReveal />
        
        {/* Standard sections */}
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
