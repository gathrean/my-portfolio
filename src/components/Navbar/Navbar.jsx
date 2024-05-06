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

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['HOME', 'ABOUT', 'PROJECTS', 'WORK', 'CONTACT'];
            const scrollPosition = window.scrollY;

            for (const section of sections) {
                const element = document.querySelector(`.${section}`);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav ref={navbarRef} className="navbar navbar-animation" style={{ height: navbarHeight }}>

            <div className="navbar-container">

                <div className="brand">
                    <span className="brand-text">Gathrean</span>
                </div>

                <div className="mobile-view" onClick={toggleHamburger}>
                    <img
                        src={hamburgerImage}
                        className={`hamburger ${collapsed ? 'collapsed' : 'open'}`}
                        style={{ width: '30px', height: '30px' }}
                        alt="Hamburger Menu"
                    />
                </div>

            </div>

            <div className="navlink-container">
                <ul className={`navlink-ul ${collapsed ? 'collapsed' : 'closed'}`}>
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