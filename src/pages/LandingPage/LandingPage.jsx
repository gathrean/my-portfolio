import React, { useState, useEffect, useRef } from 'react';
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
                    <div ref={overlayRef} className="overlay-text">
                        <h2>Yap yap yap</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <p>Tempus urna et pharetra pharetra massa. </p>
                        <p>Nibh tellus molestie nunc non blandit massa. </p>
                        <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.</p>
                        <p>Diam maecenas ultricies mi eget. Dis parturient montes nascetur ridiculus mus mauris. </p>
                        <p>Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. </p>
                        <p>Vel quam elementum pulvinar etiam non quam. Purus ut faucibus pulvinar elementum. </p>
                        <p>Pharetra pharetra massa massa ultricies mi quis hendrerit. At in tellus integer feugiat.</p>
                        <p>Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. </p>
                        <p>Tortor aliquam nulla facilisi cras. Lorem ipsum dolor sit amet consectetur. </p>
                        <p>A condimentum vitae sapien pellentesque habitant morbi tristique senectus. </p>
                        <p>Posuere ac ut consequat semper. Ac orci phasellus egestas tellus rutrum. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
