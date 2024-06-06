import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

// Styles
import './ABOUT.css';

// Components
import SocialMediaIcons from '../../../../components/SocialMediaIcons/SocialMediaIcons';
import LocalTime from '../../../../components/LocalTime';
import GathreanIcon from '../../../../assets/icons/project-icons/gathrean-Icon.png';
import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRightBlack';

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

          <div>
            <h4>Personal Interests and Values</h4>
            <div className="about-cards">{aboutTexts.personalInterestsAndValues}</div>

            <h4>Skills and Technologies</h4>
            <div className="about-cards">{aboutTexts.skillsAndTechnologies}</div>

            <h4>Education and Publications</h4>

            <div className="about-cards">
              <h5>{aboutTexts.bcit.diploma}</h5>
              <p>{aboutTexts.bcit.location}</p>
              <p>{aboutTexts.bcit.school}</p>
              <p>{aboutTexts.bcit.duration}</p>
              <div className="small-link-container">
                <a className="external-link small-link" href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/">
                  More info about BCIT CST Diploma
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

            <div className="about-cards">
              <h5>{aboutTexts.aim.name}</h5>
              <p>{aboutTexts.aim.location}</p>
              <p>{aboutTexts.aim.date} </p>
              <ul>
                <li>{aboutTexts.aim.type}</li>
                <li>{aboutTexts.aim.description}</li>
              </ul>
              <div className="small-link-container">
                <a className="external-link small-link" href="https://artificialintelligence-conference.com/">
                  More info about AIM Conference
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

            <div className="about-cards">
              <h5>{aboutTexts.wsai.name}</h5>
              <p>{aboutTexts.wsai.location}</p>
              <p>{aboutTexts.wsai.date} </p>
              <ul>
                <li>{aboutTexts.wsai.type}</li>
                <li>{aboutTexts.wsai.description}</li>
              </ul>
              <div className="small-link-container">
                <a className="external-link small-link" href="https://wsai.org/">
                  More info about WSAI Conference<ArrowRightIcon />
                </a>
              </div>
            </div>

            <div className="github-calendar-container">
              <div className="github-calendar">
                <a href="https://github.com/gathrean" target="_blank" rel="noopener noreferrer">
                  <GitHubCalendar username="gathrean" blockSize={16} blockMargin={4} className="react-github-calendar" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}