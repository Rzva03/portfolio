import { useCallback, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const useSkill = () => {
    const { state } = useContext(ThemeContext);
    const { theme } = state;
    const isLightTheme = theme === 'light';
    const [isLoading, setIsLoading] = useState(true);

    const handleOnClick = useCallback((url) => {
        window.open(url, '_blank');
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
    }, []);
    

    return {
        handleOnClick,
        isLightTheme,
        isLoading
    }
}

export default useSkill;
