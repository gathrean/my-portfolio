import React from 'react';
import './PROJECTS.css';

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
    "IntelliJ": "#000000",
    "Java Processing": "#006699",
    "Gradle": "#02303A",
    "ChatGPT API": "#75A99B",
    "React": "#61DAFB",
    "default": "#373737"
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

      <div className="keywords">
        {keywordArray.map((keyword, index) => (
          <span
            key={index}
            className="keyword"
            style={{ backgroundColor: keywordColors[keyword] || keywordColors['default'] }}
          >
            {keyword}
          </span>
        ))}
      </div>

      <p>{description}</p>
      <a href="#" className="read-more-link">Read more</a>
    </div>
  );
}

export default ProjectCard;