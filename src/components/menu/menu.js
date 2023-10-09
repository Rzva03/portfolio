import React from 'react';
import useMenu from './useMenu';
import MenuMobile from '../MenuMobile/menuMobile';
import MenuContent from '../MenuContent/menuContent';
import defaultStyles from './menu.module.css';

const Menu = (props) => {
    const {
        isMobile,
    } = useMenu();

    return (
        <nav className={defaultStyles.nav}>
            {isMobile ? (
                <MenuMobile  {...props} />
            ) : (
                <MenuContent {...props} />
            )}
        </nav>
    )
}

export default Menu;
