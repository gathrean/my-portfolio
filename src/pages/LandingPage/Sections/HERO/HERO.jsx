import React, { useRef } from 'react';

// Components
import SocialMediaIcons from '../../../../components/SocialMediaIcons/SocialMediaIcons';
import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRight';

// Styles
import './HERO.css';

const HERO = () => {
  const overlayRef = useRef(null);

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

      <div className="buttons-container">
        <div className="external-link">
          <ArrowRightIcon />
          <a href="resumeURL" style={{ cursor: 'pointer', color: 'white' }}>View Resumé</a>
        </div>

        <div className="bottom-buttons-container">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default HERO;