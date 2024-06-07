import React, { useEffect, useState } from 'react';
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="footer-content footer-body">
                <p className="credit-text">
                    This website's designed and coded in Visual Studio Codeby Gathrean Dela Cruz.

                    Built with React.js and Vanila HTML/CSS, deployed by Vercel.

                    All text is in the Work-Sans typeface.

                    Project icons are designed by me. 

                    I used Chat-GPT to speed up the process of designing this website.
                </p>
            </div>
        </footer>

    );
};