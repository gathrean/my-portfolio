import React from 'react';
import './PROJECTS.css';

export function PROJECTS() {
  return (
    <div className="projects-section-container">
      <hr />
      <h1>Featured Projects</h1>

      <p>This is where you can showcase your work experience. You can list your previous jobs, projects you've worked on, and any other relevant experience.</p>

      <div className="projects-grid">

        <div className="project-card">
          <a href="#placeholder" className="header-image-link">
            <div className="header-image"></div>
          </a>
          <h1>Project</h1>
          <h3>2024</h3>
          <p>Description of project 1 goes here.</p>
          <a href="#" className="read-more-link">Read more</a>
        </div>

        <div className="project-card">
          <a href="#placeholder" className="header-image-link">
            <div className="header-image"></div>
          </a>
          <h1>Project</h1>
          <h3>2024</h3>
          <p>Description of project 2 goes here.</p>
          <a href="#" className="read-more-link">Read more</a>
        </div>

        <div className="project-card">
          <a href="#placeholder" className="header-image-link">
            <div className="header-image"></div>
          </a>
          <h1>Project</h1>
          <h3>2023</h3>
          <p>Description of project 3 goes here.</p>
          <a href="#" className="read-more-link">Read more</a>
        </div>

        <div className="project-card">
          <a href="#placeholder" className="header-image-link">
            <div className="header-image"></div>
          </a>
          <h1>Project</h1>
          <h3>2023</h3>
          <p>Description of project 4 goes here.</p>
          <a href="#" className="read-more-link">Read more</a>
        </div>

        <div className="project-card">
          <a href="#placeholder" className="header-image-link">
            <div className="header-image"></div>
          </a>
          <h1>Project</h1>
          <h3>2023</h3>
          <p>Description of project 5 goes here.</p>
          <a href="#" className="read-more-link">Read more</a>
        </div>

        <div className="project-card">
          <a href="#placeholder" className="header-image-link">
            <div className="header-image"></div>
          </a>
          <h1>Project</h1>
          <h3>2022</h3>
          <p>Description of project 5 goes here.</p>
          <a href="#" className="read-more-link">Read more</a>
        </div>
      </div>
    </div>
  );
}