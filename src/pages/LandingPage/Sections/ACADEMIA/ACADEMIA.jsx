import React from 'react';

// Styles
import './ACADEMIA.css';
import '../ABOUT/ABOUT.css';

// Components
import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRightBlack';

// Logos
import BCITLogo from './Logos/bcit-logo.png';

export function ACADEMIA() {
    return (
        <div className="section-container">

            <hr />
            <h1>Academia & Research</h1>
            <p>My experience as a software developer, which includes my education and publications.</p>
            <br />
            <div className="section-container-child">

                <div className="card-container">

                    <h3>Academia</h3>

                    <div className="card">
                        <img className="academia-logo" src={BCITLogo} alt="BCIT Logo" />
                        <h5>Computer Systems Technology, Diploma</h5>
                        <p className="tagline">British Columbia Institute of Technology</p>
                        <p>September 2022 - June 2024</p>
                        <ul>
                            <li>Graduated with Distinction, hands-on training in software development, networking, and systems design.</li>
                            <li>Completed projects in full-stack development, mobile app development, and cloud computing, using languages such as Java, C, C++, and C\#.</li>
                            <li>Developed strong collaboration and problem-solving skills through team-based and real-world technical challenges, simulating professional environments.</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/">
                                <ArrowRightIcon />
                                More info about BCIT CST Diploma
                            </a>
                        </div>
                    </div>

                    <h3>Research Papers & Conferences</h3>

                    <div className="card">
                        <h5>AIM 2024: Artificial Intelligence Conference</h5>
                        <p className="tagline">🇺🇸 San Francisco, California, United States of America</p>
                        <p>June 9-11, 2024</p>
                        <ul>
                            <li>In-person conference</li>
                            <li>Presented our research paper on Multi-Instrument Recognition Neural Networks as a poster to professors and authors from top universities, including UCLA and UC Berkeley.</li>
                            <li>Networked with leading researchers and industry professionals.</li>
                            <li>Research paper to be published by AIM by the end of the year.</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://artificialintelligence.unitedscientificgroup.org/2024/home">
                                <ArrowRightIcon />
                                More info about AIM 2024 Conference
                            </a>
                        </div>
                    </div>


                    <div className="card">
                        <h5>WSAI 2024 @ 人工智能专题讨论会</h5>
                        <p className="tagline">🇨🇳 Guangzhou, Guangdong, China</p>
                        <p>June 7-9, 2024</p>
                        <ul>
                            <li>Virtual Conference</li>
                            <li>Represented BCIT and presented our group’s research on a Multi-Instrument Recognition Neural Network.</li>
                            <li>Awarded "Excellent Oral Presentation" for our contributions.</li>
                            <li>Research paper to be published by WSAI by the end of the year.</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://wsai.org/wsai24.html">
                                <ArrowRightIcon />
                                More info about WSAI 2024 Conference
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}