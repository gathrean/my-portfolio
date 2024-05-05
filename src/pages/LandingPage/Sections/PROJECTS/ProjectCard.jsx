import React from 'react';

import './PROJECTS.css';

function ProjectCard({ projectName, imageURL, keywords, date, description, backgroundColor }) {
  const keywordArray = keywords.split(',').map(keyword => keyword.trim());

  const cardStyle = {
    backgroundColor: backgroundColor || '#FFFFFF',
    color: backgroundColor ? '#FFFFFF' : '#000000',
  };

  return (
    <div className="project-card" style={cardStyle}>
      
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

      <h1 style={{ color: backgroundColor ? '#FFFFFF' : '#000000' }}>{projectName}</h1>
      <h3 style={{ color: backgroundColor ? '#FFFFFF' : '#4b4b4b' }}>{date}</h3>

      <div className="keywords">
        {keywordArray.map((keyword, index) => (
          <span key={index} className="keyword">{keyword}</span>
        ))}
      </div>

      <p style={{ color: backgroundColor ? '#FFFFFF' : '#616161' }}>{description}</p>
      <a href="#" className="read-more-link">Read more</a>
    </div>
  );
}

export default ProjectCard;