import React from 'react';
import { ACADEMIA } from '../LandingPage/Sections/ACADEMIA/ACADEMIA';
import useCardVisibility from '../../hooks/useCardVisibility';
const AcademiaPage = () => {
    const containerClass = useCardVisibility();

    return (
        <div className="page-container">
            <div className={containerClass}>
                {/* <MyProfile /> */}
            </div>
            <section id="ACADEMIA" className="ACADEMIA">
                <ACADEMIA />
            </section>
        </div>
    );
};

export default AcademiaPage;