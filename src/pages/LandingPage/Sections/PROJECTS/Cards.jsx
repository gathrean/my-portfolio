import React from 'react';

import './PROJECTS.css';
import './Cards.css';

function ProjectCard({ projectName, imageURL, keywords, date, description }) {

  const keywordArray = keywords.split(',').map(keyword => keyword.trim());

  const keywordColors = {
    "HTML": "#DA4E25",
    "CSS": "#244DDF",
    "JavaScript": "#E8D44D",
    "Python": "#4B8BBE",
    "TensorFlow": "#FF6F00",
    "PyTorch": "#EE4C2C",
    "EJS": "#8A5DA0",
    "Bootstrap": "#7952B3",
    "Node.js": "#68A063",
    "Express.js": "#000000",
    "Leaflet API": "#199900",
    "MongoDB": "#4DB33D",
    "Firebase": "#FFCA28",
    "Java": "#896157",
    "Kotlin": "#0095D5",
    "AndroidStudio": "#3DDC84",
    "PokeAPI": "#F44336",
    "Vite": "#646CFF",
    "Supabase": "#3EC8AC",
    "IntelliJ": "#0777F1",
    "Java Processing": "#006699",
    "Gradle": "#02303A",
    "ChatGPT API": "#75A99B",
    "React": "#61DAFB",
    "default": "#E2E2E2"
  };

  // Function to determine text color based on background color luminance
  // (Black text for light backgrounds, white text for dark backgrounds)
  const getTextColor = (color) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

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
      <p>{description}</p>
      <a href="#" className="read-more-link">Read more</a>

      <hr style={{ height: '0.5px', border: 'none', backgroundColor: '#00000040' }} />

      <p>Keywords:</p>
      <div className="keywords">
        {keywordArray.map((keyword, index) => {
          const backgroundColor = keywordColors[keyword] || keywordColors['default'];
          const textColor = getTextColor(backgroundColor);
          return (
            <span
              key={index}
              className="keyword"
              style={{ backgroundColor: backgroundColor, color: textColor }}
            >
              {keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;