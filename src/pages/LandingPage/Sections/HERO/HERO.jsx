import React, { useState, useEffect, useRef } from 'react';

import './button.css';
import './HERO.css'

// import { LinkedInIcon, GitHubIcon } from '../../../assets/icons';

import LinkedInIcon from './icons/linkedin.png';
import GitHubIcon from './icons/github.png';
import DownloadIcon from './icons/download.png';

const HERO = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Ref for overlay text element
  const overlayRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(intervalId);
  }, [images]);

  function handleClick(buttonType) {
    switch (buttonType) {
      case 'Resume':
        // placeholder for now
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
    <div className="carousel-content">

      <div className="image-container">
        <img src={process.env.PUBLIC_URL + images[currentImage]} alt="Landing Page" className="landing-image" />
      </div>

      <div className="overlay-container hero-animation">

        <div className="text-container">
          <div ref={overlayRef} className="overlay-text">
            <h2>Hello! I am</h2>
            <h1>Gathrean Dela Cruz</h1>
            <h3>Software & Web Developer.</h3>
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
            Resume
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
    </div>
  );
};

export default HERO;