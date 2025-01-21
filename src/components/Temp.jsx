import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Temp = () => {
    const underlineRef = useRef(null);

    useEffect(() => {
        const underline = underlineRef.current;

        const fadeOut = () => {
            gsap.to(underline, {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 1.5,
                ease: 'power2.inOut',
            });
        };

        const fadeIn = () => {
            gsap.to(underline, {
                scaleX: 1,
                transformOrigin: 'left',
                duration: 1.5,
                ease: 'power2.inOut',
            });
        };

        // Trigger fade-out and fade-in continuously while hovering
        const handleMouseEnter = () => {
            fadeOut();
            fadeIn();
        };

        // Attach events
        const linkElement = underline.closest('a');
        linkElement.addEventListener('mouseenter', handleMouseEnter);

        // Clean up the event listeners on unmount
        return () => {
            linkElement.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <a href="#" className="relative inline-block text-black font-medium group">
            <span className="relative">Hover Me</span>
            {/* Underline */}
            <span
                ref={underlineRef}
                className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform origin-left scale-x-100"
            ></span>
        </a>
    );
};

export default Temp;
