import { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

const initialState = {
    theme: THEME_LIGHT,
    isAutoHeight: false,
    isLightTheme: true
}

const reducer = (state, newState) => {
    return { state, ...newState }
}

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const valueProvider = {
        state,
        dispatch
    }

    useEffect(() => {
        if (state.theme === THEME_LIGHT) {
            dispatch({ isLightTheme: true });
            localStorage.setItem('theme', THEME_LIGHT);
            return;
        }
        if (state.theme === THEME_DARK) {
            dispatch({ isLightTheme: false });
            localStorage.setItem('theme', THEME_DARK);
            return;
        }
    }, [state.theme]);

    return (
        <ThemeContext.Provider
            value={valueProvider}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
