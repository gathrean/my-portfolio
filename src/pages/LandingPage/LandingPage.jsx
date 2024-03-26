import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

// Text //
import { LandingText } from './LandingText';

export function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/images/DSC04733.jpg'
    ];
    const textRef = useRef(null);
    const [imageSticky, setImageSticky] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 5 seconds (5000 milliseconds)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <section id="section1 home">
            <div className="carousel-content">
                <div className="image-container">
                    <img src={process.env.PUBLIC_URL + images[currentImage]} alt="Landing Page" className="landing-image sticky" />
                    <div ref={textRef} className="overlay-text">
                        <LandingText />
                    </div>
                </div>
            </div>
        </section>
    );
};