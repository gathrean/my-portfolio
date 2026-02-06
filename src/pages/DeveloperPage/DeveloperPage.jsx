import React, { useEffect } from 'react';
import { PROJECTS } from '../LandingPage/Sections/PROJECTS/PROJECTS';
import { SKILLS } from '../LandingPage/Sections/SKILLS/SKILLS';

export function DeveloperPage() {
    useEffect(() => {
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
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <section className="PROJECTS"><PROJECTS /></section>
            <section className="SKILLS"><SKILLS /></section>
        </div>
    );
}
