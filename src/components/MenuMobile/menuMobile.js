import { Sidebar } from 'primereact/sidebar';
import React from 'react'
import MenuContent from '../MenuContent/menuContent';
import { Button } from 'primereact/button';
import useMenuMobile from './useMenuMobile';
import ToggleTheme from '../ToggleTheme/toggleTheme';
// eslint-disable-next-line no-unused-vars
import defaultStyles from './menuMobile.module.css';

const MenuMobile = (props) => {
    const {
        isMenuMobileVisible,
        setIsMenuMobileVisible
    } = useMenuMobile();
    return (
        <div className='menuMobile flex justify-between'>
            <Sidebar visible={isMenuMobileVisible} onHide={() => setIsMenuMobileVisible(false)}>
                <MenuContent {...props} />
            </Sidebar>
            <Button icon="pi pi-bars" className="p-button-rounded p-button-text flex justify-start" onClick={() => setIsMenuMobileVisible(true)} />
            <ToggleTheme />
        </div>
    )
}

export default MenuMobile;
