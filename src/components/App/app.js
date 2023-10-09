import React from 'react'
import Header from '../Header/header';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import useApp from './useApp';
import Main from '../Main/main';
import defaultStyles from './app.module.css';

const App = () => {
    const {
        items,
        activeIndex,
        isLightTheme,
        onTabChangeActiveIndex
    } = useApp();

    return (
        <div className={`${defaultStyles.app} ${isLightTheme ? 'bg-white' : 'bg-gray-1000 text-white'} px-5 w-full h-full`}>
            <Header
                items={items}
                activeIndex={activeIndex}
                onTabChangeActiveIndex={onTabChangeActiveIndex}
            />
            <Main
                activeIndex={activeIndex}
            />
        </div>
    )
}

export default App;
