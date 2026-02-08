import React from 'react';
import ArrowRightIcon from '../../components/ArrowRight/ArrowRightBlack';

import NebulaIcon from '../../assets/icons/project-icons/Nebula-Icon.png';
import YapPadIcon from '../../assets/icons/project-icons/YapPad-Icon.png';
import CareLinkIcon from '../../assets/icons/project-icons/CareLink-Icon.png';
import OrcaSwipeIcon from '../../assets/icons/project-icons/OrcaSwipe-Icon.png';
import DungeonQuadIcon from '../../assets/icons/project-icons/DungeonQuad-Icon.png';

import './DeveloperPage.css';

const projects = [
  {
    icon: NebulaIcon,
    name: 'Nebula',
    tagline: 'Convolutional Neural Network',
    description: 'Recognizing multiple musical instruments in music and audio recordings. Achieved a 56% F1-score processing mel-spectrograms from the OpenMIC-2018 dataset. Presented at WSAI 2024 in Guangzhou and AIM 2024 in San Francisco.',
    links: [
      { label: 'GitHub', url: 'https://github.com/gathrean/Nebula' },
    ],
  },
  {
    icon: YapPadIcon,
    name: 'YapPad',
    tagline: 'AI-Powered Interactive Story Generator',
    description: 'Web-based interactive story generator built with AI assistance.',
    links: [
      { label: 'GitHub', url: 'https://github.com/xinyang417/YapPad' },
      { label: 'Website', url: 'https://yappad.vercel.app' },
    ],
  },
  {
    icon: CareLinkIcon,
    name: 'CareLink',
    tagline: 'Hackathon Submission — Counselor Matching App',
    description: 'An online platform for BCIT students to find the right counselor through AI-powered matchmaking and real-time messaging.',
    links: [
      { label: 'GitHub', url: 'https://github.com/BardiaTiM/CareLink' },
      { label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/gathrean_qdshacks2024-hackathon-cst-activity-7174553510577942528-i26X?utm_source=share&utm_medium=member_desktop' },
      { label: 'DevPost', url: 'https://devpost.com/software/carelink-6j8op7' },
      { label: 'Presentation', url: 'https://youtu.be/4zMcxRqRwdw' },
    ],
  },
  {
    icon: OrcaSwipeIcon,
    name: 'OrcaSwipe',
    tagline: 'Tinder-Style Event Finder',
    description: 'Social media app for discovering nearby group events. Contributed 15K+ lines of code, led UI/UX design with Node.js, Express.js, and EJS. Won Best UI/UX Design and Best Teamwork at BCIT.',
    links: [
      { label: 'GitHub', url: 'https://github.com/gathrean/OrcaSwipe' },
      { label: 'Website', url: 'https://orcaswipe.vercel.app/' },
      { label: 'BCIT News', url: 'https://commons.bcit.ca/news/2023/06/impactful-intelligence-computing-students-use-ai-to-power-web-applications/' },
    ],
  },
  {
    icon: DungeonQuadIcon,
    name: 'DungeonQuad',
    tagline: 'Java Bullet-Hell Game',
    description: 'Survive waves of enemies in an endless dungeon with bullet-hell mechanics and occasional flight aids. Designed all in-game visuals including sprites, UI, menus, and background art.',
    links: [
      { label: 'GitHub', url: 'https://github.com/BardiaTiM/DungeonQuad' },
      { label: 'Download', url: 'https://github.com/BardiaTiM/DungeonQuad/releases/tag/game' },
      { label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/gathrean_java-gamedevelopment-indiegames-activity-7150249723457622016-NyLK?utm_source=share&utm_medium=member_desktop' },
    ],
  },
];

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'C#', 'C++', 'C', 'Kotlin', 'Python', 'R', 'JavaScript'],
  },
  {
    title: 'Web',
    skills: ['HTML5', 'CSS3', 'React', 'Express.js', 'Node.js'],
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'IntelliJ IDEA', 'CLion', 'Rider', 'Android Studio', 'Git'],
  },
  {
    title: 'Database & Hosting',
    skills: ['MongoDB', 'MySQL', 'Netlify', 'Vercel', 'Firebase'],
  },
];

export function DeveloperPage() {
  return (
    <div className="developer-page">
      <h1 className="developer-heading">Projects</h1>
      <p className="developer-intro">Software projects spanning AI, web apps, games, and hackathons.</p>

      <div className="projects-list">
        {projects.map((project, i) => (
          <div key={i} className="project-item">
            <div className="project-header">
              <img className="project-icon" src={project.icon} alt={project.name} />
              <div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-links">
              {project.links.map((link, j) => (
                <a key={j} className="project-link" href={link.url} target="_blank" rel="noopener noreferrer">
                  <ArrowRightIcon />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="section-divider" />

      <h1 className="developer-heading">Skills &amp; Technologies</h1>
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skill-category">
            <h4 className="skill-category-title">{cat.title}</h4>
            <div className="skill-pills">
              {cat.skills.map((skill, j) => (
                <span key={j} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
