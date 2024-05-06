import React, { useState } from 'react';
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
    const [minimized, setMinimized] = useState(false);

    useScrollHandler(setActiveSection, navbarHeight);

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
        <nav ref={navbarRef} className={`navbar navbar-animation ${minimized ? 'minimized' : ''}`} style={{ height: navbarHeight }}>

            <div className="navbar-container">

                <div className="brand">
                    <span className="brand-text">Gathrean</span>
                </div>

                <div className="mobile-view" onClick={() => { toggleHamburger(); setMinimized(!minimized); }}>
                    <HamburgerIcon open={minimized} />
                </div>

            </div>

            <div className="navlink-container">
                <ul className={`navlink-ul minimized`}>
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