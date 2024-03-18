import React from 'react';
import { Link } from 'react-router-dom';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

export function Home() {
    return (
        <section id="section1 home">
            <div className="content">
                <h2>Section 1 - Home</h2>
                {/* Add home content here */}
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </section>
    );
};