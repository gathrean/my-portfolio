import React from 'react';

// Components //
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages // 
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

// CSS //
import './App.css';

// Fonts //
import './assets/fonts/Fonts.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <Home />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;