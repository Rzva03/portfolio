import React from 'react';

const GetLogo = (props) => {
    const {
        logo,
        name
    } = props;
    return (
        <img src={logo} width='25%' alt={name} />
    )
}

export default GetLogo;
