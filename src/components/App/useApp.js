import { useCallback, useContext, useState } from "react";
import { ThemeContext } from '../../context/ThemeContext';
const ITEMS = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'About', icon: 'pi pi-fw pi-user' },
    { label: 'Skills', icon: 'pi pi-fw pi-code' },
    { label: 'Projects', icon: 'pi pi-fw pi-briefcase' },
    { label: 'Contact', icon: 'pi pi-fw pi-phone' }
];

const useApp = () => {
    const { state } = useContext(ThemeContext);
    const { theme } = state;
    const isLightTheme = theme === 'light';
    const [activeIndex, setActiveIndex] = useState(0);

    const onTabChangeActiveIndex = useCallback((e) => {
        setActiveIndex(e.index);
    }, []);

    return {
        items: ITEMS,
        activeIndex,
        isLightTheme,
        onTabChangeActiveIndex
    }
}

export default useApp;
