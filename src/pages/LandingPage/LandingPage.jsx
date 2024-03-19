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
                <div className="image-container">
                    <img src={process.env.PUBLIC_URL + images[currentImage]} alt="Landing Page" className="landing-image" />
                    <div className="overlay-text">
                        <h2>Yap yap yap</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa. Nibh tellus molestie nunc non blandit massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Diam maecenas ultricies mi eget. Dis parturient montes nascetur ridiculus mus mauris. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Vel quam elementum pulvinar etiam non quam. Purus ut faucibus pulvinar elementum. Pharetra pharetra massa massa ultricies mi quis hendrerit. At in tellus integer feugiat. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Tortor aliquam nulla facilisi cras. Lorem ipsum dolor sit amet consectetur.

                            A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Posuere ac ut consequat semper. Ac orci phasellus egestas tellus rutrum. Dignissim convallis aenean et tortor at risus viverra adipiscing. Sagittis vitae et leo duis ut. Leo duis ut diam quam nulla porttitor massa. Integer eget aliquet nibh praesent tristique magna sit amet purus. Gravida in fermentum et sollicitudin ac orci phasellus. Diam phasellus vestibulum lorem sed. Vulputate ut pharetra sit amet aliquam id. Sed sed risus pretium quam vulputate dignissim. Ipsum dolor sit amet consectetur adipiscing elit. Nisl pretium fusce id velit ut tortor pretium. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Morbi non arcu risus quis. Lobortis feugiat vivamus at augue eget. Sed odio morbi quis commodo odio aenean sed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};