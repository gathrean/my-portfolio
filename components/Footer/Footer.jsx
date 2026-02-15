import { FooterTimestamp } from './FooterTimestamp';
import './Footer.css';

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} Gathrean Dela Cruz</p>
            </div>
            <div className="footer-right">
                <FooterTimestamp />
            </div>
        </footer>
    );
}
