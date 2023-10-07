import React from 'react'
import Logo from '../Logo/logo';
import { TabMenu } from 'primereact/tabmenu';
import ToggleTheme from '../ToggleTheme/toggleTheme';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
// eslint-disable-next-line no-unused-vars
import defaultStyles from './menuContent.module.css';

const MenuContent = (props) => {
    const {
        items,
        activeIndex,
        onTabChangeActiveIndex
    } = props;
    const {
        isMobile
    } = useCheckMobileScreen();

    return (
        <div className={`menu flex md:space-x-2 md:justify-between md:items-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
            <Logo
                handleOnClick={(e) => onTabChangeActiveIndex(e, 0)}
            />
            <div className={`flex items-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
                <TabMenu
                    model={items}
                    activeIndex={activeIndex}
                    onTabChange={(e) => onTabChangeActiveIndex(e)}
                    className={`${isMobile ? 'menu__tab-menu' : ''}`}
                />
                {!isMobile ? (
                    <ToggleTheme />
                ) : null}
            </div>
        </div>
    )
}

export default MenuContent;
