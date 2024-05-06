import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavbarFunctions() {
    const [scroll, setScroll] = useState(false);
    const [opened, setOpened] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(56);

    const location = useLocation();
    const navbarRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0.99,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const handleResize = () => {
            const newHeight = opened ? 56 : getWindowHeight();
            setNavbarHeight(newHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [opened]);

    const getWindowHeight = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 499) { // For Tablets
            return opened ? 56 : 250;
        } else if (windowWidth <= 299) { // For foladable phones
            return opened ? 56 : 20;
        } else { // For Desktops and everything else
            return opened ? 56 : 390;
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpened(true);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleNavbar = () => {
        setOpened(!opened);
    };

    return { scroll, opened, navbarHeight, navbarRef, scrollToTop, toggleNavbar, location };
}