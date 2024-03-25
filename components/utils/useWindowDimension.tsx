import { useState, useEffect } from 'react';

interface WindowDimensions {
    width: number;
    height: number;
}

export default function useWindowDimensions(): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function getWindowDimensions(): WindowDimensions {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        }

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        if (typeof window !== 'undefined') {
            setWindowDimensions(getWindowDimensions());
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowDimensions;
}
