import React from 'react';
import './Experience.css';

export function Experience({ profile, lang, t }) {
  return (
    <section id="experience" className="portfolio-section experience-section" aria-labelledby="experience-heading">
      <div className="section-container">
        <div className="section-tag">{t.experience.tag}</div>
        <h2 id="experience-heading" className="section-title">
          {t.experience.title}
        </h2>
        <p className="section-subtitle">{t.experience.subtitle}</p>

        <div className="experience-list">
          {profile.experience.map((exp, idx) => (
            <div key={idx} className="experience-card glass-card">
              <div className="experience-header">
                <div>
                  <span className="exp-index font-mono">0{idx + 1} //</span>
                  <h3 className="exp-role">{exp.role[lang]}</h3>
                  <h4 className="exp-company font-mono">{exp.company}</h4>
                </div>
                <span className="exp-period-badge font-mono">{exp.period}</span>
              </div>

              <p className="exp-description">{exp.description[lang]}</p>

              {exp.highlights && (
                <div className="exp-highlights-list">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="exp-highlight-item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" className="highlight-icon">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item[lang]}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
