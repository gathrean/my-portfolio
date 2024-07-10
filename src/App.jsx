import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar/Navbar';

// Pages
import { LandingPage } from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AcademiaPage from './pages/AcademiaPage/AcademiaPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

// CSS
import './App.css';

// Fonts
import './assets/fonts/Fonts.css';

// Custom Layout component for pages with Navbar and Footer
const Layout = ({ children }) => (
  <div className="App">
    <Navbar />
    {children}
  </div>
);

function App() {
  useEffect(() => {
    // Add target="_blank" to all links
    document.querySelectorAll('a').forEach(function (link) {
      link.setAttribute('target', '_blank');
    });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <Router>
      <Routes>
        <Route path="/og" element={<Layout><LandingPage /></Layout>} />
        <Route path="/" element={<Layout><AboutPage /></Layout>} />
        <Route path="/academia" element={<Layout><AcademiaPage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;