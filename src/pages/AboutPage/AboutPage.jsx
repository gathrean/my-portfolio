import React from 'react';
import ArrowRightIcon from '../../components/ArrowRight/ArrowRightBlack';
import desktopImage from './2025-Desktop.JPG';

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
        <p>To me, good software should feel invisible; Present when you need it, out of the way when you don't.</p>
        <p>Tech. Music. Art. I'm drawn to projects where form meets function.</p>
        <p>Always learning,</p>
        <p>Always building,</p>
        <p>Always asking 'how could this be better?'</p>
        <p>The future is constantly now.</p>
      </div>

      <img src={desktopImage} alt="Gathrean's Desk Setup'" className="desktop-image" />

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
