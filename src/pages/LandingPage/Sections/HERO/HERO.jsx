import React, { useRef } from 'react';

// Components
import SocialMediaIcons from '../../../../components/SocialMediaIcons/SocialMediaIcons';
import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRight';
import heroImage from './image.JPG';

// Styles
import './HERO.css';

const HERO = () => {
  const overlayRef = useRef(null);
  const resumeURL = '/Gathrean_DelaCruz__Resume.pdf';

  return (
    <div className="hero-container">
      <div className="text-container hero-animation">
        <div ref={overlayRef} className="overlay-text">
          <h1>
            <span>Gathrean Dela Cruz</span>
          </h1>
          <h4>Software Developer</h4>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={heroImage} alt="Gathrean Dela Cruz" className="hero-image" />
      </div>

      <div className="buttons-container">
        <div className="external-link">
          <ArrowRightIcon />
          <a href={resumeURL} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', color: 'white' }}>View Resumé</a>
        </div>

        <div className="bottom-buttons-container">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default HERO;