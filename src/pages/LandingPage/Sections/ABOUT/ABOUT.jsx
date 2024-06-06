import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

// Styles
import './ABOUT.css';

// Components
import SocialMediaIcons from '../../../../components/SocialMediaIcons/SocialMediaIcons';
import LocalTime from '../../../../components/LocalTime';
import GathreanIcon from '../../../../assets/icons/project-icons/gathrean-Icon.png';

// Data
import aboutTexts from './aboutTexts.json';

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
            <p>{aboutTexts.personalInterestsAndValues}</p>

            <h4>Skills and Technologies</h4>
            <p>{aboutTexts.skillsAndTechnologies}</p>

            <h4>Education and Publications</h4>
            <p>
              {aboutTexts.educationAndCertifications}
            </p>
            <p>
              <b>{aboutTexts.education.diploma}</b><br />
              {aboutTexts.education.school}<br />
              {aboutTexts.education.duration}<br />
              <a href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/">Program Details</a>
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