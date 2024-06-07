import React, { useState } from 'react';

import './MyProfile.css';

// Components
import LocalTime from '../../../../../components/LocalTime';
import SocialMediaIcons from '../../../../../components/SocialMediaIcons/SocialMediaIcons';
import GathreanIcon from '../../../../../assets/icons/project-icons/gathrean-Icon.png';

const MyProfile = () => {
    const [emailMessage, setEmailMessage] = useState('📧 gathrean@icloud.com');

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
            <div className="about-me-images">
                <img src={GathreanIcon} alt="Gathrean" />
            </div>
            <br />
            <div className="about-me-info">
                <h3>Gathrean Dela Cruz</h3>
                <p><b>Software Developer</b></p>
                <p>🎂 23 years old</p>
                <p>🇨🇦 Vancouver, BC, Canada</p>
                <p>⌚️ <LocalTime /></p>
                <p onClick={handleEmailClick} style={{ cursor: 'pointer' }}>{emailMessage}</p>
                <div className="social-media-icons">
                    <SocialMediaIcons />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
