import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components //
import { Navbar } from './components/Navbar/Navbar';
import { Footer2 } from './components/Footer/Footer2';

// Pages //
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { DeveloperPage } from './pages/DeveloperPage/DeveloperPage';
import { PhotographyPage } from './pages/PhotographyPage/PhotographyPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

// CSS //
import './App.css';

// Fonts //
import './assets/fonts/Fonts.css';

// Custom Layout component for pages with Navbar and Footer
const Layout = ({ children }) => (
  <div className="App">
    <div className="edge-blur edge-blur-top" />
    <div className="edge-blur edge-blur-bottom" />
    <Navbar />
    <div style={{ paddingTop: '52px' }}>
      {children}
    </div>
    <Footer2 />
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
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/projects" element={<Layout><DeveloperPage /></Layout>} />
        <Route path="/gallery" element={<Layout><PhotographyPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;