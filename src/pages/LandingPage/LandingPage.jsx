import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// CSS //
import './LandingPage.css';
import '../../App.css';

// Fonts //
import '../../assets/fonts/Fonts.css';

export function LandingPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/images/DSC04733.jpg'
    ];

    // Ref for overlay text element
    const overlayRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 5 seconds (5000 milliseconds)

        return () => clearInterval(intervalId);
    }, []);

    // Function to calculate overlay text height
    const calculateOverlayHeight = () => {
        if (overlayRef.current) {
            return overlayRef.current.getBoundingClientRect().height;
        }
        return 0;
    };

    return (
        <section id="section1 home">
            <div className="carousel-content">
                <div className="image-container">
                    <img src={process.env.PUBLIC_URL + images[currentImage]} alt="Landing Page" className="landing-image" />
                </div>
                <div className="overlay-container" style={{ marginTop: calculateOverlayHeight() }}>
                    {/* <div ref={overlayRef} className="overlay-text">
                        <h2>Hey, my name is Gathrean Dela Cruz</h2>
                        <p>I am a software developer from Vancouver, BC. <br />
                           Let's connect on LinkedIn! (button) <br />
                        Check out my GitHub! (button) <br />
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};
