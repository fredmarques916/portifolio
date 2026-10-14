import React, { useState } from 'react';
import './ProjectCard.css';

export function ProjectCard({ project, lang, t, isFeatured = false }) {
  const [activeTab, setActiveTab] = useState('overview');

  const {
    id,
    title,
    subtitle,
    period,
    narrativeStage,
    problem,
    solution,
    contribution,
    technologies,
    highlight,
    links,
  } = project;

  return (
    <article className={`project-card glass-card ${isFeatured ? 'featured' : ''}`} id={`project-${id}`}>
      {/* Top Header */}
      <header className="project-card-header">
        <div className="project-badge-row">
          <span className="project-stage-badge">
            {narrativeStage[lang]}
          </span>
          <span className="project-period-badge">
            {period}
          </span>
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle[lang]}</p>

        {highlight && (
          <div className="project-highlight-badge">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            <span>{highlight[lang]}</span>
          </div>
        )}
      </header>

      {/* Tabs for deep reading: Overview / Problem & Solution / Contribution */}
      <div className="project-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'overview'}
          className={`project-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          {t.projects.solutionLabel}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'problem'}
          className={`project-tab-btn ${activeTab === 'problem' ? 'active' : ''}`}
          onClick={() => setActiveTab('problem')}
        >
          {t.projects.problemLabel}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'contribution'}
          className={`project-tab-btn ${activeTab === 'contribution' ? 'active' : ''}`}
          onClick={() => setActiveTab('contribution')}
        >
          {t.projects.contributionLabel}
        </button>
      </div>

      {/* Tab Panels */}
      <div className="project-tab-body">
        {activeTab === 'overview' && (
          <div className="tab-panel animate-fade">
            <h4 className="tab-panel-label">{t.projects.solutionLabel}</h4>
            <p className="tab-panel-text">{solution[lang]}</p>
          </div>
        )}
        {activeTab === 'problem' && (
          <div className="tab-panel animate-fade">
            <h4 className="tab-panel-label">{t.projects.problemLabel}</h4>
            <p className="tab-panel-text">{problem[lang]}</p>
          </div>
        )}
        {activeTab === 'contribution' && (
          <div className="tab-panel animate-fade">
            <h4 className="tab-panel-label">{t.projects.contributionLabel}</h4>
            <p className="tab-panel-text contribution-text">{contribution[lang]}</p>
          </div>
        )}
      </div>

      {/* Tech Stack Chips */}
      <div className="project-tech-section">
        <span className="tech-section-title">{t.projects.techLabel}:</span>
        <div className="tech-chips-list">
          {technologies.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <footer className="project-card-footer">
        {links.repository && (
          <a
            href={links.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary project-action-btn"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>{t.projects.repoBtn}</span>
          </a>
        )}

        {links.demo ? (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary project-action-btn"
          >
            <span>{t.projects.demoBtn}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ) : (
          <span className="demo-placeholder-badge" title={links.statusNote[lang]}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{links.statusNote[lang]}</span>
          </span>
        )}
      </footer>
    </article>
  );
}

export default ProjectCard;
