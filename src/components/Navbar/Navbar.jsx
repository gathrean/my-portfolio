import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';
import './Navbar-Mobile.css';
import './Navbar-Logo.css';

import hamburgerImage from './hamburger.png';

export function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation();

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <nav className={`navbar ${scroll ? 'scrolled' : ''}`}>
            <div className="navbar-container">
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
        </nav>
    );
}