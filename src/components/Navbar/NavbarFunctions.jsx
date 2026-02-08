import { useState, useEffect, useRef } from 'react';

export function useNavbarFunctions() {
    const [scroll] = useState(false);
    const [opened, setOpened] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(40);

    const navbarRef = useRef(null); // Reference to the navbar element (DOM)

    // For setting the height of the navbar based on the window size
    useEffect(() => {
        const handleResize = () => {
            const newHeight = opened ? 40 : 310;
            setNavbarHeight(newHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [opened]);

    // For closing the hamburger menu when clicked outside
    useEffect(() => {
        const handleClickOutsideNavbar = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpened(true);
            }
        };
        document.addEventListener('mousedown', handleClickOutsideNavbar);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideNavbar);
        };
    }, [navbarRef]);

    // For opening and closing the hamburger menu
    const toggleHamburger = () => {
        setOpened(!opened);
    };

    return { scroll, opened, navbarHeight, navbarRef, toggleHamburger };
}