import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarFunctions } from './NavbarFunctions';

import './Navbar.css';
import './Navbar-Logo.css';
import './Navbar-Navlink.css';

import hamburgerImage from './Icons/hamburger-white.png';

export function Navbar() {
    const { navbarHeight, navbarRef, toggleHamburger } = useNavbarFunctions();
    
    const [activeSection, setActiveSection] = useState('HOME');
    const [collapsed] = useState(false);
    const [showNavbar] = useState(false);

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
        <nav
            ref={navbarRef}
            className={`navbar navbar-animation ${showNavbar ? 'slide-down' : ''}`}
            style={{ height: navbarHeight }}
        >
            <div className="navbar-container navbar-animation">
                <div className="brand">
                    <span className="brand-text">Gathrean</span>
                </div>
                <div className="mobile-view" onClick={toggleHamburger}>
                    <img
                        src={hamburgerImage}
                        alt="Hamburger Menu"
                        className={`hamburger ${collapsed ? 'collapsed' : 'open'}`}
                        style={{ width: '30px', height: '30px' }}
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
                        <Link className={`${activeSection === 'CONTACT' ? 'highlight' : ''}`} onClick={() => scrollToSection('CONTACT')}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}