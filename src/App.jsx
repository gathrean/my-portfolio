import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';

// CSS //
import './App.css';

// FONTS //
import './assets/fonts/Fonts.css';
 
function App() {

  return (
    <div className="App">
      <header>
        <Navbar /> {/* Use the Navbar component */}
      </header>

      {/* Page Sections */}
      <section id="section1">
        <div className="content">
          <h2>Section 1</h2>
          {/* Your content for Section 1 goes here */}
        </div>
      </section>

      <section id="section2">
        <div className="content">
          <h2>Section 2</h2>
          {/* Your content for Section 2 goes here */}
        </div>
      </section>

      <section id="section3">
        <div className="content">
          <h2>Section 3</h2>
          {/* Your content for Section 3 goes here */}
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