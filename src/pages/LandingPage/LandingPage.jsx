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
                        <h2>Hey,  <br /> I'm Gathrean Dela Cruz</h2>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Tempus urna et pharetra pharetra massa. </p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Nibh tellus molestie nunc non blandit massa. </p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.</p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Diam maecenas ultricies mi eget. Dis parturient montes nascetur ridiculus mus mauris. </p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Yap yap yap, yap yap yap yap yap. Yap yap yap.</p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Vel quam elementum pulvinar etiam non quam. Purus ut faucibus pulvinar elementum. </p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Pharetra pharetra massa massa ultricies mi quis hendrerit. At in tellus integer feugiat.</p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. </p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Tortor aliquam nulla facilisi cras. Lorem ipsum dolor sit amet consectetur. </p>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>A condimentum vitae sapien pellentesque habitant morbi tristique senectus. </p>
                        <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <p>Posuere ac ut consequat semper. Ac orci phasellus egestas tellus rutrum. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};