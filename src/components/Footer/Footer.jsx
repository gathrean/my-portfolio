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
                <p className="white-text">&copy; 2024 Gathrean Dela Cruz</p>
                <div className="footer-title" style={{ fontSize: `${fontSize}px` }}>
                    <h1 className="white-text">Gathrean <br />Dela Cruz</h1>
                </div>
                <p className="white-text baybayin-text">ᜄᜇ᜔ᜍᜒᜌᜈ᜔ ᜇᜒ︀ᜎ ᜃ᜔ᜍᜓᜐ᜔</p>
            </div>
        </footer>

    );
};