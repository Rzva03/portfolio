import React from 'react';
import logo from '../../assets/img/logo.png';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

const Logo = (props) => {
    const { handleOnClick } = props;
    const {
        isMobile
    } = useCheckMobileScreen();
    return (
        <img
            src={logo}
            alt='Logo'
            width={`${isMobile ? '30%' : '4%'}`}
            onClick={handleOnClick}
            className={`hover:cursor-pointer ${isMobile ? 'mx-auto' : ''}`}
        />
    )
}

export default Logo;
