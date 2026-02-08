import React from 'react';

import './Footer2.css';

export function Footer2() {
    return (
        <footer className="site-footer">
            <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} Gathrean Dela Cruz</p>
            </div>
            <div className="footer-right">
                <p>Last updated on February 8, 2026 at 12:00 AM UTC -8</p>
            </div>
        </footer>
    );
}
