import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const useToggleTheme = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { dispatch } = useContext(ThemeContext);
    const {
        isMobile
    } = useCheckMobileScreen();

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