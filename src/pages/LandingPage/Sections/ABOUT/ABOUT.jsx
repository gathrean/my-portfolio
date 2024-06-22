// ABOUT.js
import React from 'react';

// Styles
import './ABOUT.css';
import icon_css from '../../../../components/TechStack/css.png';
import icon_html from '../../../../components/TechStack/html.png';
import icon_js from '../../../../components/TechStack/js.png';
import icon_react from '../../../../components/TechStack/React.png';

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
            <p>HTML, CSS, React.JS, Express.JS, Node.JS</p>
          </div>

          <h4>Programming Languages</h4>
          <div className="card">
            <p>Java, Python, Kotlin, C, C++, C#, R</p>
          </div>

          <h4>Tools and IDEs</h4>
          <div className="card">
            <p>VS Code, IntelliJ IDEA, CLion, Android Studio, Git</p>
          </div>

          <h4>Database and Hosting</h4>
          <div className="card">
            <p>MongoDB, MySQL, Netlify, Firebase</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}