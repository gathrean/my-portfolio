// components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#section1">Section 1</a></li>
                <li><a href="#section2">Section 2</a></li>
                <li><a href="#section3">Section 3</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;