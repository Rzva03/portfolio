import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
    theme: 'light',
    isAutoHeight: false
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
    return (
        <ThemeContext.Provider
            value={valueProvider}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
