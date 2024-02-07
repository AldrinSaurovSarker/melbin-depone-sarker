import { useState, useEffect } from 'react';

export default function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-up-btn scroll-up-btn rounded p-2 cursor-pointer text-theme border-0 ${isVisible ? '' : 'd-none'}`} // Use Bootstrap's `d-none` to hide the button
            aria-label="Scroll to top"
        >
            <i className="fas fa-arrow-up fa-2x"></i>
        </button>
    );
}
