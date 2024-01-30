// App.js focuses on the component logic

import React, { useState, useEffect } from 'react';

// styles
import './styles/App.css';
import './styles/Banner.css';
import './styles/Fonts.css';
import './styles/Global.css';
import './styles/LeftDock.css';
import './styles/Sidebar.css';

// import bannerImage from './assets/images/mountain.jpg';

// Navigation
// import Sidebar from './Sidebar';

// Pages
import Banner from './components/pages/Banner';
// import Home from './components/pages/Home';
// import Contact from './components/pages/Contact';



// Project 1
const Project1 = () => (
  <>
    <h2>Project Title 1</h2>
    <p>Project Description 1</p>
    <a href="#project-link-1">Project Link 1</a>
    <p>Tech Stack: Project Tech Stack 1</p>
    <p>What I Learned: What I Learned 1</p>
  </>
);

// Project 2
const Project2 = () => (
  <>
    <h2>Project Title 2</h2>
    <p>Project Description 2</p>
    <a href="#project-link-2">Project Link 2</a>
    <p>Tech Stack: Project Tech Stack 2</p>
    <p>What I Learned: What I Learned 2</p>
  </>
);

// Project 3
const Project3 = () => (
  <>
    <h2>Project Title 3</h2>
    <p>Project Description 3</p>
    <a href="#project-link-3">Project Link 3</a>
    <p>Tech Stack: Project Tech Stack 3</p>
    <p>What I Learned: What I Learned 3</p>
  </>
);


function App() {

  const [isLeftDockActive, setLeftDockActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLeftDockActive(true);
    }, 100);
  }, []);

  return (
    <div className="container">
      <Banner />

      <div className={`LeftDock ${isLeftDockActive ? 'active' : ''}`}>
        <div className="LeftDockItem"></div>
      </div>

      {/* Project Sections */}
      <section id="project-link-1">
        <Project1 />
      </section>

      <section id="project-link-2">
        <Project2 />
      </section>

      <section id="project-link-3">
        <Project3 />
      </section>
    </div>
  );
}

export default App;
