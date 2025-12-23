import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        const currentElement = domRef.current;
        if (currentElement) observer.observe(currentElement);
        return () => {
            if (currentElement) observer.unobserve(currentElement);
        };
    }, []);

    return [domRef, isVisible];
};

export default useScrollAnimation;
