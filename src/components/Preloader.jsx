import React, { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Simulate loading time or wait for window load
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 500); // Wait for fade out animation to finish before unmounting
        }, 2000); // 2 seconds minimum display time

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-rich-black)] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold tracking-[0.2em] font-serif text-white mb-4 animate-pulse">
                    VIRGO <span className="text-[var(--color-gold)]">ART</span>
                </div>
                <div className="w-16 h-0.5 bg-[var(--color-gold)] mx-auto animate-bounce"></div>
            </div>
        </div>
    );
};

export default Preloader;
