import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the dropdown when a link is clicked
    };

    return (
        <nav>
            <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="hamburger"></div>
            </div>
            <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
                <li><a href="#section1" onClick={handleLinkClick}>Work</a></li>
                <li><a href="#section2" onClick={handleLinkClick}>About</a></li>
                <li><a href="#section3" onClick={handleLinkClick}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;