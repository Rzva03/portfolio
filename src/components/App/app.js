import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const App = () => {
    const { state } = useContext(ThemeContext);
    const { theme } = state;
    const isLightTheme = theme === 'light';

    return (
        <div className={`w-screen h-screen ${isLightTheme ? 'bg-white' : 'bg-black'}`}>
            <h1 className={`text-8xl ${isLightTheme ? 'text-black' : 'text-white'}`}>
                Hello
            </h1>
        </div>
    )
}

export default App;
