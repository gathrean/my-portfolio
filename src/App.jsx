import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components //
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

// Pages // 
import { LandingPage } from './pages/LandingPage/LandingPage';

// Sections //
import { HOME } from './pages/LandingPage/Sections/HOME/HOME';
import { WORK } from './pages/LandingPage/Sections/WORK/WORK';
import { TECHSTACK } from './pages/LandingPage/Sections/TECHSTACK/TECHSTACK';
import { CONTACT } from './pages/LandingPage/Sections/CONTACT/CONTACT';

// CSS //
import './App.css';

// Fonts //
import './assets/fonts/Fonts.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;