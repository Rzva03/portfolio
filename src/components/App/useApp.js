import { useCallback, useContext, useEffect, useState } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const ITEMS = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Skills', icon: 'pi pi-fw pi-code' },
    { label: 'Projects', icon: 'pi pi-fw pi-briefcase' },
    { label: 'Contact', icon: 'pi pi-fw pi-phone' }
];
const SKILL_INDEX = 1;

const useApp = () => {
    const { state, dispatch } = useContext(ThemeContext);
    const { isAutoHeight, isLightTheme } = state;
    const [activeIndex, setActiveIndex] = useState(0);
    const {
        isMobile
    } = useCheckMobileScreen();

    useEffect(() => {
        if (activeIndex === SKILL_INDEX && !isLightTheme) {
            dispatch({ isAutoHeight: true });
        }
    }, [activeIndex, dispatch, isLightTheme]);

    const onTabChangeActiveIndex = useCallback((e, index = -1) => {
        if (index >= 0) {
            setActiveIndex(index);
            return;
        }
        setActiveIndex(e.index);
    }, []);

    return {
        isMobile,
        isAutoHeight,
        items: ITEMS,
        activeIndex,
        isLightTheme,
        onTabChangeActiveIndex
    }
}

export default useApp;
