import { useContext } from "react";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import { ThemeContext } from "../../context/ThemeContext";

const useMenu = () => {
    const {
        isMobile
    } = useCheckMobileScreen();
    const { state } = useContext(ThemeContext);
    const { isLightTheme } = state;

    return {
        isMobile,
        isLightTheme
    }
}

export default useMenu;
