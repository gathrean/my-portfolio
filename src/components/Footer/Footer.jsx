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
                <p className="credit-text">This website's designed and coded in <b>Visual Studio Code</b> by yours truly. Built with <b>React.js</b> and <b>Vanila HTML/CSS</b>, deployed by <b>Vercel</b>. All text is in the <b>Work-Sans</b> typeface.</p>
                <div className="footer-title" style={{ fontSize: `${fontSize}px` }}>
                    <h1 className="">Gathrean</h1>
                </div>
            </div>
        </footer>

    );
};