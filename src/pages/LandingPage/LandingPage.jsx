import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

export function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/images/DSC04733.jpg'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 5 seconds (5000 milliseconds)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="section1 home">
            <div className="carousel-content">
                <img src={process.env.PUBLIC_URL + images[currentImage]} alt="Landing Page" className="landing-image" />
                <h2>Section 1 - Home</h2>
            </div>
        </section>
    );
};
