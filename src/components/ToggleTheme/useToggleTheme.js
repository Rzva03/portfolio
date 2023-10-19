import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const THEME_LIGHT = 'light';

const useToggleTheme = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { dispatch } = useContext(ThemeContext);
    const themeFromLocalStorage = localStorage.getItem('theme') ?? THEME_LIGHT;

    const {
        isMobile
    } = useCheckMobileScreen();

    useEffect(() => {
      if (themeFromLocalStorage === THEME_LIGHT) {
        setIsChecked(false);
        return;
      }
      setIsChecked(true);
    }, [themeFromLocalStorage])
    
    useEffect(() => {
        if (isChecked) {
            dispatch({ theme: 'dark' });
            return;
        }
        dispatch({ theme: 'light' });
    }, [dispatch, isChecked]);

    return {
        isMobile,
        isChecked,
        setIsChecked
    }
}

export default useToggleTheme;