import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const useMenuMobile = () => {
    const [isMenuMobileVisible, setIsMenuMobileVisible] = useState(false);
    const { state } = useContext(ThemeContext);
    const { isLightTheme } = state;

    return {
        isLightTheme,
        isMenuMobileVisible,
        setIsMenuMobileVisible
    }
}

export default useMenuMobile;
