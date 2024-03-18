import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';
import './Navbar-Mobile.css';
import './Navbar-Logo.css';

export function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [hover, setHover] = useState(false);
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

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <nav className={`navbar ${scroll || hover ? 'scrolled' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="brand logo-home">
                <span className="brand-text">Gathrean</span>
            </div>
            <ul className="navbar-nav">
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