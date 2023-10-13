import React from 'react';
import useMenu from './useMenu';
import MenuMobile from '../MenuMobile/menuMobile';
import MenuContent from '../MenuContent/menuContent';
import defaultStyles from './menu.module.css';

const Menu = (props) => {
    const {
        isMobile,
        isLightTheme
    } = useMenu();

    return (
        <nav className={`${defaultStyles.nav} ${isMobile ? 'sticky left-0 right-0 top-0 z-50' : ''} ${isLightTheme ? 'bg-white' : 'bg-gray-1000'}`}>
            {isMobile ? (
                <MenuMobile  {...props} />
            ) : (
                <MenuContent {...props} />
            )}
        </nav>
    )
}

export default Menu;
