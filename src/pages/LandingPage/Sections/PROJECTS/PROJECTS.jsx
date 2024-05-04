import React from 'react';
import ProjectCard from './ProjectCard';
import './PROJECTS.css';

export function PROJECTS() {
  return (
    <div className="projects-section-container">
      <hr />
      <h1>Featured Projects</h1>

      <p>This is where you can showcase your work experience. You can list your previous jobs, projects you've worked on, and any other relevant experience.</p>

      <div className="projects-grid">
        <ProjectCard
          projectName="Nebula"
          keywords=""
          date="2024"
          description="Description of project 1 goes here."
        />
        <ProjectCard
          projectName="OrcaSwipe"
          keywords=""
          date="2024"
          description="Description of project 2 goes here."
        />
        <ProjectCard
          projectName="CareLink"
          keywords=""
          date="2023"
          description="Description of project 3 goes here."
        />
        <ProjectCard
          projectName="DungeonQuad"
          keywords=""
          date="2023"
          description="Description of project 4 goes here."
        />
        <ProjectCard
          projectName="YapPad"
          keywords=""
          date="2023"
          description="Description of project 5 goes here."
        />
        <ProjectCard
          projectName="PokemonTeamGenerator"
          keywords="Kotlin"
          date="2022"
          description="Description of project 6 goes here."
        />
      </div>
    </div>
  );
}