// App.js focuses on the component logic

import React, { useState, useEffect } from 'react';

// Styles
// import logo from './assets/images/logo.svg';
import './Assets/Fonts/Benzin Bold.ttf'
import './Styles/App.css';

import bannerImage from './Assets/Images/mountain.jpg';

// Navigation
import Sidebar from './Sidebar';

// Pages
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';

// Projects Pages
import DungeonQuad from './Components/Projects/DungeonQuad';
import Nebula from './Components/Projects/Nebula';
import OrcaSwipe from './Components/Projects/OrcaSwipe'

function App() {
  return (
    <div className="container">

      <div className="banner-section">
        <img src={bannerImage} alt="Banner" />

        <div className="banner-text">

          <h1 className="banner-title benzin-regular">Gathrean Dela Cruz</h1>

          <p className="banner-subtitle benzin-regular">
            I AM A DEVELOPER, MUSIC PRODUCER, AND GRAPHIC DESIGNER BASED IN VANCOUVER, BC.
          </p>

        </div>

      </div>

    </div>
  );
}

export default App;
