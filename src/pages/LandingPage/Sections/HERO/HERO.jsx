import React, { useState, useEffect, useRef } from 'react';

import './button.css';
import './HERO.css'

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
            Resume
          </div>
          <div className="bottom-buttons-container">
            <div className="hero-button" onClick={() => handleClick('LinkedIn')}>
              LinkedIn
            </div>
            <div className="hero-button" onClick={() => handleClick('GitHub')}>
              GitHub
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HERO;
