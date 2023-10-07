import React from 'react';
import useSocialNetwork from './useSocialNetwork';
import { Button } from 'primereact/button';

const SocialNetwork = () => {
    const {
        buttons
    } = useSocialNetwork();

    return (
        <div className='flex space-x-3'>
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
