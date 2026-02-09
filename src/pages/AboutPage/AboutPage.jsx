import React from 'react';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';
import { ExternalButton } from '../../components/ExternalButton/ExternalButton';
import { GlobeIcon } from '../../components/Icons/LinkIcons';
import image1 from './images/2023-Jasper.JPG';
import image2 from './images/2024-Fireworks.JPG';
import image3 from './images/2025-Islands.JPG';
import image4 from './images/2025-Desktop.JPG';

import './AboutPage.css';

export function AboutPage() {
  return (
    <div className="page about-page">

      {/* Intro section */}
      <h1>Gathrean</h1>
      <p className="subtitle">(/ˈɡɑːθriɪn/ • GAH-three-yin)</p>
      <p>ᜄᜇ᜔ᜍᜒᜌᜈ᜔</p>
      <hr className="divider-mini" />

      <div className="about-philosophy">
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
      <div className="row">
        <h2>Experience</h2>
        <ExternalButton href="/Gathrean_DelaCruz__Resume.pdf" tooltip="Last updated October 2024">Resume</ExternalButton>
      </div>

      <div className="row-list">
        <div className="row-baseline">
          <span className="bold-label">Ongoing</span>
          <span>Tuwina Tech (Founder)</span>
        </div>
        <div className="row-baseline">
          <span className="bold-label">2025</span>
          <span>Freelance</span>
        </div>
        <div className="row-baseline">
          <span className="bold-label">2024</span>
          <span>BCIT Graduate</span>
        </div>
      </div>

      <hr className="divider" />

      {/* Academia section */}
      <h2>Academia</h2>

      <div className="content-block">
        <h4>Computer Systems Technology, Diploma</h4>
        <p className="bold-label">British Columbia Institute of Technology</p>
        <p className="meta-text">September 2022 - June 2024</p>
        <p>- Graduated with Distinction, hands-on training in software development, networking, and systems design.</p>
        <p>- Completed projects in full-stack development, mobile app development, and cloud computing, using languages such as Java, C, C++, and C#.</p>
        <p>- Developed strong collaboration and problem-solving skills through team-based and real-world technical challenges, simulating professional environments.</p>
        <ExternalLink href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/" icon={<GlobeIcon />}>
          More info about BCIT CST Diploma
        </ExternalLink>
      </div>

    </div>
  );
}
