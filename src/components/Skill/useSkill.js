import { useCallback, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const useSkill = () => {
    const { state } = useContext(ThemeContext);
    const { theme } = state;
    const isLightTheme = theme === 'light';

    const handleOnClick = useCallback((url) => {
        window.open(url, '_blank');
    }, []);

    return {
        handleOnClick,
        isLightTheme
    }
}

export default useSkill;
