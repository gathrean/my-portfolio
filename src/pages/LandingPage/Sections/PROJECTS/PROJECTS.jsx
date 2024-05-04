import React from 'react';
import './PROJECTS.css';

export function PROJECTS() {
  return (
    <div className="projects-section-container">
      <h1>Featured Projects</h1>
      <p>This is where you can showcase your work experience. You can list your previous jobs, projects you've worked on, and any other relevant experience.</p>
      <div className="projects-grid">

        <div className="project-card">
          <div className="header-image-placeholder"></div>
          <h2>Project 1</h2>
          <p>Description of project 1 goes here.</p>
        </div>

        <div className="project-card">
          <div className="header-image-placeholder"></div>
          <h2>Project 2</h2>
          <p>Description of project 2 goes here.</p>
        </div>

        <div className="project-card">
          <div className="header-image-placeholder"></div>
          <h2>Project 3</h2>
          <p>Description of project 3 goes here.</p>
        </div>

        <div className="project-card">
          <div className="header-image-placeholder"></div>
          <h2>Project 4</h2>
          <p>Description of project 4 goes here.</p>
        </div>

        <div className="project-card">
          <div className="header-image-placeholder"></div>
          <h2>Project 5</h2>
          <p>Description of project 5 goes here.</p>
        </div>

        <div className="project-card">
          <div className="header-image-placeholder"></div>
          <h2>Project 6</h2>
          <p>Description of project 5 goes here.</p>
        </div>
      </div>
    </div>
  );
}