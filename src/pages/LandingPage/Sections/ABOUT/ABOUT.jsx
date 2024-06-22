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
          <h4>Development</h4>
          <div className="card">
            <p>HTML, CSS, JavaScript, React.JS, Express.JS, Node.JS</p>
            <img className="tech-logo-icon" alt="HTML5" src={icon_html} />
            <img className="tech-logo-icon" alt="CSS3" src={icon_css} />
            <img className="tech-logo-icon" alt="JavaScript" src={icon_js} />
            <img className="tech-logo-icon" alt="ReactJS" src={icon_react} />
            <img className="tech-logo-icon" alt="ExpressJS " src={icon_express} />
            <img className="tech-logo-icon" alt="NodeJS" src={icon_node} />
          </div>

          <h4>Programming Languages</h4>
          <div className="card">
            <p>Java, Python, Kotlin, C, C++, R</p>
            <img className="tech-logo-icon" alt="Java" src={icon_java} />
            <img className="tech-logo-icon" alt="Python" src={icon_python} />
            <img className="tech-logo-icon" alt="Kotlin" src={icon_kotlin} />
            <img className="tech-logo-icon" alt="C" src={icon_c} />
            <img className="tech-logo-icon" alt="Cpp" src={icon_cpp} />
            <img className="tech-logo-icon" alt="R" src={icon_r} />
          </div>

          <h4>Tools and IDEs</h4>
          <div className="card">
            <p>VS Code, IntelliJ IDEA, CLion, Android Studio, Git</p>
            <img className="tech-logo-icon" alt="VSCode" src={icon_vscode} />
            <img className="tech-logo-icon" alt="IntelliJ" src={icon_intellij} />
            <img className="tech-logo-icon" alt="CLion" src={icon_clion} />
            <img className="tech-logo-icon" alt="AndroidStudio" src={icon_androidstudio} />
            <img className="tech-logo-icon" alt="Git" src={icon_git} />
          </div>

          <h4>Database and Hosting</h4>
          <div className="card">
            <p>MongoDB, MySQL, Netlify, Firebase</p>
            <img className="tech-logo-icon" alt="MongoDB" src={icon_mongodb} />
            <img className="tech-logo-icon" alt="MySQL" src={icon_mysql} />
            <img className="tech-logo-icon" alt="Netlify" src={icon_netlify} />
            <img className="tech-logo-icon" alt="Vercel" src={icon_vercel} />
            <img className="tech-logo-icon" alt="Firebase" src={icon_firebase} />
          </div>
          
        </div>
      </div>
    </div>
  );
}