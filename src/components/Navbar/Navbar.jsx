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
    const [activeSection, setActiveSection] = useState('HOME');
    const [expanded, setExpanded] = useState(false);

    const navbarRef = useRef(null);

    useEffect(() => {
        const handleClickOutsideNavbar = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setExpanded(false); // Close the navbar when clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutsideNavbar);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideNavbar);
        };
    }, [navbarRef]);

    const scrollToSection = (sectionClassName) => {
        if (activeSection !== sectionClassName) {
            const section = document.querySelector(`.${sectionClassName}`);
            if (section) {
                const offsetTop = section.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop - navbarRef.current.offsetHeight,
                    behavior: "smooth"
                });
                setActiveSection(sectionClassName);
            }
        }
    };

    const toggleHamburger = () => {
        setExpanded(!expanded);
    };

    return (
        <nav ref={navbarRef} className={`navbar navbar-animation`} style={{ height: expanded ? 'auto' : '56px' }}>

            <div className="navbar-container">

                <div className="brand">
                    <span className="brand-text">Gathrean</span>
                </div>

                <div className="mobile-view" onClick={toggleHamburger}>
                    <HamburgerIcon open={expanded} />
                </div>

            </div>

            <div className="navlink-container">
                <ul className={`navlink-ul prevent-overflow ${expanded ? 'expanded' : ''}`}>
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