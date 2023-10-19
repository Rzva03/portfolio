import { useCallback, useContext, useEffect, useState } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const ITEMS = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Skills', icon: 'pi pi-fw pi-code' },
    { label: 'Projects', icon: 'pi pi-fw pi-briefcase' },
    { label: 'Contact', icon: 'pi pi-fw pi-phone' }
];

const HOME_INDEX = 0;
const SKILL_INDEX = 1;
const PROJECT_INDEX = 2;
const CONTACT_INDEX = 3;


const useApp = () => {
    const { state, dispatch } = useContext(ThemeContext);
    const { isAutoHeight, isLightTheme } = state;
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHomePage, setIsHomePage] = useState(false);

    const {
        isMobile
    } = useCheckMobileScreen();

    const onTabChangeActiveIndex = useCallback((e, index = -1) => {
        if (index >= 0) {
            setActiveIndex(index);
            return;
        }
        setActiveIndex(e.index);
    }, []);

    useEffect(() => {
        if ((activeIndex === SKILL_INDEX || activeIndex === PROJECT_INDEX) && !isLightTheme) {
            dispatch({ isAutoHeight: true });
        }
    }, [activeIndex, dispatch, isLightTheme]);

    useEffect(() => {
        if (activeIndex === HOME_INDEX || activeIndex === CONTACT_INDEX) {
            setIsHomePage(true);
            return;
        }
        setIsHomePage(false);
    }, [activeIndex]);
    

    return {
        isMobile,
        isHomePage,
        isAutoHeight,
        items: ITEMS,
        activeIndex,
        isLightTheme,
        onTabChangeActiveIndex
    }
}

export default useApp;
