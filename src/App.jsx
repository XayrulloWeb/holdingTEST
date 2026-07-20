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
