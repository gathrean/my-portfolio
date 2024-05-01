import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components //
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

// Pages // 
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { ContactPage } from './pages/ContactPage/ContactPage';

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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;