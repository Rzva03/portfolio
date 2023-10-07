import React from 'react';
import useSocialNetwork from './useSocialNetwork';
import { Button } from 'primereact/button';
// eslint-disable-next-line no-unused-vars
import defaultStyles from './socialNetwork.module.css';

const SocialNetwork = () => {
    const {
        buttons
    } = useSocialNetwork();

    return (
        <div className='socialNetwork flex space-x-3'>
            {buttons.map((button) => (
                <Button
                    icon={button.icon}
                    className="p-button-rounded p-button-outlined"
                    aria-label={button.ariaLabel}
                    key={`button-${button.ariaLabel}`}
                    onClick={button.onClick}
                />
            ))}
        </div>
    )
}

export default SocialNetwork;
