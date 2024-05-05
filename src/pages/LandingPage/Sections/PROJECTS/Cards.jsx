import React from 'react';

import './PROJECTS.css';
import './Cards.css';

function ProjectCard({ projectName, imageURL, keywords, date, description }) {

  const keywordArray = keywords.split(',').map(keyword => keyword.trim());

  const keywordColors = {
    "HTML": { background: "#DA4E25", text: "#fff" },
    "CSS": { background: "#244DDF", text: "#fff" },
    "JavaScript": { background: "#E8D44D", text: "#000" },
    "Python": { background: "#4B8BBE", text: "#fff" },
    "TensorFlow": { background: "#FF6F00", text: "#fff" },
    "PyTorch": { background: "#EE4C2C", text: "#fff" },
    "EJS": { background: "#8A5DA0", text: "#fff" },
    "Bootstrap": { background: "#7952B3", text: "#fff" },
    "Node.js": { background: "#68A063", text: "#fff" },
    "Express.js": { background: "#F2C621", text: "#000" },
    "Leaflet API": { background: "#199900", text: "#fff" },
    "MongoDB": { background: "#4DB33D", text: "#fff" },
    "Firebase": { background: "#FFCA28", text: "#000" },
    "Java": { background: "#896157", text: "#fff" },
    "Kotlin": { background: "#C220D8", text: "#FFFFFF" },
    "AndroidStudio": { background: "#A8C840", text: "#000" },
    "PokeAPI": { background: "#F44336", text: "#fff" },
    "Vite": { background: "#646CFF", text: "#fff" },
    "Supabase": { background: "#3EC8AC", text: "#fff" },
    "IntelliJ": { background: "#0777F1", text: "#fff" },
    "Java Processing": { background: "#006699", text: "#fff" },
    "Gradle": { background: "#02303A", text: "#fff" },
    "ChatGPT API": { background: "#75A99B", text: "#fff" },
    "React": { background: "#61DAFB", text: "#000" },
    "default": { background: "#E2E2E2", text: "#000" }
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

      <a href="#" className="read-more-button">Read more</a>

      <hr style={{ height: '0.5px', border: 'none', backgroundColor: '#00000040' }} />

      <p>Keywords:</p>
      <div className="keywords">
        {keywordArray.map((keyword, index) => {
          const { background, text } = keywordColors[keyword] || keywordColors['default'];
          return (
            <span
              key={index}
              className="keyword"
              style={{ backgroundColor: background, color: text }}
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