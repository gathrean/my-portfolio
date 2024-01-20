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
    </div>
  );
}

export default App;
