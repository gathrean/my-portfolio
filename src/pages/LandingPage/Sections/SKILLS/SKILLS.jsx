import React from 'react';

import './SKILLS.css';

// Icons
import icon_html from '../../../../components/TechStack/HTML5.png';
import icon_css from '../../../../components/TechStack/CSS3.png';
import icon_js from '../../../../components/TechStack/JavaScript.png';
import icon_react from '../../../../components/TechStack/ReactJS.png';
import icon_express from '../../../../components/TechStack/expressJS.png';
import icon_node from '../../../../components/TechStack/nodeJS.png';
import icon_java from '../../../../components/TechStack/Java.png';
import icon_python from '../../../../components/TechStack/Python.png';
import icon_kotlin from '../../../../components/TechStack/Kotlin.png';
import icon_c from '../../../../components/TechStack/C.png';
import icon_cpp from '../../../../components/TechStack/Cpp.png';
import icon_cs from '../../../../components/TechStack/CSharp.png';
import icon_r from '../../../../components/TechStack/R.png';
import icon_vscode from '../../../../components/TechStack/VSCode.png';
import icon_intellij from '../../../../components/TechStack/IntelliJ.png';
import icon_clion from '../../../../components/TechStack/CLion.png';
import icon_rider from '../../../../components/TechStack/Rider.png';
import icon_androidstudio from '../../../../components/TechStack/AndroidStudio.png';
import icon_git from '../../../../components/TechStack/git.png';
import icon_mongodb from '../../../../components/TechStack/MongoDB.png';
import icon_mysql from '../../../../components/TechStack/MySQL.png';
import icon_netlify from '../../../../components/TechStack/Netlify.png';
import icon_vercel from '../../../../components/TechStack/Vercel.png';
import icon_firebase from '../../../../components/TechStack/Firebase.png';

export function SKILLS() {
    return (
        <div className="section-container">
            <hr />
            <h1>Skills & Technologies</h1>
            <p>These are the technologies I've learned and used in various projects.</p>
            <br />

            <h3>Programming Languages</h3>
            <div className="card">
                <p>
                    These are the programming languages I've learned and used in various projects.
                </p>
                <p>
                    I've learned OOP through using Java, C++, C#, and Kotlin; Procedural Programming with C, and Data Analysis with Python and R.
                </p>
                <div className="in-card-container">
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Java</span>
                        <img className="tech-logo-icon" src={icon_java} alt="Java" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">C# and .NET</span>
                        <img className="tech-logo-icon" src={icon_cs} alt="C#" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">C++</span>
                        <img className="tech-logo-icon" src={icon_cpp} alt="C++" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">C</span>
                        <img className="tech-logo-icon" src={icon_c} alt="C" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Kotlin</span>
                        <img className="tech-logo-icon" src={icon_kotlin} alt="Kotlin" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Python</span>
                        <img className="tech-logo-icon" src={icon_python} alt="Python" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">R</span>
                        <img className="tech-logo-icon" src={icon_r} alt="R" />
                    </div>
                </div>
            </div>

            <h3>Web Development</h3>
            <div className="card">
                <p>
                    I've worked on various web projects using these technologies, including this website.
                </p>
                <p>
                    React.JS is my preferred library for front-end development, and I've used Express.JS and Node.JS for back-end development.
                </p>
                <div className="in-card-container">
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">HTML5</span>
                        <img className="tech-logo-icon" src={icon_html} alt="HTML5" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">CSS3</span>
                        <img className="tech-logo-icon" src={icon_css} alt="CSS3" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">JavaScript</span>
                        <img className="tech-logo-icon" src={icon_js} alt="JavaScript" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">React.JS</span>
                        <img className="tech-logo-icon" src={icon_react} alt="ReactJS" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Express.JS</span>
                        <img className="tech-logo-icon" src={icon_express} alt="ExpressJS" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Node.JS</span>
                        <img className="tech-logo-icon" src={icon_node} alt="NodeJS" />
                    </div>
                </div>
            </div>

            <h3>Working Environments</h3>
            <div className="card">
                <p>
                    My preferred IDE to use for coding is VS Code for most languages.
                </p>
                <p>
                    I've also had experience with IntelliJ IDEA for Java and Kotlin, CLion for C and C++, Rider for C#/.NET and Android Studio for Android Development.
                </p>
                <p>
                    I've used Git for version control in all my projects.
                </p>
                <div className="in-card-container">
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Visual Studio Code</span>
                        <img className="tech-logo-icon" src={icon_vscode} alt="VS Code" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">CLion</span>
                        <img className="tech-logo-icon" src={icon_clion} alt="CLion" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">IntelliJ IDEA</span>
                        <img className="tech-logo-icon" src={icon_intellij} alt="IntelliJ IDEA" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Rider</span>
                        <img className="tech-logo-icon" src={icon_rider} alt="Rider" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Android Studio</span>
                        <img className="tech-logo-icon" src={icon_androidstudio} alt="Android Studio" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Git</span>
                        <img className="tech-logo-icon" src={icon_git} alt="Git" />
                    </div>
                </div>
            </div>

            <h3>Database and Hosting</h3>
            <div className="card">
                <p>
                    I've worked with MongoDB and MySQL for databases and authentication. I've hosted websites on Netlify and Vercel, and used Firebase for storage.
                </p>
                <div className="in-card-container">
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">MongoDB</span>
                        <img className="tech-logo-icon" src={icon_mongodb} alt="MongoDB" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">MySQL</span>
                        <img className="tech-logo-icon" src={icon_mysql} alt="MySQL" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Netlify</span>
                        <img className="tech-logo-icon" src={icon_netlify} alt="Netlify" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Vercel</span>
                        <img className="tech-logo-icon" src={icon_vercel} alt="Vercel" />
                    </div>
                    <div className="tech-logo-container">
                        <span className="tech-logo-text">Firebase</span>
                        <img className="tech-logo-icon" src={icon_firebase} alt="Firebase" />
                    </div>
                </div>
            </div>
        </div>
    );
}