import React from 'react';

// Styles
import './ABOUT.css';

// Components
import MyProfile from '../../MyProfile/MyProfile';
import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRightBlack';

// Data
import aboutTexts from './aboutTexts.json';

export function ABOUT() {
  return (
    <div className="section-container">
      <hr />
      <h1>About Me</h1>
      <p>Here's a bit about me: a passionate software developer committed to continuous learning and innovation.</p>
      <div className="section-container-child">
        <div className="about-me-container">
          <MyProfile />
          <div>
            <h4>Personal Interests and Values</h4>
            <div className="about-cards">
              I remember being a kid in 2008 and always wondered how websites and games were created. Fast forward to 2024, I've gone through a 2-year program in BCIT and I've understood the process of OOP and Web Dev. I've gone on and created my own games with my peers and designing websites for a variety of projects.
              <br /> <br />
              The most important thing I've learned during my time in academia is that there is truly strength in numbers and that the project succeeds when everyone is on the same page as well as using their best strengths and skills in their right positons in the team.
              <br /> <br />
              Back in 2015 I've also found interest in music production and graphic design. When I got my first MacBook Pro back in 2017, I went ham and progressed a lot in those two. I believe those skills have enhanced my creativity in coding and development
              <br /> <br />
              in my free time I love to spend time with my family and friends, enjoy nature in hikes, and of course music production, graphic design, and learning more things in coding
              <br /> <br />
              the thing i love about coding is that there is always something to learn.
            </div>

            <br />
            <h4>Skills and Technologies</h4>
            <div className="about-cards">{aboutTexts.skillsAndTechnologies}</div>

            <br />
            <h4>Education and Publications</h4>

            <div className="about-cards">
              <h5>{aboutTexts.bcit.diploma}</h5>
              <p>{aboutTexts.bcit.location}</p>
              <p>{aboutTexts.bcit.school}</p>
              <p>{aboutTexts.bcit.duration}</p>
              <ul>
                <li>{aboutTexts.bcit.desc1}</li>
                <li>{aboutTexts.bcit.desc2}</li>
                <li>{aboutTexts.bcit.desc3}</li>
              </ul>
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
          </div>
        </div>
      </div>
    </div>
  );
}