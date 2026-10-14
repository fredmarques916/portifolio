import React from 'react';
import ProjectTimeline from '../../components/ProjectTimeline/ProjectTimeline';
import './Projects.css';

export function Projects({ projects, lang, t }) {
  return (
    <section id="projects" className="portfolio-section projects-section" aria-labelledby="projects-heading">
      <div className="section-container">
        <div className="section-tag">{t.projects.tag}</div>
        <h2 id="projects-heading" className="section-title">
          {t.projects.title}
        </h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>

        <ProjectTimeline
          projects={projects}
          lang={lang}
          t={t}
        />
      </div>
    </section>
  );
}

export default Projects;
