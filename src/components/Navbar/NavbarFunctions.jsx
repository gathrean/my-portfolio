import { useState, useEffect, useRef } from 'react';

export function useScrollHandler(activeSectionSetter, navbarHeight) {
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['HOME', 'ABOUT', 'PROJECTS', 'WORK', 'CONTACT'];
            const scrollPosition = window.scrollY;

            // Check if scroll position is within HERO section
            const heroSection = document.querySelector('.HERO');
            if (heroSection) {
                const heroTop = heroSection.offsetTop;
                const heroHeight = heroSection.offsetHeight;
                if (scrollPosition >= heroTop && scrollPosition < heroTop + heroHeight) {
                    activeSectionSetter('');
                    return;
                }
            }

            // If not within HERO section, determine active section
            for (const section of sections) {
                const element = document.querySelector(`.${section}`);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        activeSectionSetter(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSectionSetter, navbarHeight]);
}

export function useNavbarFunctions() {
    const [scroll] = useState(false);
    const [opened, setOpened] = useState(true);
    const [navbarHeight, setNavbarHeight] = useState(56);

    const navbarRef = useRef(null); // Reference to the navbar element (DOM)

    // For setting the height of the navbar based on the window size
    useEffect(() => {
        const handleResize = () => {
            const newHeight = opened ? 56 : getWindowHeight();
            setNavbarHeight(newHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [opened]);

    // Helper function for handleResize
    const getWindowHeight = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 499) { // For small devices
            return opened ? 56 : 300;
        } else { // For Desktops and everything else
            return opened ? 56 : 325;
        }
    };

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