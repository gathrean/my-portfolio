// ABOUT.js
import React from 'react';

// Styles
import './ABOUT.css';

// Icons
import icon_html from '../../../../components/TechStack/HTML5.png';
import icon_css from '../../../../components/TechStack/CSS3.png';
import icon_js from '../../../../components/TechStack/JS.png';
import icon_react from '../../../../components/TechStack/ReactJS.png';
import icon_express from '../../../../components/TechStack/expressJS.png';
import icon_node from '../../../../components/TechStack/nodeJS.png';
import icon_java from '../../../../components/TechStack/Java.png';
import icon_python from '../../../../components/TechStack/Python.png';
import icon_kotlin from '../../../../components/TechStack/Kotlin.png';
import icon_c from '../../../../components/TechStack/C.png';
import icon_cpp from '../../../../components/TechStack/Cpp.png';
import icon_r from '../../../../components/TechStack/R.png';
import icon_vscode from '../../../../components/TechStack/VSCode.png';
import icon_intellij from '../../../../components/TechStack/IntelliJ.png';
import icon_clion from '../../../../components/TechStack/CLion.png';
import icon_androidstudio from '../../../../components/TechStack/AndroidStudio.png';
import icon_git from '../../../../components/TechStack/git.png';
import icon_mongodb from '../../../../components/TechStack/MongoDB.png';
import icon_mysql from '../../../../components/TechStack/MySQL.png';
import icon_netlify from '../../../../components/TechStack/Netlify.png';
import icon_vercel from '../../../../components/TechStack/Vercel.png';
import icon_firebase from '../../../../components/TechStack/Firebase.png';

export function ABOUT() {
  return (
    <div className="section-container">
      <hr />
      <h1>About Me</h1>
      <p>Here's a bit about me: a passionate software developer committed to continuous learning and innovation.</p>
      <br />
      <div className="section-container-child">
        <div className="card-container">
          <h3>Personal Life & Interests</h3>
          <div className="card">
            <h4>💻 🎓🕹️</h4>
            <p>
              I remember being a kid in 2008 and always wondered how websites and games were created. Fast forward to 2024, I've completed a 2-year program at BCIT, where I've developed proficiency in OOP and web development, creating games and designing websites for various projects.
            </p>
            <br />
            <h4>⚙️ 📊 🧮</h4>
            <p>
              Before studying programming and software development, I studied Mechanical and Electrical Engineering, enhancing my analytical skills and broadening my technical knowledge.
            </p>
          </div>
          <div className="card">
            <h4>🎧 🎨 🧠</h4>
            <p>
              Beyond coding, I enjoy music production and graphic design- which are hobbies that have helped my creativity and innovation grow in software development.
            </p>
            <br />
            <h4>🧑‍🧑‍🧒‍🧒 🏔️ 🌇</h4>
            <p>
              In my free time, I love spending time with family and friends, exploring the city and hiking, and continually learning new things in coding.
            </p>
          </div>
          <br />
          <h3>Personal Values</h3>
          <div className="card">
            <h4>🌟 🤝 🚀</h4>
            <p>
              Collaboration is a cornerstone of my approach to projects; I've learned that teamwork is vital to success, with each member contributing their strengths. I believe in the power of collective effort and clear communication.
            </p>
          </div>
          <div className="card">
            <h4>📚 🧠 🌱</h4>
            <p>
              My journey has taught me that there's always something new to learn in coding, which keeps me motivated and excited about my career in software development.
            </p>
          </div>
          <br />
          <h3>Skills and Technologies</h3>
          <h4>Web Development</h4>
          <div className="card">
            <p>
              I've worked on various web projects using these technologies, including this website.
            </p>
            <p>
              React.JS is my preferred library for front-end development, and I've used Express.JS and Node.JS for back-end development.
            </p>
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
              <span className="tech-logo-text">ReactJS</span>
              <img className="tech-logo-icon" src={icon_react} alt="ReactJS" />
            </div>
            <div className="tech-logo-container">
              <span className="tech-logo-text">ExpressJS</span>
              <img className="tech-logo-icon" src={icon_express} alt="ExpressJS" />
            </div>
            <div className="tech-logo-container">
              <span className="tech-logo-text">NodeJS</span>
              <img className="tech-logo-icon" src={icon_node} alt="NodeJS" />
            </div>
          </div>

          <h4>Programming Languages</h4>
          <div className="card">
            <p>
              These are the programming languages I've learned and used in various projects.
            </p>
            <p>
              I've learned OOP through using Java, Kotlin, and C++, Procedural Programming with C, and Data Analysis with Python and R.
            </p>
            <div className="tech-logo-container">
              <span className="tech-logo-text">Java</span>
              <img className="tech-logo-icon" src={icon_java} alt="Java" />
            </div>
            <div className="tech-logo-container">
              <span className="tech-logo-text">Kotlin</span>
              <img className="tech-logo-icon" src={icon_kotlin} alt="Kotlin" />
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
              <span className="tech-logo-text">Python</span>
              <img className="tech-logo-icon" src={icon_python} alt="Python" />
            </div>
            <div className="tech-logo-container">
              <span className="tech-logo-text">R</span>
              <img className="tech-logo-icon" src={icon_r} alt="R" />
            </div>
          </div>

          <h4>Working Environments</h4>
          <div className="card">
            <p>
              My preferred IDE to use for coding is VS Code for most languages.
            </p>
            <p>
              I've also had experience with IntelliJ IDEA for Java and Kotlin, CLion for C and C++, and Android Studio for Android Development.
            </p>
            <p>
              I've used Git for version control in all my projects.
            </p>
            <div className="tech-logo-container">
              <span className="tech-logo-text">VS Code</span>
              <img className="tech-logo-icon" src={icon_vscode} alt="VS Code" />
            </div>
            <div className="tech-logo-container">
              <span className="tech-logo-text">IntelliJ IDEA</span>
              <img className="tech-logo-icon" src={icon_intellij} alt="IntelliJ IDEA" />
            </div>
            <div className="tech-logo-container">
              <span className="tech-logo-text">CLion</span>
              <img className="tech-logo-icon" src={icon_clion} alt="CLion" />
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

          <h4>Database and Hosting</h4>
          <div className="card">
            <p>
              I've worked with MongoDB and MySQL for databases and authentication. I've hosted websites on Netlify and Vercel, and used Firebase for storage.
            </p>
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
    </div >
  );
}