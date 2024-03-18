import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components //
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages // 
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Contact } from './pages/Contact/Contact';

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;