import React from 'react';

const Banner = () => {
    return (
        <div className="banner-section">
            {/* <img src={bannerImage} alt="Banner" /> */}

            <div className="banner-text">
                <h1 className="banner-title sf-regular">Gathrean <br></br>Dela Cruz</h1>

                <p className="banner-subtitle montserrat-regular">
                    👋🏽 I AM A DEVELOPER & GRAPHIC DESIGNER BASED IN VANCOUVER, BC.
                </p>
                <br></br>
                <p className="banner-subtitle montserrat-regular">
                    *🫡 I appreciate your curiosity, but
                    <br></br>
                    this website is currently under construction!
                </p>
            </div>
        </div>
    );
};

export default Banner;