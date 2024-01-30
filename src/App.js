import React, { useState, useEffect } from 'react';

// BANNER //
import Banner from './components/banner/Banner';
import './components/banner/Banner.css';
// import bannerImage from './assets/images/mountain.jpg';

// SIDEBAR //
import Sidebar from './components/sidebar/Sidebar';
import './components/sidebar/Sidebar.css';

// styles
import './styles/App.css';
import './styles/Fonts.css';
import './styles/Global.css';

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

  const [isSidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSidebarActive(true);
    }, 100);
  }, []);

  return (
    <div className="container">
      <Banner />

      <div className={`Sidebar ${isSidebarActive ? 'active' : ''}`}>
        <div className="SidebarItem"></div>
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
