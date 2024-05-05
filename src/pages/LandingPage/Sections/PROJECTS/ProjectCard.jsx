import React from 'react';

import './PROJECTS.css';

function ProjectCard({ projectName, imageURL, keywords, date, description, }) {
  const keywordArray = keywords.split(',').map(keyword => keyword.trim());

  return (
    <div className="project-card">

      <a href="#placeholder" className="header-image-link">
        <div className="header-image">
          <img src={imageURL} alt={projectName} />
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
      <h3>{date}</h3>

      <div className="keywords">
        {keywordArray.map((keyword, index) => (
          <span key={index} className="keyword">{keyword}</span>
        ))}
      </div>

      <p >{description}</p>
      <a href="#" className="read-more-link">Read more</a>
    </div>
  );
}

export default ProjectCard;