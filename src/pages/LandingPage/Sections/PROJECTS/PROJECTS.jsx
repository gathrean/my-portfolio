import React from 'react';
import ProjectCard from './ProjectCard';

import './PROJECTS.css';

import Nebula from './Banners/Nebula.jpg';
import OrcaSwipe from './Banners/OrcaSwipe.jpg';
import DungeonQuad from './Banners/DungeonQuad.jpg';
import CareLink from './Banners/CareLink.jpg';
import YapPad from './Banners/YapPad.jpg';

export function PROJECTS() {
  return (
    <div className="projects-section-container">
      <hr />
      <h1>Featured Projects</h1>

      <p>These are some of the programming projects I've worked on. From social media, to RPG game, to AI. Click on each card to learn more.</p>

      <div className="projects-grid">
        <ProjectCard
          projectName="Nebula Neural Network"
          imageURL={Nebula}
          keywords="HTML/CSS, JS, Python, TensorFlow, PyTorch"
          date="January 2024 - Present"
          description="Description of project 1 goes here."
        />
        <ProjectCard
          projectName="OrcaSwipe"
          imageURL={OrcaSwipe}
          keywords="EJS, HTML/CSS, JS, Bootstrap 5.3, Node.JS, Express.JS, Leaflet API, MongoDB, Firebase, ChatGPT API"
          date="May 2023"
          description="Description of project 2 goes here."
        />
        <ProjectCard
          projectName="DungeonQuad RPG"
          imageURL={DungeonQuad}
          keywords="Java, IntelliJ, Java Processing, OOP Design, Sprite Design, MongoDB, UML Diagram, Gradle"
          date="January 2023 - April 2023"
          description="Description of project 4 goes here."
        />
        <ProjectCard
          projectName="CareLink"
          imageURL={CareLink}
          keywords="JS, React, NodeJS, Express, Supabase, ChatGPT API"
          date="March 8 - 10, 2024 (Hackathon)"
          description="Description of project 3 goes here."
        />
        <ProjectCard
          projectName="YapPad"
          imageURL={YapPad}
          keywords="HTML/CSS/JS, React/Vite, MongoDB, Nodejs, Express"
          date="April 2024"
          description="Description of project 5 goes here."
        />

        <ProjectCard
          projectName="Pokemon Team Generator"
          keywords="Kotlin, Android Studiom, PokeAPI"
          date="April 2023"
          description="Description of project 6 goes here."
        />
      </div>
    </div>
  );
}