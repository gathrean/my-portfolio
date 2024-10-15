import React, { useState } from 'react';
import './MyProfile.css';

// Components
import LocalTime from '../LocalTime';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

// Images
import img_sunset from './PFPs/sunset.jpg';

const MyProfile = () => {
    const [emailMessage, setEmailMessage] = useState('📧 gathrean@icloud.com');

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

    return (
        <div className="my-profile">
            <div className="profile-picture">
                <img src={img_sunset} alt="Profile" />
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
        </div>
    );
};

export default MyProfile;