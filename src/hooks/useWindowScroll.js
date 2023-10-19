import { useEffect, useState } from "react";

const useWindowScroll = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
        });
        return () => {
            window.removeEventListener("scroll", () => {
                const currentScrollY = window.scrollY;
                setScrollY(currentScrollY);
            });
          };
    }, []);

    return {
        isScrollingOnY: (scrollY > 0)
    }
}

export default useWindowScroll;
