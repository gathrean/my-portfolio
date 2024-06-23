// ABOUT.js
import React from 'react';

// Styles
import './ABOUT.css';

export function ABOUT() {
  return (
    <div className="section-container">
      <hr />
      <h1>About Me</h1>
      <p>Here's a bit about me: a passionate software developer committed to continuous learning and innovation.</p>
      <br />
      <div className="section-container-child">
        <div className="card-container">
          <div className="about-me card">
            <p>
              I remember being a kid in 2008 and always wondered how websites and games were created. Fast forward to 2024, I've completed "Computer Systems Technology", a 2-year program at BCIT, and found my passion in software development.
            </p>
            <h4 className="emojis">🎓  💻 🕹️</h4>
          </div>
          <div className="card">
            <p>
              Beyond coding, I enjoy music production and graphic design- which are hobbies that have helped my creativity and innovation grow in software development. I also enjoy spending time with family and friends, and exploring nature and travelling new cities.
            </p>
            <h4 className="emojis">🎧  🎨  🌁</h4>
          </div>
        </div>
      </div>
    </div >
  );
}