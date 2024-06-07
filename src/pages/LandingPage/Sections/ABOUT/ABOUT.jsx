// ABOUT.js
import React from 'react';

// Styles
import './ABOUT.css';

// Components
import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRightBlack';

// Data
import Texts from '../../Texts.json';

export function ABOUT() {
  return (
    <div className="section-container">
      <hr />
      <h1>About Me</h1>
      <p>Here's a bit about me: a passionate software developer committed to continuous learning and innovation.</p>
      <br />
      <div className="section-container-child">

          <div className="card-container">

            <h3>Personal Interests and Values</h3>
            <div className="card">
              I remember being a kid in 2008 and always wondered how websites and games were created. Fast forward to 2024, I've gone through a 2-year program in BCIT and I've understood the process of OOP and Web Dev. I've gone on and created my own games with my peers and designing websites for a variety of projects.
              <br /> <br />
              The most important thing I've learned during my time in academia is that there is truly strength in numbers and that the project succeeds when everyone is on the same page as well as using their best strengths and skills in their right positions in the team.
              <br /> <br />
              Back in 2015 I've also found interest in music production and graphic design. When I got my first MacBook Pro back in 2017, I went ham and progressed a lot in those two. I believe those skills have enhanced my creativity in coding and development
              <br /> <br />
              in my free time I love to spend time with my family and friends, enjoy nature in hikes, and of course music production, graphic design, and learning more things in coding
              <br /> <br />
              the thing i love about coding is that there is always something to learn.
            </div>

            <br />
            <h3>Skills and Technologies</h3>
            <div className="card">{Texts.skillsAndTechnologies}</div>

            <br />

          </div>
        </div>
      </div>
  );
}