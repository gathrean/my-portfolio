import React from 'react';

import './PROJECTS.css';

import ArrowUpRight from '../../../../assets/icons/arrow-up-right.svg';

function ProjectCard({
  projectName, imageURL, iconURL, keywords, date, description, projectDetailsURL
}) {

  return (
    <div className="project-card-container">
      <div className="header-image"><img alt="Project Screenshots" /></div>
      <div className="project-card">
        <div className="project-card-description">
          <div className="link-and-icon-container">
            <img className="project-small-icon" alt="Project Small Icon" src={iconURL} />
            <h1 className="external-link">
              <a href={projectDetailsURL}>{projectName}</a>
              <img
                src={ArrowUpRight} alt="Arrow Up Right"
                style={{
                  filter: 'invert(100%)',
                  width: '0.8em', height: '0.8em',
                  marginLeft: '10px'
                }}
              />
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