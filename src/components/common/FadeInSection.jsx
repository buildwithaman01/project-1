import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FadeInSection = ({ children, delay = '0ms', className = "" }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${className}`}
            style={{ transitionDelay: delay }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
