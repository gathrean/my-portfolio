import React, { useState, useEffect, useRef } from 'react';

// Styles
import './button.css';
import './HERO.css'

// Icons
import LinkedInIcon from './icons/linkedin.png';
import GitHubIcon from './icons/github.png';
import DownloadIcon from './icons/download.png';

const HERO = () => {
  const overlayRef = useRef(null);

  function handleClick(buttonType) {
    switch (buttonType) {
      case 'Resume':
        window.open('resumeURL', '_blank');
        break;
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/gathrean/', '_blank');
        break;
      case 'GitHub':
        window.open('https://github.com/gathrean', '_blank');
        break;
      default:
        break;
    }
  }

  return (
    <div className="overlay-container">
      <div className="text-container hero-animation">
        <div ref={overlayRef} className="overlay-text">
          <h1>
            <span>Gathrean Dela Cruz</span>
          </h1>
          <h3>Software & Web Developer</h3>
        </div>
      </div>

      <div className="buttons-container">
        <div className="hero-button" onClick={() => handleClick('Resume')}>
          <img
            src={DownloadIcon}
            alt="Download Icon"
            width="22px"
            height="22px"
            style={{ marginRight: '10px' }}
          />
          Resumé
        </div>
        <div className="bottom-buttons-container">
          <div className="hero-button" onClick={() => handleClick('LinkedIn')}>
            <img
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              width="22px"
              height="22px"
              style={{ marginRight: '10px' }}
            />
            LinkedIn
          </div>
          <div className="hero-button" onClick={() => handleClick('GitHub')}>
            <img
              src={GitHubIcon}
              alt="GitHub Icon"
              width="22px"
              height="22px"
              style={{ marginRight: '10px' }}
            />
            GitHub
          </div>
        </div>
      </div>
    </div>
  );
};

export default HERO;