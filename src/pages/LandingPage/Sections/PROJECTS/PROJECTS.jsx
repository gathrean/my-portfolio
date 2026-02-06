import React from 'react';

import './PROJECTS.css';

// Icons
import NebulaIcon from '../../../../assets/icons/project-icons/Nebula-Icon.png';
import OrcaSwipeIcon from '../../../../assets/icons/project-icons/OrcaSwipe-Icon.png';
import DungeonQuadIcon from '../../../../assets/icons/project-icons/DungeonQuad-Icon.png';
import CareLinkIcon from '../../../../assets/icons/project-icons/CareLink-Icon.png';
import YapPadIcon from '../../../../assets/icons/project-icons/YapPad-Icon.png';

// Components
import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRightBlack';

export function PROJECTS() {
    return (
        <div className="section-container">


            <h1>Projects Timeline</h1>
            <p>These are some of the programming projects I've worked on. From social media, to RPG game, to AI. Click on each card to learn more.</p>
            <br />
            <div className="section-container-child">

                <div className="card-container">

                    {/* <h3>2024 Projects</h3> */}

                    {/* <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={GathreanIcon} />
                            <h5>gathrean.com</h5>
                        </div>
                        <p className="tagline">⭐️ This website!</p>
                        <ul>
                            <li>Developed a responsive website using React, JavaScript, HTML, and CSS.</li>
                            <li>Implemented React Router for navigation and React Hooks for state management.</li>
                            <li>Deployed the website using Vercel.</li>
                            <li>Designed and developed solely by myself, with the help of Chat-GPT (for speeding up development).</li>
                        </ul>
                    </div> */}

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={NebulaIcon} />
                            <h5>Nebula</h5>
                        </div>
                        <p className="tagline">🤖 🎵 Convolutional Neural Network</p>
                        <p>Recognizing multiple musical instruments in music and audio recordings.</p>
                        <ul>
                            <li>Achieved a 56% F1-score by developing a convolutional neural network (CNN) that processed mel-spectrograms from the OpenMIC-2018 dataset to accurately recognize and classify up to 10 musical instruments.</li>
                            <li>Delivered two research presentations virtually at WSAI 2024 in Guangzhou, China, and as a poster presentation at AIM 2024 in San Francisco, USA by showcasing key findings from this project.</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://github.com/gathrean/Nebula">
                                <ArrowRightIcon />
                                GitHub Repo
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={YapPadIcon} />
                            <h5>YapPad</h5>
                        </div>
                        <p className="tagline">🤖 💬 Web-Based Interactive Story Generator, with the help of AI.</p>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://github.com/xinyang417/YapPad">
                                <ArrowRightIcon />
                                GitHub Repo
                            </a>
                            <p>(Has demo videos)</p>
                        </div>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://yappad.vercel.app">
                                <ArrowRightIcon />
                                Website
                            </a>
                            <p>(Our AI is currently shut off, but the website is still up)</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={CareLinkIcon} />
                            <h5>CareLink (Hackathon Submission)</h5>
                        </div>
                        <p className="tagline">🤖 💬 Match-making AI and messaging app</p>
                        <p>An online platform for BCIT students to make it easier for them to find the right counselor to talk to.</p>
                        <ul>
                            <li>Developed the frontend using React, ensuring smooth API integration for peer matching.</li>
                            <li>Collaborated on real-time chat functionality, resolving technical issues with web sockets and database interactions.</li>
                            <li>Gained hands-on experience in React, API integration, and teamwork through the hackathon project.</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://github.com/BardiaTiM/CareLink">
                                <ArrowRightIcon />
                                GitHub Repo
                            </a>
                        </div>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://www.linkedin.com/posts/gathrean_qdshacks2024-hackathon-cst-activity-7174553510577942528-i26X?utm_source=share&utm_medium=member_desktop">
                                <ArrowRightIcon />
                                LinkedIn Post
                            </a>
                        </div>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://devpost.com/software/carelink-6j8op7">
                                <ArrowRightIcon />
                                DevPost
                            </a>
                            <p>(Hackathon Page Post)</p>
                        </div>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://youtu.be/4zMcxRqRwdw">
                                <ArrowRightIcon />
                                Watch Presentation
                            </a>
                            <p>(YouTube Video)</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={OrcaSwipeIcon} />
                            <h5>OrcaSwipe</h5>
                        </div>
                        <p className="tagline">📲 📍 Tinder-style social media app for finding nearby group events</p>
                        <ul>
                            <li>Contributed over 15,000 lines of code to enhance the platform’s functionality by collaborating in a team of four
                            developers</li>
                            <li>Lead the UI/UX design, using Node.js, Express.js, and EJS, while contributing to backend architecture with
                            MongoDB and Firestore Firebase.</li>
                            <li>Secured Best UI/UX Design and Best Teamwork awards by delivering a seamless and engaging user interface
                            for BCIT’s event.</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://github.com/gathrean/OrcaSwipe">
                                <ArrowRightIcon />
                                GitHub Repo
                            </a>
                        </div>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://orcaswipe.vercel.app/">
                                <ArrowRightIcon />
                                Website
                            </a>
                        </div>
                        
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://commons.bcit.ca/news/2023/06/impactful-intelligence-computing-students-use-ai-to-power-web-applications/">
                                <ArrowRightIcon />
                                Best Teamwork and UI/UX
                            </a>
                            <p>(BCIT News  Article)</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={DungeonQuadIcon} />
                            <h5>DungeonQuad</h5>
                        </div>
                        <p className="tagline">☕️ 🎮 Java Video Game</p>
                        <p>Survive waves of enemies in an endless dungeon, navigating through bullet-hell challenges with occasional flight aids.</p>
                        <ul>
                            <li>Created an endless pixel shooter game by developing game-play mechanics in Java with IntelliJ IDEA, contributing
                            to dynamic user experiences.</li>
                            <li>Designed all in-game visuals, including sprites, UI, menus, and background art, by applying creative design
                            principles and tools.</li>
                            <li>Improved game performance by identifying and fixing bugs, enhancing the overall gameplay through code
                            refactoring.</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://github.com/BardiaTiM/DungeonQuad">
                                <ArrowRightIcon />
                                GitHub Repo
                            </a>
                        </div>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://github.com/BardiaTiM/DungeonQuad/releases/tag/game">
                                <ArrowRightIcon />
                                Download Game
                            </a>
                        </div>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://www.linkedin.com/posts/gathrean_java-gamedevelopment-indiegames-activity-7150249723457622016-NyLK?utm_source=share&utm_medium=member_desktop">
                                <ArrowRightIcon />
                                LinkedIn Post
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}