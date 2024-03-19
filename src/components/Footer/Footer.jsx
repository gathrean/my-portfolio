import React, { useEffect, useState } from 'react';
import './Footer.css';

export function Footer() {
    const [fontSize, setFontSize] = useState(100); // Initial font size

    useEffect(() => {
        const updateFontSize = () => {
            const containerWidth = document.querySelector('.footer-title').offsetWidth;
            const desiredFontSize = containerWidth * 0.1; // You can adjust the scaling factor as needed
            setFontSize(Math.min(desiredFontSize, 100)); // Limiting the font size to be at most 100px
        };

        window.addEventListener('resize', updateFontSize);
        updateFontSize(); // Initial font size calculation

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