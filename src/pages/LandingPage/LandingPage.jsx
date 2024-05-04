import React from 'react';

// Sections
import HERO from './Sections/HERO/HERO';
import { WORK } from './Sections/WORK/WORK';
import { TECH } from './Sections/TECH/TECH';
import { CONTACT } from './Sections/CONTACT/CONTACT';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

export function LandingPage() {
    const images = [
        '/images/DSC04733v3BW_cropped.jpg'
    ];

    return (
        <section id="section1 home">
            <HERO images={images} />
            <section id="HOME" className="HOME">
                {/* Your HOME section content here */}
            </section>
            <section id="WORK" className="WORK">
                <WORK />
            </section>
            <section id="TECH" className="TECH">
                <TECH />
            </section>
            <section id="CONTACT" className="CONTACT">
                <CONTACT />
            </section>
        </section>
    );
}
