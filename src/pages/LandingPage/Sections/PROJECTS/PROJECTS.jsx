import React from 'react';

import './PROJECTS.css';

// Icons
import GathreanIcon from '../../../../assets/icons/project-icons/gathrean-Icon.png';
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

            <hr />
            <h1>Featured Projects</h1>
            <p>These are some of the programming projects I've worked on. From social media, to RPG game, to AI. Click on each card to learn more.</p>
            <br />
            <div className="section-container-child">

                <div className="card-container">

                    <h3>2024 Projects</h3>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={GathreanIcon} />
                            <h5>gathrean.com</h5>
                        </div>
                        <p>This website!</p>
                        <ul>
                            <li>Developed a responsive website using React, JavaScript, HTML, and CSS.</li>
                            <li>Implemented React Router for navigation and React Hooks for state management.</li>
                            <li>Designed the website with Material-UI and Bootstrap.</li>
                            <li>Deployed the website using GitHub Pages.</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={NebulaIcon} />
                            <h5>Nebula</h5>
                        </div>
                        <p>Recognizing multiple musical instruments in music and audio recordings.</p>
                        <ul>
                            <li>Helped in developing an innovative method for recognizing multiple musical instruments in music and audio recordings.</li>
                            <li>Used a Convolutional Neural Network (CNN) within an Artificial Neural Network framework and processed the OpenMIC-2018 dataset as mel-spectrograms.</li>
                            <li>Achieved an F1 score of 56%, setting a new benchmark in the field.</li>
                            <li>Designed the Frontend of the website for the project using HTML, CSS, and JavaScript.</li>
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
                        <p>Small description</p>
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                            <li>Point 4</li>
                        </ul>
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

                    <h3>2024 Hackathon Project</h3>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={CareLinkIcon} />
                            <h5>CareLink</h5>
                        </div>
                        <p>Small description</p>
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                            <li>Point 4</li>
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
                        </div>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://youtu.be/4zMcxRqRwdw">
                                <ArrowRightIcon />
                                Watch Presentation
                            </a>
                            <p>(YouTube Video)</p>
                        </div>
                    </div>

                    <h3>2023 Projects</h3>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={OrcaSwipeIcon} />
                            <h5>OrcaSwipe</h5>
                        </div>
                        <p>"Discover, Host, and Link Up"</p>
                        <p>"Uncover hidden gems in your city and grow lasting communities with the swipe of a finger."</p>
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                            <li>Point 4</li>
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
                    </div>

                    <div className="card">
                        <div className="link-and-icon-container">
                            <img className="project-small-icon" alt="Project Small Icon" src={DungeonQuadIcon} />
                            <h5>DungeonQuad</h5>
                        </div>
                        <p>Small description</p>
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                            <li>Point 4</li>
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