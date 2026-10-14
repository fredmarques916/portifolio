import React from 'react';
import './Technologies.css';

export function Technologies({ profile, lang, t }) {
  return (
    <section id="technologies" className="portfolio-section technologies-section" aria-labelledby="technologies-heading">
      <div className="section-container">
        <div className="section-tag">{t.technologies.tag}</div>
        <h2 id="technologies-heading" className="section-title">
          {t.technologies.title}
        </h2>
        <p className="section-subtitle">{t.technologies.subtitle}</p>

        <div className="technologies-grid">
          {profile.technologies.map((group, idx) => (
            <div key={idx} className="tech-group-card glass-card">
              <div className="tech-group-header">
                <span className="tech-group-number font-mono">0{idx + 1}</span>
                <h3 className="tech-group-title">{group.category[lang]}</h3>
              </div>

              <div className="tech-badges-container">
                {group.skills.map((skill) => (
                  <div key={skill} className="tech-badge-item">
                    <span className="tech-dot" />
                    <span className="tech-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-disclaimer font-mono">
          {t.technologies.disclaimer}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
