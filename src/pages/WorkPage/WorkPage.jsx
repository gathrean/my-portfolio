import React from 'react';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';
import { GitHubIcon, LinkedInIcon, GlobeIcon, DownloadIcon, PlayIcon, BookOpenIcon, NewspaperIcon, CodeIcon } from '../../components/Icons/LinkIcons';

import photoAIM1 from '../AboutPage/images/2024-AIM.jpeg';
import photoWSAI1 from '../AboutPage/images/imageWSAI1.jpg';
import photoWSAI2 from '../AboutPage/images/imageWSAI2.jpg';
import photoWSAI3 from '../AboutPage/images/imageWSAI3.jpg';

import NebulaIcon from '../../assets/icons/project-icons/Nebula-Icon.png';
import YapPadIcon from '../../assets/icons/project-icons/YapPad-Icon.png';
import CareLinkIcon from '../../assets/icons/project-icons/CareLink-Icon.png';
import OrcaSwipeIcon from '../../assets/icons/project-icons/OrcaSwipe-Icon.png';
import DungeonQuadIcon from '../../assets/icons/project-icons/DungeonQuad-Icon.png';

function getLinkIcon(label) {
  const l = label.toLowerCase();
  if (l === 'github') return <GitHubIcon />;
  if (l.includes('linkedin')) return <LinkedInIcon />;
  if (l === 'download') return <DownloadIcon />;
  if (l === 'presentation') return <PlayIcon />;
  if (l.includes('ieee')) return <BookOpenIcon />;
  if (l.includes('devpost')) return <CodeIcon />;
  if (l.includes('news')) return <NewspaperIcon />;
  return <GlobeIcon />;
}

const projects = [
  {
    icon: NebulaIcon,
    name: 'Nebula',
    tagline: 'Convolutional Neural Network',
    description: 'Recognizing multiple musical instruments in music and audio recordings. Achieved a 56% F1-score processing mel-spectrograms from the OpenMIC-2018 dataset. Presented at WSAI 2024 in Guangzhou and AIM 2024 in San Francisco.',
    links: [
      { label: 'GitHub', url: 'https://github.com/gathrean/Nebula' },
      { label: 'AIM 2024', url: 'https://artificialintelligence.unitedscientificgroup.org/2024/home' },
      { label: 'WSAI 2024', url: 'https://wsai.org/wsai24.html' },
      { label: 'IEEE Xplore Paper', url: 'https://ieeexplore.ieee.org/document/10829201' },
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

export function WorkPage() {
  return (
    <div className="page">
      <h1>Gathrean's Work</h1>
      <hr className="divider-mini" />

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

        <ExternalLink href="https://artificialintelligence.unitedscientificgroup.org/2024/home" icon={<GlobeIcon />}>
          More info about AIM 2024 Conference
        </ExternalLink>
        <br></br>
        <ExternalLink href="https://www.linkedin.com/posts/bcitcomputing_congratulations-to-computer-systems-technology-activity-7209714610659053568-zO6U?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADHvIOoBFhkrlhe0JkXwxK6xZQYoSo88__4" icon={<LinkedInIcon />}>
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

        <ExternalLink href="https://wsai.org/wsai24.html" icon={<GlobeIcon />}>
          More info about WSAI 2024 Conference
        </ExternalLink>
        <br></br>
        <ExternalLink href="https://ieeexplore.ieee.org/document/10829201" icon={<BookOpenIcon />}>
          Read "Multi-Instrument Recognition Neural Network" on IEEE Xplore
        </ExternalLink>
      </div>

      <hr className="divider" />

      <h2>Web Apps</h2>
      <p className="subtitle">Software projects spanning AI, web apps, games, and hackathons.</p>

      <div className="item-list">
        {projects.map((project, i) => (
          <div key={i} className="item">
            <div className="item-header">
              <img className="item-icon" src={project.icon} alt={project.name} />
              <div>
                <h3>{project.name}</h3>
                <p className="subtitle">{project.tagline}</p>
              </div>
            </div>
            <p>{project.description}</p>
            <div className="item-links">
              {project.links.map((link, j) => (
                <ExternalLink key={j} href={link.url} icon={getLinkIcon(link.label)}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <h2>Skills &amp; Technologies</h2>
      <div className="tag-grid">
        {skillCategories.map((cat, i) => (
          <div key={i}>
            <h4>{cat.title}</h4>
            <div className="tags">
              {cat.skills.map((skill, j) => (
                <span key={j} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
