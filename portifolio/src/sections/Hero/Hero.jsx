import React from 'react';
import HeroScene from '../../scenes/HeroScene/HeroScene';
import './Hero.css';

export function Hero({ profile, lang, t }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Apresentação de Frederico Marques">
      {/* Background 3D Canvas Layer */}
      <div className="hero-3d-layer">
        <HeroScene fallbackNotice={t.hero.fallbackNotice} />
      </div>

      <div className="section-container hero-container">
        {/* Top Telemetry Strip */}
        <div className="hero-telemetry-strip font-mono">
          <div className="telemetry-item">
            <span className="telemetry-bullet"></span>
            <span>{t.hero.telemetry.status}</span>
          </div>
          <div className="telemetry-divider">/</div>
          <div className="telemetry-item">{t.hero.telemetry.academic}</div>
          <div className="telemetry-divider">/</div>
          <div className="telemetry-item">{t.hero.telemetry.focus}</div>
          <div className="telemetry-divider">/</div>
          <div className="telemetry-item">{t.hero.telemetry.location}</div>
        </div>

        {/* Hero Narrative Content */}
        <div className="hero-content">
          <div className="hero-tag-badge">
            <span className="hero-tag-pulse" />
            <span>{t.hero.tag}</span>
          </div>

          <h1 className="hero-headline">
            <span className="hero-greeting">{t.hero.greeting}</span>
            <span className="hero-name">{profile.name}</span>
          </h1>

          {/* Role Headline */}
          <p className="hero-role-title">
            {profile.headline[lang]}
          </p>

          {/* Signature: Understanding. Building. Evolving. */}
          <div className="hero-signature-box font-mono">
            <span className="signature-bracket">[</span>
            <span className="signature-text">{profile.signature}</span>
            <span className="signature-bracket">]</span>
          </div>

          <p className="hero-description">{t.hero.intro}</p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-primary"
              onClick={() => scrollTo('projects')}
            >
              <span>{t.hero.ctaProjects}</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              <span>{t.hero.ctaContact}</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="hero-scroll-prompt" onClick={() => scrollTo('about')}>
          <span className="scroll-prompt-text font-mono">{t.hero.scrollPrompt}</span>
          <div className="scroll-indicator-mouse">
            <div className="scroll-wheel" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
