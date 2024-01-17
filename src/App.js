// App.js focuses on the component logic

import React, { useState, useEffect } from 'react';

// Styles
// import logo from './assets/images/logo.svg';
import './Assets/Fonts/Benzin Bold.ttf'
import './Styles/App.css';

import bannerImage from './Assets/Images/mountain.jpg';

// Navigation
import Sidebar from './Sidebar';

// Pages
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';

// Projects Pages
import DungeonQuad from './Components/Projects/DungeonQuad';
import Nebula from './Components/Projects/Nebula';
import OrcaSwipe from './Components/Projects/OrcaSwipe'

const sectionRefs = {};

function App() {
  const [activePage, setActivePage] = useState('Home');

  // Define section data
  const sections = [
    { id: 'Home', component: Home },
    { id: 'Nebula', component: Nebula },
    { id: 'OrcaSwipe', component: OrcaSwipe },
    { id: 'DungeonQuad', component: DungeonQuad },
    { id: 'Contact', component: Contact },
  ];

  // Handle click on a page link in the sidebar
  const handlePageClick = (page) => {
    setActivePage(page);
    scrollToSection(page);
  };

  // Scroll to a section by its id
  const scrollToSection = (section) => {
    const ref = sectionRefs[section] || sectionRefs.about;
    ref.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  // Set the active page based on the section that is in view
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -100px 0px',
    };

    // Handle intersection of a section with the viewport
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe the section refs
    sections.forEach((section) => {
      const sectionElement = sectionRefs[section.id]; // Get the actual DOM element
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]); // Add sections as a dependency to ensure observer gets updated when sections change

  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner-section">
        <img src={bannerImage} alt="Banner" />
        <div className="banner-text">
          <h1 className="banner-title">Gathrean Dela Cruz</h1>
          <p className="banner-subtitle benzin-regular">
            I AM A DEVELOPER, MUSIC PRODUCER, AND GRAPHIC DESIGNER BASED IN VANCOUVER, BC.
          </p>
        </div>
      </div>

      {/* Sidebar and Content */}
      <Sidebar activePage={activePage} handlePageClick={handlePageClick} />

      <div className="content">
        {sections.map((section) => (
          <div className="section" id={section.id} key={section.id} ref={(el) => (sectionRefs[section.id] = el)}>
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
