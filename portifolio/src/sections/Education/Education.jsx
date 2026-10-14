import React from 'react';
import './Education.css';

export function Education({ profile, lang, t }) {
  return (
    <section id="education" className="portfolio-section education-section" aria-labelledby="education-heading">
      <div className="section-container">
        <div className="section-tag">{t.education.tag}</div>
        <h2 id="education-heading" className="section-title">
          {t.education.title}
        </h2>
        <p className="section-subtitle">{t.education.subtitle}</p>

        <div className="education-grid">
          {profile.education.map((item, idx) => (
            <div key={idx} className="education-card glass-card">
              <div className="education-card-top">
                <span className="education-index font-mono">0{idx + 1} //</span>
                <span className="education-period font-mono">{item.period}</span>
              </div>

              <div className="education-status-pill">
                <span className="status-indicator-dot"></span>
                <span>{item.status[lang]}</span>
              </div>

              <h3 className="education-degree">{item.degree[lang]}</h3>
              <h4 className="education-institution">{item.institution}</h4>

              <p className="education-description">{item.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
