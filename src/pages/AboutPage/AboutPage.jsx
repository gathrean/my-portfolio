import React from 'react';

import { ABOUT } from '../LandingPage/Sections/ABOUT/ABOUT';
import useCardVisibility from '../../hooks/useCardVisibility';
import MyProfile from '../../components/MyProfile/MyProfile';
// import Footer2 from '../../components/Footer/Footer2';

const AboutPage = () => {
    const containerClass = useCardVisibility();

    return (
        <div className="page-container">
            <div className={containerClass}>
                {/* <MyProfile /> */}
            </div>
            <section id="ABOUT" className="ABOUT">
                <ABOUT />
            </section>
            {/* <Footer2 /> */}
        </div>
    );
};

export default AboutPage;