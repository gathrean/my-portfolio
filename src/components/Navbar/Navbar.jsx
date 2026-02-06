import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const [localTime, setLocalTime] = useState('');
    const mobileViewRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Live clock in UTC-8 (PST), 12hr format
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', {
                timeZone: 'America/Los_Angeles',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            });
            setLocalTime(timeStr);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (expanded && mobileViewRef.current && !mobileViewRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [expanded]);

    const handleNavClick = () => {
        if (!isDesktop && expanded) {
            toggleHamburger();
            setExpanded(false);
        }
    };

    const navLinks = (
        <>
            <li>
                <Link to="/" onClick={handleNavClick} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
                <Link to="/about" onClick={handleNavClick} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            </li>
            <li>
                <Link to="/developer" onClick={handleNavClick} className={location.pathname === '/developer' ? 'active' : ''}>Developer</Link>
            </li>
            <li>
                <Link to="/photography" onClick={handleNavClick} className={location.pathname === '/photography' ? 'active' : ''}>Photography</Link>
            </li>
            <li>
                <Link to="/contact" onClick={handleNavClick} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </li>
        </>
    );

    const navContent = (
        <nav ref={navbarRef} className={`navbar navbar-animation ${isDesktop ? 'navbar-desktop' : ''}`} style={{ height: isDesktop ? 40 : navbarHeight }}>

            <div className="navbar-container">

                <div className="brand">
                    <span className="brand-text">{isDesktop ? 'Gathrean Dela Cruz' : 'Menu'}</span>
                    {isDesktop && <span className="navbar-clock">{localTime}</span>}
                </div>

                {isDesktop ? (
                    <ul className="navlink-ul-desktop">
                        {navLinks}
                    </ul>
                ) : (
                    <div ref={mobileViewRef} className="hamburger mobile-view clickable" onClick={() => { toggleHamburger(); setExpanded(!expanded); }}>
                        <HamburgerIcon open={expanded} />
                    </div>
                )}

            </div>

            {!isDesktop && (
                <div className="navlink-container">
                    <ul className={`navlink-ul prevent-overflow`}>
                        {navLinks}
                    </ul>
                </div>
            )}

        </nav>
    );

    return navContent;
}