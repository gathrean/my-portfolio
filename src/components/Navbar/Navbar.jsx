import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarFunctions } from './NavbarFunctions';

import './Navbar.css';
import './Navbar-MediaQuries.css';
import './Navbar-Logo.css';
import './Navbar-Navlink.css';

import hamburgerImage from './hamburger.png';

export function Navbar() {
    const { scroll, floatDock, navbarHeight, navbarRef, scrollToTop, toggleNavbar } = useNavbarFunctions();
    const [activeSection, setActiveSection] = useState('HOME');
    const [collapsed, setCollapsed] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = getActiveSection();
            setActiveSection(section);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Toggle collapsed state based on floatDock
        setCollapsed(floatDock);
    }, [floatDock]);

    useEffect(() => {
        // Set timeout to show navbar after 1 second
        const timeout = setTimeout(() => {
            setShowNavbar(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const scrollToSection = (sectionClassName) => {
        if (activeSection !== sectionClassName) {
            const section = document.querySelector(`.${sectionClassName}`);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - navbarHeight,
                    behavior: "smooth"
                });
                setActiveSection(sectionClassName);
            }
        }
        toggleNavbar(); // Close the navbar after scrolling
    };

    const getActiveSection = () => {
        const sections = ['HOME', 'WORK', 'TECHSTACK', 'CONTACT'];

        for (let i = sections.length - 1; i >= 0; i--) {
            const sectionClassName = sections[i];
            const section = document.querySelector(`.${sectionClassName}`);
            if (section && section.getBoundingClientRect().top <= navbarHeight) {
                return sectionClassName;
            }
        }

        // If no section is in view, return the first section
        return sections[0];
    };

    return (
        <nav
            ref={navbarRef}
            className={`navbar navbar-animation float-dock ${showNavbar ? 'slide-down' : ''}`}
            style={{ height: navbarHeight }}
        >
            <div className="navbar-container navbar-animation">
                <div className="brand">
                    <span className="brand-text">Gathrean</span>
                    <span className="brand-text-full">Gathrean Dela Cruz</span>
                </div>
                <div className="mobile-view" onClick={toggleNavbar}>
                    <img
                        src={hamburgerImage}
                        alt="Hamburger Menu"
                        className={`hamburger ${collapsed ? 'collapsed' : 'open'}`}
                        style={{ width: '15px', height: '20px' }}
                    />
                </div>
            </div>
            <div className="navlink-wrapper">
                <ul className={`navbar-nav ${collapsed ? 'collapsed' : 'closed'}`}>
                    <li>
                        <Link className={`nav-item nav-link ${activeSection === 'WORK' ? 'highlight' : ''}`} onClick={() => scrollToSection('WORK')}>Work</Link>
                    </li>
                    <li>
                        <Link className={`nav-item nav-link ${activeSection === 'TECH' ? 'highlight' : ''}`} onClick={() => scrollToSection('TECH')}>Tech</Link>
                    </li>
                    <li>
                        <Link className={`nav-item nav-link ${activeSection === 'CONTACT' ? 'highlight' : ''}`} onClick={() => scrollToSection('CONTACT')}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}