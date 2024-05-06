import React, { useEffect, useState } from 'react';
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="footer-content footer-body">
                <p className="credit-text">
                    This website's designed and coded in <b>Visual Studio Code</b> by <b>Gathrean Dela Cruz</b>.

                    Built with <b>React.js</b> and <b>Vanila HTML/CSS</b>, deployed by <b>Vercel</b>.

                    All text is in the <b>Work-Sans</b> typeface.
                </p>
            </div>
        </footer>

    );
};