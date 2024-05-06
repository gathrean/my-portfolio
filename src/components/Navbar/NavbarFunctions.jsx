import { useState, useEffect, useRef } from 'react';

export function useNavbarFunctions() {
    const [expanded] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(56);

    const navbarRef = useRef(null); // Reference to the navbar element (DOM)

    // For setting the height of the navbar based on the window size
    useEffect(() => {
        const handleResize = () => {
            const newHeight = expanded ? 56 : getWindowHeight();
            setNavbarHeight(newHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [expanded]);

    // Helper function for handleResize
    const getWindowHeight = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 499) { // For small devices
            return expanded ? 56 : 300;
        } else { // For Desktops and everything else
            return expanded ? 56 : 325;
        }
    };

    return { expanded, navbarHeight, navbarRef };
}