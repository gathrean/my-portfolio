import React from 'react';
import { PROJECTS } from '../LandingPage/Sections/PROJECTS/PROJECTS';
import useCardVisibility from '../../hooks/useCardVisibility';

const ProjectsPage = () => {
    const containerClass = useCardVisibility();

    return (
        <div className="page-container">
            <div className={containerClass}>
            </div>
            <section id="PROJECTS" className="PROJECTS">
                <PROJECTS />
            </section>
        </div>
    );
};

export default ProjectsPage;