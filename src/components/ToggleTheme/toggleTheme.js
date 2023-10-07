import React from 'react';
import { ToggleButton } from 'primereact/togglebutton';
import useToggleTheme from './useToggleTheme';
import defaultStyles from './toggleTheme.module.css';

const ToggleTheme = () => {
    const {
        isMobile,
        isChecked,
        setIsChecked
    } = useToggleTheme();

    return (
        <div className={`toggle ${isMobile ? 'toggle--mobile' : ''}`}>
            <ToggleButton
                onLabel="on"
                offLabel="off"
                onIcon="pi pi-sun"
                offIcon="pi pi-moon"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.value)}
                className={`${isChecked ? defaultStyles.toggleDark : defaultStyles.toggleLight}`}
            />
        </div>
    )
}

export default ToggleTheme;
