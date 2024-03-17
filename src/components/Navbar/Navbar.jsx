import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        < nav className="navbar" >
            <div className="brand logo-home">
                <span className="brand-text">Gathrean Dela Cruz</span>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav >
    );
}

export default Navbar;