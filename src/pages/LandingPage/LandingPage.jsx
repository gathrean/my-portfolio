import React, { useState, useEffect, useRef } from 'react';

// Sections
import HERO from './Sections/HERO/HERO';
import { ABOUT } from './Sections/ABOUT/ABOUT';
import { EXPERIENCE } from './Sections/EXPERIENCE/EXPERIENCE';
import { PROJECTS } from './Sections/PROJECTS/PROJECTS';
import { CONTACT } from './Sections/CONTACT/CONTACT';

// Components
import MyProfile from './MyProfile/MyProfile';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';


export function LandingPage() {
    const sectionsContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            if (sectionsContainerRef.current) {
                sectionsContainerRef.current.scrollBy({
                    top: e.deltaY,
                    behavior: 'smooth'
                });
            }
        };

        const profileContainer = document.querySelector('.profile-container');
        if (profileContainer) {
            profileContainer.addEventListener('wheel', handleScroll);
        }

        return () => {
            if (profileContainer) {
                profileContainer.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);

    return (
        <div className="landing-page-container">
            <div className="profile-container">
                <MyProfile />
            </div>
            <div className="sections-container" ref={sectionsContainerRef}>
                <section id="ABOUT" className="ABOUT"><ABOUT /></section>
                <section id="EXPERIENCE" className="EXPERIENCE"><EXPERIENCE /></section>
                <section id="PROJECTS" className="PROJECTS"><PROJECTS /></section>
                <section id="CONTACT" className="CONTACT"><CONTACT /></section>
            </div>
        </div>
    );
};