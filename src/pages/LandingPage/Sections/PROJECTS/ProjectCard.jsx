import React from 'react';

import './PROJECTS.css';

function ProjectCard({ projectName, keywords, date, description }) {
  return (
    <div className="project-card">
      <a href="#placeholder" className="header-image-link">
        <div className="header-image">
          <div className="wrapper">
            <div className="marquee">
              <p className="readme-text">
                READ MORE READ MORE READ MORE READ MORE READ MORE READ MORE READ MORE READ MORE
              </p>
            </div>
          </div>
        </div>
      </a>
      <h1>{projectName}</h1>
      <h3 className="keywords">{keywords}</h3>
      <h3>{date}</h3>
      <p>{description}</p>
      <a href="#" className="read-more-link">Read more</a>
    </div>
  );
}

export default ProjectCard;
