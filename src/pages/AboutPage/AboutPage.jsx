import React from 'react';
import ArrowRightIcon from '../../components/ArrowRight/ArrowRightBlack';
import image1 from './2023-Jasper.JPG';
import image2 from './2024-Fireworks.JPG';
import image3 from './2025-Islands.JPG';
import image4 from './2025-Desktop.JPG';

import './AboutPage.css';

export function AboutPage() {
  return (
    <div className="about-page">

      {/* Intro section */}
      <h1 className="about-name">Gathrean</h1>
      <p className="about-pronunciation">(/ˈɡɑːθriɪn/ • GAH-three-yin)</p>

      <div className="about-philosophy">
        <p>ᜄᜇ᜔ᜍᜒᜌᜈ᜔</p>
        <p><em>a creative, a builder, an optimizer</em></p>
        <p>To me, good software should feel invisible;<br></br>Present when you need it, out of the way when you don't.</p>
        <p>Tech. Music. Art.<br></br>I find myself gravitating towards projects where form meets function, regardless of its medium.</p>
        <p>Always learning,<br></br>always building,<br></br>always asking 'how could this be better?'</p>
        <p>The future is constantly now.</p>
      </div>

      {/* Photo gallery */}
      <div className="about-photos">
        <figure className="about-photo-wrap">
          <img src={image1} alt="Jasper 2023" className="about-photo" />
          <figcaption className="about-photo-caption">Jasper, Canada 2023</figcaption>
        </figure>
        <figure className="about-photo-wrap">
          <img src={image2} alt="Fireworks 2024" className="about-photo" />
          <figcaption className="about-photo-caption">Vancouver, Canada 2024</figcaption>
        </figure>
        <figure className="about-photo-wrap">
          <img src={image3} alt="Islands 2025" className="about-photo" />
          <figcaption className="about-photo-caption">Hundred Islands, Philippines 2025</figcaption>
        </figure>
        <figure className="about-photo-wrap">
          <img src={image4} alt="Desk setup" className="about-photo" />
          <figcaption className="about-photo-caption">My home</figcaption>
        </figure>
      </div>

      {/* Experience section */}
      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
        <a className="resume-btn" href="/Gathrean_DelaCruz__Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
        </a>
      </div>

      <div className="experience-list">
        <div className="experience-row">
          <span className="experience-year">Ongoing</span>
          <span className="experience-role">Tuwina Tech (Founder)</span>
        </div>
        <div className="experience-row">
          <span className="experience-year">2025</span>
          <span className="experience-role">Freelance</span>
        </div>
        <div className="experience-row">
          <span className="experience-year">2024</span>
          <span className="experience-role">BCIT Graduate - Computer Systems Technology</span>
        </div>
      </div>

      <hr className="about-divider" />

      {/* Academia section */}
      <h2 className="about-section-heading">Academia</h2>

      <div className="academia-item">
        <h3 className="academia-title">Computer Systems Technology, Diploma</h3>
        <p className="academia-org">British Columbia Institute of Technology</p>
        <p className="academia-date">September 2022 - June 2024</p>
        <ul className="academia-list">
          <li>Graduated with Distinction, hands-on training in software development, networking, and systems design.</li>
          <li>Completed projects in full-stack development, mobile app development, and cloud computing, using languages such as Java, C, C++, and C#.</li>
          <li>Developed strong collaboration and problem-solving skills through team-based and real-world technical challenges, simulating professional environments.</li>
        </ul>
        <a className="about-link" href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/" target="_blank" rel="noopener noreferrer">
          <ArrowRightIcon />
          More info about BCIT CST Diploma
        </a>
      </div>

      {/* Research section */}
      <h2 className="about-section-heading">Research Papers &amp; Conferences</h2>

      <div className="academia-item">
        <h3 className="academia-title">AIM 2024: Artificial Intelligence Conference</h3>
        <p className="academia-org">San Francisco, California, United States of America</p>
        <p className="academia-date">June 9-11, 2024</p>
        <ul className="academia-list">
          <li>In-person conference</li>
          <li>Presented our research paper on Multi-Instrument Recognition Neural Networks as a poster to professors and authors from top universities, including UCLA and UC Berkeley.</li>
          <li>Networked with leading researchers and industry professionals.</li>
          <li>Research paper to be published by AIM by the end of the year.</li>
        </ul>
        <a className="about-link" href="https://artificialintelligence.unitedscientificgroup.org/2024/home" target="_blank" rel="noopener noreferrer">
          <ArrowRightIcon />
          More info about AIM 2024 Conference
        </a>
      </div>

      <div className="academia-item">
        <h3 className="academia-title">WSAI 2024 @ 人工智能专题讨论会</h3>
        <p className="academia-org">Guangzhou, Guangdong, China</p>
        <p className="academia-date">June 7-9, 2024</p>
        <ul className="academia-list">
          <li>Virtual Conference</li>
          <li>Represented BCIT and presented our group's research on a Multi-Instrument Recognition Neural Network.</li>
          <li>Awarded "Excellent Oral Presentation" for our contributions.</li>
          <li>Research paper to be published by WSAI by the end of the year.</li>
        </ul>
        <a className="about-link" href="https://wsai.org/wsai24.html" target="_blank" rel="noopener noreferrer">
          <ArrowRightIcon />
          More info about WSAI 2024 Conference
        </a>
      </div>

    </div>
  );
}
