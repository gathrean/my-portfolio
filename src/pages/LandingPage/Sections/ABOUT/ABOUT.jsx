import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

// Styles
import './ABOUT.css';

// Components
import SocialMediaIcons from '../../../../components/SocialMediaIcons';
import LocalTime from '../../../../components/LocalTime';
import GathreanIcon from '../../../../assets/icons/project-icons/gathrean-Icon.png';

export function ABOUT() {
  const [emailMessage, setEmailMessage] = useState('📧 gathrean@icloud.com');

  const handleEmailClick = () => {
    navigator.clipboard.writeText('gathrean@icloud.com')
      .then(() => {
        setEmailMessage('💡 Email copied to clipboard!');
        setTimeout(() => {
          setEmailMessage('📧 gathrean@icloud.com');
        }, 2000);
      })
      .catch(err => {
        console.error('😵 Failed to copy email: ', err);
      });
  };

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
    <div className="section-container">
      <hr />
      <h1>About Me</h1>
      <p>This is my lore</p>
      <div className="section-container-child">
        <div className="about-me-container">
          <div className="about-me-info-container">
            <div className="about-me-images">
              <img src={GathreanIcon} alt="Gathrean" />
            </div>
            <br />
            <div className="about-me-info">
              <h3>Gathrean Dela Cruz</h3>
              <p><b>Software Developer</b></p>
              <p>🇨🇦 Vancouver, BC, Canada</p>
              <p>⌚️ <LocalTime /></p>
              <p onClick={handleEmailClick} style={{ cursor: 'pointer' }}>{emailMessage}</p>
              <div className="social-media-icons">
                <SocialMediaIcons />
              </div>
            </div>
          </div>
          <div className="about-me-text">
            <h4>Personal Interests and Values</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam orci risus, varius nec nisi a, consectetur iaculis nibh.
              Vivamus sollicitudin rutrum consequat. Sed ligula purus, convallis sed sagittis ut, lobortis vitae mauris.
              In quis bibendum ante. Praesent pellentesque luctus elit a consequat. Nulla facilisi.
            </p>
            <h4>Skills and Technologies</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam orci risus, varius nec nisi a, consectetur iaculis nibh.
              Vivamus sollicitudin rutrum consequat. Sed ligula purus, convallis sed sagittis ut, lobortis vitae mauris.
              In quis bibendum ante. Praesent pellentesque luctus elit a consequat. Nulla facilisi.
            </p>
            <h4>Education and Certifications</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam orci risus, varius nec nisi a, consectetur iaculis nibh.
              Vivamus sollicitudin rutrum consequat. Sed ligula purus, convallis sed sagittis ut, lobortis vitae mauris.
              In quis bibendum ante. Praesent pellentesque luctus elit a consequat. Nulla facilisi.
            </p>
            <div className="github-calendar-container">
              <div className="github-calendar">
                <a href="https://github.com/gathrean" target="_blank" rel="noopener noreferrer">
                  <GitHubCalendar username="gathrean" blockSize={16} blockMargin={4} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}