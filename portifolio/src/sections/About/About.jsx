import React from 'react';
import './About.css';

export function About({ profile, lang, t }) {
  return (
    <section id="about" className="portfolio-section about-section" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="section-tag">{t.about.tag}</div>
        <h2 id="about-heading" className="section-title">
          {t.about.title}
        </h2>

        <div className="about-grid">
          {/* Main Narrative Column */}
          <div className="about-narrative-column">
            <p className="lead-paragraph">{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>

            {/* Quick Metrics Badges */}
            <div className="about-stats-grid">
              {t.about.quickStats.map((item, i) => (
                <div key={i} className="stat-pill glass-card">
                  <span className="stat-pill-label">{item.label}</span>
                  <span className="stat-pill-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Three Pillars Column (Understanding, Building, Evolving) */}
          <div className="about-pillars-column">
            <h3 className="pillars-heading font-mono">
              // {t.about.signatureHeading}
            </h3>

            <div className="pillars-cards-list">
              {t.about.pillars.map((pillar, idx) => (
                <div key={pillar.title} className="pillar-card glass-card">
                  <div className="pillar-header">
                    <span className="pillar-number">0{idx + 1}</span>
                    <h4 className="pillar-title">{pillar.title}</h4>
                  </div>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Core Technical Interests */}
            <div className="about-interests-box glass-card">
              <span className="interests-title font-mono">
                // {lang === 'pt' ? 'INTERESSES & ÁREAS DE EXPLORAÇÃO' : 'CORE INTERESTS & FOCUS'}
              </span>
              <div className="interests-tags">
                {profile.interests.map((interest, idx) => (
                  <span key={idx} className="interest-tag">
                    {interest[lang]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
