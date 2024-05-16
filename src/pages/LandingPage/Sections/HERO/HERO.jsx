import React, { useState, useEffect, useRef } from 'react';

// Styles
import './button.css';
import './HERO.css'

// Icons
import LinkedInIcon from '../../../../assets/icons/linkedin.png';
import GitHubIcon from '../../../../assets/icons/github.png';
import DownloadIcon from '../../../../assets/icons/download.png';
import ArrowUpRight from '../../../../assets/icons/arrow-up-right.svg';

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
        <div className="hero-button animation" onClick={() => handleClick('Resume')}>
          Resumé
          <img src={ArrowUpRight} alt="Arrow Up Right" style={{ width: '1em', height: '1em', marginLeft: '10px' }} />
        </div>
        <div className="bottom-buttons-container">
          <div className="icon-button" onClick={() => handleClick('LinkedIn')}>
            <img
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              width="22px"
              height="22px"
              style={{ marginRight: '10px' }}
            />
          </div>
          <div className="icon-button" onClick={() => handleClick('GitHub')}>
            <img
              src={GitHubIcon}
              alt="GitHub Icon"
              width="22px"
              height="22px"
              style={{ marginRight: '10px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HERO;