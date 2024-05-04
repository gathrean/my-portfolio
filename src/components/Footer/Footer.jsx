import React, { useEffect, useState } from 'react';
import './Footer.css';

export function Footer() {
    const [fontSize, setFontSize] = useState(100); 

    useEffect(() => {
        const updateFontSize = () => {
            const containerWidth = document.querySelector('.footer-title').offsetWidth;
            const desiredFontSize = containerWidth * 0.1; 
            setFontSize(Math.min(desiredFontSize, 75));
        };

        window.addEventListener('resize', updateFontSize);
        updateFontSize();

        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, []);

    return (
        <footer>
            <div className="footer-content footer-body">
                <p className="credit-text">Website developed and designed entirely by Gathrean Dela Cruz.</p>
                <div className="footer-title" style={{ fontSize: `${fontSize}px` }}>
                    <h1 className="">Gathrean</h1>
                </div>
            </div>
        </footer>

    );
};