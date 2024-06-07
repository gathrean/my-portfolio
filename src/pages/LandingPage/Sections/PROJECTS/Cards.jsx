import React from 'react';

import './PROJECTS.css';

import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRightBlack';

function ProjectCard({
  projectName, imageURL, iconURL, keywords, date, description, projectDetailsURL
}) {

  return (
    <div className="project-card-container">
      {/* <div className="header-image"><img alt="Project Screenshots" /></div> */}
      <div className="card">
        <div className="project-card-description">
          <div className="link-and-icon-container">
            <img className="project-small-icon" alt="Project Small Icon" src={iconURL} />
            <h1 className="external-link">
              <a href={projectDetailsURL}>{projectName}</a>
              <ArrowRightIcon />
            </h1>
          </div>
          <h3>{date}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;