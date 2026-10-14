import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Education from './sections/Education/Education';
import Technologies from './sections/Technologies/Technologies';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
import HeroScene from './scenes/HeroScene/HeroScene';

import { profileData } from './data/profile';
import { projectsData } from './data/projects';
import { translations } from './data/translations';
import './App.css';

function App() {
  // Language State: 'pt' or 'en'
  const [lang, setLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('fm_portfolio_lang');
      return savedLang === 'en' ? 'en' : 'pt';
    } catch {
      return 'pt';
    }
  });

  const [activeStageKey, setActiveStageKey] = useState('hero');

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt';
      try {
        localStorage.setItem('fm_portfolio_lang', next);
      } catch {
        // LocalStorage exception handling
      }
      return next;
    });
  };

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  // Track scroll position to update HUD 3D telemetry
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      if (progress < 0.2) {
        setActiveStageKey('hero');
      } else if (progress < 0.55) {
        setActiveStageKey('about');
      } else if (progress < 0.82) {
        setActiveStageKey('projects');
      } else {
        setActiveStageKey('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStageText = t.scrollTelemetry ? t.scrollTelemetry[activeStageKey] : '';

  return (
    <div className="portfolio-app">
      {/* Continuous 3D Scroll Narrative Canvas Layer */}
      <HeroScene currentStageText={currentStageText} />

      {/* Top Navigation */}
      <Navigation
        currentLang={lang}
        onToggleLang={toggleLanguage}
        t={t}
      />

      {/* Main Single Page Narrative Flow */}
      <main id="main-content">
        <Hero
          profile={profileData}
          lang={lang}
          t={t}
        />

        <About
          profile={profileData}
          lang={lang}
          t={t}
        />

        <Education
          profile={profileData}
          lang={lang}
          t={t}
        />

        <Technologies
          profile={profileData}
          lang={lang}
          t={t}
        />

        <Projects
          projects={projectsData}
          lang={lang}
          t={t}
        />

        <Experience
          profile={profileData}
          lang={lang}
          t={t}
        />

        <Contact
          profile={profileData}
          t={t}
        />
      </main>
    </div>
  );
}

export default App;
