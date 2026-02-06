import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarFunctions, useScrollHandler } from './NavbarFunctions';

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
    const [activeSection, setActiveSection] = useState('HOME');
    const [expanded, setExpanded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const mobileViewRef = useRef(null);

    useScrollHandler(setActiveSection, navbarHeight);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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

    const scrollToSection = (sectionClassName) => {
        if (activeSection !== sectionClassName) {
            const section = document.querySelector(`.${sectionClassName}`);
            if (section) {
                const offsetTop = section.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop - navbarHeight,
                    behavior: "smooth"
                });
                setActiveSection(sectionClassName);
            }
        }
    };

    const navLinks = (
        <>
            <li>
                <Link onClick={() => scrollToSection('ACADEMIA')} className={activeSection === 'ACADEMIA' ? 'active' : ''}>Academia</Link>
            </li>
            <li>
                <Link onClick={() => scrollToSection('PROJECTS')} className={activeSection === 'PROJECTS' ? 'active' : ''}>Projects</Link>
            </li>
            <li>
                <Link onClick={() => scrollToSection('SKILLS')} className={activeSection === 'SKILLS' ? 'active' : ''}>Tech Stack</Link>
            </li>
            <li>
                <Link onClick={() => scrollToSection('ABOUT')} className={activeSection === 'ABOUT' ? 'active' : ''}>About Me</Link>
            </li>
        </>
    );

    return (
        <nav ref={navbarRef} className={`navbar navbar-animation ${isDesktop ? 'navbar-desktop' : ''}`} style={{ height: isDesktop ? 40 : navbarHeight }}>

            <div className="navbar-container">

                <div className="brand">
                    <span className="brand-text">{isDesktop ? 'Gathrean Dela Cruz' : 'Menu'}</span>
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
}