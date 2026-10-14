import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectTimeline.css';

export function ProjectTimeline({ projects, lang, t }) {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[projects.length - 1].id); // default to latest/most evolved (BioSense)

  const activeIndex = projects.findIndex((p) => p.id === selectedProjectId);
  const selectedProject = projects[activeIndex] || projects[0];

  return (
    <div className="timeline-container">
      {/* Interactive Timeline Track */}
      <div className="timeline-stepper-wrapper" role="tablist" aria-label={t.projects.timelineLabel}>
        <div className="timeline-track-line">
          <div
            className="timeline-track-progress"
            style={{ width: `${(activeIndex / (projects.length - 1)) * 100}%` }}
          />
        </div>

        <div className="timeline-steps">
          {projects.map((project, idx) => {
            const isSelected = project.id === selectedProjectId;
            const isPassed = idx <= activeIndex;

            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`timeline-step-btn ${isSelected ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <div className="step-node">
                  <span className="step-number">0{idx + 1}</span>
                  <div className="step-glow-dot" />
                </div>
                <div className="step-meta">
                  <span className="step-period">{project.period}</span>
                  <span className="step-title">{project.title}</span>
                  <span className="step-stage">{project.narrativeStage[lang].split('•')[0]}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Featured Project Display */}
      <div className="timeline-active-display">
        <ProjectCard
          project={selectedProject}
          lang={lang}
          t={t}
          isFeatured={true}
        />
      </div>

      {/* Grid of all three projects for direct comparison and accessibility */}
      <div className="timeline-all-projects">
        <h4 className="all-projects-heading font-mono">
          // {t.projects.title} — {t.projects.timelineLabel}
        </h4>
        <div className="all-projects-grid">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`project-grid-item ${proj.id === selectedProjectId ? 'active-item' : ''}`}
              onClick={() => setSelectedProjectId(proj.id)}
            >
              <ProjectCard
                project={proj}
                lang={lang}
                t={t}
                isFeatured={proj.id === selectedProjectId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
