import React, { useEffect, useState } from 'react';

// Sections
import HERO from './Sections/HERO/HERO';
import { ABOUT } from './Sections/ABOUT/ABOUT';
import { SKILLS } from './Sections/SKILLS/SKILLS';
import { ACADEMIA } from './Sections/ACADEMIA/ACADEMIA';
import { PROJECTS } from './Sections/PROJECTS/PROJECTS';
import { Footer2 } from '../../components/Footer/Footer2';

// Components 
import MyProfile from '../../components/MyProfile/MyProfile';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

export function LandingPage() {
    const [containerClass, setContainerClass] = useState('LP-my-profile-container');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1100) {
                setContainerClass('section-container');
            } else {
                setContainerClass('LP-my-profile-container');
            }
        };

        const handleScroll = () => {
            const profile = document.querySelector('.my-profile');
            const container = document.querySelector(`.${containerClass}`);

            if (profile && container) {
                const containerRect = container.getBoundingClientRect();
                const profileRect = profile.getBoundingClientRect();
                const margin = 6 * parseFloat(getComputedStyle(document.documentElement).fontSize);

                if (window.innerWidth > 768 && window.innerWidth > 1100) {
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
                } else {
                    profile.style.position = 'relative';
                    profile.style.top = '0';
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        const cards = document.querySelectorAll('.card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            rootMargin: '-10px 0px',
            threshold: 0.05
        });

        cards.forEach(card => {
            observer.observe(card);
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, [containerClass]);

    return (
        <section id="section1 home">
            <section id="HERO" className="HERO"><HERO /></section>

            <div className="LP-container mobile-profile">
                <div className={containerClass}>
                    <MyProfile />
                </div>
                <div className="LP-sections-container">
                    <section id="ABOUT" className="ABOUT"><ABOUT /></section>
                    <section id="SKILLS" className="SKILLS"><SKILLS /></section>
                    <section id="ACADEMIA" className="ACADEMIA"><ACADEMIA /></section>
                    <section id="PROJECTS" className="PROJECTS"><PROJECTS /></section>
                    {/* footer */}
                    <div>
                        <Footer2 />
                    </div>
                </div>
            </div>
        </section>
    );
}