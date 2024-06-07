import React, { useEffect } from 'react';

// Sections
import HERO from './Sections/HERO/HERO';
import { ABOUT } from './Sections/ABOUT/ABOUT';
import { ACADEMIA } from './Sections/ACADEMIA/ACADEMIA';
import { PROJECTS } from './Sections/PROJECTS/PROJECTS';
import { CONTACT } from './Sections/CONTACT/CONTACT';

// Components 
import MyProfile from '../../components/MyProfile/MyProfile';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

export function LandingPage() {

    useEffect(() => {
        const handleScroll = () => {
            const profile = document.querySelector('.my-profile');
            const container = document.querySelector('.LP-my-profile-container');

            if (profile && container) {
                const containerRect = container.getBoundingClientRect();
                const profileRect = profile.getBoundingClientRect();
                const margin = 4 * parseFloat(getComputedStyle(document.documentElement).fontSize);

                // Check if the profile should be sticky
                if (containerRect.top < margin && containerRect.bottom > profileRect.height + margin) {
                    profile.style.position = 'fixed';
                    profile.style.top = `${margin}px`;
                } else if (containerRect.top >= margin) {
                    profile.style.position = 'relative';
                    profile.style.top = '0';
                } else if (containerRect.bottom <= profileRect.height + margin) {
                    profile.style.position = 'absolute';
                    profile.style.top = `${containerRect.height - profileRect.height}px`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="section1 home">
            <section id="HERO" className="HERO"><HERO /></section>

            <div className="LP-container">
                <div className="LP-my-profile-container">
                    <MyProfile />
                </div>
                <div className="LP-sections-container">
                    <section id="ABOUT" className="ABOUT"><ABOUT /></section>
                    <section id="ACADEMIA" className="ACADEMIA"><ACADEMIA /></section>
                    <section id="PROJECTS" className="PROJECTS"><PROJECTS /></section>
                    <section id="CONTACT" className="CONTACT"><CONTACT /></section>
                </div>
            </div>
        </section>
    );
}