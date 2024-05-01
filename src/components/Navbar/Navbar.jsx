import React from 'react';
import { Link } from 'react-router-dom';

import { useNavbarFunctions } from './NavbarFunctions';
import './Navbar.css';
import './Navbar-MediaQuries.css';
import './Navbar-Logo.css';
import './Navbar-Navlink.css';

import hamburgerImage from './hamburger.png';

export function Navbar() {
    const { scroll, floatDock, navbarHeight, navbarRef, scrollToTop, toggleNavbar, location } = useNavbarFunctions();

    // Apply CSS filter to invert the color if floatDock is true
    const hamburgerStyle = {
        width: '20px',
        height: '20px'
    };

    return (
        <nav ref={navbarRef} className={`navbar navbar-animation ${scroll ? 'float-dock' : ''}`} style={{ height: navbarHeight }}>
            <div className="navbar-container navbar-animation">
                <div className="brand">
                    <span className="brand-text">Gathrean</span>
                </div>
                <div className="mobile-view" onClick={toggleNavbar}>
                    <img
                        src={hamburgerImage}
                        alt="Hamburger Menu"
                        className={`hamburger ${floatDock ? '' : 'open'}`}
                        style={hamburgerStyle}
                    />
                </div>
            </div>
            <div className="navlink-wrapper">
                <ul className={`navbar-nav ${floatDock ? 'collapsed' : 'closed'}`}>
                    <li>
                        <Link className={`nav-item ${location.pathname === '/' ? 'highlight' : ''}`} to="/" onClick={scrollToTop}>HOME</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${location.pathname === '/about' ? 'highlight' : ''}`} to="/about" onClick={scrollToTop}>WORK</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${location.pathname === '/projects' ? 'highlight' : ''}`} to="/projects" onClick={scrollToTop}>TECH STACK</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${location.pathname === '/contact' ? 'highlight' : ''}`} to="/contact" onClick={scrollToTop}>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}