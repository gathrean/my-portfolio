import React from 'react';

// Styles
import './ACADEMIA.css';
import '../ABOUT/ABOUT.css';

// Components
import ArrowRightIcon from '../../../../components/ArrowRight/ArrowRightBlack';

// Data
import Texts from '../../Texts.json';

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
                        <h5>{Texts.bcit.diploma}</h5>
                        <p>{Texts.bcit.location}</p>
                        <p>{Texts.bcit.school}</p>
                        <p>{Texts.bcit.duration}</p>
                        <ul>
                            <li>{Texts.bcit.desc1}</li>
                            <li>{Texts.bcit.desc2}</li>
                            <li>{Texts.bcit.desc3}</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/">
                                <ArrowRightIcon />
                                More info about BCIT CST Diploma
                            </a>
                        </div>
                    </div>

                    <h3>Research</h3>

                    <div className="card">
                        <h5>{Texts.aim.name}</h5>
                        <p>{Texts.aim.location}</p>
                        <p>{Texts.aim.date} </p>
                        <ul>
                            <li>{Texts.aim.type}</li>
                            <li>{Texts.aim.description}</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://artificialintelligence-conference.com/">
                                <ArrowRightIcon />
                                More info about AIM Conference
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <h5>{Texts.wsai.name}</h5>
                        <p>{Texts.wsai.location}</p>
                        <p>{Texts.wsai.date} </p>
                        <ul>
                            <li>{Texts.wsai.type}</li>
                            <li>{Texts.wsai.description}</li>
                        </ul>
                        <div className="small-link-container">
                            <a className="external-link small-link" href="https://wsai.org/">
                                <ArrowRightIcon />
                                More info about WSAI Conference
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}