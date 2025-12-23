import { useState, useEffect } from 'react';
import useScrollAnimation from './useScrollAnimation';

const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const [ref, isVisible] = useScrollAnimation();

    useEffect(() => {
        if (isVisible) {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const currentCount = Math.floor(progress * (end - start) + start);
                setCount(currentCount);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isVisible, end, duration, start]);

    return [ref, count];
};

export default useCounter;
