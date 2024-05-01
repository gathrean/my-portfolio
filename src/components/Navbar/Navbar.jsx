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
        <nav ref={navbarRef} className={`navbar navbar-animation ${scroll ? 'float-dock' : ''}`} style={{ height: navbarHeight }}>
            <div className="navbar-container navbar-animation">
                <div className="brand">
                    <span className="brand-text">Gathrean</span>
                </div>
                <div className="mobile-view" onClick={toggleNavbar}>
                    <img
                        src={hamburgerImage}
                        alt="Hamburger Menu"
                        className={`hamburger ${collapsed ? 'collapsed' : 'open'}`}
                        style={{ width: '15px', height: '15px' }}
                    />
                </div>
            </div>
            <div className="navlink-wrapper">
                <ul className={`navbar-nav ${collapsed ? 'collapsed' : 'closed'}`}>
                    {/* <li>
                        <Link className={`nav-item ${activeSection === 'HOME' ? 'highlight' : ''}`} onClick={() => scrollToSection('HOME')}>HOME</Link>
                    </li> */}
                    <li>
                        <Link className={`nav-item ${activeSection === 'WORK' ? 'highlight' : ''}`} onClick={() => scrollToSection('WORK')}>Work</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${activeSection === 'TECH' ? 'highlight' : ''}`} onClick={() => scrollToSection('TECH')}>Tech</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${activeSection === 'CONTACT' ? 'highlight' : ''}`} onClick={() => scrollToSection('CONTACT')}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}