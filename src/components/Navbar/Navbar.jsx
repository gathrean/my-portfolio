import React from 'react';

import './Navbar.css';

function Navbar() {
    // Function to handle navigation to different sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="brand logo-home">
                <span className="brand-text">Gathrean Dela Cruz</span>
            </div>
            <ul className="navbar-nav">
                {/* Attach click event handlers to navigate to respective sections */}
                <li className="nav-item" onClick={() => scrollToSection('home')}>Home</li>
                <li className="nav-item" onClick={() => scrollToSection('about')}>About</li>
                <li className="nav-item" onClick={() => scrollToSection('projects')}>Projects</li>
                <li className="nav-item" onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;