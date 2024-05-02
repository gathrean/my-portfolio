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

  function handleClick() {
    console.log('Button clicked!');
  }

  return (
    <div className="carousel-content">

      <div className="image-container">
        <img src={process.env.PUBLIC_URL + images[currentImage]} alt="Landing Page" className="landing-image" />
      </div>

      <div className="overlay-container hero-animation">
        
        <div className="text-container">
          <div ref={overlayRef} className="overlay-text">
            <h2>Hey, I am</h2>
            <h1>Gathrean Dela Cruz</h1>
            <h3>Software & Web Developer.</h3>
          </div>
        </div>

        <div className="buttons-container">
          <div>
            <div className="hero-button" onClick={handleClick}>
              Resume
            </div>
            <div className="hero-button" onClick={handleClick}>
              LinkedIn
            </div>
            <div className="hero-button" onClick={handleClick}>
              GitHub
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HERO;
