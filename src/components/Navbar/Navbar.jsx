import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarFunctions } from './NavbarFunctions';

import './Navbar.css';
import './Navbar-Logo.css';
import './Navbar-Navlink.css';

export function Navbar() {
    const { navbarHeight, navbarRef, toggleHamburger } = useNavbarFunctions();
    const [expanded, setExpanded] = useState(false);
    const mobileViewRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if navbar is expanded and if mobileViewRef is not null
            if (expanded && mobileViewRef.current && !mobileViewRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        if (expanded) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            // Clean up the event listener when component unmounts or when navbar collapses
            document.removeEventListener('click', handleClickOutside);
        };
    }, [expanded]);

    return (
        <nav ref={navbarRef} className={`navbar navbar-animation`} style={{ height: navbarHeight }}>
            <div className="navbar-container">
                <div className="menu-toggle clickable" onClick={() => { toggleHamburger(); setExpanded(!expanded); }}>
                    {expanded ? 'Close' : 'Menu'}
                </div>
            </div>
            {expanded && (
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
            )}
        </nav>
    );
}