import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarFunctions } from './NavbarFunctions';

import './Navbar.css';
import './Navbar-Logo.css';
import './Navbar-Navlink.css';

const HamburgerIcon = ({ open }) => (
    <svg
        viewBox="0 0 100 80"
        width="30"
        height="30"
        className={open ? "open" : ""}
    >
        <rect y="0" width="100" height="10" rx="8"></rect>
        <rect y="30" width="100" height="10" rx="8"></rect>
        <rect y="60" width="100" height="10" rx="8"></rect>
    </svg>
);

export function Navbar() {
    const { navbarHeight, navbarRef, toggleHamburger } = useNavbarFunctions();
    const [expanded, setExpanded] = useState(false);
    const mobileViewRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (expanded && !mobileViewRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [expanded]);

    return (
        <nav ref={navbarRef} className={`navbar navbar-animation`} style={{ height: navbarHeight }}>
            <div className="navbar-container">
                <div className="brand">
                    <span className="brand-text">gathrean.com</span>
                </div>
                <div ref={mobileViewRef} className="hamburger mobile-view clickable" onClick={() => { toggleHamburger(); setExpanded(!expanded); }}>
                    <HamburgerIcon open={expanded} />
                </div>
            </div>
            <div className="navlink-container">
                <ul className={`navlink-ul prevent-overflow`}>
                    <li>
                        <Link to="/" className={({ isActive }) => isActive ? 'active' : ''}>About</Link>
                    </li>
                    <li>
                        <Link to="/academia" className={({ isActive }) => isActive ? 'active' : ''}>Academia</Link>
                    </li>
                    <li>
                        <Link to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Work</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}