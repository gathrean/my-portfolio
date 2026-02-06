import React, { useEffect } from 'react';
import { ABOUT } from '../LandingPage/Sections/ABOUT/ABOUT';
import { ACADEMIA } from '../LandingPage/Sections/ACADEMIA/ACADEMIA';

export function AboutPage() {
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
            <section className="ABOUT"><ABOUT /></section>
            <section className="ACADEMIA"><ACADEMIA /></section>
        </div>
    );
}
