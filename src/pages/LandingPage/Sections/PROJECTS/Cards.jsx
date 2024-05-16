import React from 'react';

import './PROJECTS.css';

import ArrowUpRight from '../../../../assets/icons/arrow-up-right.svg';

function ProjectCard({
  projectName, imageURL, keywords, date, description, projectDetailsURL
}) {

  return (
    <div className="project-card">

      <div className="header-image">
        <img src={imageURL} alt={projectName} />
      </div>

      <div className="project-card-description">
        <h1 className="external-link">
          <a href={projectDetailsURL}>{projectName}</a>
          <img
            src={ArrowUpRight}
            alt="Arrow Up Right"
            style={{
              filter: 'invert(100%)',
              width: '0.8em',
              height: '0.8em',
              marginLeft: '10px'
            }}
          />
        </h1>

        <h3>{date}</h3>
        <p>{description}</p>

      </div>
    </div>
  );
}

export default ProjectCard;