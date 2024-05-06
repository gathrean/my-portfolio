import React, { useState, useRef, useEffect } from 'react';
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
    const [activeSection, setActiveSection] = useState('HOME');
    const [expanded, setExpanded] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(56);

    const navbarRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const newHeight = expanded ? 56 : getWindowHeight();
            setNavbarHeight(newHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [expanded]);

    useEffect(() => {
        const handleClickOutsideNavbar = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                toggleHamburger(); // Close hamburger menu
            }
        };
        document.addEventListener('mousedown', handleClickOutsideNavbar);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideNavbar);
        };
    }, [navbarRef]);

    const getWindowHeight = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 499) {
            return expanded ? 56 : 300;
        } else {
            return expanded ? 56 : 325;
        }
    };

    const toggleHamburger = () => {
        setExpanded(!expanded);
    };

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

    return (
        <nav ref={navbarRef} className={`navbar navbar-animation`} style={{ height: navbarHeight }}>

            <div className="navbar-container">

                <div className="brand">
                    <span className="brand-text">Gathrean</span>
                </div>

                <div className="mobile-view" onClick={() => { toggleHamburger(); setExpanded(!expanded); }}>
                    <HamburgerIcon open={!expanded} />
                </div>

            </div>

            <div className="navlink-container">
                <ul className={`navlink-ul prevent-overflow`}>
                    <li>
                        <Link onClick={() => scrollToSection('ABOUT')} className={activeSection === 'ABOUT' ? 'active' : ''}>About</Link>
                    </li>
                    <li>
                        <Link onClick={() => scrollToSection('PROJECTS')} className={activeSection === 'PROJECTS' ? 'active' : ''}>Projects</Link>
                    </li>
                    <li>
                        <Link onClick={() => scrollToSection('WORK')} className={activeSection === 'WORK' ? 'active' : ''}>Work</Link>
                    </li>
                    <li>
                        <Link onClick={() => scrollToSection('CONTACT')} className={activeSection === 'CONTACT' ? 'active' : ''}>Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}