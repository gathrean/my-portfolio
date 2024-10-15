import React, { useState, useEffect } from 'react';

import './MyProfile.css';

// Components
import LocalTime from '../LocalTime';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

// Images
import img_closeup from './PFPs/closeup.jpg';
import img_hike from './PFPs/hike.jpeg';
import img_lake from './PFPs/lake.jpeg';
import img_river from './PFPs/river.jpeg';

const images = [img_closeup, img_hike, img_lake, img_river];

const MyProfile = () => {
    const [emailMessage, setEmailMessage] = useState('📧 gathrean@icloud.com');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const resumeURL = '/Gathrean_DelaCruz__Resume.pdf';

    const handleEmailClick = () => {
        navigator.clipboard.writeText('gathrean@icloud.com')
            .then(() => {
                setEmailMessage('💡 Email copied to clipboard!');
                setTimeout(() => {
                    setEmailMessage('📧 gathrean@icloud.com');
                }, 2000);
            })
            .catch(err => {
                console.error('😵 Failed to copy email: ', err);
            });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 500);
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="my-profile">
            <div className={`profile-picture ${fade ? 'fade-in' : 'fade-out'}`}>
                <img src={images[currentImageIndex]} alt="Profile" />
            </div>
            <br />
            <div className="about-me-info">
                <h3>Gathrean Dela Cruz</h3>
                <p><b>Software Developer</b></p>
                <p>🇨🇦 Vancouver, BC, Canada</p>
                <p>⌚️ <LocalTime /></p>
                <p onClick={handleEmailClick} style={{ cursor: 'pointer' }}>{emailMessage}</p>
                <div className="external-link-2">
                    <a href={resumeURL} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', color: 'black' }}>View Resumé</a>
                </div>
                <div className="social-media-icons">
                    <SocialMediaIcons />
                </div>
            </div>
        </div >
    );
};

export default MyProfile;