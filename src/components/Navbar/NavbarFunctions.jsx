import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavbarFunctions() {
    const [scroll, setScroll] = useState(false);
    const [floatDock, setFloatDock] = useState(false);
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
        const newHeight = opened ? 56 : 'auto';
        setNavbarHeight(newHeight);
    }, [opened]);

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

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setOpened(!opened);
        if (!opened) {
            setFloatDock(true);
        } else {
            if (window.scrollY > 0) {
                setFloatDock(true);
            } else {
                setFloatDock(false);
            }
        }
    };

    return { scroll, floatDock, opened, navbarHeight, navbarRef, scrollToTop, toggleNavbar, location };
}