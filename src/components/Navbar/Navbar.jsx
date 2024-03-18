import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';
import './Navbar-Mobile.css'
import './Navbar-Logo.css'

export function Navbar() {
    const [scroll, setScroll] = useState(false);
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

    return (
        <nav className={`navbar ${scroll ? 'scrolled' : ''}`}>
            <div className="brand logo-home">
                <span className="brand-text">Gathrean Dela Cruz</span>
            </div>
            <ul className="navbar-nav">
                <li>
                    <Link className={`nav-item ${location.pathname === '/' ? 'highlight' : ''}`} to="/">Home</Link>
                </li>
                <li>
                    <Link className={`nav-item ${location.pathname === '/about' ? 'highlight' : ''}`} to="/about">About</Link>
                </li>
                <li>
                    <Link className={`nav-item ${location.pathname === '/projects' ? 'highlight' : ''}`} to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className={`nav-item ${location.pathname === '/contact' ? 'highlight' : ''}`} to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}