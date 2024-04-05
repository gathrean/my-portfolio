import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavbarFunctions() {
    const [scroll, setScroll] = useState(false);
    const [floatDock, setFloatDock] = useState(false);
    const [collapsed, setCollapsed] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(56); // Initial height
    const location = useLocation();
    const navbarRef = useRef(null);

    // Update the height of the navbar when it is collapsed
    useEffect(() => {
        const newHeight = collapsed ? 56 : 'auto';
        setNavbarHeight(newHeight);
    }, [collapsed]);

    // Close the navbar when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setCollapsed(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0.9,
            behavior: "smooth"
        });
    };

    // Update the floating state of the navbar depending on the scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle the collapsed state of the navbar
    const toggleNavbar = () => {
        setCollapsed(!collapsed);

        // If the navbar is opened
        if (collapsed) {
            // If the navbar is opened:
            setFloatDock(true);
        } else { // If the navbar is closed
            // If the user has scrolled down:
            if (window.scrollY > 0) {
                setFloatDock(true);
            } else {
                // If the user has scrolled to the top:
                setFloatDock(true);
                setScroll(false);
            }
        }
    };

    return { scroll, floatDock, collapsed, navbarHeight, navbarRef, scrollToTop, toggleNavbar, location };
}