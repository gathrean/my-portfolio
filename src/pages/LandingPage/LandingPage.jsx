import React from 'react';

// Sections
import HERO from './Sections/HERO/HERO';
import { ABOUT } from './Sections/ABOUT/ABOUT';
import { ACADEMIA } from './Sections/ACADEMIA/ACADEMIA';
import { PROJECTS } from './Sections/PROJECTS/PROJECTS';
import { CONTACT } from './Sections/CONTACT/CONTACT';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

export function LandingPage() {
    return (
        <section id="section1 home">
            <section id="HERO" className="HERO"><HERO /></section>
            <section id="ABOUT" className="ABOUT"><ABOUT /></section>
            <section id="ACADEMIA" className="ACADEMIA"><ACADEMIA /></section>
            <section id="PROJECTS" className="PROJECTS"><PROJECTS /></section>
            <section id="CONTACT" className="CONTACT"><CONTACT /></section>
        </section>
    );
}
