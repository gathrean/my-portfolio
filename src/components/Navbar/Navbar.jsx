import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        < nav className="navbar" >
            <div className="brand logo-home">
                <span className="brand-text">Gathrean Dela Cruz</span>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item non-highlight">
                    <a href="#section1">Home</a>
                    <a href="#section2">About</a>
                    <a href="#section3">Projects</a>
                    <a href="#section4">Contact</a>
                </li>
            </ul>
        </nav >
    );
}

export default Navbar;