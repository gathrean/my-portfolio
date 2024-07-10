import { useEffect, useState } from 'react';

const useCardVisibility = () => {
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
                        profile.style.top = `0px`;
                    } else if (containerRect.bottom <= profileRect.height + margin) {
                        profile.style.position = 'absolute';
                        profile.style.top = `${containerRect.height - profileRect.height}px`;
                    }
                } else {
                    profile.style.position = 'relative';
                    profile.style.top = `0px`;
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

    return containerClass;
};

export default useCardVisibility;