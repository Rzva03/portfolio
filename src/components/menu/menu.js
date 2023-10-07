import React from 'react';
import useMenu from './useMenu';
import MenuMobile from '../MenuMobile/menuMobile';
import MenuContent from '../MenuContent/menuContent';

const Menu = (props) => {
    const {
        isMobile,
    } = useMenu();

    return (
        <nav className=''>
            {isMobile ? (
                <MenuMobile  {...props} />
            ) : (
                <MenuContent {...props} />
            )}
        </nav>
    )
}

export default Menu;
