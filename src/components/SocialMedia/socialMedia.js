import React from 'react';
import SocialNetwork from '../SocialNetwork/socialNetwork';

const SocialMedia = () => {
    return (
        <div className='flex flex-col items-start space-y-2'>
            <h2 className='text-xl uppercas'>Social Media</h2>
            <SocialNetwork />
        </div>
    )
}

export default SocialMedia;
