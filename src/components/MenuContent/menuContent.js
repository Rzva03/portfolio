import React, { useContext } from 'react'
import Logo from '../Logo/logo';
import { TabMenu } from 'primereact/tabmenu';
import ToggleTheme from '../ToggleTheme/toggleTheme';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
// eslint-disable-next-line no-unused-vars
import defaultStyles from './menuContent.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import useMenuContent from './useMenuContent';

const MenuContent = (props) => {
    const {
        items,
        activeIndex,
        onTabChangeActiveIndex,
        setIsMenuMobileVisible
    } = props;
    const {
        isMobile
    } = useCheckMobileScreen();
    const { handleOnClick } = useMenuContent({
        onTabChangeActiveIndex,
        setIsMenuMobileVisible
    });
    const { state } = useContext(ThemeContext);
    const { theme } = state;
    const isLightTheme = theme === 'light';

    return (
        <div className={`menu flex md:space-x-2 md:justify-between md:items-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
            <Logo
                handleOnClick={(e) => { handleOnClick(e, 0) }}
            />
            <div className={`flex items-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
                <TabMenu
                    model={items}
                    activeIndex={activeIndex}
                    onTabChange={(e) => { handleOnClick(e) }}
                    className={`${isMobile ? 'menu__tab-menu' : ''} ${isLightTheme ? 'lightTheme' : 'darkTheme'}`}
                />
                {!isMobile ? (
                    <ToggleTheme />
                ) : null}
            </div>
        </div>
    )
}

export default MenuContent;
