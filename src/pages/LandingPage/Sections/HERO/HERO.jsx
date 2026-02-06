import React from 'react';
import heroImage from './2025-10-16-Gathrean.jpg';

// Styles
import './HERO.css';

const BIRTHDAY = new Date(2000, 10, 20); // Nov 20, 2000 (month is 0-indexed)
const RESUME_URL = '/Gathrean_DelaCruz__Resume.pdf';
const LINKEDIN_URL = 'https://www.linkedin.com/in/gathrean/';
const GITHUB_URL = 'https://github.com/gathrean';
const TWITTER_URL = 'https://x.com/gathrean';

function getAge() {
  const today = new Date();
  let age = today.getFullYear() - BIRTHDAY.getFullYear();
  const monthDiff = today.getMonth() - BIRTHDAY.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < BIRTHDAY.getDate())) {
    age--;
  }
  return age;
}

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ResumeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const HERO = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img src={heroImage} alt="Gathrean Dela Cruz" className="hero-image" />
      </div>

      <div className="hero-text">
        <h1 className="hero-name"><span className="hero-name-text">Gathrean Dela Cruz, {getAge()}</span></h1>
        <p className="hero-subtitle">Software Developer</p>

        <p className="hero-bio">
          I am a software developer with a passion for building reliable productivity apps. I like tech, finance, music, and arts.
        </p>
        <br />
        <p className="hero-bio">
          Currently exploring iOS development and AI-powered tooling.
        </p>
        <br />
        <p className="hero-bio">
          When I'm not coding, I'm probably editing photos or making beats on Ableton.
        </p>

        <div className="hero-links">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="hero-link">
            <ResumeIcon />
            <span>Resume</span>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hero-link">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hero-link">
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hero-link">
            <XIcon />
            <span>Twitter / X</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HERO;
