import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components //
import { Navbar } from './components/Navbar/Navbar';

// Pages // 
import { LandingPage } from './pages/LandingPage/LandingPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

// CSS //
import './App.css';

// Fonts //
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
        {/* LandingPage route with Navbar and Footer */}
        <Route path="/" element={<Layout><LandingPage /></Layout>} />

        {/* NotFoundPage route without Navbar and Footer */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;