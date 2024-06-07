import React from 'react';
import ProjectCard from './Cards';

import './PROJECTS.css';

// Icons
import GathreanIcon from '../../../../assets/icons/project-icons/gathrean-Icon.png';
import NebulaIcon from '../../../../assets/icons/project-icons/Nebula-Icon.png';
import OrcaSwipeIcon from '../../../../assets/icons/project-icons/OrcaSwipe-Icon.png';
import DungeonQuadIcon from '../../../../assets/icons/project-icons/DungeonQuad-Icon.png';
import CareLinkIcon from '../../../../assets/icons/project-icons/CareLink-Icon.png';
import YapPadIcon from '../../../../assets/icons/project-icons/YapPad-Icon.png';

export function PROJECTS() {
  return (
    <div className="section-container">
      <hr />
      <h1>Featured Projects</h1>
      <p>These are some of the programming projects I've worked on. From social media, to RPG game, to AI. Click on each card to learn more.</p>
      <br />
      <div className="section-container-child">
        <div className="projects-grid">
          <ProjectCard
            projectName="gathrean.com"
            iconURL={GathreanIcon}
            date="April 2024 - June 2024"
            description={
              <>
                • Developed a <b>responsive website</b> using <e>React</e>, <e>JavaScript</e>, <e>HTML</e>, and <e>CSS</e>.
                <br />
                • Implemented <b>React Router</b> for navigation and <b>React Hooks</b> for state management.
                <br />
                • Designed the website with <b>Material-UI</b> and <b>Bootstrap</b>.
                <br />
                • Deployed the website using <b>GitHub Pages</b>.
              </>
            }
            projectDetailsURL="#"
          />
          <ProjectCard
            projectName="Nebula"
            iconURL={NebulaIcon}
            // keywords="HTML, CSS, JavaScript, Python, TensorFlow, PyTorch"
            date="January 2024 - Present"
            description={
              <>
                • Helped in developing an innovative method for <b>recognizing multiple musical instruments in music and audio recordings</b>.
                <br />
                • Used a Convolutional Neural Network (<e>CNN</e>) within an <e>Artificial Neural Network</e> framework and processed the <e>OpenMIC-2018</e> dataset as mel-spectrograms.
                <br />
                • Achieved an <b>F1 score of 56%, setting a new benchmark in the field</b>.
                <br />
                • Designed the <b>Frontend</b> of the website for the project using <e>HTML</e>, <e>CSS</e>, and <e>JavaScript</e>.
              </>
            }
            projectDetailsURL="#"
          />
          <ProjectCard
            projectName="OrcaSwipe"
            iconURL={OrcaSwipeIcon}
            // keywords="EJS, HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, Leaflet API, MongoDB, Firebase, ChatGPT API"
            date="May 2023"
            description={
              <>
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
              </>
            }
            projectDetailsURL="#"
          />
          <ProjectCard
            projectName="DungeonQuad"
            iconURL={DungeonQuadIcon}
            // keywords="Java, IntelliJ, Java Processing, Gradle, MongoDB, OOP Design, Sprite Design, UML Diagram"
            date="January 2023 - April 2023"
            description={
              <>
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
              </>
            }
            projectDetailsURL="#"
          />
          <ProjectCard
            projectName="CareLink"
            iconURL={CareLinkIcon}
            // keywords="JavaScript, React, Node.js, Express.js, Supabase, ChatGPT API, Hackathon"
            date="March 8 - 10, 2024 (Hackathon)"
            description={
              <>
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
              </>
            }
            projectDetailsURL="#"
          />
          <ProjectCard
            projectName="YapPad"
            iconURL={YapPadIcon}
            // keywords="HTML, CSS, JavaScript, React, Vite, MongoDB, Node.js, Express.js"
            date="April 2024"
            description={
              <>
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
                <br />
                • Bullet point bullet point bullet point bullet point bullet point bullet point bullet point bullet point
              </>
            }
            projectDetailsURL="#"
          />
        </div>
      </div>
    </div>
  );
}