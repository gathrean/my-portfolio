import React from 'react';

import './PROJECTS.css';
import './Cards.css';

function ProjectCard({ projectName, imageURL, keywords, date, description }) {

  const keywordArray = keywords.split(',').map(keyword => keyword.trim());

  const whiteText = "#fff";
  const blackText = "#000";

  const keywordColors = {
    "HTML": { background: "#DA4E25", text: whiteText },
    "CSS": { background: "#244DDF", text: whiteText },
    "JavaScript": { background: "#E8D44D", text: blackText },
    "Python": { background: "#4B8BBE", text: whiteText },
    "TensorFlow": { background: "#FF6F00", text: whiteText },
    "PyTorch": { background: "#EE4C2C", text: whiteText },
    "EJS": { background: "#8A5DA0", text: whiteText },
    "Bootstrap": { background: "#7952B3", text: whiteText },
    "Node.js": { background: "#68A063", text: whiteText },
    "Express.js": { background: "#F2C621", text: blackText },
    "Leaflet API": { background: "#199900", text: whiteText },
    "MongoDB": { background: "#4DB33D", text: whiteText },
    "Firebase": { background: "#FFCA28", text: blackText },
    "Java": { background: "#896157", text: whiteText },
    "Kotlin": { background: "#C220D8", text: whiteText },
    "AndroidStudio": { background: "#A8C840", text: blackText },
    "PokeAPI": { background: "#F44336", text: whiteText },
    "Vite": { background: "#646CFF", text: whiteText },
    "Supabase": { background: "#3EC8AC", text: whiteText },
    "IntelliJ": { background: "#0777F1", text: whiteText },
    "Java Processing": { background: "#006699", text: whiteText },
    "Gradle": { background: "#02303A", text: whiteText },
    "ChatGPT API": { background: "#75A99B", text: whiteText },
    "React": { background: "#61DAFB", text: blackText },
    "default": { background: "#E2E2E2", text: blackText }
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