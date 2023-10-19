import React from 'react';
import useMenu from './useMenu';
import MenuMobile from '../MenuMobile/menuMobile';
import MenuContent from '../MenuContent/menuContent';
import defaultStyles from './menu.module.css';
import useWindowScroll from '../../hooks/useWindowScroll';

const Menu = (props) => {
    const {
        isMobile,
        isLightTheme
    } = useMenu();

    const { isScrollingOnY } = useWindowScroll();

    return (
        <header className={`${defaultStyles.nav} ${isMobile ? 'sticky left-0 right-0 top-0 z-50 xd' : ''} ${isLightTheme ? 'bg-white' : 'bg-gray-1000'} ${isScrollingOnY && isMobile ? 'shadow-nav-dark' : ''}`}>
            <nav>
                {isMobile ? (
                    <MenuMobile  {...props} />
                ) : (
                    <MenuContent {...props} />
                )}
            </nav>
        </header>
    )
}

export default Menu;
