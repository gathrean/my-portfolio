import React from 'react';

// Sections
import HERO from './Sections/HERO/HERO';
import { PROJECTS } from './Sections/PROJECTS/PROJECTS';
import { TECH } from './Sections/TECH/TECH';
import { CONTACT } from './Sections/CONTACT/CONTACT';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

export function LandingPage() {

    return (
        <section id="section1 home">

            <section id="HERO" className="HERO">
                <HERO />
            </section>

            <section id="ABOUT" className="ABOUT">
                {/* make the height 100vh */}
                <div className="about-section-container" style={{ height: '100vh' }}>
                    <hr />
                    <h1>About Me</h1>
                    <p>About me goes here. I can put my work experience here. I can also put my work experience in the Work Experience section.</p>
                </div>
            </section>

            <section id="PROJECTS" className="PROJECTS">
                <PROJECTS />
            </section>

            <section id="WORK" className="WORK">
                <div className="work-section-container" style={{ height: '100vh' }}>
                    <hr />
                    <h1>Work Experience</h1>
                    <p>Work experience goes here. I can put my work experience here. I can also put my work experience in the About Me section.</p>
                </div>
            </section>

            <section id="CONTACT" className="CONTACT">
                <CONTACT />
            </section>

            <section id="TECH" className="TECH">
                <TECH />
            </section>

        </section>
    );
}
