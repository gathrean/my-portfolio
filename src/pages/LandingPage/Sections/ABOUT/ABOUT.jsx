// ABOUT.js
import React from 'react';

// Styles
import './ABOUT.css';
import './InfiniteScroll.css';
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
          <div className="card">
            <ul>
              <li>Programming Languages: Proficient in JavaScript, Java, C, C#, and C++.</li>
              <li>Web Development: Experienced in creating and maintaining websites, with a strong understanding of front-end and back-end technologies.</li>
              <li>Software Development: Hands-on experience in developing games and software applications, with a focus on OOP principles.</li>
              <li>Creative Skills: Enhanced my coding projects with skills in music production and graphic design.</li>
              <li>Team Collaboration: Strong team player with a proven ability to contribute effectively to group projects and communicate ideas clearly.</li>
            </ul>
          </div>

          <br />


          <div className="scroll" style={{ '--time': '30s' }}>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>ReactJS</span>
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Premiere Pro</span>
              <span>Figma</span>
              <span>Angular</span>
              <span>Node JS</span>
            </div>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>ReactJS</span>
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Premiere Pro</span>
              <span>Figma</span>
              <span>Angular</span>
              <span>Node JS</span>
            </div>
          </div>

          <div className="scroll imgBox" style={{ '--time': '25s' }}>
            <div>
              <img src={icon_html} alt="HTML" />
              <img src={icon_css} alt="CSS" />
              <img src={icon_js} alt="JavaScript" />
              <img src={icon_react} alt="ReactJS" />
              <img src={icon_react} alt="ReactJS" />
              <img src={icon_react} alt="ReactJS" />
            </div>
            <div>
              <img src={icon_html} alt="HTML" />
              <img src={icon_css} alt="CSS" />
              <img src={icon_js} alt="JavaScript" />
              <img src={icon_react} alt="ReactJS" />
              <img src={icon_react} alt="ReactJS" />
              <img src={icon_react} alt="ReactJS" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}