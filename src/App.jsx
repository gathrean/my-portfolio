import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Components //
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

// Pages //
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { WorkPage } from './pages/WorkPage/WorkPage';
import { PhotographyPage } from './pages/PhotographyPage/PhotographyPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { TypographyPage } from './pages/TypographyPage/TypographyPage';

// CSS //
import './App.css';

// Fonts //
import './assets/fonts/Fonts.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Custom Layout component for pages with Navbar and Footer
const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = title || 'Gathrean Dela Cruz';
  }, [title]);

  return (
    <div className="App">
      <div className="edge-blur edge-blur-top" />
      <div className="edge-blur edge-blur-bottom" />
      <Navbar />
      <div style={{ paddingTop: '52px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    // Add target="_blank" to all links
    document.querySelectorAll('a').forEach(function (link) {
      link.setAttribute('target', '_blank');
    });

    // Prevent right-click save on images
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout title="Gathrean Dela Cruz"><LandingPage /></Layout>} />
        <Route path="/about" element={<Layout title="who is Gathrean Dela Cruz"><AboutPage /></Layout>} />
        <Route path="/work" element={<Layout title="Gathrean's work"><WorkPage /></Layout>} />
        <Route path="/photography" element={<Layout title="Gathrean's photography"><PhotographyPage /></Layout>} />
        <Route path="/contact" element={<Layout title="contact Gathrean"><ContactPage /></Layout>} />
        <Route path="/typography" element={<Layout title="typography"><TypographyPage /></Layout>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;