import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarFunctions } from './NavbarFunctions';

import './Navbar.css';
import './Navbar-MediaQuries.css';
import './Navbar-Logo.css';
import './Navbar-Navlink.css';

import hamburgerImage from './Icons/hamburger-white.png';

export function Navbar() {
    const { floatDock, navbarHeight, navbarRef, toggleNavbar } = useNavbarFunctions();
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
        setCollapsed(floatDock);
    }, [floatDock]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowNavbar(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowNavbar(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

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
        toggleNavbar();
    };

    const getActiveSection = () => {
        const sections = ['HOME', 'PROJECTS', 'TECH', 'CONTACT'];
        for (let i = sections.length - 1; i >= 0; i--) {
            const sectionClassName = sections[i];
            const section = document.querySelector(`.${sectionClassName}`);
            if (section && section.getBoundingClientRect().top <= navbarHeight) {
                return sectionClassName;
            }
        }
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
            <div className="navlink-container">
                <ul className={`navlink-ul ${collapsed ? 'collapsed' : 'closed'}`}>
                    <li>
                        <Link>About Me</Link>
                    </li>
                    <li>
                        <Link className={`${activeSection === 'PROJECTS' ? 'highlight' : ''}`} onClick={() => scrollToSection('PROJECTS')}>Projects</Link>
                    </li>
                    <li>
                        <Link>Work</Link>
                    </li>
                    <li>
                        <Link>Education</Link>
                    </li>
                    <li>
                        <Link className={`${activeSection === 'CONTACT' ? 'highlight' : ''}`} onClick={() => scrollToSection('CONTACT')}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}