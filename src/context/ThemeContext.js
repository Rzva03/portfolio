import { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
    theme: 'light',
    isAutoHeight: false,
    isLightTheme: true
}

const reducer = (state, newState) => {
    return { state, ...newState }
}

const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const valueProvider = {
        state,
        dispatch
    }

    useEffect(() => {
        if (state.theme === THEME_LIGHT) {
            dispatch({isLightTheme: true});
            return;
        }
        if (state.theme === THEME_DARK) {
            dispatch({isLightTheme: false});
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
