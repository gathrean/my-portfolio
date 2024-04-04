import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';
import './Navbar-Mobile.css';
import './Navbar-Logo.css';
import './Navbar-Navlink.css';

import hamburgerImage from './hamburger.png';

export function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [floatDock, setFloatDock] = useState(false);
    const [collapsed, setCollapsed] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(56); // Initial height
    const location = useLocation();
    const navbarRef = useRef(null);

    // Update the height of the navbar when it is collapsed
    useEffect(() => {
        const newHeight = collapsed ? 56 : 'auto';
        setNavbarHeight(newHeight);
    }, [collapsed]);

    // Close the navbar when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setCollapsed(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Update the floating state of the navbar depending on the scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle the collapsed state of the navbar
    const toggleNavbar = () => {

        setCollapsed(!collapsed);

        // If the navbar is opened
        if (collapsed) {

            // If the navbar is opened:
            setFloatDock(true);

        } else { // If the navbar is closed

            // If the user has scrolled down:
            if (window.scrollY > 0) {

                setFloatDock(true);

            } else {

                // If the user has scrolled to the top:
                setFloatDock(true);
                setScroll(false);
            }
        }
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