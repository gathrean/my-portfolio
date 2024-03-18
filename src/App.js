import React from 'react';
import Navbar from './components/Navbar/Navbar';

// CSS //
import './App.css';

// FONTS //
import './assets/fonts/Fonts.css';

function App() {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <section id="section1 home">
        <div className="content">
          <h2>Section 1 - Home</h2>

        </div>
      </section>

      <section id="section2 about">
        <div className="content">
          <h2>Section 2 - About Me</h2>

        </div>
      </section>

      <section id="section3 projects">
        <div className="content">
          <h2>Section 3 - Projects</h2>

        </div>
      </section>

      <section id="section4 contact">
        <div className="content">
          <h2>Section 4 - Contact Me</h2>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="content">
          <p>&copy; 2024 Gathrean Dela Cruz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;