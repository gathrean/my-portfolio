import React from 'react';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';
import { ExternalButton } from '../../components/ExternalButton/ExternalButton';
import image1 from './images/2023-Jasper.JPG';
import image2 from './images/2024-Fireworks.JPG';
import image3 from './images/2025-Islands.JPG';
import image4 from './images/2025-Desktop.JPG';
import photoAIM1 from './images/2024-AIM.jpeg';
import photoWSAI1 from './images/imageWSAI1.jpg';
import photoWSAI2 from './images/imageWSAI2.jpg';
import photoWSAI3 from './images/imageWSAI3.jpg';

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
        <ExternalButton href="/Gathrean_DelaCruz__Resume.pdf">Resume</ExternalButton>
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
        <ExternalLink href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/">
          More info about BCIT CST Diploma
        </ExternalLink>
      </div>

      <hr className="divider" />

      {/* Research section */}
      <h2>Research Papers &amp; Conferences</h2>
      <hr className="divider-mini" />

      <div className="content-block">
        <h4>AIM 2024: Artificial Intelligence Conference</h4>
        <p className="bold-label">San Francisco, California, United States of America</p>
        <p className="meta-text">June 9-11, 2024</p>
        <div className="conference-photos">
          <img src={photoAIM1} alt="Gathrean at AIM 2024 Conference in San Francisco" className="conference-photo" />
        </div>
        <p>- In-person conference</p>
        <p>- Presented our research paper on Multi-Instrument Recognition Neural Networks as a poster to professors and authors from top universities, including UCLA and UC Berkeley.</p>
        <p>- Networked with leading researchers and industry professionals.</p>
        <p>- Research paper published by AIM by the end of the year.</p>

        <ExternalLink href="https://artificialintelligence.unitedscientificgroup.org/2024/home">
          More info about AIM 2024 Conference
        </ExternalLink>
        <br></br>
        <ExternalLink href="https://www.linkedin.com/posts/bcitcomputing_congratulations-to-computer-systems-technology-activity-7209714610659053568-zO6U?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADHvIOoBFhkrlhe0JkXwxK6xZQYoSo88__4">
          BCIT Computing congratulating my team and I on LinkedIn
        </ExternalLink>
      </div>

      <hr className="divider-mini" />

      <div className="content-block">
        <h4>WSAI 2024 @ 人工智能专题讨论会</h4>
        <p className="bold-label">Guangzhou, Guangdong, China</p>
        <p className="meta-text">June 7-9, 2024</p>
        <div className="conference-photos">
          <img src={photoWSAI1} alt="WSAI 2024 virtual presentation" className="conference-photo" />
          <img src={photoWSAI2} alt="WSAI 2024 team on Zoom" className="conference-photo" />
          <img src={photoWSAI3} alt="WSAI 2024 group session" className="conference-photo" />
        </div>
        <p>- Virtual Conference.</p>
        <p>- Represented BCIT and presented our group's research on a Multi-Instrument Recognition Neural Network.</p>
        <p>- Awarded "Excellent Oral Presentation" for our contributions.</p>
        <p>- Research paper published by IEEE and added to IEEE Xplore on January 7, 2025</p>

        <ExternalLink href="https://wsai.org/wsai24.html">
          More info about WSAI 2024 Conference
        </ExternalLink>
        <br></br>
        <ExternalLink href="https://ieeexplore.ieee.org/document/10829201">
          Read "Multi-Instrument Recognition Neural Network" on IEEE Xplore
        </ExternalLink>
      </div>

    </div>
  );
}
