import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const usePresentation = () => {
    const { state } = useContext(ThemeContext);
    const { theme } = state;
    const isLightTheme = theme === 'light';

    return {
        isLightTheme
    }
}

export default usePresentation;
