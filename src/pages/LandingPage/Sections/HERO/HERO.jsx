import React, { useRef } from 'react';

// Components
import SocialMediaIcons from '../../../../components/SocialMediaIcons';

// Styles
import './HERO.css';

// Icons
import ArrowUpRight from '../../../../assets/icons/arrow-up-right.svg';

const HERO = () => {
  const overlayRef = useRef(null);

  function handleClick(buttonType) {
    switch (buttonType) {
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
        {/* Resume Button */}
        <div className="external-link">
          <a href="resumeURL" style={{ cursor: 'pointer', color: 'white' }}>View Resumé</a>
          <img
            src={ArrowUpRight} alt="Arrow Up Right"
            style={{ width: '0.8em', height: '0.8em', marginLeft: '10px' }}
          />
        </div>

        <div className="bottom-buttons-container">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default HERO;