import { Sidebar } from 'primereact/sidebar';
import React from 'react'
import MenuContent from '../MenuContent/menuContent';
import { Button } from 'primereact/button';
import useMenuMobile from './useMenuMobile';
import ToggleTheme from '../ToggleTheme/toggleTheme';
import defaultStyles from './menuMobile.module.css';

const MenuMobile = (props) => {
    const {
        isLightTheme,
        isMenuMobileVisible,
        setIsMenuMobileVisible
    } = useMenuMobile();
    return (
        <div className='menuMobile flex justify-between'>
            <Sidebar
                visible={isMenuMobileVisible}
                onHide={() => setIsMenuMobileVisible(false)}
                className={`${isLightTheme ? 'lightTheme' : 'darkTheme'}`}
            >
                <MenuContent {...props} setIsMenuMobileVisible={setIsMenuMobileVisible}/>
            </Sidebar>
            <Button
                icon="pi pi-bars"
                className={`p-button-rounded p-button-text flex justify-start ${isLightTheme ? defaultStyles.menuLight : defaultStyles.menuDark}`}
                onClick={() => setIsMenuMobileVisible(true)}
            />
            <ToggleTheme />
        </div>
    )
}

export default MenuMobile;
