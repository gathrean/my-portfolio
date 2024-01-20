// App.js focuses on the component logic

import React, { useState, useEffect } from 'react';

// styles
import './styles/App.css';
import './styles/Banner.css';
import './styles/Fonts.css';
import './styles/Global.css';
import './styles/LeftDock.css';
import './styles/Sidebar.css';

import bannerImage from './assets/images/mountain.jpg';

// Navigation
// import Sidebar from './Sidebar';

// Pages
// import Home from './components/pages/Home';
// import Contact from './components/pages/Contact';

// Projects Pages
// import DungeonQuad from './components/projects/DungeonQuad';
// import Nebula from './components/projects/Nebula';
// import OrcaSwipe from './components/projects/OrcaSwipe'

function App() {

  const [isLeftDockActive, setLeftDockActive] = useState(false);

  useEffect(() => {
    // After the component mounts, trigger the animation
    setTimeout(() => {
      setLeftDockActive(true);
    }, 100);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="container">

      <div className="banner-section">
        {/* <img src={bannerImage} alt="Banner" /> */}

        <div className="banner-text">

          <h1 className="banner-title sf-regular">Gathrean <br></br>Dela Cruz</h1>

          <p className="banner-subtitle sf-regular">
            👋🏽 I AM A DEVELOPER & GRAPHIC DESIGNER BASED IN VANCOUVER, BC.
          </p>
          <br></br>
          <p className="banner-subtitle sf-regular">
            *🫡 I appreciate your curiosity, but
            <br></br>
            this website is currently under construction!
          </p>

        </div>

      </div>

      <div className={`LeftDock ${isLeftDockActive ? 'active' : ''}`}>
        <div className="LeftDockItem"></div>
        {/* Add more items as needed */}
      </div>

    </div>
  );
}

export default App;
