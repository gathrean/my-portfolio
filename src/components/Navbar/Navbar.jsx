import React from 'react';
import { Link } from 'react-router-dom';

import { useNavbarFunctions } from './NavbarFunctions';
import './Navbar.css';
import './Navbar-MediaQuries.css';
import './Navbar-Logo.css';
import './Navbar-Navlink.css';

import hamburgerImage from './hamburger.png';

export function Navbar() {
    const { scroll, floatDock, collapsed, navbarHeight, navbarRef, scrollToTop, toggleNavbar, location } = useNavbarFunctions();

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
                        className={`hamburger ${collapsed ? '' : 'open'}`}
                        style={{ width: '25px', height: '25px' }}
                    />
                </div>
            </div>
            <div className="navlink-wrapper">
                <ul className={`navbar-nav ${collapsed ? 'collapsed' : 'closed'}`}>
                    <li>
                        <Link className={`nav-item ${location.pathname === '/' ? 'highlight' : ''}`} to="/" onClick={scrollToTop}>Home</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${location.pathname === '/about' ? 'highlight' : ''}`} to="/about" onClick={scrollToTop}>About</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${location.pathname === '/projects' ? 'highlight' : ''}`} to="/projects" onClick={scrollToTop}>Projects</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${location.pathname === '/contact' ? 'highlight' : ''}`} to="/contact" onClick={scrollToTop}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}